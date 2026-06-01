/**
 * results.js
 * Maneja la visualización de resultados: carga de datos, población de tablas y gráficos.
 */

(function(){
  // Detectar idioma y cargar el archivo de datos correspondiente
  const lang = document.documentElement.lang || 'es';
  const isEn = lang.startsWith('en');
  const dataFile = lang.startsWith('en') ? 'quiz-data-en.js' : 'quiz-data-es.js';
  
  var s = document.createElement('script');
  s.src = dataFile;
  s.onload = initResults;
  s.onerror = initResults; 
  document.head.appendChild(s);

  function initResults(){
    try {
      const raw = localStorage.getItem('quiz_result') || sessionStorage.getItem('quiz_result');
      if (!raw) {
        const nameEl = document.getElementById('perfil-nombre');
        const noResultsText = isEn ? 'No results available' : 'No hay resultados disponibles';
        if (nameEl) nameEl.textContent = noResultsText;
        return;
      }
      const data = JSON.parse(raw);
      const scores = data.results.scores;
      const comboKey = `${data.results.creativity}_${data.results.system}`;
      const perfilData = window.perfilesCombinados ? window.perfilesCombinados[comboKey] : null;
      
      const dominantCreativity = data.results.creativity;
      const dominantSystem = data.results.system;
      const lowestCreativity = Object.keys(scores.creativity).reduce((a, b) => scores.creativity[a] < scores.creativity[b] ? a : b);
      const lowestSystem = Object.keys(scores.system).reduce((a, b) => scores.system[a] < scores.system[b] ? a : b);

      if (perfilData) {
        // 1. Poblar Textos e Imágenes
        document.querySelectorAll('.perfil-nombre-repeat').forEach(el => el.textContent = perfilData.nombre);
        
        const safeSetText = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        safeSetText('arquetipo-titulo', window.arquetipos ? window.arquetipos[dominantCreativity].nombre : '');
        safeSetText('perfil-frase', perfilData.frase);
        safeSetText('perfil-descripcion', perfilData.descripcion);
        
        const perfilImg = document.getElementById('perfil-imagen');
        if (perfilImg) perfilImg.src = perfilData.imagen;
        
        // Seccion Arquetipo Creativo
        if (window.arquetipos) {
            safeSetText('tipo-titulo-alto', window.arquetipos[dominantCreativity].nombre);
            safeSetText('tipo-titulo-bajo', window.arquetipos[lowestCreativity].nombre);
            safeSetText('tipo-alto', window.arquetipos[dominantCreativity].alto);
            safeSetText('tipo-bajo', window.arquetipos[lowestCreativity].bajo);
            safeSetText('insight', window.arquetipos[dominantCreativity].insight);
        }

        // Seccion Sistema (Motor)
        if (window.sistemas) {
            safeSetText('sistema-titulo', window.sistemas[dominantSystem].nombre);
            safeSetText('sistema-desc', window.sistemas[dominantSystem].descripcion);
            safeSetText('sistema-ajuste', window.sistemas[lowestSystem].ajuste);
            safeSetText('foco-titulo', window.sistemas[dominantSystem].nombre);
        }

        // Mapeo Nivel de Madurez (Escala 1-5)
        const mScore = data.results.madurez || 0;
        let madurezKey = 'artesanal';
        if (mScore >= 4.0) madurezKey = 'agil';
        else if (mScore >= 2.5) madurezKey = 'industrial';
        
        const nivelData = window.nivel ? window.nivel[madurezKey] : null;
        if (nivelData) {
          safeSetText('nivel-titulo', nivelData.nombre);
          safeSetText('res-madurez-desc', nivelData.descripcion);
          safeSetText('nivel-desc', nivelData.descripcion);
          safeSetText('nivel-riesgo', nivelData.riesgo);

          // Tabla de Auditoría
          const auditTableBody = document.getElementById('audit-items-body');
          if (auditTableBody) {
            auditTableBody.innerHTML = '';
            const charLabel = isEn ? 'Characteristic' : 'Característica';
            const riskLabel = isEn ? 'Risk' : 'Riesgo';

            const auditItems = [
              ...(nivelData.caracteristicas || []).map(text => ({ text, label: charLabel, color: 'light' })),
              ...(nivelData.riesgos || []).map(text => ({ text, label: riskLabel, color: 'secondary' }))
            ];
            auditItems.sort(() => Math.random() - 0.5);

            auditItems.forEach(item => {
              const tr = document.createElement('tr');
              tr.innerHTML = `
                <td><div class="px-3 py-2"><p class="lead mb-0">${item.text}</p></div></td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-${item.color}">${item.label}</span>
                </td>
              `;
              auditTableBody.appendChild(tr);
            });
          }
        }

        // Tabla de Fortalezas y Brechas
        const strengthsGapsBody = document.getElementById('strengths-gaps-body');
        if (strengthsGapsBody && perfilData[madurezKey]) {
          strengthsGapsBody.innerHTML = '';
          const strengths = perfilData[madurezKey].fortalezas || [];
          const gaps = perfilData[madurezKey].brechas || [];
          const rowCount = Math.max(strengths.length, gaps.length);
          
          for (let i = 0; i < rowCount; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td><div class="px-3 py-2"><p class="lead text-center">${strengths[i] || ''}</p></div></td>
              <td><div class="px-3 py-2"><p class="lead text-center">${gaps[i] || ''}</p></div></td>
            `;
            strengthsGapsBody.appendChild(tr);
          }
        }

        // Línea de Tiempo del Plan de Acción
        const timelineContainer = document.getElementById('timeline-plan-accion');
        const programData = (window.programasCompletos && window.programasCompletos[comboKey]) 
          ? window.programasCompletos[comboKey][madurezKey] 
          : null;

        if (programData) {
          safeSetText('prog-nombre', programData.titulo);
          safeSetText('prog-objetivo', programData.objetivo);
          safeSetText('prog-duracion', programData.duracion);
        }

        if (timelineContainer && programData) {
          timelineContainer.innerHTML = '';
          const actions = programData.acciones || [];
          actions.forEach((action, index) => {
            const block = document.createElement('div');
            block.className = 'timeline-block';

            let contentHtml = `<h5 class="text-dark font-weight-bold mb-0">${action.titulo}</h5>`;
            let stepIcon = 'fa-gear';

            if (index === 0) {
              // Acción 1: Todo completo
              if (action.descripcion) contentHtml += `<p class="lead mt-2 mb-2">${action.descripcion}</p>`;
              if (action.dueno) {
                const label = isEn ? 'RESPONSIBLE' : 'RESPONSABLE';
                contentHtml += `<p class="text-dark font-weight-bold text-xs mb-1">${label}: ${action.dueno}</p>`;
              }
              if (action.tiempo) {
                const label = isEn ? 'ESTIMATED TIME' : 'TIEMPO ESTIMADO';
                contentHtml += `<p class="text-secondary font-weight-bold text-xxs mt-1 mb-0">${label}: ${action.tiempo}</p>`;
              }
            } else {
              // Acciones 2, 3 y 4: Solo título
              stepIcon = 'fa-lock';
              const lockText = isEn ? 'Content blocked in free version' : 'Contenido bloqueado en versión gratuita';
              contentHtml += `<p class="text-muted text-xxs mt-2 italic"><i class="fas fa-lock me-1"></i> ${lockText}</p>`;
            }

            block.innerHTML = `
              <span class="timeline-step"><i class="fa-solid ${stepIcon} text-dark"></i></span>
              <div class="timeline-content">
                ${contentHtml}
              </div>
            `;
            timelineContainer.appendChild(block);
          });
        }

        // Resumen Final
        if (window.arquetipos) {
            safeSetText('fortaleza-principal', window.arquetipos[dominantCreativity].nombre);
            safeSetText('debilidad-principal', window.arquetipos[lowestCreativity].nombre);
            safeSetText('res-arquetipo-title', window.arquetipos[dominantCreativity].nombre);
        }
        safeSetText('res-madurez-score', mScore.toFixed(1) + '  /   5.0');
        if (window.sistemas) safeSetText('res-afinidad-title', window.sistemas[dominantSystem].nombre);

        // --- GRÁFICOS ---
        // Ranking Lollipop
        const canvasProfiles = document.getElementById('radar-profiles-canvas');
        if (canvasProfiles) {
          const profileRanking = Object.keys(window.perfilesCombinados).map(key => {
            const p = key.split('_');
            return { label: window.perfilesCombinados[key].nombre, value: Number(scores.creativity[p[0]] || 0) + Number(scores.system[p[1]] || 0) };
          }).sort((a, b) => b.value - a.value).slice(0, 4);

          new Chart(canvasProfiles, {
            type: 'bar',
            data: {
              labels: profileRanking.map((d, i) => i === 0 ? d.label : '?'),
              datasets: [{
                data: profileRanking.map(d => d.value),
                backgroundColor: profileRanking.map((_, i) => `rgba(203, 12, 159, ${i===0?1:i===1?0.5:i===2?0.15:0})`),
                borderRadius: 50, barThickness: 12
              }]
            },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } } }
          });
        }

        // Radar de Arquetipos
        const canvasArchetype = document.getElementById('radar-archetype-fixed');
        if (canvasArchetype) {
            new Chart(canvasArchetype, {
              type: 'radar',
              data: {
                labels: ['Responsiva', 'Esperada', 'Contributiva', 'Proactiva'],
                datasets: [{
                  data: [scores.creativity.responsiva, scores.creativity.esperada, scores.creativity.contributiva, scores.creativity.proactiva],
                  backgroundColor: 'rgba(203, 12, 159, 0.2)', borderColor: 'rgba(203, 12, 159)', borderWidth: 3
                }],
              },
              options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } } }
            });
        }
        
        // Gráfico de Foco
        const canvasFocus = document.getElementById('chart-foco-fixed');
        if (canvasFocus) {
            new Chart(canvasFocus, {
              type: 'bar',
              data: {
                labels: ['Mercadeo', 'Talento', 'I+D'],
                datasets: [{
                  data: [scores.system.mercadeo, scores.system.talento, scores.system.id],
                  backgroundColor: 'rgba(203, 12, 159, 1)', borderRadius: 50, barThickness: 15
                }]
              },
              options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } } }
            });
        }

        // Gauge de Madurez
        const canvasMadurez = document.getElementById('chart-madurez-fixed');
        if (canvasMadurez) {
            const gaugeNeedle = {
              id: 'gaugeNeedle',
              afterDatasetDraw(chart) {
                const { ctx, data, chartArea: { left, width, bottom, height } } = chart;
                ctx.save();
                const needleValue = data.datasets[0].needleValue;
                const angle = Math.PI + (1 / 5 * needleValue * Math.PI);
                const cx = width / 2 + left; const cy = bottom;
                ctx.translate(cx, cy); ctx.rotate(angle); ctx.beginPath(); ctx.moveTo(0, -3); ctx.lineTo(height * 1.1, 0); ctx.lineTo(0, 3);
                ctx.fillStyle = '#444'; ctx.fill(); ctx.restore();
              }
            };
            new Chart(canvasMadurez, {
              type: 'doughnut',
              data: {
                datasets: [{
                  data: [2.5, 1.5, 1],
                  backgroundColor: ['#A80A83', '#800864', '#570544'],
                  needleValue: mScore, circumference: 180, rotation: 270, cutout: '75%'
                }]
              },
              options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } } },
              plugins: [gaugeNeedle]
            });
        }
      }
    } catch (e) { console.warn('Error inicializando resultados:', e); }

    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function(){
        localStorage.removeItem('quiz_result');
        sessionStorage.removeItem('quiz_result');
        location.href = 'quiz.html';
      });
    }
  }
})();