// Quiz de Diagnóstico de Creatividad Organizacional
// Basado en la metodología de Kerrie Unsworth y sistemas de gestión de innovación

/*****************************
* Objeto quizData completo
*****************************/

const quizData = {
  "preguntas": [
    {
      "seccion": 1,
      "titulo": "Motivación para la Creatividad",
      "preguntas": [
        {
          "id": 1,
          "tipo": "seleccion",
          "pregunta": "¿En su organización, las ideas surgen más por retos del entorno o por iniciativa interna?",
          "opciones": [
            "Solo por retos externos",
            "Más por retos externos", 
            "Más por iniciativa interna",
            "Solo por iniciativa interna"
          ],
          "categoria": "motivacion",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 3, 1, 0],
              "contributiva": [1, 1, 2, 3],
              "proactiva": [0, 1, 2, 3]
            }
          }
        },
        {
          "id": 2,
          "tipo": "ordenamiento",
          "pregunta": "Arrastra para ordenar de mayor a menor importancia las fuentes de ideas en tu empresa:",
          "items": [
            "Feedback de clientes",
            "Iniciativas de empleados", 
            "Investigación de mercado",
            "Análisis de competencia",
            "Colaboraciones externas"
          ],
          "categoria": "fuentes_ideas",
          "scoring": {
            "creatividad": {
              "responsiva": {"Feedback de clientes": 3, "Análisis de competencia": 2},
              "esperada": {"Investigación de mercado": 3, "Feedback de clientes": 2},
              "contributiva": {"Iniciativas de empleados": 3, "Colaboraciones externas": 2},
              "proactiva": {"Iniciativas de empleados": 3, "Colaboraciones externas": 3}
            },
            "sistema": {
              "mercadeo": {"Feedback de clientes": 3, "Investigación de mercado": 2},
              "talento": {"Iniciativas de empleados": 3, "Colaboraciones externas": 2},
              "id": {"Análisis de competencia": 2, "Colaboraciones externas": 3}
            }
          }
        },
        {
          "id": 3,
          "tipo": "seleccion",
          "pregunta": "¿Cómo describiría el origen de las mejores ideas en su organización?",
          "opciones": [
            "Surgen de presiones externas",
            "Emergen de problemas específicos",
            "Nacen de curiosidad interna", 
            "Aparecen espontáneamente"
          ],
          "categoria": "origen_ideas",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 3, 1, 1],
              "contributiva": [1, 2, 3, 2],
              "proactiva": [0, 1, 2, 3]
            }
          }
        },
        {
          "id": 4,
          "tipo": "seleccion",
          "pregunta": "¿Qué motiva más la generación de ideas en su equipo?",
          "opciones": [
            "Cumplir objetivos asignados",
            "Resolver problemas urgentes",
            "Mejorar procesos existentes",
            "Explorar nuevas oportunidades"
          ],
          "categoria": "motivacion_equipo",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 3, 2, 1],
              "contributiva": [1, 2, 3, 2],
              "proactiva": [0, 1, 2, 3]
            }
          }
        },
        {
          "id": 5,
          "tipo": "ordenamiento",
          "pregunta": "Ordena según la frecuencia con que ocurren en tu organización:",
          "items": [
            "Ideas por demanda del mercado",
            "Ideas por iniciativa personal",
            "Ideas por problemas operativos",
            "Ideas por exploración libre",
            "Ideas por competencia"
          ],
          "categoria": "frecuencia_ideas",
          "scoring": {
            "creatividad": {
              "responsiva": {"Ideas por demanda del mercado": 3, "Ideas por competencia": 2},
              "esperada": {"Ideas por problemas operativos": 3, "Ideas por demanda del mercado": 2},
              "contributiva": {"Ideas por iniciativa personal": 3, "Ideas por problemas operativos": 2},
              "proactiva": {"Ideas por exploración libre": 3, "Ideas por iniciativa personal": 3}
            }
          }
        }
      ]
    },
    {
      "seccion": 2,
      "titulo": "Naturaleza de los Problemas",
      "preguntas": [
        {
          "id": 6,
          "tipo": "seleccion",
          "pregunta": "¿Cómo prefiere su organización abordar los desafíos?",
          "opciones": [
            "Con metodologías probadas",
            "Con enfoques estructurados",
            "Con exploración creativa",
            "Con experimentación libre"
          ],
          "categoria": "abordaje_problemas",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 3, 2, 1],
              "contributiva": [2, 2, 3, 2],
              "proactiva": [1, 1, 2, 3]
            }
          }
        },
        {
          "id": 7,
          "tipo": "seleccion",
          "pregunta": "¿Qué tipo de problemas motiva más a su equipo?",
          "opciones": [
            "Problemas claramente definidos",
            "Desafíos con soluciones conocidas",
            "Situaciones que requieren creatividad",
            "Problemas completamente abiertos"
          ],
          "categoria": "tipo_problemas",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 2, 3, 1],
              "contributiva": [3, 2, 2, 1],
              "proactiva": [1, 1, 2, 3]
            }
          }
        },
        {
          "id": 8,
          "tipo": "ordenamiento",
          "pregunta": "Ordena según el nivel de comodidad de tu equipo con estos tipos de desafíos:",
          "items": [
            "Problemas con solución única",
            "Desafíos con múltiples soluciones",
            "Situaciones ambiguas",
            "Problemas sin precedentes",
            "Desafíos exploratorios"
          ],
          "categoria": "comodidad_problemas",
          "scoring": {
            "creatividad": {
              "responsiva": {"Problemas con solución única": 3, "Desafíos con múltiples soluciones": 2},
              "esperada": {"Desafíos con múltiples soluciones": 3, "Situaciones ambiguas": 2},
              "contributiva": {"Problemas con solución única": 2, "Desafíos con múltiples soluciones": 3},
              "proactiva": {"Problemas sin precedentes": 3, "Desafíos exploratorios": 3}
            }
          }
        },
        {
          "id": 9,
          "tipo": "seleccion",
          "pregunta": "¿Cómo reacciona su organización ante la incertidumbre?",
          "opciones": [
            "Busca claridad inmediata",
            "Aplica métodos conocidos",
            "Abraza la ambigüedad",
            "Disfruta la exploración"
          ],
          "categoria": "reaccion_incertidumbre",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 3, 2, 1],
              "contributiva": [2, 2, 3, 2],
              "proactiva": [1, 1, 2, 3]
            }
          }
        },
        {
          "id": 10,
          "tipo": "seleccion",
          "pregunta": "¿Qué define mejor los proyectos de innovación en su empresa?",
          "opciones": [
            "Objetivos claros y específicos",
            "Mejoras incrementales",
            "Exploración de posibilidades",
            "Descubrimiento de oportunidades"
          ],
          "categoria": "definicion_proyectos",
          "scoring": {
            "creatividad": {
              "responsiva": [3, 2, 1, 0],
              "esperada": [2, 3, 2, 1],
              "contributiva": [2, 2, 3, 2],
              "proactiva": [1, 1, 2, 3]
            }
          }
        }
      ]
    },
    {
      "seccion": 3,
      "titulo": "Sistema de Gestión",
      "preguntas": [
        {
          "id": 11,
          "tipo": "seleccion",
          "pregunta": "¿Cuál es el enfoque principal de su sistema de gestión de innovación?",
          "opciones": [
            "Satisfacción del cliente",
            "Desarrollo del talento",
            "Investigación y desarrollo",
            "Mejora de procesos"
          ],
          "categoria": "enfoque_sistema",
          "scoring": {
            "sistema": {
              "mercadeo": [3, 1, 0, 2],
              "talento": [2, 3, 1, 2],
              "id": [1, 2, 3, 1]
            }
          }
        },
        {
          "id": 12,
          "tipo": "ordenamiento",
          "pregunta": "Ordena según la inversión actual de recursos en tu empresa:",
          "items": [
            "Marketing y ventas",
            "Capacitación de personal",
            "Investigación y desarrollo",
            "Mejora de procesos",
            "Tecnología e infraestructura"
          ],
          "categoria": "inversion_recursos",
          "scoring": {
            "sistema": {
              "mercadeo": {"Marketing y ventas": 3, "Mejora de procesos": 2},
              "talento": {"Capacitación de personal": 3, "Mejora de procesos": 2},
              "id": {"Investigación y desarrollo": 3, "Tecnología e infraestructura": 2}
            }
          }
        },
        {
          "id": 13,
          "tipo": "seleccion",
          "pregunta": "¿Cómo mide su organización el retorno de inversión en innovación?",
          "opciones": [
            "Satisfacción del cliente",
            "Productividad del equipo",
            "Avances tecnológicos",
            "Eficiencia operativa"
          ],
          "categoria": "medicion_roi",
          "scoring": {
            "sistema": {
              "mercadeo": [3, 1, 0, 2],
              "talento": [2, 3, 1, 2],
              "id": [1, 2, 3, 1]
            }
          }
        },
        {
          "id": 14,
          "tipo": "ordenamiento",
          "pregunta": "Ordena según prioridad en tu estrategia de innovación:",
          "items": [
            "Mejora de experiencia del cliente",
            "Desarrollo de capacidades internas",
            "Investigación de tecnologías emergentes",
            "Optimización de procesos",
            "Exploración de nuevos mercados"
          ],
          "categoria": "prioridad_estrategia",
          "scoring": {
            "sistema": {
              "mercadeo": {"Mejora de experiencia del cliente": 3, "Exploración de nuevos mercados": 2},
              "talento": {"Desarrollo de capacidades internas": 3, "Optimización de procesos": 2},
              "id": {"Investigación de tecnologías emergentes": 3, "Exploración de nuevos mercados": 2}
            }
          }
        },
        {
          "id": 15,
          "tipo": "seleccion",
          "pregunta": "¿Qué caracteriza mejor su proceso de evaluación de ideas?",
          "opciones": [
            "Impacto en el cliente",
            "Participación del equipo",
            "Potencial disruptivo",
            "Viabilidad técnica"
          ],
          "categoria": "evaluacion_ideas",
          "scoring": {
            "sistema": {
              "mercadeo": [3, 1, 2, 1],
              "talento": [2, 3, 1, 2],
              "id": [1, 2, 3, 2]
            }
          }
        }
      ]
    },
    {
      "seccion": 4,
      "titulo": "Cultura Organizacional",
      "preguntas": [
        {
          "id": 16,
          "tipo": "seleccion",
          "pregunta": "¿Cómo describe la cultura de innovación en su organización?",
          "opciones": [
            "Orientada al cliente",
            "Centrada en las personas",
            "Basada en investigación",
            "Enfocada en mejora continua"
          ],
          "categoria": "cultura_innovacion",
          "scoring": {
            "sistema": {
              "mercadeo": [3, 1, 0, 2],
              "talento": [2, 3, 1, 2],
              "id": [1, 2, 3, 1]
            }
          }
        },
        {
          "id": 17,
          "tipo": "ordenamiento",
          "pregunta": "Ordena según importancia en tu cultura organizacional:",
          "items": [
            "Orientación al cliente",
            "Desarrollo del talento",
            "Excelencia técnica",
            "Eficiencia operativa",
            "Innovación disruptiva"
          ],
          "categoria": "importancia_cultura",
          "scoring": {
            "sistema": {
              "mercadeo": {"Orientación al cliente": 3, "Eficiencia operativa": 2},
              "talento": {"Desarrollo del talento": 3, "Eficiencia operativa": 2},
              "id": {"Excelencia técnica": 3, "Innovación disruptiva": 3}
            }
          }
        },
        {
          "id": 18,
          "tipo": "seleccion",
          "pregunta": "¿Qué valora más su organización en los empleados?",
          "opciones": [
            "Orientación al servicio",
            "Colaboración y trabajo en equipo",
            "Capacidades técnicas",
            "Iniciativa e innovación"
          ],
          "categoria": "valores_empleados",
          "scoring": {
            "sistema": {
              "mercadeo": [3, 2, 1, 2],
              "talento": [2, 3, 2, 2],
              "id": [1, 2, 3, 2]
            }
          }
        },
        {
          "id": 19,
          "tipo": "ordenamiento",
          "pregunta": "Ordena según lo que más celebra tu organización:",
          "items": [
            "Logros en satisfacción del cliente",
            "Éxitos en desarrollo de talento",
            "Avances en investigación",
            "Mejoras en procesos",
            "Innovaciones disruptivas"
          ],
          "categoria": "celebraciones",
          "scoring": {
            "sistema": {
              "mercadeo": {"Logros en satisfacción del cliente": 3, "Mejoras en procesos": 2},
              "talento": {"Éxitos en desarrollo de talento": 3, "Mejoras en procesos": 2},
              "id": {"Avances en investigación": 3, "Innovaciones disruptivas": 3}
            }
          }
        },
        {
          "id": 20,
          "tipo": "seleccion",
          "pregunta": "¿Qué mejor define el ADN de su empresa?",
          "opciones": [
            "Obsesión por el cliente",
            "Pasión por el desarrollo humano",
            "Compromiso con la investigación",
            "Búsqueda de la excelencia operativa"
          ],
          "categoria": "adn_empresa",
          "scoring": {
            "sistema": {
              "mercadeo": [3, 1, 0, 2],
              "talento": [2, 3, 1, 2],
              "id": [1, 2, 3, 1]
            }
          }
        }
      ]
    }
  ],
  
  "creatividadTipos": {
    "responsiva": {
      "nombre": "Responsiva",
      "descripcion": "Responde a problemas presentados externamente, generalmente con control limitado sobre la definición del problema."
    },
    "esperada": {
      "nombre": "Esperada", 
      "descripcion": "Aborda problemas abiertos definidos por metas externas; requiere exploración pero con expectativas externas claras."
    },
    "contributiva": {
      "nombre": "Contributiva",
      "descripcion": "El empleado elige voluntariamente resolver problemas claros, usualmente para ayudar o colaborar."
    },
    "proactiva": {
      "nombre": "Proactiva",
      "descripcion": "El empleado identifica y resuelve problemas no solicitados y abiertos, motivados por la iniciativa propia."
    }
  },
  
  "sistemasInnovacion": {
    "mercadeo": {
      "nombre": "Sistema de Mercadeo",
      "descripcion": "Foco en el cliente y el mercado; ideal para ideas incrementales validadas externamente."
    },
    "talento": {
      "nombre": "Sistema de Talento Humano", 
      "descripcion": "Centrada en la participación activa de los empleados y mejora continua de procesos internos."
    },
    "id": {
      "nombre": "Sistema de I+D",
      "descripcion": "Prioriza innovación radical y disruptiva, apalancando investigación, tecnología y desarrollo avanzado."
    }
  }
};
const perfilesCombinados = {
  responsiva_mercadeo: {
    nombre: 'El Vigilante',
    descripcion: 'Enfocado en responder rápido a demandas externas de mercado.'
  },
  responsiva_talento: {
    nombre: 'El Coordinador',
    descripcion: 'Responde a problemas operativos mediante la participación del equipo.'
  },
  responsiva_id: {
    nombre: 'El Investigador',
    descripcion: 'Resuelve desafíos técnicos complejos apoyado en la investigación aplicada.'
  },
  esperada_mercadeo: {
    nombre: 'El Implementador',
    descripcion: 'Ejecuta mejoras previstas para satisfacer al cliente.'
  },
  esperada_talento: {
    nombre: 'El Facilitador',
    descripcion: 'Optimiza procesos internos con colaboradores activos.'
  },
  esperada_id: {
    nombre: 'El Visionario Técnico',
    descripcion: 'Impulsa mejora continua con base en investigación tecnológica.'
  },
  contributiva_talento: {
    nombre: 'El Inspirador',
    descripcion: 'Impulsa la innovación interna a través de talento humano motivado.'
  },
  contributiva_mercadeo: {
    nombre: 'El Mercado Creativo',
    descripcion: 'Propone soluciones para problemas claros vinculado al mercado.'
  },
  contributiva_id: {
    nombre: 'El Innovador Disruptivo',
    descripcion: 'Trae ideas creativas para desafíos específicos de alto impacto técnico.'
  },
  proactiva_mercadeo: {
    nombre: 'El Explorador',
    descripcion: 'Descubre nuevas oportunidades de mercado proactivamente.'
  },
  proactiva_talento: {
    nombre: 'El Agente de Cambio',
    descripcion: 'Crea transformación cultural mediante innovación interna.'
  },
  proactiva_id: {
    nombre: 'El Pionero Científico',
    descripcion: 'Lidera innovaciones radicales con investigación avanzada.'
  }
};

