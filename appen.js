// Quiz de Diagnóstico de Creatividad Organizacional
// Basado en la metodología de Kerrie Unsworth y sistemas de gestión de innovación

/*****************************
* Objeto quizData completo
*****************************/

const quizData = {
  "preguntas": [
    {
      "seccion": 1,
      "titulo": "Motivation for Creativity",
      "preguntas": [
        {
          "id": 1,
          "tipo": "seleccion",
          "pregunta": "In your organization, do ideas arise more from external challenges or internal initiative?",
          "opciones": [
            "Only from external challenges",
            "Mostly from external challenges", 
            "Mostly from internal initiative",
            "Only from internal initiative"
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
          "pregunta": "Drag to order the sources of ideas in your company from most to least important:",
          "items": [
            "Customer feedback",
            "Employee initiatives", 
            "Market research",
            "Competitor analysis",
            "External collaborations"
          ],
          "categoria": "fuentes_ideas",
          "scoring": {
            "creatividad": {
              "responsiva": {"Customer feedback": 3, "Competitor analysis": 2},
              "esperada": {"Market research": 3, "Customer feedback": 2},
              "contributiva": {"Employee initiatives": 3, "External collaborations": 2},
              "proactiva": {"Employee initiatives": 3, "External collaborations": 3}
            },
            "sistema": {
              "mercadeo": {"Customer feedback": 3, "Market research": 2},
              "talento": {"Employee initiatives": 3, "External collaborations": 2},
              "id": {"Competitor analysis": 2, "External collaborations": 3}
            }
          }
        },
        {
          "id": 3,
          "tipo": "seleccion",
          "pregunta": "How would you describe the origin of the best ideas in your organization?",
          "opciones": [
            "They arise from external pressures",
            "They emerge from specific problems",
            "They are born from internal curiosity", 
            "They appear spontaneously"
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
          "pregunta": "What most motivates idea generation in your team?",
          "opciones": [
            "Achieving assigned objectives",
            "Solving urgent problems",
            "Improving existing processes",
            "Exploring new opportunities"
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
          "pregunta": "Order by frequency with which they occur in your organization:",
          "items": [
            "Ideas from market demand",
            "Ideas from personal initiative",
            "Ideas from operational problems",
            "Ideas from free exploration",
            "Ideas from competition"
          ],
          "categoria": "frecuencia_ideas",
          "scoring": {
            "creatividad": {
              "responsiva": {"Ideas from market demand": 3, "Ideas from competition": 2},
              "esperada": {"Ideas from operational problems": 3, "Ideas from market demand": 2},
              "contributiva": {"Ideas from personal initiative": 3, "Ideas from operational problems": 2},
              "proactiva": {"Ideas from free exploration": 3, "Ideas from personal initiative": 3}
            }
          }
        }
      ]
    },
    {
      "seccion": 2,
      "titulo": "Nature of Problems",
      "preguntas": [
        {
          "id": 6,
          "tipo": "seleccion",
          "pregunta": "How does your organization prefer to address challenges?",
          "opciones": [
            "With proven methodologies",
            "With structured approaches",
            "With creative exploration",
            "With free experimentation"
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
          "pregunta": "What type of problems most motivate your team?",
          "opciones": [
            "Clearly defined problems",
            "Challenges with known solutions",
            "Situations requiring creativity",
            "Completely open problems"
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
          "pregunta": "Order according to your team's comfort level with these kinds of challenges:",
          "items": [
            "Problems with single solution",
            "Challenges with multiple solutions",
            "Ambiguous situations",
            "Unprecedented problems",
            "Exploratory challenges"
          ],
          "categoria": "comodidad_problemas",
          "scoring": {
            "creatividad": {
              "responsiva": {"Problems with single solution": 3, "Challenges with multiple solutions": 2},
              "esperada": {"Challenges with multiple solutions": 3, "Ambiguous situations": 2},
              "contributiva": {"Problems with single solution": 2, "Challenges with multiple solutions": 3},
              "proactiva": {"Unprecedented problems": 3, "Exploratory challenges": 3}
            }
          }
        },
        {
          "id": 9,
          "tipo": "seleccion",
          "pregunta": "How does your organization react to uncertainty?",
          "opciones": [
            "Seeks immediate clarity",
            "Applies known methods",
            "Embraces ambiguity",
            "Enjoys exploration"
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
          "pregunta": "What best defines innovation projects in your company?",
          "opciones": [
            "Clear and specific objectives",
            "Incremental improvements",
            "Exploring possibilities",
            "Discovery of opportunities"
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
      "titulo": "Management System",
      "preguntas": [
        {
          "id": 11,
          "tipo": "seleccion",
          "pregunta": "What is the main focus of your innovation management system?",
          "opciones": [
            "Customer satisfaction",
            "Talent development",
            "Research and development",
            "Process improvement"
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
          "pregunta": "Order according to your company's current resource investment:",
          "items": [
            "Marketing and sales",
            "Staff training",
            "Research and development",
            "Process improvement",
            "Technology and infrastructure"
          ],
          "categoria": "inversion_recursos",
          "scoring": {
            "sistema": {
              "mercadeo": {"Marketing and sales": 3, "Process improvement": 2},
              "talento": {"Staff training": 3, "Process improvement": 2},
              "id": {"Research and development": 3, "Technology and infrastructure": 2}
            }
          }
        },
        {
          "id": 13,
          "tipo": "seleccion",
          "pregunta": "How does your organization measure the return on innovation investment?",
          "opciones": [
            "Customer satisfaction",
            "Team productivity",
            "Technological advances",
            "Operational efficiency"
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
          "pregunta": "Order according to priority in your innovation strategy:",
          "items": [
            "Improvement of customer experience",
            "Development of internal capabilities",
            "Research of emerging technologies",
            "Process optimization",
            "Exploration of new markets"
          ],
          "categoria": "prioridad_estrategia",
          "scoring": {
            "sistema": {
              "mercadeo": {"Improvement of customer experience": 3, "Exploration of new markets": 2},
              "talento": {"Development of internal capabilities": 3, "Process optimization": 2},
              "id": {"Research of emerging technologies": 3, "Exploration of new markets": 2}
            }
          }
        },
        {
          "id": 15,
          "tipo": "seleccion",
          "pregunta": "What best characterizes your idea evaluation process?",
          "opciones": [
            "Customer impact",
            "Team participation",
            "Disruptive potential",
            "Technical feasibility"
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
      "titulo": "Organizational Culture",
      "preguntas": [
        {
          "id": 16,
          "tipo": "seleccion",
          "pregunta": "How would you describe the innovation culture in your organization?",
          "opciones": [
            "Customer-oriented",
            "People-centered",
            "Research-based",
            "Focused on continuous improvement"
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
          "pregunta": "Order by importance in your organizational culture:",
          "items": [
            "Customer orientation",
            "Talent development",
            "Technical excellence",
            "Operational efficiency",
            "Disruptive innovation"
          ],
          "categoria": "importancia_cultura",
          "scoring": {
            "sistema": {
              "mercadeo": {"Customer orientation": 3, "Operational efficiency": 2},
              "talento": {"Talent development": 3, "Operational efficiency": 2},
              "id": {"Technical excellence": 3, "Disruptive innovation": 3}
            }
          }
        },
        {
          "id": 18,
          "tipo": "seleccion",
          "pregunta": "What does your organization value most in employees?",
          "opciones": [
            "Service orientation",
            "Collaboration and teamwork",
            "Technical skills",
            "Initiative and innovation"
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
          "pregunta": "Order by what your organization most celebrates:",
          "items": [
            "Achievements in customer satisfaction",
            "Success in talent development",
            "Advances in research",
            "Process improvements",
            "Disruptive innovations"
          ],
          "categoria": "celebraciones",
          "scoring": {
            "sistema": {
              "mercadeo": {"Achievements in customer satisfaction": 3, "Process improvements": 2},
              "talento": {"Success in talent development": 3, "Process improvements": 2},
              "id": {"Advances in research": 3, "Disruptive innovations": 3}
            }
          }
        },
        {
          "id": 20,
          "tipo": "seleccion",
          "pregunta": "What best defines the DNA of your company?",
          "opciones": [
            "Customer obsession",
            "Passion for human development",
            "Commitment to research",
            "Pursuit of operational excellence"
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
      "nombre": "Responsive",
      "descripcion": "Responds to problems presented externally, usually with limited control over the problem definition."
    },
    "esperada": {
      "nombre": "Expected", 
      "descripcion": "Addresses open problems defined by external goals; requires exploration but with clear external expectations."
    },
    "contributiva": {
      "nombre": "Contributive",
      "descripcion": "The employee voluntarily chooses to solve clear problems, usually to help or collaborate."
    },
    "proactiva": {
      "nombre": "Proactive",
      "descripcion": "The employee identifies and solves unsolicited and open problems, motivated by their own initiative."
    }
  },
  
  "sistemasInnovacion": {
    "mercadeo": {
      "nombre": "Marketing System",
      "descripcion": "Focuses on the customer and market; ideal for incremental ideas validated externally."
    },
    "talento": {
      "nombre": "Talent System", 
      "descripcion": "Centred on active employee participation and continuous improvement of internal processes."
    },
    "id": {
      "nombre": "R&D System",
      "descripcion": "Prioritises radical and disruptive innovation, leveraging research, technology, and advanced development."
    }
  }
};

const perfilesCombinados = {
  responsiva_mercadeo: {
    nombre: 'The Watcher',
    descripcion: 'Focused on quickly responding to external market demands.'
  },
  responsiva_talento: {
    nombre: 'The Coordinator',
    descripcion: 'Responds to operational problems through team participation.'
  },
  responsiva_id: {
    nombre: 'The Investigator',
    descripcion: 'Solves complex technical challenges supported by applied research.'
  },
  esperada_mercadeo: {
    nombre: 'The Implementer',
    descripcion: 'Executes planned improvements to satisfy the customer.'
  },
  esperada_talento: {
    nombre: 'The Facilitator',
    descripcion: 'Optimizes internal processes with active collaborators.'
  },
  esperada_id: {
    nombre: 'The Technical Visionary',
    descripcion: 'Drives continuous improvement based on technological research.'
  },
  contributiva_talento: {
    nombre: 'The Inspirer',
    descripcion: 'Promotes internal innovation by motivating human talent.'
  },
  contributiva_mercadeo: {
    nombre: 'The Creative Marketer',
    descripcion: 'Proposes solutions to clear problems linked to the market.'
  },
  contributiva_id: {
    nombre: 'The Disruptive Innovator',
    descripcion: 'Brings creative ideas for specific, high-impact technical challenges.'
  },
  proactiva_mercadeo: {
    nombre: 'The Explorer',
    descripcion: 'Proactively discovers new market opportunities.'
  },
  proactiva_talento: {
    nombre: 'The Change Agent',
    descripcion: 'Creates cultural transformation through internal innovation.'
  },
  proactiva_id: {
    nombre: 'The Scientific Pioneer',
    descripcion: 'Leads radical innovations with advanced research.'
  }
};



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
  document.getElementById('welcome-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('results-section').style.display = 'none';
  displayQuestion();
}

function nextQuestion() {
  if (!validateCurrentAnswer()) return;
  
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
  progressText.textContent = `Question ${currentQuestionIndex + 1} out of ${allQuestions.length}`;
  sectionTitle.textContent = `Section ${question.seccion}: ${question.sectionTitle}`;

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
  document.getElementById('next-btn').textContent = currentQuestionIndex === allQuestions.length - 1 ? 'Done' : 'Next';
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

  document.getElementById('creativity-result').textContent = perfil.nombre;
  document.getElementById('perfil-desc').textContent = perfil.descripcion;

  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
}


/*****************************
* Descargar Ebook
*****************************/

function downloadEbook() {
  // Aquí debes implementar la lógica para redirigir al usuario
  // a tu página de pago o sistema de descarga
  alert('Redirigiendo a la página de compra del ebook...');
  // Ejemplo: window.location.href = 'https://tu-sitio.com/comprar-ebook';
}
