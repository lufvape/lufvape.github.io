// English quiz data (defines `quizData` and `perfilesCombinados` used by quiz-core.js)
window.quizData = {
  "preguntas": [
    {
      "seccion": 1,
      "titulo": "Motivation for Creativity",
      "preguntas": [
        {
          "id": 1,
          "tipo": "seleccion",
          "pregunta": "In your organization, do ideas emerge more from environmental challenges or internal initiative?",
          "opciones": [
            "Exclusively through external challenges",
            "Mostly through external challenges",
            "Mostly through internal initiative",
            "Exclusively through internal initiative"
          ],
          "categoria": "motivation",
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
          "pregunta": "Drag to rank the sources of ideas in your company from most to least important:",
          "items": [
            "Customer feedback",
            "Employee initiatives",
            "Market research",
            "Competitor analysis",
            "External collaborations"
          ],
          "categoria": "idea_sources",
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
          "categoria": "idea_origin",
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
          "pregunta": "What motivates idea generation in your team the most?",
          "opciones": [
            "Meeting assigned objectives",
            "Solving urgent problems",
            "Improving existing processes",
            "Exploring new opportunities"
          ],
          "categoria": "team_motivation",
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
          "pregunta": "Rank these according to how frequently they occur in your organization:",
          "items": [
            "Ideas driven by market demand",
            "Ideas driven by personal initiative",
            "Ideas driven by operational problems",
            "Ideas driven by free exploration",
            "Ideas driven by competition"
          ],
          "categoria": "idea_frequency",
          "scoring": {
            "creatividad": {
              "responsiva": {"Ideas driven by market demand": 3, "Ideas driven by competition": 2},
              "esperada": {"Ideas driven by operational problems": 3, "Ideas driven by market demand": 2},
              "contributiva": {"Ideas driven by personal initiative": 3, "Ideas driven by operational problems": 2},
              "proactiva": {"Ideas driven by free exploration": 3, "Ideas driven by personal initiative": 3}
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
          "pregunta": "How does your organization prefer to tackle challenges?",
          "opciones": [
            "With proven methodologies",
            "With structured approaches",
            "With creative exploration",
            "With free experimentation"
          ],
          "categoria": "problem_approach",
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
          "pregunta": "What type of problems motivates your team the most?",
          "opciones": [
            "Clearly defined problems",
            "Challenges with known solutions",
            "Situations requiring creativity",
            "Completely open-ended problems"
          ],
          "categoria": "problem_type",
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
          "pregunta": "Rank based on your team's level of comfort with these types of challenges:",
          "items": [
            "Problems with a single solution",
            "Challenges with multiple solutions",
            "Ambiguous situations",
            "Unprecedented problems",
            "Exploratory challenges"
          ],
          "categoria": "problem_comfort",
          "scoring": {
            "creatividad": {
              "responsiva": {"Problems with a single solution": 3, "Challenges with multiple solutions": 2},
              "esperada": {"Challenges with multiple solutions": 3, "Ambiguous situations": 2},
              "contributiva": {"Problems with a single solution": 2, "Challenges with multiple solutions": 3},
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
          "categoria": "uncertainty_reaction",
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
            "Exploration of possibilities",
            "Discovery of opportunities"
          ],
          "categoria": "project_definition",
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
          "pregunta": "What is the primary focus of your innovation management system?",
          "opciones": [
            "Customer satisfaction",
            "Talent development",
            "Research and development",
            "Process improvement"
          ],
          "categoria": "system_focus",
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
          "pregunta": "Rank based on current resource investment in your company:",
          "items": [
            "Marketing and sales",
            "Staff training",
            "Research and development",
            "Process improvement",
            "Technology and infrastructure"
          ],
          "categoria": "resource_investment",
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
          "pregunta": "How does your organization measure ROI on innovation?",
          "opciones": [
            "Customer satisfaction",
            "Team productivity",
            "Technological advances",
            "Operational efficiency"
          ],
          "categoria": "roi_measurement",
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
          "pregunta": "Rank based on priority in your innovation strategy:",
          "items": [
            "Customer experience improvement",
            "Internal capability development",
            "Emerging technology research",
            "Process optimization",
            "New market exploration"
          ],
          "categoria": "strategy_priority",
          "scoring": {
            "sistema": {
              "mercadeo": {"Customer experience improvement": 3, "New market exploration": 2},
              "talento": {"Internal capability development": 3, "Process optimization": 2},
              "id": {"Emerging technology research": 3, "New market exploration": 2}
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
          "categoria": "idea_evaluation",
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
            "People-centric",
            "Research-based",
            "Continuous improvement focused"
          ],
          "categoria": "innovation_culture",
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
          "pregunta": "Rank based on importance in your organizational culture:",
          "items": [
            "Customer orientation",
            "Talent development",
            "Technical excellence",
            "Operational efficiency",
            "Disruptive innovation"
          ],
          "categoria": "culture_importance",
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
          "pregunta": "What does your organization value most in its employees?",
          "opciones": [
            "Service orientation",
            "Collaboration and teamwork",
            "Technical capabilities",
            "Initiative and innovation"
          ],
          "categoria": "employee_values",
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
          "pregunta": "Rank based on what your organization celebrates most:",
          "items": [
            "Customer satisfaction milestones",
            "Talent development successes",
            "Research breakthroughs",
            "Process improvements",
            "Disruptive innovations"
          ],
          "categoria": "celebrations",
          "scoring": {
            "sistema": {
              "mercadeo": {"Customer satisfaction milestones": 3, "Process improvements": 2},
              "talento": {"Talent development successes": 3, "Process improvements": 2},
              "id": {"Research breakthroughs": 3, "Disruptive innovations": 3}
            }
          }
        },
        {
          "id": 20,
          "tipo": "seleccion",
          "pregunta": "What best defines your company's DNA?",
          "opciones": [
            "Customer obsession",
            "Passion for human development",
            "Commitment to research",
            "Pursuit of operational excellence"
          ],
          "categoria": "company_dna",
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
    "responsiva": { "nombre": "Responsive", "descripcion": "Responds to problems presented externally, generally with limited control over the problem definition." },
    "esperada": { "nombre": "Expected", "descripcion": "Tackles open-ended problems defined by external goals; requires exploration but within clear external expectations." },
    "contributiva": { "nombre": "Contributive", "descripcion": "The employee voluntarily chooses to solve clear problems, usually to help or collaborate." },
    "proactiva": { "nombre": "Proactive", "descripcion": "The employee identifies and solves unsolicited, open-ended problems, motivated by their own initiative." }
  }
};

window.perfilesCombinados = {
  responsiva_mercadeo: 
  { nombre: 'The Watchman', 
    creatividadTipo: ['Responsive', 'Responsive Creativity is a direct reaction to clear and specific demands or problems coming from the external environment. Its engine is the urgent need to find solutions to already-defined challenges, such as a customer complaint or a competitor’s move, manifesting in speed and efficiency when generating relevant responses.'],
    sistemaTipo: ['Marketing', 'For profiles that seek inspiration from their surroundings to thrive and maximize their impact, the most suitable idea management system focuses on Marketing. This approach is crucial because it aligns directly with the source of inspiration: customers and external stakeholders. A robust system in this area focuses on the active, systematic, and continuous capture of feedback, needs, desires, and emerging market trends, translating them quickly into opportunities for idea generation.'],
    imagen: './assets/img/Avatars/El Vigilante.png',
    frase: '“Our ingenuity activates when the market speaks, and our strength is our speed of response.”',
    descripcion: 'The Watchman profile is distinguished by exceptional sharpness in perceiving and reacting to fluctuations and demands in the external environment. These individuals operate with an "antenna" constantly tuned to the market, customers, and competition, looking for signals of unsatisfied needs, emerging opportunities, or imminent threats. Their creativity is not an abstract exercise or an internal search for problems; it is, instead, a vital function for the organization’s adaptability and survival. They act as innovation’s "first responders," swiftly translating external impulses into concrete actions and tangible solutions that keep the company relevant and competitive.',
    capacidades: ['Reading the external environment', 'Translating signals into concrete problems', 'Rapid prototyping and validation', 'Executing with operational pragmatism', 'Aligning business and customer'],
    generaciónIdeas: ['Active Monitoring of Social Media and Industry Forums', 'Quick Surveys, Direct Feedback, and Net Promoter Score (NPS)', 'Strategic Competitor Analysis and Benchmarking','Reactive Brainstorming Sessions and Problem Workshops', 'Interviews and Constant Collaboration with Sales and Support Teams'],
    programasRecomendados: ['Customer Problem Hackathons: An intensive event where multidisciplinary teams develop solutions to urgent problems identified from customer feedback or market trends, prototyping and presenting within a limited timeframe.', 'Market Data-Driven Innovation Sprints: Inspired by Design Sprints, this program uses short cycles (e.g., one week) to tackle market problems, intensively using customer data and trends to ideate, prototype, and validate solutions with real users.']
  },
  responsiva_talento: 
  { nombre: 'The Coordinator', 
    creatividadTipo: ['Responsive', 'Responsive Creativity is a direct reaction to clear and specific demands or problems coming from the external environment. Its engine is the urgent need to find solutions to already-defined challenges, such as a customer complaint or a competitor’s move, manifesting in speed and efficiency when generating relevant responses.'],
    sistemaTipo: ['Human Talent', 'For profiles that are nurtured by human talent to thrive and maximize their impact, the most suitable idea management system focuses on giving the employee a voice and fostering internal collaboration. This approach is crucial because it aligns directly with the intrinsic source of inspiration for these profiles, who seek to improve and optimize from within. A robust system in this area focuses on creating channels and a culture where every employee feels empowered and motivated to contribute their ideas, recognizing the value of their knowledge and daily experience.'],
    imagen: './assets/img/Avatars/La Coordinadora.png',
    frase: '“The solution to our internal challenges lies in the collaboration and efficiency of every team.”',
    descripcion: 'The Coordinator profile is distinguished by the ability to respond effectively to internal operational problems, driving solutions with strong team participation. These individuals act as articulators, facilitating collaboration and communication between different members and departments to address specific challenges that arise in the organization’s day-to-day. Their creativity is activated by the need to optimize processes, resolve friction, or improve efficiency within existing systems, always seeking the most harmonious and effective way to integrate everyone’s contributions.',
    capacidades: ['Articulating and connecting teams', 'Channeling collective intelligence', 'Improving processes incrementally', 'Designing participation systems', 'Strengthening cohesion and internal culture'],
    generaciónIdeas: ['Digital and Physical Suggestion Boxes for Processes', 'Pulse Surveys and Structured Feedback on Operations', 'Problem-Solving Sessions with Front-line Teams','Analysis of Operational Performance Data and Internal KPIs', 'Structured Interviews with Department Heads and Supervisors'],
    programasRecomendados: ['Quality & Continuous Improvement Circles: Small, self-organized teams of employees meet regularly to identify, analyze, and solve specific operational problems in their work area. They focus on incremental improvements and practical solution implementation.', 'Process Optimization Challenges: Internal calls inviting employees to propose ideas for optimizing a specific company process (e.g., time reduction, eliminating steps). The most innovative and viable ideas with clear impact on efficiency are rewarded.']
  },
  responsiva_id: 
  { nombre: 'The Researcher', 
    creatividadTipo: ['Responsive', 'Responsive Creativity is a direct reaction to clear and specific demands or problems coming from the external environment. Its engine is the urgent need to find solutions to already-defined challenges, such as a customer complaint or a competitor’s move, manifesting in speed and efficiency when generating relevant responses.'],
    sistemaTipo: ['Research and Development', 'For exploration and disruption-oriented profiles to thrive and maximize their impact, the most suitable idea management system focuses on Research and Development (R&D). This approach is crucial because it aligns directly with the internal motivation of these profiles to solve open-ended problems and discover new frontiers. A robust R&D system focuses on long-term exploration, rigorous experimentation, and fundamental knowledge generation, seeking solutions that are not yet evident or that completely redefine the market.'],
    imagen: './assets/img/Avatars/El Investigador.png',
    frase: '“My laboratory is the battlefield of defined problems; my victory is the precise and well-founded solution.”',
    descripcion: 'The Researcher profile is distinguished by the ability to solve complex technical challenges through applied research. These individuals immerse themselves in scientific knowledge and engineering to find precise solutions to already-defined problems. Their primary role is to unravel technical complexity, analyze data, and apply fundamental principles to develop innovations that improve existing products, processes, or systems.',
    capacidades: ['Decomposing complex technical problems', 'Designing and executing applied research', 'Analyzing data and extracting robust conclusions', 'Translating findings into implementable solutions', 'Learning from the system in operation'],
    generaciónIdeas: ['Analysis of Technical Specifications and Engineering Requirements', 'Review of Scientific Literature and Existing Patents', 'Analysis of Product Failures and Performance Challenges','Debugging Sessions and Technical Problem Solving', 'Collaboration with Product and Operations Teams for Technical Challenges'],
    programasRecomendados: ['Technical Solution Challenges: Internal or external calls to solve specific, well-defined technical problems. Research teams propose and develop solutions based on science and technology.', 'Directed Experimentation Sprints: Short, intensive R&D cycles to test technical hypotheses or refine existing solutions. They focus on a defined technical problem with clear learning objectives.']
  },

  esperada_mercadeo: 
  { nombre: 'The Implementer', 
    creatividadTipo: ['Expected', 'Expected Creativity occurs when innovation is an inherent and anticipated part of an individual’s or team’s role, driven by the organization’s external expectations. Although the motivation is external, it focuses on problems that may be open-ended or discovered, where creativity lies in the ability to explore and co-define the solution as progress is made.'],
    sistemaTipo: ['Marketing', 'For profiles that seek inspiration from their surroundings to thrive and maximize their impact, the most suitable idea management system focuses on Marketing. This approach is crucial because it aligns directly with the source of inspiration: customers and external stakeholders. A robust system in this area focuses on the active, systematic, and continuous capture of feedback, needs, desires, and emerging market trends, translating them quickly into opportunities for idea generation.'],
    imagen: './assets/img/Avatars/El Implementador.png',
    frase: '“True innovation isn’t the idea, but the mastery of making it real, solving every challenge in the process.”',
    descripcion: 'The Implementer profile is distinguished by an exceptional ability to transform planned ideas and improvements into tangible, functional realities. They are the architects of materialization, those who ensure that solutions designed to satisfy the customer don’t stay on paper but are executed with precision, efficiency, and quality. Their main focus is value delivery, ensuring every product or service not only meets but exceeds market and end-user expectations. For the Implementer, innovation lives not just in conception, but in flawless deployment.',
    capacidades: ['Moving ideas to execution', 'Orchestrating resources and teams', 'Optimizing implementation processes', 'Ensuring quality and customer experience', 'Managing ambiguity during execution'],
    generaciónIdeas: ['Analysis of Customer Requirements and Market Specifications', 'Review of Feedback on Existing Products and Pain Points', 'Evaluation of Market Trends and Implementation Technologies','Requirement Clarification Sessions with Product/Marketing Teams', 'Benchmarking of Competitors’ Implementation Processes'],
    programasRecomendados: ['Rapid Deployment Pilots: This program focuses on the accelerated implementation and testing of new features or products in a controlled market segment. Implementer teams work to deploy minimum viable versions, collecting feedback on execution and delivery to refine the process.', 'Product Lifecycle Optimization Sprints: Intensive, short work cycles (e.g., one week) dedicated to refining and improving existing products or services. They rely on post-launch performance data and continuous customer feedback to optimize functionality, user experience, and operational efficiency.']
  },
  esperada_talento:
  { nombre: 'The Facilitator', 
    creatividadTipo: ['Expected', 'Expected Creativity occurs when innovation is an inherent and anticipated part of an individual’s or team’s role, driven by the organization’s external expectations. Although the motivation is external, it focuses on problems that may be open-ended or discovered, where creativity lies in the ability to explore and co-define the solution as progress is made.'],
    sistemaTipo: ['Human Talent', 'For profiles that are nurtured by human talent to thrive and maximize their impact, the most suitable idea management system focuses on giving the employee a voice and fostering internal collaboration. This approach is crucial because it aligns directly with the intrinsic source of inspiration for these profiles, who seek to improve and optimize from within. A robust system in this area focuses on creating channels and a culture where every employee feels empowered and motivated to contribute their ideas, recognizing the value of their knowledge and daily experience.'],
    imagen: './assets/img/Avatars/La Facilitadora.png',
    frase: '“My role is to create the space and tools so that everyone’s brilliance can transform our work.”',
    descripcion: 'The Facilitator profile is distinguished by the ability to optimize internal processes, creating environments that allow employees to contribute to and improve daily operations. These individuals act as catalysts for collaboration, dismantling barriers and fostering a culture where collective intelligence is efficiently channeled toward solving operational challenges. Their creativity does not focus on radical invention but on designing systems and methodologies that empower others’ innovative capacity.',
    capacidades: ['Designing collaboration spaces', 'Empowering teams', 'Channeling collective intelligence into processes', 'Implementing participation systems','Connecting climate, culture, and efficiency'],
    generaciónIdeas: ['Internal Ideation and Co-creation Workshops', 'Internal Open Innovation Platforms', 'Gemba Walks or Direct Observation Programs', 'Coffee with the Leader or Open Dialogue Sessions','Workplace Climate and Process Satisfaction Surveys'],
    programasRecomendados: ['Process Optimization Labs: Intensive workshops where employee teams analyze and redesign specific internal processes to improve efficiency and experience.', 'Internal Innovation Challenges: Calls inviting employees to propose ideas for optimizing a specific company process (e.g., time reduction, eliminating steps). The most innovative and viable ideas with clear impact on efficiency are rewarded.']
  },
  esperada_id: 
  { nombre: 'The Technical Visionary', 
    creatividadTipo: ['Expected', 'Expected Creativity occurs when innovation is an inherent and anticipated part of an individual’s or team’s role, driven by the organization’s external expectations. Although the motivation is external, it focuses on problems that may be open-ended or discovered, where creativity lies in the ability to explore and co-define the solution as progress is made.'],
    sistemaTipo: ['Research and Development', 'For exploration and disruption-oriented profiles to thrive and maximize their impact, the most suitable idea management system focuses on Research and Development (R&D). This approach is crucial because it aligns directly with the internal motivation of these profiles to solve open-ended problems and discover new frontiers. A robust R&D system focuses on long-term exploration, rigorous experimentation, and fundamental knowledge generation, seeking solutions that are not yet evident or that completely redefine the market.'],
    imagen: './assets/img/Avatars/El Visionario Tecnico.png',
    frase: '“We don’t just build what is asked of us; we define what will be possible tomorrow by exploring the technological frontier.”',
    descripcion: 'The Technical Visionary profile is distinguished by the ability to drive continuous improvement through research and technological anticipation. These individuals not only understand current technical complexities but also possess a sharp vision to foresee future technological evolutions and their applications. Their primary role is to translate the potential of emerging technologies into innovative solutions that transform existing products and systems or open new avenues for development.',
    capacidades: ['Anticipating technological futures', 'Formulating open technical challenges', 'Designing next-generation architectures and concepts', 'Connecting R&D with the business','Leading rigorous exploration in uncertain environments'],
    generaciónIdeas: ['Technology Scanning and Patent Monitoring', 'Review of White Papers and Academic Publications', 'Participation in Technical Conferences and Expert Networks', 'Technical Problem Framing Workshops','Analysis of Current System Performance Data and Technological Limits'],
    programasRecomendados: ['Technological Research Consortia: Collaborations with universities, startups, and other companies to research emerging technologies and solve complex technical problems. Resources and knowledge are shared to accelerate discovery.', 'Tomorrow Tech Challenges: Internal or external calls inviting teams to propose solutions to hypothetical or future technical problems in a specific technological area. Encourages the conceptualization of disruptive technologies.']
  },
  contributiva_talento: 
  { nombre: 'The Inspirer', 
    creatividadTipo: ['Contributive', 'Contributive Creativity arises from internal motivation—a personal desire to add value and improve something specific. It is applied to problems that are already closed or clearly defined, where ingenuity is channeled into finding the best possible solution for that established challenge, seeking optimization and efficiency.'],
    sistemaTipo: ['Human Talent', 'For profiles that are nurtured by human talent to thrive and maximize their impact, the most suitable idea management system focuses on giving the employee a voice and fostering internal collaboration. This approach is crucial because it aligns directly with the intrinsic source of inspiration for these profiles, who seek to improve and optimize from within. A robust system in this area focuses on creating channels and a culture where every employee feels empowered and motivated to contribute their ideas, recognizing the value of their knowledge and daily experience.'],
    imagen: './assets/img/Avatars/La Inspiradora.png',
    frase: '“My greatest achievement is seeing how everyone’s passion becomes the spark that ignites our best ideas.”',
    descripcion: 'The Inspirer profile is distinguished by an innate ability to drive internal innovation through motivated human talent. These individuals actively cultivate a culture where employees’ ideas are not only valued but become the engine of organizational progress. Their primary role is to ignite the creative spark in others, facilitating solutions that emerge from the base of the organization by leveraging the collective intelligence and tacit knowledge of those who live the operational daily life.',
    capacidades: ['Activating internal motivation to innovate', 'Igniting and sustaining the team’s creative spark', 'Channeling energy toward defined problems', 'Designing accessible participation mechanisms','Turning culture into an operational advantage'],
    generaciónIdeas: ['Internal Innovation Challenges with Defined Problems', 'Suggestion and Continuous Improvement Platforms', 'Team Problem-Solving Workshops', 'Active Observation and Operational Dialogue Programs','Pain Point Surveys in Internal Processes'],
    programasRecomendados: ['Employee Idea Incubator: A structured program where employees with ideas for internal improvement receive resources, mentoring, and time to develop their proposals. It focuses on defined operational or process problems, aiming to take ideas to a functional prototype.', 'Internal Problem Hackathons: Short, intensive events where multidisciplinary employee teams collaborate to find quick solutions to specific, predefined operational challenges. Promotes rapid ideation and prototyping for internal improvements.']
  },
  contributiva_mercadeo: 
  { nombre: 'The Creative Marketer', 
    creatividadTipo: ['Contributive', 'Contributive Creativity arises from internal motivation—a personal desire to add value and improve something specific. It is applied to problems that are already closed or clearly defined, where ingenuity is channeled into finding the best possible solution for that established challenge, seeking optimization and efficiency.'],
    sistemaTipo: ['Marketing', 'For profiles that seek inspiration from their surroundings to thrive and maximize their impact, the most suitable idea management system focuses on Marketing. This approach is crucial because it aligns directly with the source of inspiration: customers and external stakeholders. A robust system in this area focuses on the active, systematic, and continuous capture of feedback, needs, desires, and emerging market trends, translating them quickly into opportunities for idea generation.'],
    imagen: './assets/img/Avatars/La Mercado Creativo.png',
    frase: '“My drive is to transform clear market needs into solutions that resonate and generate value.”',
    descripcion: 'The Creative Marketer profile is distinguished by the ability to generate innovative solutions that address clear and specific problems within the market realm. These individuals often operate as intermediaries between customer needs and the organization’s capacity to respond. Their creativity doesn’t emerge from thin air; it is a direct and well-informed response to defined commercial challenges, always seeking the most ingenious and effective way to satisfy demand or resolve existing market friction.',
    capacidades: ['Listening to and synthesizing the voice of the market', 'Generating concepts and value propositions', 'Grounding creativity in commercial viability', 'Connecting with design, development, and marketing','Adjusting based on customer response'],
    generaciónIdeas: ['Deep Analysis of Consumer Data and Customer Behavior', 'Qualitative Market Research (Focus Groups, Interviews)', 'Monitoring Industry Trends and Analysis of Existing Offerings', 'Customer Suggestion and Co-creation Platforms','Analysis of Customer Complaints and Claims'],
    programasRecomendados: ['Customer Problem Challenges: This program invites multidisciplinary teams to propose creative solutions to clear, specific problems identified directly from the market or customers. It focuses on ideation and conceptualizing value propositions, culminating in the presentation of commercially attractive ideas.', 'Value Proposition Sprints: Intensive, short work cycles (e.g., one week) dedicated to developing and refining value propositions for new products, services, or improvements. Based on a deep understanding of the customer and market, resulting in validated concepts and messaging.']
  },
  contributiva_id: 
  { nombre: 'The Disruptive Innovator', 
    creatividadTipo: ['Contributive', 'Contributive Creativity arises from internal motivation—a personal desire to add value and improve something specific. It is applied to problems that are already closed or clearly defined, where ingenuity is channeled into finding the best possible solution for that established challenge, seeking optimization and efficiency.'],
    sistemaTipo: ['Research and Development', 'For exploration and disruption-oriented profiles to thrive and maximize their impact, the most suitable idea management system focuses on Research and Development (R&D). This approach is crucial because it aligns directly with the internal motivation of these profiles to solve open-ended problems and discover new frontiers. A robust R&D system focuses on long-term exploration, rigorous experimentation, and fundamental knowledge generation, seeking solutions that are not yet evident or that completely redefine the market.'],
    imagen: './assets/img/Avatars/El Innovador Disruptivo.png',
    frase: '“I don’t look for the next improvement; I look for the next revolution, solving problems in ways no one imagined.”',
    descripcion: 'The Disruptive Innovator profile is distinguished by the ability to contribute creative ideas that solve specific problems with high technical impact, challenging the status quo and creating new categories or business models. These individuals are not satisfied with incremental improvement; their minds are oriented toward radical transformation, seeking solutions that don’t just optimize but fundamentally redefine how things are done or how needs are met.',
    capacidades: ['Radically reframing defined problems', 'Designing technically disruptive solutions', 'Experimenting and prototyping at the frontier', 'Articulating disruptive potential for the business','Bringing disruption through to real validation'],
    generaciónIdeas: ['Analysis of Glass Ceiling Problems in Current Technology', 'Review of Calls for Papers and Open Research Challenges', 'Analysis of Expired Patents and Underutilized Technologies', 'Radical Problem Deconstruction Sessions','Collaboration with R&D Departments and Advanced Engineering Teams'],
    programasRecomendados: ['Technology Excellence Centers: Units dedicated to deep research and development of key technologies with disruptive potential. They focus on defined technical problems, seeking solutions that redefine the state of the art.', 'Product/Service Reinvention Challenges: Internal calls inviting teams to propose radical solutions for existing products or services with the goal of creating new categories. Focuses on defined problems, seeking a fundamentally different solution.']
  },
  proactiva_mercadeo: 
  { nombre: 'The Explorer', 
    creatividadTipo: ['Proactive', 'Proactive Creativity manifests when innovation arises from internal motivation and an intrinsic desire to explore the unknown. It is the drive of those who don’t wait for problems to appear but actively seek and define new challenges, operating in a field of ambiguity to discover opportunities and create paths that do not yet exist.'],
    sistemaTipo: ['Marketing', 'For profiles that seek inspiration from their surroundings to thrive and maximize their impact, the most suitable idea management system focuses on Marketing. This approach is crucial because it aligns directly with the source of inspiration: customers and external stakeholders. A robust system in this area focuses on the active, systematic, and continuous capture of feedback, needs, desires, and emerging market trends, translating them quickly into opportunities for idea generation.'],
    imagen: './assets/img/Avatars/El Explorador.png',
    frase: '“I don’t wait for the future to find me; I go out to discover and shape it with new questions and solutions.”',
    descripcion: 'The Explorer profile is distinguished by insatiable curiosity and a long-term vision, always in search of the unexplored. These individuals don’t wait for problems to arise or for trends to solidify; instead, they proactively immerse themselves in the future, scanning the horizon for weak signals, emerging megatrends, and latent needs not yet articulated by the market. Their goal is to discover "white spaces" where the organization can innovate and create new product categories, services, or even new business models.',
    capacidades: ['Exploring customer futures', 'Connecting weak signals', 'Defining problems and opportunities that don’t yet exist', 'Experimenting with incipient markets','Building narratives and cases for new categories'],
    generaciónIdeas: ['Analysis of Megatendencias and Possible Consumer Futures', 'Ethnographic Research and Observation of Emerging User Behaviors', 'Exploration of New Business Models and Distribution Channels', 'Foresight Sessions and Market Scenario Building','Analysis of Weak Market Signals and Atypical Behaviors'],
    programasRecomendados: ['Future Customer Experience Labs: Programs dedicated to researching and prototyping how megatrends will transform customer experience. Multidisciplinary teams use foresight and design thinking to build scenarios and generate ideas for new categories of products/services centered on tomorrow’s customer.', 'Emerging Market Challenges: Competitions or calls inviting ideation in unexplored market areas or unmet customer needs. Emphasizes customer segment identification and early value proposition validation in a market "white space."']
  },
  proactiva_talento: 
  { nombre: 'The Change Agent', 
    creatividadTipo: ['Proactive', 'Proactive Creativity manifests when innovation arises from internal motivation and an intrinsic desire to explore the unknown. It is the drive of those who don’t wait for problems to appear but actively seek and define new challenges, operating in a field of ambiguity to discover opportunities and create paths that do not yet exist.'],
    sistemaTipo: ['Human Talent', 'For profiles that are nurtured by human talent to thrive and maximize their impact, the most suitable idea management system focuses on giving the employee a voice and fostering internal collaboration. This approach is crucial because it aligns directly with the intrinsic source of inspiration for these profiles, who seek to improve and optimize from within. A robust system in this area focuses on creating channels and a culture where every employee feels empowered and motivated to contribute their ideas, recognizing the value of their knowledge and daily experience.'],
    imagen: './assets/img/Avatars/La Agente de Cambio.png',
    frase: '“I don’t wait for change; I create it from within, breaking barriers for a better future.”',
    descripcion: 'The Change Agent profile is distinguished by an innate ability to lead cultural transformation through internal innovation. These individuals not only identify the need to evolve but actively design and implement initiatives that redefine practices, values, and thinking within the organization. Their primary role is to dismantle barriers, inspire new mindsets, and build the foundations for a more adaptable and progressive future, driving evolution from the heart of the company.',
    capacidades: ['Reading the system and its blockages', 'Designing a cultural vision of the future', 'Creating change architectures', 'Mobilizing people against resistance','Anchoring transformation in daily life'],
    generaciónIdeas: ['Shared Vision and Internal Future Workshops', 'Intrapreneurship Programs Focused on Open Problems', 'Organizational Culture Surveys and Detection of Latent Friction', 'Open Dialogue Forums and Strategic Town Halls','Change Ambassador and Multiplier Agent Programs'],
    programasRecomendados: ['Cultural Transformation Labs: Spaces dedicated to experimenting with new ways of working and thinking. Employee teams explore systemic problems and design solutions to redefine organizational culture.', 'Organizational Reinvention Challenges: Internal calls inviting employees to propose radical ideas for reinventing key aspects of the organization. Focuses on broad strategic problems and encourages the conceptualization of disruptive solutions from the ground up.']
  },
  proactiva_id: 
  { nombre: 'The Scientific Pioneer', 
    creatividadTipo: ['Proactive', 'Proactive Creativity manifests when innovation arises from internal motivation and an intrinsic desire to explore the unknown. It is the drive of those who don’t wait for problems to appear but actively seek and define new challenges, operating in a field of ambiguity to discover opportunities and create paths that do not yet exist.'],
    sistemaTipo: ['Research and Development', 'For exploration and disruption-oriented profiles to thrive and maximize their impact, the most suitable idea management system focuses on Research and Development (R&D). This approach is crucial because it aligns directly with the internal motivation of these profiles to solve open-ended problems and discover new frontiers. A robust R&D system focuses on long-term exploration, rigorous experimentation, and fundamental knowledge generation, seeking solutions that are not yet evident or that completely redefine the market.'],
    imagen: './assets/img/Avatars/La Pionera Cientifica.png',
    frase: '“I don’t look for answers; I look for the questions no one else has dared to ask, to unveil the secrets of the universe.”',
    descripcion: 'The Scientific Pioneer profile is distinguished by the ability to lead radical innovations through advanced research. These individuals are dedicated to pushing the boundaries of knowledge, exploring fundamental phenomena, and formulating questions that redefine entire scientific fields. Their primary role is that of an intellectual explorer, seeking discoveries that, while they may not have an immediate application, will lay the groundwork for future technological and social transformations.',
    capacidades: ['Exploring knowledge white spaces', 'Formulating theoretical frameworks and high-impact questions', 'Designing experiments at the scientific frontier', 'Converting discoveries into transferable knowledge','Connecting the scientific community and future innovation'],
    generaciónIdeas: ['Critical Review of Existing Scientific Literature', 'Participation in Vanguard Scientific Colloquia and Seminars', 'Exploration of Anomalous Phenomena and Unexpected Observations', 'Collaboration with Scientists across Diverse Disciplines','Grand Scientific Challenge Programs'],
    programasRecomendados: ['Fundamental Research Labs: Spaces dedicated to basic and applied scientific research without an immediate commercial goal. They focus on solving open and unknown problems, seeking discoveries that redefine fields of study.', 'Frontier of Knowledge Challenges: Internal or external calls inviting scientists to propose research projects to address current limits of knowledge in key areas. Seeks conceptualization of solutions for as-yet unsolved problems.']
  },
};
