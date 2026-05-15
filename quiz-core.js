// Shared quiz core logic — consumes `quizData` and `perfilesCombinados` provided by a language data file

/* Baserow integration */
const BASEROW_API_URL = 'https://api.baserow.io';
const BASEROW_API_TOKEN = 'iBelq0efckg0ZrrRKLHAFvdpzRQOLcOu';
const BASEROW_TABLE_ID = '784936';

// State
let currentQuestionIndex = 0;
let answers = {};
let allQuestions = [];
let currentSortable = null;
let quizResults = null; // To store results before form submission

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

  // No pre-quiz form to wire up anymore.
});

function startQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  quizResults = null;
  trackEvent('quiz_start', {
    event_category: 'engagement',
    event_label: 'creativity_diagnosis'
  });

  const welcome = document.getElementById('welcome-section');
  const quizSection = document.getElementById('quiz-section');
  const results = document.getElementById('results-section');
  const resultsFormSection = document.getElementById('results-form-section');

  if (welcome) welcome.style.display = 'none';
  if (quizSection) quizSection.style.display = 'block';
  if (results) results.style.display = 'none';
  if (resultsFormSection) resultsFormSection.style.display = 'none';

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
  const resultsFormSection = document.getElementById('results-form-section');

  if (welcome) welcome.style.display = 'block';
  if (quizSection) quizSection.style.display = 'none';
  if (resultsFormSection) resultsFormSection.style.display = 'none';

  const pb = document.getElementById('progress-bar');
  if (pb) pb.style.width = '0%';
  // reset quiz state
  currentQuestionIndex = 0;
  answers = {};
  quizResults = null;
  if (currentSortable) { currentSortable.destroy(); currentSortable = null; }
  // clear question container
  const container = document.getElementById('question-container');
  if (container) container.innerHTML = '';
  console.log('restartQuiz: state reset');
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

  const qType = question.tipo || 'seleccion';
  if (qType === 'seleccion') {
    const questionTitle = document.createElement('h4');
    questionTitle.className = 'mb-4 text-dark';
    questionTitle.textContent = question.pregunta;
    container.appendChild(questionTitle);

    question.opciones.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-outline-dark btn-lg w-100 mb-3';
      btn.textContent = typeof opt === 'object' ? opt.texto : opt;
      btn.onclick = () => selectOption(question.id, idx);
      if (answers[question.id] === idx) btn.classList.add('active');
      container.appendChild(btn);
    });
  } else if (qType === 'ordenamiento') {
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
        const nextBtn = document.getElementById('next-btn') || document.getElementById('next-btn-en');
        if (nextBtn) nextBtn.disabled = false;
      }
    });
  }

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn') || document.getElementById('next-btn-en');

  if (prevBtn) prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
  
  if (nextBtn) {
    const isEnglish = document.documentElement.lang.startsWith('en');
    const finishText = isEnglish ? 'Done' : 'Finalizar';
    const nextText = isEnglish ? 'Next' : 'Siguiente';
    nextBtn.innerHTML = (currentQuestionIndex === allQuestions.length - 1 ? finishText : nextText) + '<i class="fas fa-arrow-right ms-2"></i>';
    nextBtn.disabled = answers[question.id] === undefined;
  }
}

function selectOption(questionId, optionIdx) {
  answers[questionId] = optionIdx;
  const container = document.getElementById('question-container');
  [...container.querySelectorAll('button')].forEach((btn, idx) => {
    btn.classList.toggle('active', idx === optionIdx);
  });
  const nextBtn = document.getElementById('next-btn') || document.getElementById('next-btn-en');
  if (nextBtn) nextBtn.disabled = false;
}

function validateCurrentAnswer() {
  const currentQuestion = allQuestions[currentQuestionIndex];
  return answers[currentQuestion.id] !== undefined;
}

