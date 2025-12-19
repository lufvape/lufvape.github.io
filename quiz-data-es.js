// Spanish quiz data (defines `quizData` and `perfilesCombinados` used by quiz-core.js)
window.quizData = {
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
    "responsiva": { "nombre": "Responsiva", "descripcion": "Responde a problemas presentados externamente, generalmente con control limitado sobre la definición del problema." },
    "esperada": { "nombre": "Esperada", "descripcion": "Aborda problemas abiertos definidos por metas externas; requiere exploración pero con expectativas externas claras." },
    "contributiva": { "nombre": "Contributiva", "descripcion": "El empleado elige voluntariamente resolver problemas claros, usualmente para ayudar o colaborar." },
    "proactiva": { "nombre": "Proactiva", "descripcion": "El empleado identifica y resuelve problemas no solicitados y abiertos, motivados por la iniciativa propia." }
  }
};

window.perfilesCombinados = {
  responsiva_mercadeo: 
  { nombre: 'El Vigilante', 
    creatividadTipo: ['Responsiva', 'La Creatividad Responsiva es una reacción directa a demandas o problemas claros y específicos que provienen del entorno externo. Su motor es la necesidad urgente de encontrar soluciones a desafíos ya definidos, como una queja de cliente o una acción de la competencia, manifestándose en la rapidez y eficacia para generar respuestas pertinentes.'],
    sistemaTipo: ['Mercadeo', 'Para que los perfiles que buscan inspiración en el entorno prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en el Mercadeo. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración, los clientes y los diferentes actores externo a la empresa.  Un sistema robusto en esta área se centra en la captación activa, sistemática y continua de feedback, necesidades, deseos y tendencias emergentes del mercado, traduciéndolos rápidamente en oportunidades para la generación de ideas.'],
    imagen: './assets/img/Avatars/El Vigilante.png',
    frase: '“Nuestro ingenio se activa cuando el mercado habla, y nuestra fortaleza es la velocidad de respuesta.”',
    descripcion: 'El perfil del Vigilante se distingue por su excepcional agudeza para percibir y reaccionar ante las fluctuaciones y exigencias del entorno externo. Son individuos que operan con una "antena" constantemente extendida hacia el mercado, los clientes y la competencia, buscando señales que indiquen una necesidad insatisfecha, una oportunidad emergente o una amenaza inminente. Su creatividad no es un ejercicio abstracto o una búsqueda interna de problemas; es, en cambio, una función vital para la adaptabilidad y la supervivencia de la organización. Se manifiestan como los "primeros respondedores" de la innovación, traduciendo con celeridad los impulsos externos en acciones concretas y soluciones tangibles que mantienen a la empresa relevante y competitiva.',
    capacidades: ['Leer el entorno externo', 'Traducir señales en problemas concretos', 'Prototipar y validar con rapidez', 'Ejecutar con pragmatismo operativo', 'Alinear negocio y cliente'],
    generaciónIdeas: ['Monitoreo Activo de Redes Sociales y Foros de la Industria:', 'Encuestas Rápidas, Feedback Directo y Net Promoter Score (NPS)', 'Análisis Estratégico de la Competencia y Benchmarking','Sesiones de "Brainstorming Reactivo" y Workshops de Problemas', 'Entrevistas y Colaboración Constante con Equipos de Ventas y Soporte al Cliente'],
    programasRecomendados: ['Customer Problem Hackathons; Un hackatón es un evento intensivo donde equipos multidisciplinarios desarrollan soluciones a problemas urgentes identificados del feedback de clientes o tendencias de mercado, prototipando y presentando en un tiempo limitado.', 'Market Data-Driven Innovation Sprints: Inspirado en Design Sprints, este programa utiliza ciclos cortos(ej. una semana) para abordar problemas de mercado, usando intensivamente datos de clientes y tendencias para idear, prototipar y validar soluciones con usuarios reales.']
  },
  responsiva_talento: 
  { nombre: 'La Coordinadora', 
    creatividadTipo: ['Responsiva', 'La Creatividad Responsiva es una reacción directa a demandas o problemas claros y específicos que provienen del entorno externo. Su motor es la necesidad urgente de encontrar soluciones a desafíos ya definidos, como una queja de cliente o una acción de la competencia, manifestándose en la rapidez y eficacia para generar respuestas pertinentes.'],
    sistemaTipo: ['Talento Humano', 'Para que los perfiles que se nutren del talento humano prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se centra en darle voz al empleado y fomentar la colaboración interna. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración intrínseca de estos perfiles, quienes buscan mejorar y optimizar desde dentro. Un sistema robusto en esta área se enfoca en crear canales y una cultura donde cada empleado se sienta empoderado y motivado para contribuir con sus ideas, reconociendo el valor de su conocimiento y experiencia en el día a día.'],
    imagen: './assets/img/Avatars/La Coordinadora.png',
    frase: '“La solución a nuestros desafíos internos reside en la colaboración y la eficiencia de cada equipo.”',
    descripcion: 'El perfil de la coordinadora se distingue por su habilidad para responder eficazmente a problemas operativos internos, impulsando soluciones con una fuerte participación del equipo. Son individuos que actúan como articuladores, facilitando la colaboración y la comunicación entre diferentes miembros y departamentos para abordar desafíos específicos que surgen en el día a día de la organización. Su creatividad se activa ante la necesidad de optimizar procesos, resolver fricciones o mejorar la eficiencia dentro de los sistemas existentes, buscando siempre la forma más armoniosa y efectiva de integrar las contribuciones de todos.',
    capacidades: ['Articular y conectar equipos', 'Canalizar inteligencia colectiva', ' Mejorar procesos de forma incremental', 'Diseñar sistemas de participación', 'Fortalecer cohesión y cultura interna'],
    generaciónIdeas: ['Buzones de Sugerencias Digitales y Físicos para Procesos', 'Encuestas de Pulso y Feedback Estructurado sobre Operaciones', 'Sesiones de "Problem-Solving" con Equipos de Primera Línea','Análisis de Datos de Rendimiento Operacional y KPIs Internos', 'Entrevistas Estructuradas con Jefes de Departamento y Supervisores'],
    programasRecomendados: ['Quality & Continuous Improvement Circles: Equipos pequeños y auto-organizados de empleados se reúnen regularmente para identificar, analizar y resolver problemas operativos específicos en su área de trabajo. Se enfocan en mejoras incrementales y la implementación de soluciones prácticas.', 'Process Optimization Challenges: Convocatorias internas que invitan a los empleados a proponer ideas para optimizar un proceso específico de la empresa (ej. reducción de tiempo, eliminación de pasos). Se premian las ideas más innovadoras y viables que demuestren un impacto claro en la eficiencia.']
  },
  responsiva_id: 
  { nombre: 'El Investigador', 
    creatividadTipo: ['Responsiva', 'La Creatividad Responsiva es una reacción directa a demandas o problemas claros y específicos que provienen del entorno externo. Su motor es la necesidad urgente de encontrar soluciones a desafíos ya definidos, como una queja de cliente o una acción de la competencia, manifestándose en la rapidez y eficacia para generar respuestas pertinentes.'],
    sistemaTipo: ['Investigación y Desarrollo', 'Para que los perfiles orientados a la exploración y la disrupción prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en la Investigación y Desarrollo (I+D). Este enfoque es crucial porque se alinea directamente con la motivación interna de estos perfiles para resolver problemas abiertos y descubrir nuevas fronteras. Un sistema robusto en I+D se centra en la exploración a largo plazo, la experimentación rigurosa y la generación de conocimiento fundamental, buscando soluciones que aún no son evidentes o que redefinen completamente el mercado.'],
    imagen: './assets/img/Avatars/El Investigador.png',
    frase: '“Mi laboratorio es el campo de batalla de los problemas definidos; mi victoria, la solución precisa y fundamentada.”',
    descripcion: 'El perfil del Investigador se distingue por su habilidad para resolver desafíos técnicos complejos mediante la investigación aplicada. Son individuos que se sumergen en el conocimiento científico y la ingeniería para encontrar soluciones precisas a problemas ya definidos. Su rol principal es desentrañar la complejidad técnica, analizar datos y aplicar principios fundamentales para desarrollar innovaciones que mejoren productos, procesos o sistemas existentes.',
    capacidades: ['Descomponer problemas técnicos complejos', 'Diseñar y ejecutar investigación aplicada', ' Analizar datos y extraer conclusiones robustas', 'Traducir hallazgos en soluciones implementables', 'Aprender del sistema en operación'],
    generaciónIdeas: ['Análisis de Especificaciones Técnicas y Requisitos de Ingeniería', 'Revisión de Literatura Científica y Patentes Existentes', 'Análisis de Fallas de Productos y Desafíos de Rendimiento','Sesiones de "Debugging" y Resolución de Problemas Técnicos', 'Colaboración con Equipos de Producto y Operaciones para Retos Técnicos'],
    programasRecomendados: ['Technical Solution Challenges: Convocatorias internas o externas para resolver problemas técnicos específicos y bien definidos. Equipos de investigadores proponen y desarrollan soluciones basadas en ciencia y tecnología.', 'Directed Experimentation Sprints: Ciclos cortos e intensivos de investigación y desarrollo para probar hipótesis técnicas o refinar soluciones existentes. Se enfocan en un problema técnico definido, con objetivos de aprendizaje claros.']
  },

  esperada_mercadeo: 
  { nombre: 'El Implementador', 
    creatividadTipo: ['Esperada', 'La Creatividad Esperada se da cuando la innovación es una parte inherente y anticipada del rol de un individuo o equipo, impulsada por expectativas externas de la organización. Aunque la motivación es externa, se enfoca en problemas que pueden ser abiertos o descubiertos, donde la creatividad reside en la capacidad de explorar y co-definir la solución a medida que se avanza.'],
    sistemaTipo: ['Mercadeo', 'Para que los perfiles que buscan inspiración en el entorno prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en el Mercadeo. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración, los clientes y los diferentes actores externo a la empresa.  Un sistema robusto en esta área se centra en la captación activa, sistemática y continua de feedback, necesidades, deseos y tendencias emergentes del mercado, traduciéndolos rápidamente en oportunidades para la generación de ideas.'],
    imagen: './assets/img/Avatars/El Implementador.png',
    frase: '“La verdadera innovación no es la idea, sino la maestría en hacerla realidad, resolviendo cada desafío en el proceso.”',
    descripcion: 'El perfil del Implementador se distingue por su habilidad excepcional para transformar ideas y mejoras planificadas en realidades tangibles y funcionales. Son los artífices de la materialización, aquellos que aseguran que las soluciones diseñadas para satisfacer al cliente no se queden en el papel, sino que se ejecuten con precisión, eficiencia y calidad. Su enfoque principal es la entrega de valor, asegurando que cada producto o servicio no solo cumpla, sino que supere las expectativas del mercado y del usuario final. Para el Implementador, la innovación no reside solo en la concepción, sino en la impecable puesta en marcha.',
    capacidades: ['Llevar ideas a ejecución', 'Orquestar recursos y equipos', ' Optimizar procesos de implementación', 'Asegurar calidad y experiencia de cliente', 'Gestionar la ambigüedad en la ejecución'],
    generaciónIdeas: ['Análisis de Requisitos del Cliente y Especificaciones de Mercado', 'Revisión de Feedback de Productos Existentes y Puntos de Dolor', 'Evaluación de Tendencias de Mercado y Tecnologías de Implementación','Sesiones de Clarificación de Requisitos con Equipos de Producto/Marketing', 'Benchmarking de Procesos de Implementación de la Competencia'],
    programasRecomendados: ['Rapid Deployment Pilots: Este programa se enfoca en la implementación y prueba acelerada de nuevas características o productos en un segmento de mercado controlado. Los equipos del Implementador trabajan para desplegar versiones mínimas viables, recolectando feedback sobre la ejecución y el proceso de entrega para refinarlo.', 'Product Lifecycle Optimization Sprints: Consiste en ciclos de trabajo intensivos y cortos (ej. una semana) dedicados a refinar y mejorar productos o servicios existentes. Se basan en datos de rendimiento post-lanzamiento y feedback continuo del cliente, con el objetivo de optimizar la funcionalidad, la experiencia del usuario y la eficiencia operativa a lo largo del ciclo de vida del producto.']
  },
  esperada_talento:
  { nombre: 'La Facilitadora', 
    creatividadTipo: ['Esperada', 'La Creatividad Esperada se da cuando la innovación es una parte inherente y anticipada del rol de un individuo o equipo, impulsada por expectativas externas de la organización. Aunque la motivación es externa, se enfoca en problemas que pueden ser abiertos o descubiertos, donde la creatividad reside en la capacidad de explorar y co-definir la solución a medida que se avanza.'],
    sistemaTipo: ['Talento Humano', 'Para que los perfiles que se nutren del talento humano prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se centra en darle voz al empleado y fomentar la colaboración interna. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración intrínseca de estos perfiles, quienes buscan mejorar y optimizar desde dentro. Un sistema robusto en esta área se enfoca en crear canales y una cultura donde cada empleado se sienta empoderado y motivado para contribuir con sus ideas, reconociendo el valor de su conocimiento y experiencia en el día a día.'],
    imagen: './assets/img/Avatars/La Facilitadora.png',
    frase: '“Mi rol es crear el espacio y las herramientas para que la brillantez de cada uno transforme nuestro trabajo.”',
    descripcion: 'El perfil de la facilitadora se distingue por su habilidad para optimizar procesos internos, creando entornos que permiten a los empleados aportar y mejorar las operaciones diarias. Son individuos que actúan como catalizadores de la colaboración, desmantelando barreras y fomentando una cultura donde la inteligencia colectiva se canaliza eficientemente hacia la resolución de desafíos operativos. Su creatividad no se enfoca en la invención de lo radicalmente nuevo, sino en el diseño de sistemas y metodologías que potencian la capacidad innovadora de otros.',
    capacidades: ['Diseñar espacios de colaboración', 'Empoderar a los equipos', 'Canalizar inteligencia colectiva en procesos', ' Implementar sistemas de participación','Conectar clima, cultura y eficiencia'],
    generaciónIdeas: ['Talleres de Ideación y Co-creación Interna', 'Plataformas de Innovación Abierta Interna:', 'Programas de "Gemba Walk" o Observación Directa', 'Sesiones de "Café con el Líder" o Diálogos Abiertos','Encuestas de Clima Laboral y Satisfacción de Procesos'],
    programasRecomendados: ['Process Optimization Labs: Talleres intensivos donde equipos de empleados analizan y rediseñan procesos internos específicos para mejorar eficiencia y experiencia.', 'Internal Innovation Challenges: Convocatorias internas que invitan a los empleados a proponer ideas para optimizar un proceso específico de la empresa (ej. reducción de tiempo, eliminación de pasos). Se premian las ideas más innovadoras y viables que demuestren un impacto claro en la eficiencia.']
  },
  esperada_id: 
  { nombre: 'El Visionario Técnico', 
    creatividadTipo: ['Esperada', 'La Creatividad Esperada se da cuando la innovación es una parte inherente y anticipada del rol de un individuo o equipo, impulsada por expectativas externas de la organización. Aunque la motivación es externa, se enfoca en problemas que pueden ser abiertos o descubiertos, donde la creatividad reside en la capacidad de explorar y co-definir la solución a medida que se avanza.'],
    sistemaTipo: ['Investigación y Desarrollo', 'Para que los perfiles orientados a la exploración y la disrupción prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en la Investigación y Desarrollo (I+D). Este enfoque es crucial porque se alinea directamente con la motivación interna de estos perfiles para resolver problemas abiertos y descubrir nuevas fronteras. Un sistema robusto en I+D se centra en la exploración a largo plazo, la experimentación rigurosa y la generación de conocimiento fundamental, buscando soluciones que aún no son evidentes o que redefinen completamente el mercado.'],
    imagen: './assets/img/Avatars/El Visionario Tecnico.png',
    frase: '“No solo construimos lo que se nos pide; definimos lo que será posible mañana, explorando la frontera de la tecnología.”',
    descripcion: 'El perfil del Visionario Técnico se distingue por su capacidad para impulsar la mejora continua a través de la investigación y la anticipación tecnológica. Son individuos que no solo comprenden las complejidades técnicas actuales, sino que también poseen una visión aguda para prever las futuras evoluciones tecnológicas y sus aplicaciones. Su rol principal es traducir el potencial de las tecnologías emergentes en soluciones innovadoras que transformen productos y sistemas existentes, o que abran nuevas avenidas para el desarrollo.',
    capacidades: ['Anticipar futuros tecnológicos', 'Formular desafíos técnicos abiertos', 'Diseñar arquitecturas y conceptos de próxima generación', ' Conectar I+D con negocio','Liderar exploración rigurosa en entornos inciertos'],
    generaciónIdeas: ['Escaneo Tecnológico y Vigilancia de Patentes', 'Análisis de "White Papers" y Publicaciones Académicas', 'Participación en Conferencias Técnicas y Redes de Expertos', 'Workshops de "Problem Framing" Técnico','Análisis de Datos de Rendimiento de Sistemas Actuales y Límites Tecnológicos'],
    programasRecomendados: ['Technological Research Consortia: Colaboraciones con universidades, startups y otras empresas para investigar tecnologías emergentes y resolver problemas técnicos complejos. Se comparten recursos y conocimientos para acelerar el descubrimiento.', 'Tomorrow Tech Challenges: Convocatorias internas o externas que invitan a equipos a proponer soluciones a problemas técnicos hipotéticos o futuros en un área tecnológica específica. Se fomenta la conceptualización de tecnologías disruptivas.']
  },
  contributiva_talento: 
  { nombre: 'La Inspiradora', 
    creatividadTipo: ['Contributiva', 'La Creatividad Contributiva surge de una motivación interna, un deseo personal de aportar valor y mejorar algo específico. Se aplica a problemas que ya están cerrados o claramente definidos, donde el ingenio se canaliza hacia la búsqueda de la mejor solución posible para ese desafío establecido, buscando la optimización y la eficiencia.'],
    sistemaTipo: ['Talento Humano', 'Para que los perfiles que se nutren del talento humano prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se centra en darle voz al empleado y fomentar la colaboración interna. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración intrínseca de estos perfiles, quienes buscan mejorar y optimizar desde dentro. Un sistema robusto en esta área se enfoca en crear canales y una cultura donde cada empleado se sienta empoderado y motivado para contribuir con sus ideas, reconociendo el valor de su conocimiento y experiencia en el día a día.'],
    imagen: './assets/img/Avatars/La Inspiradora.png',
    frase: '“Mi mayor logro es ver cómo la pasión de cada uno se convierte en la chispa que ilumina nuestras mejores ideas.”',
    descripcion: 'El perfil de La Inspiradora se distingue por su capacidad innata para impulsar la innovación interna a través del talento humano motivado. Son individuos que cultivan activamente una cultura donde las ideas de los empleados no solo son valoradas, sino que se convierten en el motor del progreso organizacional. Su rol principal es encender la chispa creativa en otros, facilitando que las soluciones emerjan desde la base de la organización, aprovechando la inteligencia colectiva y el conocimiento tácito de quienes viven el día a día operativo.',
    capacidades: ['Activar motivación interna para innovar', 'Encender y sostener la chispa creativa del equipo', 'Canalizar la energía hacia problemas definidos', 'Diseñar mecanismos accesibles de participación','Convertir cultura en ventaja operativa'],
    generaciónIdeas: ['Desafíos de Innovación Interna con Problemas Definidos', 'Plataformas de Sugerencias y Mejora Continua', 'Talleres de "Solución de Problemas en Equipo', 'Programas de "Observación Activa" y Diálogo con Operaciones','Encuestas de "Puntos de Fricción" en Procesos Internos'],
    programasRecomendados: ['Employee Idea Incubator: Un programa estructurado donde los empleados con ideas de mejora interna reciben recursos, mentoría y tiempo para desarrollar sus propuestas. Se enfoca en problemas operativos o de proceso definidos, con el objetivo de llevar las ideas a un prototipo funcional.', 'Internal Problem Hackathons: Eventos intensivos de corta duración donde equipos multidisciplinarios de empleados colaboran para encontrar soluciones rápidas a desafíos operativos específicos y predefinidos. Se promueve la ideación y el prototipado rápido de mejoras internas.']
  },
  contributiva_mercadeo: 
  { nombre: 'La Mercado Creativo', 
    creatividadTipo: ['Contributiva', 'La Creatividad Contributiva surge de una motivación interna, un deseo personal de aportar valor y mejorar algo específico. Se aplica a problemas que ya están cerrados o claramente definidos, donde el ingenio se canaliza hacia la búsqueda de la mejor solución posible para ese desafío establecido, buscando la optimización y la eficiencia.'],
    sistemaTipo: ['Mercadeo', 'Para que los perfiles que buscan inspiración en el entorno prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en el Mercadeo. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración, los clientes y los diferentes actores externo a la empresa.  Un sistema robusto en esta área se centra en la captación activa, sistemática y continua de feedback, necesidades, deseos y tendencias emergentes del mercado, traduciéndolos rápidamente en oportunidades para la generación de ideas.'],
    imagen: './assets/img/Avatars/La Mercado Creativo.png',
    frase: '“Mi impulso es transformar las necesidades claras del mercado en soluciones que resuenen y generen valor.”',
    descripcion: 'El perfil de la mercado creativo se distingue por su habilidad para generar soluciones innovadoras que abordan problemas claros y específicos dentro del ámbito del mercado. Son individuos que, a menudo, operan como intermediarios entre las necesidades del cliente y la capacidad de la organización para responder. Su creatividad no surge de la nada, sino que es una respuesta directa y bien informada a desafíos comerciales definidos, buscando siempre la manera más ingeniosa y efectiva de satisfacer una demanda o resolver una fricción existente en el mercado.',
    capacidades: [' Escuchar y sintetizar la voz del mercado', 'Generar conceptos y propuestas de valor', ' Aterrizar creatividad en viabilidad comercial', ' Conectar con diseño, desarrollo y marketing','Ajustar según la respuesta del cliente'],
    generaciónIdeas: ['Análisis Profundo de Datos de Consumo y Comportamiento del Cliente', 'Investigación de Mercado Cualitativa (Focus Groups, Entrevistas)', 'Monitoreo de Tendencias de la Industria y Análisis de la Oferta Existente', 'Plataformas de Sugerencias de Clientes y Co-creación','Análisis de Quejas y Reclamos de Clientes'],
    programasRecomendados: ['Customer Problem Challenges: Este programa invita a equipos multidisciplinarios a proponer soluciones creativas a problemas específicos y claros identificados directamente del mercado o de los clientes. Se enfoca en la ideación y conceptualización de propuestas de valor, culminando en la presentación de ideas comercialmente atractivas.', 'Value Proposition Sprints: Consiste en ciclos de trabajo intensivos y cortos (ej. una semana) dedicados a desarrollar y refinar propuestas de valor para nuevos productos, servicios o mejoras. Se basa en una profunda comprensión del cliente y del mercado, culminando en la creación de conceptos y mensajes que serán validados.']
  },
  contributiva_id: 
  { nombre: 'El Innovador Disruptivo', 
    creatividadTipo: ['Contributiva', 'La Creatividad Contributiva surge de una motivación interna, un deseo personal de aportar valor y mejorar algo específico. Se aplica a problemas que ya están cerrados o claramente definidos, donde el ingenio se canaliza hacia la búsqueda de la mejor solución posible para ese desafío establecido, buscando la optimización y la eficiencia.'],
    sistemaTipo: ['Investigación y Desarrollo', 'Para que los perfiles orientados a la exploración y la disrupción prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en la Investigación y Desarrollo (I+D). Este enfoque es crucial porque se alinea directamente con la motivación interna de estos perfiles para resolver problemas abiertos y descubrir nuevas fronteras. Un sistema robusto en I+D se centra en la exploración a largo plazo, la experimentación rigurosa y la generación de conocimiento fundamental, buscando soluciones que aún no son evidentes o que redefinen completamente el mercado.'],
    imagen: './assets/img/Avatars/El Innovador Disruptivo.png',
    frase: '“No busco la próxima mejora; busco la próxima revolución, resolviendo problemas de forma que nadie imaginó.”',
    descripcion: 'El perfil del Innovador Disruptivo se distingue por su capacidad para aportar ideas creativas que resuelven problemas específicos con un alto impacto técnico, desafiando el status quo y creando nuevas categorías o modelos de negocio. Son individuos que no se conforman con la mejora incremental; su mente está orientada a la transformación radical, buscando soluciones que no solo optimicen, sino que redefinan fundamentalmente la forma en que se hacen las cosas o se satisfacen las necesidades.',
    capacidades: ['Replantear problemas definidos de forma radical', 'Diseñar soluciones técnicamente disruptivas', ' Experimentar y prototipar en la frontera', 'Articular el potencial de disrupción para el negocio','Llevar la disrupción hasta validación real'],
    generaciónIdeas: ['Análisis de Problemas de "Techo de Vidrio" en Tecnología Actual:', 'Revisión de "Call for Papers" y Desafíos de Investigación Abierta', 'Análisis de Patentes Vencidas y Tecnologías Subutilizadas', 'Sesiones de "Deconstrucción Radical de Problemas','Colaboración con Departamentos de I+D y Equipos de Ingeniería Avanzada'],
    programasRecomendados: ['Technology Excellence Centers: Unidades dedicadas a la investigación profunda y el desarrollo de tecnologías clave con potencial disruptivo. Se enfocan en problemas técnicos definidos, buscando soluciones que redefinan el estado del arte.', 'Product/Service Reinvention Challenges: Convocatorias internas que invitan a equipos a proponer soluciones radicales para productos o servicios existentes, con el objetivo de crear nuevas categorías. Se enfoca en problemas definidos, buscando una solución que sea fundamentalmente diferente.']
  },
  proactiva_mercadeo: 
  { nombre: 'El Explorador', 
    creatividadTipo: ['Proactiva', 'La Creatividad Proactiva se manifiesta cuando la innovación surge de una motivación interna y un deseo intrínseco de explorar lo desconocido. Es el impulso de aquellos que no esperan a que los problemas se presenten, sino que activamente buscan y definen nuevos desafíos, operando en un terreno de ambigüedad para descubrir oportunidades y crear caminos que aún no existen.'],
    sistemaTipo: ['Mercadeo', 'Para que los perfiles que buscan inspiración en el entorno prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en el Mercadeo. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración, los clientes y los diferentes actores externo a la empresa.  Un sistema robusto en esta área se centra en la captación activa, sistemática y continua de feedback, necesidades, deseos y tendencias emergentes del mercado, traduciéndolos rápidamente en oportunidades para la generación de ideas.'],
    imagen: './assets/img/Avatars/El Explorador.png',
    frase: '“No espero a que el futuro me encuentre; salgo a descubrirlo y a darle forma con nuevas preguntas y soluciones.”',
    descripcion: 'El perfil del Explorador se distingue por su insaciable curiosidad y su visión a largo plazo, siempre en busca de lo inexplorado. Son individuos que no esperan a que los problemas se presenten o que las tendencias se consoliden; en cambio, se sumergen proactivamente en el futuro, escaneando el horizonte en busca de señales débiles, megatendencias emergentes y necesidades latentes que aún no han sido articuladas por el mercado. Su objetivo es descubrir "espacios en blanco" donde la organización puede innovar y crear nuevas categorías de productos, servicios o incluso nuevos modelos de negocio.',
    capacidades: ['Explorar futuros del cliente', 'Conectar señales débiles', 'Definir problemas y oportunidades que aún no existen', ' Experimentar con mercados incipientes','Construir narrativas y casos para nuevas categorías'],
    generaciónIdeas: ['Análisis de Megatendencias y Futuros Posibles del Consumidor', 'Investigación Etnográfica y Observación de Comportamientos Emergentes del Usuario', 'Exploración de Nuevos Modelos de Negocio y Canales de Distribución', 'Sesiones de "Foresight" y Construcción de Escenarios de Mercado','Análisis de Señales Débiles del Mercado y Comportamientos Atípicos'],
    programasRecomendados: ['Future Customer Experience Labs: Programas dedicados a la investigación y prototipado de cómo las megatendencias transformarán la experiencia del cliente. Equipos multidisciplinarios usan foresight y design thinking para construir escenarios y generar ideas para nuevas categorías de productos/servicios centrados en el cliente del mañana.', 'Emerging Market Challenges: Concursos o convocatorias que invitan a la ideación en áreas de mercado no exploradas o necesidades de cliente no satisfechas. Se enfatiza la identificación del segmento de cliente y la validación temprana de la propuesta de valor en un espacio "en blanco" del mercado.']
  },
  proactiva_talento: 
  { nombre: 'La Agente de Cambio', 
    creatividadTipo: ['Proactiva', 'La Creatividad Proactiva se manifiesta cuando la innovación surge de una motivación interna y un deseo intrínseco de explorar lo desconocido. Es el impulso de aquellos que no esperan a que los problemas se presenten, sino que activamente buscan y definen nuevos desafíos, operando en un terreno de ambigüedad para descubrir oportunidades y crear caminos que aún no existen.'],
    sistemaTipo: ['Talento Humano', 'Para que los perfiles que se nutren del talento humano prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se centra en darle voz al empleado y fomentar la colaboración interna. Este enfoque es crucial porque se alinea directamente con la fuente de inspiración intrínseca de estos perfiles, quienes buscan mejorar y optimizar desde dentro. Un sistema robusto en esta área se enfoca en crear canales y una cultura donde cada empleado se sienta empoderado y motivado para contribuir con sus ideas, reconociendo el valor de su conocimiento y experiencia en el día a día.'],
    imagen: './assets/img/Avatars/La Agente de Cambio.png',
    frase: '“No espero el cambio, lo creo desde dentro, rompiendo barreras para un futuro mejor.”',
    descripcion: 'El perfil de la Agente de Cambio se distingue por su capacidad innata para liderar la transformación cultural mediante la innovación interna. Son individuos que no solo identifican la necesidad de evolucionar, sino que activamente diseñan e implementan iniciativas que redefinen las prácticas, los valores y el pensamiento dentro de la organización. Su rol principal es desmantelar barreras, inspirar nuevas mentalidades y construir los cimientos para un futuro más adaptable y progresista, impulsando la evolución desde el corazón de la empresa.',
    capacidades: [' Leer el sistema y sus bloqueos', 'Diseñar una visión de futuro cultural', 'Crear arquitecturas de cambio', 'Movilizar personas frente a la resistencia','Anclar la transformación en el día a día'],
    generaciónIdeas: ['Workshops de Visión Compartida y Futuros Internos', 'Programas de "Intraemprendimiento" Enfocados en Problemas Abiertos', 'Encuestas de Cultura Organizacional y Detección de Fricciones Latentes', 'Foros de Diálogo Abierto y "Town Halls" Estratégicos','Programas de "Embajadores de Cambio" y Agentes Multiplicadores'],
    programasRecomendados: ['Cultural Transformation Labs: Espacios dedicados a la experimentación con nuevas formas de trabajar y pensar. Equipos de empleados exploran problemas sistémicos y diseñan soluciones para redefinir la cultura organizacional.', 'Organizational Reinvention Challenges: Convocatorias internas que invitan a los empleados a proponer ideas radicales para reinventar aspectos clave de la organización. Se enfoca en problemas estratégicos amplios y fomenta la conceptualización de soluciones disruptivas desde la base.']
  },
  proactiva_id: 
  { nombre: 'La Pionera Científica', 
    creatividadTipo: ['Proactiva', 'La Creatividad Proactiva se manifiesta cuando la innovación surge de una motivación interna y un deseo intrínseco de explorar lo desconocido. Es el impulso de aquellos que no esperan a que los problemas se presenten, sino que activamente buscan y definen nuevos desafíos, operando en un terreno de ambigüedad para descubrir oportunidades y crear caminos que aún no existen.'],
    sistemaTipo: ['Investigación y Desarrollo', 'Para que los perfiles orientados a la exploración y la disrupción prosperen y maximicen su impacto, el sistema de gestión de ideas más adecuado es el que se enfoca en la Investigación y Desarrollo (I+D). Este enfoque es crucial porque se alinea directamente con la motivación interna de estos perfiles para resolver problemas abiertos y descubrir nuevas fronteras. Un sistema robusto en I+D se centra en la exploración a largo plazo, la experimentación rigurosa y la generación de conocimiento fundamental, buscando soluciones que aún no son evidentes o que redefinen completamente el mercado.'],
    imagen: './assets/img/Avatars/La Pionera Cientifica.png',
    frase: '“No busco respuestas; busco las preguntas que aún nadie se ha atrevido a formular, para desvelar los secretos del universo.”',
    descripcion: 'El perfil de La Pionera Científica se distingue por su capacidad para liderar innovaciones radicales a través de la investigación avanzada. Son individuos que se dedican a empujar los límites del conocimiento, explorando fenómenos fundamentales y formulando preguntas que redefinen campos científicos enteros. Su rol principal es el de una exploradora intelectual, buscando descubrimientos que, aunque no tengan una aplicación inmediata, sentarán las bases para futuras transformaciones tecnológicas y sociales.',
    capacidades: ['Explorar espacios en blanco del conocimiento', ' Formular marcos teóricos y preguntas de alto impacto', 'Diseñar experimentos en la frontera científica', 'Convertir descubrimientos en conocimiento transferible','Conectar comunidad científica e innovación futura'],
    generaciónIdeas: ['Revisión Crítica de la Literatura Científica Existente', 'Participación en Coloquios y Seminarios Científicos de Vanguardia', 'Exploración de Fenómenos Anómalos y Observaciones Inesperadas', 'Colaboración con Científicos de Diversas Disciplinas','Programas de "Grandes Desafíos Científicos"'],
    programasRecomendados: ['Fundamental Research Labs: Espacios dedicados a la investigación científica básica y aplicada, sin un objetivo comercial inmediato. Se enfocan en resolver problemas abiertos y desconocidos, buscando descubrimientos que redefinan campos de estudio.', 'Frontier of Knowledge Challenges: Convocatorias internas o externas que invitan a científicos a proponer proyectos de investigación para abordar los límites actuales del conocimiento en áreas clave. Se busca la conceptualización de soluciones para problemas aún no resueltos.']
  },
};

