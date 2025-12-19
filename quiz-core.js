// Shared quiz core logic — consumes `quizData` and `perfilesCombinados` provided by a language data file

/* Baserow integration - configure these constants with your values */
const BASEROW_API_TOKEN = 'ya3C0jm54hhEX4VPdleMETbYbB91nHMC';
const BASEROW_TABLE_ID = '774581';

// State
let currentQuestionIndex = 0;
let answers = {};
let allQuestions = [];
let currentSortable = null;
let userEmail = null;
let userCompany = null;
let userRowId = null; // if we find an existing Baserow row, store its id to allow updates

// Simple GA event helper (if gtag present)
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

window.addEventListener('DOMContentLoaded', () => {
  if (!window.quizData) {
    console.warn('quizData not found — ensure a language data file (quiz-data-*.js) is loaded before quiz-core.js');
    return;
  }

  // Flatten questions
  allQuestions = [];
  quizData.preguntas.forEach(section => {
    section.preguntas.forEach(q => {
      allQuestions.push({ ...q, sectionTitle: section.titulo, seccion: section.seccion });
    });
  });

  // Pre-quiz form wiring (if present)
  const emailInput = document.getElementById('user-email');
  const companyInput = document.getElementById('user-company');
  const startBtn = document.getElementById('prequiz-start-btn');
  if (emailInput && companyInput && startBtn) {
    function toggleStart() {
      const valid = validateEmail(emailInput.value) && companyInput.value.trim().length > 1;
      startBtn.disabled = !valid;
    }
    emailInput.addEventListener('input', toggleStart);
    companyInput.addEventListener('input', toggleStart);
  }
});

async function prepareAndStart() {
  const emailEl = document.getElementById('user-email');
  const companyEl = document.getElementById('user-company');
  const errorEl = document.getElementById('prequiz-error');
  if (!emailEl || !companyEl) {
    startQuiz();
    return;
  }

  const email = emailEl.value.trim();
  const company = companyEl.value.trim();
  if (!validateEmail(email) || company.length < 2) {
    if (errorEl) {
      errorEl.style.display = 'block';
      errorEl.textContent = 'Please enter a valid email and company name.';
    }
    return;
  }

  // Before starting, check if this email already has a submission in Baserow
  if (BASEROW_API_TOKEN && !BASEROW_API_TOKEN.startsWith('YOUR_') && BASEROW_TABLE_ID) {
    try {
      const existing = await findRowByEmail(email);
      if (existing) {
        userEmail = email;
        userCompany = existing.company || company;
        // Remember the existing row id so a retake will update this row instead of creating duplicates
        userRowId = existing.id || null;
        trackEvent('existing_user_found', { email_domain: email.split('@')[1] });
        // Allow the user to retake the quiz — do not auto-display previous results
      }
    } catch (e) {
      console.warn('Error checking existing submission:', e);
      // fallthrough to start quiz
    }
  }

  userEmail = email;
  userCompany = company;
  if (errorEl) { errorEl.style.display = 'none'; }
  trackEvent('prequiz_submitted', { email_domain: email.split('@')[1] });
  startQuiz();
}