function calculateResults() {
  const creativityScores = { responsiva: 0, esperada: 0, contributiva: 0, proactiva: 0 };
  const systemScores = { mercadeo: 0, talento: 0, id: 0 };
  let totalMadurez = 0;
  let madurezQuestions = 0;

  allQuestions.forEach(question => {
    const answerIndex = answers[question.id];
    if (answerIndex === undefined) return;

    // Nueva logica para formato de pesos en opciones (quiz-data-es.js)
    if (question.opciones && typeof question.opciones[answerIndex] === 'object') {
      const pesos = question.opciones[answerIndex].pesos || {};
      
      // Afinidades (Sistema)
      if (pesos.mkt) systemScores.mercadeo += pesos.mkt;
      if (pesos.tal) systemScores.talento += pesos.tal;
      if (pesos.id) systemScores.id += pesos.id;

      // Arquetipos (Creatividad)
      if (pesos.resp) creativityScores.responsiva += pesos.resp;
      if (pesos.esp) creativityScores.esperada += pesos.esp;
      if (pesos.cont) creativityScores.contributiva += pesos.cont;
      if (pesos.pro) creativityScores.proactiva += pesos.pro;

      // Madurez
      if (pesos.madurez !== undefined) {
        totalMadurez += pesos.madurez;
        madurezQuestions++;
      }
    } 
    // Compatibilidad con formato antiguo de scoring (quiz-data-en.js)
    else if (question.scoring) {
      const answer = answers[question.id];
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
  const maturityLevel = madurezQuestions > 0 ? Math.round((totalMadurez / madurezQuestions) * 10) / 10 : 0;

  return {
    creativity: dominantCreativity,
    system: dominantSystem,
    madurez: maturityLevel,
    scores: { creativity: roundedCreativity, system: roundedSystem }
  };
}

function finishQuiz() {
  // 1. Calculate results and store them
  quizResults = calculateResults();

  // 2. Hide quiz and show the new form
  const quizSection = document.getElementById('quiz-section');
  const resultsFormSection = document.getElementById('results-form-section');

  if (quizSection) quizSection.style.display = 'none';
  if (resultsFormSection) resultsFormSection.style.display = 'block';
}

async function submitResultsAndRedirect() {
  const nameEl = document.getElementById('user-name');
  const companyEl = document.getElementById('user-company');
  const emailEl = document.getElementById('user-email');
  const roleEl = document.getElementById('user-role');
  const errorEl = document.getElementById('results-form-error');

  if (!nameEl || !companyEl || !emailEl || !roleEl) {
      console.error('Post-quiz form elements not found!');
      return;
  }

  const name = nameEl.value.trim();
  const company = companyEl.value.trim();
  const email = emailEl.value.trim();
  const role = roleEl.value.trim();

  if (!validateEmail(email) || company.length < 2 || name.length < 2 || role.length < 1) {
      if (errorEl) {
          errorEl.style.display = 'block';
          const lang = document.documentElement.lang;
          errorEl.textContent = lang.startsWith('en') ? 'Please fill in all fields with valid information.' : 'Por favor, rellena todos los campos con información válida.';
      }
      return;
  }

  if (errorEl) { errorEl.style.display = 'none'; }

  const results = quizResults;
  if (!results) {
      console.error("Quiz results not found. Cannot proceed.");
      if (errorEl) {
          errorEl.style.display = 'block';
          const lang = document.documentElement.lang;
          errorEl.textContent = lang.startsWith('en') ? 'Could not find quiz results. Please restart the quiz.' : 'No se encontraron los resultados del quiz. Por favor, reinicia el diagnóstico.';
      }
      return;
  }

  const comboKey = `${results.creativity}_${results.system}`;
  const perfil = (window.perfilesCombinados && window.perfilesCombinados[comboKey]) || { nombre: 'Perfil Desconocido', descripcion: '' };

  trackEvent('quiz_completed', {
      event_category: 'conversion',
      event_label: perfil.nombre,
      creativity_type: results.creativity,
      system_type: results.system,
      profile_combination: comboKey,
      email_domain: email.split('@')[1]
  });

  try {
    await sendToBaserow(name, company, email, role, perfil.nombre, results);
  } catch (e) { console.warn('Baserow submission failed:', e); }

  const payload = { perfilNombre: perfil.nombre, perfilDescripcion: perfil.descripcion, results: results, madurez: results.madurez };
  try { localStorage.setItem('quiz_result', JSON.stringify(payload)); } catch (e) { console.warn('Failed saving quiz result to localStorage:', e); }
  try { sessionStorage.setItem('quiz_result', JSON.stringify(payload)); } catch (e) { /* ignore */ }

  const pageLang = (document.documentElement && document.documentElement.lang) ? String(document.documentElement.lang) : (navigator.language || '');
  const targetPage = pageLang.toLowerCase().startsWith('en') ? 'resultsen.html' : 'results.html';
  const resultsUrl = new URL(targetPage, window.location.href).href;
  console.log('Redirecting to results page:', resultsUrl, 'detectedLang=', pageLang);
  setTimeout(() => { window.location.assign(resultsUrl); }, 120);
}

function downloadEbook() {
  const results = calculateResults();
  const comboKey = `${results.creativity}_${results.system}`;
  const perfil = (window.perfilesCombinados && window.perfilesCombinados[comboKey]) || { nombre: 'Perfil Desconocido' };
  trackEvent('lead_generation', { event_category: 'conversion', event_label: 'ebook_download_request', profile: perfil.nombre, value: 100 });
  alert('Redirigiendo a la página de compra del ebook...');
}

async function sendToBaserow(name, company, email, role, creativityName, results) {
  if (!BASEROW_API_TOKEN || !BASEROW_TABLE_ID) {
    console.warn('Baserow not configured.');
    return;
  }

  const payload = {
    name: name,
    email: email,
    company: company,
    role: role,
    creativity_type: creativityName || '',
    creativity_scores: JSON.stringify(results.scores.creativity || {}),
    system_scores: JSON.stringify(results.scores.system || {}),
    maturity: results.madurez || 0
  };
  
  // Check if user exists
  let rowId = null;
  try {
    const searchUrl = `${BASEROW_API_URL}/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true&search=${encodeURIComponent(email)}`;
    const searchRes = await fetch(searchUrl, {
      method: 'GET',
      headers: { 'Authorization': `Token ${BASEROW_API_TOKEN}` }
    });
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      // Find exact email match (case-insensitive)
      const match = searchData.results.find(r => r.email && r.email.toLowerCase() === email.toLowerCase());
      if (match) {
        rowId = match.id;
      }
    }
  } catch (e) {
    console.warn('Baserow search failed:', e);
  }

  const url = rowId 
    ? `${BASEROW_API_URL}/api/database/rows/table/${BASEROW_TABLE_ID}/${rowId}/?user_field_names=true`
    : `${BASEROW_API_URL}/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true`;
  
  const res = await fetch(url, {
    method: rowId ? 'PATCH' : 'POST',
    headers: { 'Authorization': `Token ${BASEROW_API_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(JSON.stringify(errData));
  }
  
  const data = await res.json();
  trackEvent('baserow_submission', { status: rowId ? 'updated' : 'created' });
  console.log(`Saved to Baserow (${rowId ? 'Updated' : 'Created'}):`, data);
}

// Expose a small API for HTML onclick handlers to call
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.restartQuiz = restartQuiz;
window.downloadEbook = downloadEbook;
window.submitResultsAndRedirect = submitResultsAndRedirect;