/*****************************
* Google Analytics 4 Events
*****************************/

// Función para tracking de eventos
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
}

/*****************************
* Estado del Quiz
*****************************/

let currentQuestionIndex = 0;
let answers = {};
let allQuestions = [];
let currentSortable = null;

/*****************************
* Inicialización
*****************************/

window.addEventListener('DOMContentLoaded', () => {
  // Unir todas las secciones en un array de preguntas lineal
  quizData.preguntas.forEach(section => {
    section.preguntas.forEach(q => {
      allQuestions.push({ ...q, sectionTitle: section.titulo, seccion: section.seccion });
    });
  });
});

/*****************************
* Funciones de Navegación
*****************************/

function startQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  // Track quiz start
  trackEvent('quiz_start', {
    event_category: 'engagement',
    event_label: 'creativity_diagnosis',
    quiz_type: 'creativity_organizational'
  });
  document.getElementById('welcome-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('results-section').style.display = 'none';
  displayQuestion();
}

function nextQuestion() {
  if (!validateCurrentAnswer()) return;
    // Track question progress
    trackEvent('quiz_progress', {
      event_category: 'engagement',
      event_label: `question_${currentQuestionIndex + 1}`,
      question_type: allQuestions[currentQuestionIndex].tipo,
      section: allQuestions[currentQuestionIndex].sectionTitle
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
  document.getElementById('welcome-section').style.display = 'block';
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('progress-bar').style.width = '0%';
}

/*****************************
* Mostrar Preguntas
*****************************/

function displayQuestion() {
  const question = allQuestions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const sectionTitle = document.getElementById('section-title');

  // Actualizar barra de progreso
  const progressPercent = ((currentQuestionIndex + 1) / allQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${allQuestions.length}`;
  sectionTitle.textContent = `Sección ${question.seccion}: ${question.sectionTitle}`;

  // Limpiar contenedor y sortable previo
  container.innerHTML = '';
  if (currentSortable) {
    currentSortable.destroy();
    currentSortable = null;
  }

  // Generar UI para la pregunta
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
      
      // Marcar seleccionado si ya respondió
      if (answers[question.id] === idx) {
        btn.classList.add('active');
      }
      
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

    // Determinar el orden inicial
    const items = answers[question.id] ? answers[question.id] : question.items;
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item bg-light text-dark';
      li.textContent = item;
      list.appendChild(li);
    });

    container.appendChild(list);

    // Activar SortableJS
    currentSortable = new Sortable(list, {
      animation: 150,
      onEnd: () => {
        // Guardar nuevo orden
        const orderedItems = [...list.querySelectorAll('li')].map(li => li.textContent);
        answers[question.id] = orderedItems;
        document.getElementById('next-btn').disabled = false;
      }
    });
  }

  // Botones navegación
  document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
  document.getElementById('next-btn').textContent = currentQuestionIndex === allQuestions.length - 1 ? 'Finalizar' : 'Siguiente';
  document.getElementById('next-btn').disabled = answers[question.id] === undefined;
}

function selectOption(questionId, optionIdx) {
  answers[questionId] = optionIdx;
  
  // Marcar seleccionado visualmente
  const container = document.getElementById('question-container');
  [...container.querySelectorAll('button')].forEach((btn, idx) => {
    btn.classList.toggle('active', idx === optionIdx);
  });
  
  document.getElementById('next-btn').disabled = false;
}

function validateCurrentAnswer() {
  const currentQuestion = allQuestions[currentQuestionIndex];
  return answers[currentQuestion.id] !== undefined;
}

/*****************************
* Sistema de Calificación
*****************************/

function calculateResults() {
  const creativityScores = { responsiva: 0, esperada: 0, contributiva: 0, proactiva: 0 };
  const systemScores = { mercadeo: 0, talento: 0, id: 0 };

  allQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer === undefined) return;

    if (question.scoring) {
      // Procesar scoring de creatividad
      if (question.scoring.creatividad) {
        if (question.tipo === 'seleccion') {
          Object.keys(question.scoring.creatividad).forEach(type => {
            creativityScores[type] += question.scoring.creatividad[type][answer];
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

      // Procesar scoring de sistema
      if (question.scoring.sistema) {
        if (question.tipo === 'seleccion') {
          Object.keys(question.scoring.sistema).forEach(type => {
            systemScores[type] += question.scoring.sistema[type][answer];
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

  // Determinar tipos dominantes
  const dominantCreativity = Object.keys(creativityScores).reduce((a, b) => 
    creativityScores[a] > creativityScores[b] ? a : b
  );
  
  const dominantSystem = Object.keys(systemScores).reduce((a, b) => 
    systemScores[a] > systemScores[b] ? a : b
  );

  return {
    creativity: dominantCreativity,
    system: dominantSystem,
    scores: {
      creativity: creativityScores,
      system: systemScores
    }
  };
}

/*****************************
* Finalizar y Resultados
*****************************/

function finishQuiz() {
  const results = calculateResults();
  const comboKey = `${results.creativity}_${results.system}`;
  const perfil = perfilesCombinados[comboKey] || { nombre: 'Perfil Desconocido', descripcion: '' };

    // Track quiz completion
    trackEvent('quiz_completed', {
      event_category: 'conversion',
      event_label: perfil.nombre,
      creativity_type: results.creativity,
      system_type: results.system,
      profile_combination: comboKey
    });

  document.getElementById('creativity-result').textContent = perfil.nombre;
  document.getElementById('perfil-desc').textContent = perfil.descripcion;

  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
}


/*****************************
* Descargar Ebook
*****************************/

function downloadEbook() {
  const results = calculateResults();
  const comboKey = `${results.creativity}_${results.system}`;
  const perfil = perfilesCombinados[comboKey] || { nombre: 'Perfil Desconocido', descripcion: '' };
  
  // Track lead generation
  trackEvent('lead_generation', {
    event_category: 'conversion',
    event_label: 'ebook_download_request',
    profile: perfil.nombre,
    value: 100
  });
  alert('Redirigiendo a la página de compra del ebook...');
  // Ejemplo: window.location.href = 'https://tu-sitio.com/comprar-ebook';
}