// Baserow lookup helpers
async function fetchBaserowRows(page = 1, pageSize = 100) {
  if (!BASEROW_API_TOKEN || BASEROW_API_TOKEN.startsWith('YOUR_') || !BASEROW_TABLE_ID) {
    throw new Error('Baserow not configured');
  }
  const url = `https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true&page=${page}&page_size=${pageSize}`;
  const res = await fetch(url, { headers: { 'Authorization': `Token ${BASEROW_API_TOKEN}` } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  // Baserow returns either an array or {results: [...]} depending on version
  if (Array.isArray(data)) return data;
  if (data.results) return data.results;
  return [];
}

async function findRowByEmail(email) {
  const lc = email.toLowerCase();
  let page = 1;
  while (true) {
    const rows = await fetchBaserowRows(page);
    if (!rows || rows.length === 0) break;
    const found = rows.find(r => r.email && String(r.email).toLowerCase() === lc);
    if (found) {
      // remember row id for updates
      userRowId = found.id || null;
      return found;
    }
    // stop if less than page size
    if (rows.length < 100) break;
    page++;
  }
  return null;
}

function displayResultsFromRow(row) {
  // Try to map stored creativity_type to a perfil in perfilesCombinados
  const creativityName = row.creativity_type || row.creativity || row.creativityType || '';
  let perfilNombre = creativityName;
  let perfilDesc = row.description || row.perfil_desc || '';
  if (window.perfilesCombinados) {
    // search by nombre
    const entries = Object.values(window.perfilesCombinados);
    const match = entries.find(e => e.nombre && e.nombre.toLowerCase() === String(creativityName).toLowerCase());
    if (match) {
      perfilNombre = match.nombre;
      perfilDesc = match.descripcion || perfilDesc;
    }
  }

  const resEl = document.getElementById('creativity-result');
  const descEl = document.getElementById('perfil-desc');
  if (resEl) resEl.textContent = perfilNombre;
  if (descEl) descEl.textContent = perfilDesc;

  // show results
  const welcome = document.getElementById('welcome-section');
  const quizSection = document.getElementById('quiz-section');
  const results = document.getElementById('results-section');
  if (welcome) welcome.style.display = 'none';
  if (quizSection) quizSection.style.display = 'none';
  if (results) results.style.display = 'block';
}

function startQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  trackEvent('quiz_start', {
    event_category: 'engagement',
    event_label: 'creativity_diagnosis'
  });
  // remove any existing UI hint about previous submissions when the quiz actually starts
  const existingHint = document.getElementById('existing-user-hint');
  if (existingHint && existingHint.parentNode) existingHint.parentNode.removeChild(existingHint);
  const welcome = document.getElementById('welcome-section');
  const quizSection = document.getElementById('quiz-section');
  const results = document.getElementById('results-section');
  if (welcome) welcome.style.display = 'none';
  if (quizSection) quizSection.style.display = 'block';
  if (results) results.style.display = 'none';
  displayQuestion();
}

function nextQuestion() {
  if (!validateCurrentAnswer()) return;
  trackEvent('quiz_progress', {
    event_category: 'engagement',
    event_label: `question_${currentQuestionIndex + 1}`
  });
  currentQuestionIndex++;
  if (currentQuestionIndex === allQuestions.length) {
    finishQuiz();
  } else {
    displayQuestion();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

function restartQuiz() {
  const welcome = document.getElementById('welcome-section');
  const quizSection = document.getElementById('quiz-section');
  const results = document.getElementById('results-section');
  if (welcome) welcome.style.display = 'block';
  if (quizSection) quizSection.style.display = 'none';
  if (results) results.style.display = 'none';
  const pb = document.getElementById('progress-bar');
  if (pb) pb.style.width = '0%';
  // reset quiz state so user can retake (keep userEmail/userRowId so we update existing row)
  currentQuestionIndex = 0;
  answers = {};
  if (currentSortable) { currentSortable.destroy(); currentSortable = null; }
  // clear question container
  const container = document.getElementById('question-container');
  if (container) container.innerHTML = '';
  // restore pre-quiz form and prefill with known values
  const emailEl = document.getElementById('user-email');
  const companyEl = document.getElementById('user-company');
  const startBtn = document.getElementById('prequiz-start-btn');
  const errorEl = document.getElementById('prequiz-error');
  if (emailEl && companyEl) {
    // if we have a previous email, prefill it so user can quickly restart
    if (userEmail) emailEl.value = userEmail;
    if (userCompany) companyEl.value = userCompany;
    // enable start button if fields valid
    if (startBtn) startBtn.disabled = !validateEmail(emailEl.value) || companyEl.value.trim().length < 2;
  }
  if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = ''; }
  console.log('restartQuiz: state reset, userEmail=', userEmail, 'userRowId=', userRowId);
}



function displayQuestion() {
  const question = allQuestions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const sectionTitle = document.getElementById('section-title');

  if (!question || !container) return;

  const progressPercent = ((currentQuestionIndex + 1) / allQuestions.length) * 100;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${allQuestions.length}`;
  if (sectionTitle) sectionTitle.textContent = `Sección ${question.seccion}: ${question.sectionTitle}`;

  container.innerHTML = '';
  if (currentSortable) { currentSortable.destroy(); currentSortable = null; }

  if (question.tipo === 'seleccion') {
    const questionTitle = document.createElement('h4');
    questionTitle.className = 'mb-4 text-dark';
    questionTitle.textContent = question.pregunta;
    container.appendChild(questionTitle);

    question.opciones.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-outline-dark btn-lg w-100 mb-3';
      btn.textContent = opt;
      btn.onclick = () => selectOption(question.id, idx);
      if (answers[question.id] === idx) btn.classList.add('active');
      container.appendChild(btn);
    });
  } else if (question.tipo === 'ordenamiento') {
    const questionTitle = document.createElement('h4');
    questionTitle.className = 'mb-4';
    questionTitle.textContent = question.pregunta;
    container.appendChild(questionTitle);

    const list = document.createElement('ul');
    list.className = 'list-group';
    list.id = 'sortable-list';
    const items = answers[question.id] ? answers[question.id] : question.items;
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item bg-light text-dark';
      li.textContent = item;
      list.appendChild(li);
    });
    container.appendChild(list);

    currentSortable = new Sortable(list, {
      animation: 150,
      onEnd: () => {
        const orderedItems = [...list.querySelectorAll('li')].map(li => li.textContent);
        answers[question.id] = orderedItems;
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.disabled = false;
      }
    });
  }

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
  if (nextBtn) nextBtn.textContent = currentQuestionIndex === allQuestions.length - 1 ? 'Finalizar' : 'Siguiente';
  if (nextBtn) nextBtn.disabled = answers[question.id] === undefined;
}

function selectOption(questionId, optionIdx) {
  answers[questionId] = optionIdx;
  const container = document.getElementById('question-container');
  [...container.querySelectorAll('button')].forEach((btn, idx) => {
    btn.classList.toggle('active', idx === optionIdx);
  });
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.disabled = false;
}

function validateCurrentAnswer() {
  const currentQuestion = allQuestions[currentQuestionIndex];
  return answers[currentQuestion.id] !== undefined;
}

function calculateResults() {
  const creativityScores = { responsiva: 0, esperada: 0, contributiva: 0, proactiva: 0 };
  const systemScores = { mercadeo: 0, talento: 0, id: 0 };

  allQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer === undefined) return;
    if (question.scoring) {
      if (question.scoring.creatividad) {
        if (question.tipo === 'seleccion') {
          Object.keys(question.scoring.creatividad).forEach(type => {
            creativityScores[type] += question.scoring.creatividad[type][answer] || 0;
          });
        } else if (question.tipo === 'ordenamiento') {
          Object.keys(question.scoring.creatividad).forEach(type => {
            const itemScores = question.scoring.creatividad[type];
            answer.forEach((item, position) => {
              const score = itemScores[item] || 0;
              const positionWeight = (answer.length - position) / answer.length;
              creativityScores[type] += score * positionWeight;
            });
          });
        }
      }
      if (question.scoring.sistema) {
        if (question.tipo === 'seleccion') {
          Object.keys(question.scoring.sistema).forEach(type => {
            systemScores[type] += question.scoring.sistema[type][answer] || 0;
          });
        } else if (question.tipo === 'ordenamiento') {
          Object.keys(question.scoring.sistema).forEach(type => {
            const itemScores = question.scoring.sistema[type];
            answer.forEach((item, position) => {
              const score = itemScores[item] || 0;
              const positionWeight = (answer.length - position) / answer.length;
              systemScores[type] += score * positionWeight;
            });
          });
        }
      }
    }
  });

  // round scores to nearest natural (non-negative integer)
  const roundedCreativity = {};
  Object.keys(creativityScores).forEach(k => {
    // always round up to the nearest integer
    roundedCreativity[k] = Math.max(0, Math.ceil(creativityScores[k]));
  });
  const roundedSystem = {};
  Object.keys(systemScores).forEach(k => {
    // always round up to the nearest integer
    roundedSystem[k] = Math.max(0, Math.ceil(systemScores[k]));
  });

  const dominantCreativity = Object.keys(roundedCreativity).reduce((a, b) => roundedCreativity[a] > roundedCreativity[b] ? a : b);
  const dominantSystem = Object.keys(roundedSystem).reduce((a, b) => roundedSystem[a] > roundedSystem[b] ? a : b);

  return {
    creativity: dominantCreativity,
    system: dominantSystem,
    scores: { creativity: roundedCreativity, system: roundedSystem }
  };
}

function finishQuiz() {
  const results = calculateResults();
  const comboKey = `${results.creativity}_${results.system}`;
  const perfil = (window.perfilesCombinados && window.perfilesCombinados[comboKey]) || { nombre: 'Perfil Desconocido', descripcion: '' };

  trackEvent('quiz_completed', {
    event_category: 'conversion',
    event_label: perfil.nombre,
    creativity_type: results.creativity,
    system_type: results.system,
    profile_combination: comboKey
  });

  const resEl = document.getElementById('creativity-result');
  const descEl = document.getElementById('perfil-desc');
  if (resEl) resEl.textContent = perfil.nombre;
  if (descEl) descEl.textContent = perfil.descripcion;

  const quizSection = document.getElementById('quiz-section');
  const resultsSection = document.getElementById('results-section');
  if (quizSection) quizSection.style.display = 'none';
  // Persist results to localStorage so results.html can read them after redirect
  try {
    const payload = {
      perfilNombre: perfil.nombre,
      perfilDescripcion: perfil.descripcion,
      results: results
    };
    localStorage.setItem('quiz_result', JSON.stringify(payload));
  } catch (e) {
    console.warn('Failed saving quiz result to localStorage:', e);
  }

  // Attempt to save to Baserow (fire-and-forget)
  try { sendToBaserow(perfil.nombre, results); } catch (e) { console.warn('Baserow submission failed:', e); }

  // Redirect user to a dedicated results page (robust URL and fallback storage)
  try {
    const payload = {
      perfilNombre: perfil.nombre,
      perfilDescripcion: perfil.descripcion,
      results: results
    };
    // if localStorage failed previously, try sessionStorage
    try { sessionStorage.setItem('quiz_result', JSON.stringify(payload)); } catch (e) { /* ignore */ }
  } catch (e) { /* ignore */ }

  // choose results page based on document language (english uses resultsen.html)
  const pageLang = (document.documentElement && document.documentElement.lang) ? String(document.documentElement.lang) : (navigator.language || '');
  const targetPage = pageLang.toLowerCase().startsWith('en') ? 'resultsen.html' : 'results.html';
  const resultsUrl = new URL(targetPage, window.location.href).href;
  console.log('Redirecting to results page:', resultsUrl, 'detectedLang=', pageLang);
  // small delay to ensure any pending async ops can start
  setTimeout(() => { window.location.assign(resultsUrl); }, 120);
}

function downloadEbook() {
  const results = calculateResults();
  const comboKey = `${results.creativity}_${results.system}`;
  const perfil = (window.perfilesCombinados && window.perfilesCombinados[comboKey]) || { nombre: 'Perfil Desconocido' };
  trackEvent('lead_generation', { event_category: 'conversion', event_label: 'ebook_download_request', profile: perfil.nombre, value: 100 });
  alert('Redirigiendo a la página de compra del ebook...');
}

function sendToBaserow(creativityName, results) {
  if (!BASEROW_API_TOKEN || BASEROW_API_TOKEN.startsWith('YOUR_') || !BASEROW_TABLE_ID) {
    console.warn('Baserow not configured. Set BASEROW_API_TOKEN and BASEROW_TABLE_ID in quiz-core.js');
    return;
  }

  const payload = {
    email: userEmail || '',
    company: userCompany || '',
    creativity_type: creativityName || '',
    creativity_scores: JSON.stringify(results.scores.creativity || {}),
    system_scores: JSON.stringify(results.scores.system || {})
  };

  if (userRowId) {
    // Update existing row
    const url = `https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/${userRowId}/?user_field_names=true`;
    fetch(url, {
      method: 'PATCH',
      headers: { 'Authorization': `Token ${BASEROW_API_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
      .then(data => { trackEvent('baserow_submission', { status: 'updated' }); console.log('Updated Baserow row:', data); })
      .catch(err => { trackEvent('baserow_submission', { status: 'error' }); console.warn('Failed updating Baserow:', err); });
  } else {
    // Create new row
    const url = `https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true`;
    fetch(url, {
      method: 'POST',
      headers: { 'Authorization': `Token ${BASEROW_API_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
      .then(data => {
        // remember row id so future restarts update this row
        if (data && data.id) userRowId = data.id;
        trackEvent('baserow_submission', { status: 'created' });
        console.log('Saved to Baserow:', data);
      })
      .catch(err => { trackEvent('baserow_submission', { status: 'error' }); console.warn('Failed saving to Baserow:', err); });
  }
}

// Expose a small API for HTML onclick handlers to call
window.prepareAndStart = prepareAndStart;
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.restartQuiz = restartQuiz;
window.downloadEbook = downloadEbook;
