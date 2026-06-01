/**
 * INNOVATION DIAGNOSTIC ENGINE - CONSULTING VERSION (EN)
 * -------------------------------------------------------------------
 * Structure: 20 situational single-choice questions.
 * Scoring System: Each option impacts multiple dimensions:
 * - Affinities: Marketing (mkt), Talent (tal), R&D (id)
 * - Unsworth Archetypes: Responsive (resp), Expected (esp), Contributory (cont), Proactive (pro)
 * - Maturity Level: 1-5 scale based on organizational processes.
 */

window.quizData = {
  "preguntas": [
    {
      "seccion": 1,
      "titulo": "Strategy and Origin of Innovation",
      "preguntas": [
        {
          "id": 1,
          "pregunta": "When faced with a disruptive technology in the sector, the natural reaction of the company is:",
          "opciones": [
            { "texto": "Wait for customers to formally request it", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Consult with the internal team about the operational impact", "pesos": { "tal": 5, "esp": 4, "madurez": 2 } },
            { "texto": "Study the technical fundamentals to seek exclusivity", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Prototype a new business model based on it", "pesos": { "mkt": 4, "pro": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 2,
          "pregunta": "Where do the best ideas that have been successfully implemented come from?",
          "opciones": [
            { "texto": "Direct feedback and requests from customers", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Spontaneous suggestions from employees", "pesos": { "tal": 5, "cont": 5, "madurez": 1 } },
            { "texto": "Laboratories or technology scanning", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "A strategic analysis of future trends", "pesos": { "esp": 5, "pro": 4, "madurez": 5 } }
          ]
        },
        {
          "id": 3,
          "pregunta": "The innovation budget is allocated based on:",
          "opciones": [
            { "texto": "Emergencies when a commercial opportunity arises", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Training programs and staff incentives", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Technical assets, software, or applied research", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "A fixed annual item aligned with the master plan", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 4,
          "pregunta": "What happens to ideas that do not generate ROI in the first few months?",
          "opciones": [
            { "texto": "They are discarded immediately so as not to lose focus", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "They are maintained if the team is highly committed", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "They are analyzed as lessons learned for R&D", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "They are evaluated according to the milestones of the original plan", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 2,
      "titulo": "Processes and Operational Management",
      "preguntas": [
        {
          "id": 5,
          "pregunta": "The primary source of data for deciding what to innovate is:",
          "opciones": [
            { "texto": "Competitor moves and market prices", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Encuestas de clima y dolores del equipo interno", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Publicaciones científicas y vigilancia de patentes", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "The long-term defined strategic plan", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 6,
          "pregunta": "How is the idea filtering process (funnel)?",
          "opciones": [
            { "texto": "Informal; the idea supported by the sales manager survives", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Democratic; los equipos votan las mejores", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Técnico; basado en pruebas de concepto y laboratorio", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Systemic; with clear stages (Stage-Gate)", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 7,
          "pregunta": "When an experiment fails, the company:",
          "opciones": [
            { "texto": "Worries about the image in front of the customer", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Prioritizes keeping the team motivated", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Adjusts the technical hypothesis with the data obtained", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Looks for the flaw in the process to prevent recurrence", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 8,
          "pregunta": "What digital tools do you use to manage innovation?",
          "opciones": [
            { "texto": "CRM and social media listening tools", "pesos": { "mkt": 5, "resp": 4, "madurez": 3 } },
            { "texto": "Collaboration platforms and suggestion box", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Simulation, 3D design, or data science software", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Project management and roadmap software", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 3,
      "titulo": "Organizational Culture and Talent",
      "preguntas": [
        {
          "id": 9,
          "pregunta": "The main incentive for those who propose something new is:",
          "opciones": [
            { "texto": "Sales commissions or commercial bonuses", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Public recognition and time to create", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Access to better tools or technical budget", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Fulfilling their annual performance evaluation", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 10,
          "pregunta": "How autonomous are teams to experiment?",
          "opciones": [
            { "texto": "Low; everything requires sales approval", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "High; everyone is encouraged to test their ideas", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Technical; freedom within the limits of the lab", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Structured; according to the framework of the strategy", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 11,
          "pregunta": "The communication of innovation primarily seeks to:",
          "opciones": [
            { "texto": "Position us as leaders in the market", "pesos": { "mkt": 5, "resp": 5, "madurez": 3 } },
            { "texto": "Attract and retain talent (Employer Brand)", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Share technical discoveries or patents", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Keep partners and shareholders informed", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 12,
          "pregunta": "How is 'success' defined for an innovation initiative?",
          "opciones": [
            { "texto": "By the immediate increase in sales", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "By the improvement in employee engagement", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "By technological advancement or property registration", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "By compliance with strategic KPIs", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 4,
      "titulo": "Alliances and External Ecosystem",
      "preguntas": [
        {
          "id": 13,
          "pregunta": "Who does the company prefer to ally with to innovate?",
          "opciones": [
            { "texto": "With marketing agencies or influencers", "pesos": { "mkt": 5, "resp": 4, "madurez": 3 } },
            { "texto": "With culture or coaching consultants", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "With universities or research centers", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "With startups or partners in the value chain", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 14,
          "pregunta": "How do you perceive risk in new projects?",
          "opciones": [
            { "texto": "As a threat to commercial reputation", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "As an opportunity to learn as a team", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "As a controllable technical variable", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "As a calculated investment in the portfolio", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 15,
          "pregunta": "Technology scanning is mostly performed by:",
          "opciones": [
            { "texto": "Observing what the market leader is doing", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Listening to ideas at conferences and networks", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Through analytics of patents and technical papers", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Through a formal competitive and foresight intelligence committee", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 16,
          "pregunta": "How fast are investment decisions made?",
          "opciones": [
            { "texto": "Very fast if there is pressure from the customer", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Depends on the enthusiasm of the team leader", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Slow; requires exhaustive technical validation", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "According to strategic review cycles", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 5,
      "titulo": "Impact and Vision of the Future",
      "preguntas": [
        {
          "id": 17,
          "pregunta": "What is the attitude towards Intellectual Property?",
          "opciones": [
            { "texto": "It is used as a marketing tool", "pesos": { "mkt": 5, "resp": 4, "madurez": 3 } },
            { "texto": "Open Source and co-creation are encouraged", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "It is vital to patent everything that comes out of the lab", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "It is managed according to the asset policy", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 18,
          "pregunta": "In board meetings, innovation is treated as:",
          "opciones": [
            { "texto": "An 'Any other business' topic at the end", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "A success story of the teams", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "A technical report on progress and roadblocks", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "The first item on the strategic agenda", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 19,
          "pregunta": "What impact does the company seek in society?",
          "opciones": [
            { "texto": "To be recognized as the favorite brand", "pesos": { "mkt": 5, "resp": 5, "madurez": 3 } },
            { "texto": "To be the best place to work", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "To solve complex technical problems", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "To fulfill a defined higher purpose", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 20,
          "pregunta": "If you could improve one thing about the system today, it would be:",
          "opciones": [
            { "texto": "More budget for marketing and sales", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "That people had free time to create", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Better technology and technical capabilities", "pesos": { "id": 5, "pro": 5, "madurez": 3 } },
            { "texto": "That the process was clear and professionalized", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    }
  ]
};

window.arquetipos = {
  responsiva: {
    nombre: 'Responsive',
    alto: 'Your team possesses outstanding mental agility and an adaptive instinct to act with dexterity when faced with unforeseen changes. They excel at coming together under pressure to design immediate, effective, and highly creative solutions to complex and urgent challenges in the environment. This tactical resilience in reading the current context and reacting quickly makes you a highly adaptable and action-ready organization.',
    bajo: 'Your organization benefits enormously from the stability, detailed planning, and consistency of your current processes in the face of uncertainty. When unforeseen variations occur in the environment, the ideal path to strengthen the team\'s adaptability is to provide them with flexible and pre-approved action frameworks that give them the necessary security to test new responses in an agile and safe manner.',
    insight: 'You must channel this reaction capacity into a preventive program that anticipates changes before the next crisis occurs.'
  },
  proactiva: {
    nombre: 'Proactive',
    alto: 'Your organization shines for its visionary mindset and natural curiosity towards the future. You possess an exceptional ability to anticipate trends in the environment and freely explore new paths of value, designing valuable solutions long before immediate needs present themselves. Your collaborators\' spirit of self-initiative acts as a constant compass that organically drives strategic growth and new frontiers.',
    bajo: 'Your organization has a strong root in day-to-day compliance and in the excellence of its current service, which highly effectively safeguards present operations. To complement this great solidity, the next strategic step consists of opening small margins of free exploration that give the team license to imagine the future of the business without the pressure of an immediate result.',
    insight: 'So that these future visions do not disperse, you need an agile validation program that quickly transforms them into real pilots.'
  },
  contributiva: {
    nombre: 'Contributory',
    alto: 'The great engine of your organization is the strength of collective intelligence and the voluntary commitment of your team. You excel at creating a participatory environment where people contribute their ingenuity with genuine enthusiasm when faced with the common challenges of the company. This constant flow of voluntary ideas demonstrates a healthy collaborative culture, where innovation is experienced as a project belonging to everyone, enriched by the diversity of perspectives.',
    bajo: 'The team usually concentrates on the individual resolution of their own challenges before participating in shared ideation dynamics. This high autonomy and independence is very valuable; to expand it towards co-creation, the ideal path is to facilitate simple and low-friction channels where they can share their viewpoints on organizational challenges in a natural way.',
    insight: 'The secret to maintaining this enthusiasm is a program of short innovation challenges that activates and rewards voluntary participation.'
  },
  esperada: {
    nombre: 'Expected',
    alto: 'Your organization possesses an extraordinary superpower: the ability to turn creativity into a reliable, predictable, and structured discipline. You excel at integrating innovation naturally into daily roles, ensuring that each collaborator knows exactly how and where to seek constant improvements. This ensures that growth and process optimization do not depend on the inspiration of the moment, but on a coordinated and sustainable effort that continuously strengthens the business.',
    bajo: 'Your team currently focuses with high efficiency on executing their defined daily responsibilities. This represents an excellent basis of operational stability, which opens up a great opportunity to invite them to discover improvements progressively, structuring simple spaces within their roles that allow them to channel their valuable technical experience towards process optimization.',
    insight: 'To structure this talent without falling into bureaucracy, you need a pilot program that channels these ideas directly towards measurable goals.'
  }
};

window.sistemas = {
  mercadeo: {
    nombre: 'Marketing',
    descripcion: 'Your organization has an extraordinary connection with the external environment and the needs of users. You excel at rapidly transforming customer feedback and consumer trends into immediate value propositions. This high commercial sensitivity ensures that each creative initiative responds to real market demand, guaranteeing that the return on investment is measurable and short-term.',
    ajuste: 'Your current focus prioritizes technical solidity or internal culture, which ensures a highly integrated and stable operation. To activate your external visibility in a controlled manner, the ideal path is to open small channels of active listening to customers. This will allow you to nurture your excellent internal bases with fresh data and direct demand opportunities.'
  },
  talento: {
    nombre: 'Human Resources / Talent',
    descripcion: 'The true heart and engine of your innovation is the development of your people and the collaborative culture you have built. You excel at motivating, training, and empowering mid-level teams, turning internal ideas into your most valuable competitive advantage. For you, innovating is a shared experience that increases talent retention and multiplies organizational agility.',
    ajuste: 'Your organization stands out for its high financial discipline and its focus on short-term performance goals, which efficiently protects the business. To integrate the team without compromising the day-to-day, the next step is to open simple channels of trust and recognition. In this way, your collaborators will be able to propose operational improvements safely and voluntarily.'
  },
  id: {
    nombre: 'Research and Development (R&D)',
    descripcion: 'Your organization shines for its scientific and technical rigor, and its orientation towards creating robust intellectual property. You excel at solving complex technical challenges and designing assets and competitive advantages that are difficult to duplicate. This strength allows you to build very solid entry barriers in the industry and lead your sector thanks to your high technological value.',
    ajuste: 'Your business model relies on the agility of service, empathy, and speed of delivery in front of the customer, which gives you enviable commercial flexibility. To increase your technological sophistication without losing that freshness, the ideal path is to implement lightweight prototyping processes that help you package your own methodologies and technical solutions.'
  }
};

window.nivel = {
  artesanal: {
    nombre: 'Artisanal',
    descripcion: 'Your organization is sustained by a valuable spirit of individual initiative, passion, and organic flexibility. The great value of this level resides in the fact that innovation is born from spontaneity and the pure talent of key people who push ideas with their own conviction. This operational freshness allows them to experiment freely, adapting quickly to specific challenges without the friction of a heavy bureaucratic structure.',
    riesgo: 'You are at a high danger level. The great risk at this level is that innovation depends exclusively on the inspiration of a few, which can generate unpredictable results and a lack of continuity if those key people leave. To strengthen this base without losing its essence, the next step is to institutionalize a program of recognition and documentation of these spontaneous initiatives, creating a legacy that transcends individuals.',
    caracteristicas: ['One or two "creative" people who solve problems', 'No process documentation', 'Fast but inconsistent response', 'Leadership understands there is a problem, does not know how to address it', 'Zero innovation metrics'],
    riesgos: ['No structural base', 'If the key person leaves, the capacity disappears', 'Not scalable', 'Unpredictable results']
  },
  industrial: {
    nombre: 'Industrial',
    descripcion: 'Your organization stands out for its excellent order, procedural clarity, and predictability in decision-making. You have defined committees and flows that ensure that each innovation step is backed by feasibility analysis, risk mitigation, and rigorous budgetary control. This operational maturity protects resources and guarantees that the selected initiatives follow a clear and professional implementation path.',
    riesgo: 'You are at a moderate danger level. The great risk at this level is that innovation becomes so bureaucratic that it loses its agility and response capacity, which can generate frustration in the teams and a disconnection with the real needs of the market. To strengthen this base without falling into rigidity, the next step is to implement more agile and flexible innovation processes, allowing ideas to flow faster and giving teams more autonomy to experiment within a structured framework.',
    caracteristicas: ['Documented processes for innovation', 'Innovation committee that meets regularly', 'Basic metrics (ideas generated, implemented)', 'The response is consistent but slow', 'Formal teams for innovation projects', 'There are still approval "bottlenecks"'],
    riesgos: ['Structural base exists but is rigid', 'Innovation can die in bureaucracy', 'Difficult to adapt to rapid changes', 'Frustration in teams due to slowness']
  },
  agil: {
    nombre: 'Agile',
    descripcion: 'Your organization stands out for having consolidated an authentic and comprehensive culture of innovation in every corner of the team. For you, innovating and experimenting does not require bureaucratic permits or slow authorizations; the team has absolute trust to ideate, test quickly directly in the market, learn from the results, and pivot immediately. Innovation is breathed organically as part of the daily identity, turning adaptive agility into its natural ecosystem.',
    riesgo: 'You are at a low danger level. The great risk at this level is that the organization becomes complacent with its innovation capacity, which can generate a lack of discipline in execution and a disconnection with long-term strategic objectives. To strengthen this base without losing its essence, the next step is to implement a program of sophisticated metrics that allows measuring not only the quantity of initiatives, but also their real impact on the business and their alignment with the strategic vision.',
    caracteristicas: ['Rapid experiments without waiting for approval', 'Teams authorized to take controlled risks', 'Failures seen as learning, not failures', 'Sophisticated metrics (iteration speed, learning rate)', 'Distributed innovation across the organization, not centralized', 'Internal or external innovation ecosystem (labs, alliances, etc.)'],
    riesgos: ['Complacency with innovation', 'Maintaining momentum requires commitment', 'Requires continuous investment', 'Must move as fast as the market']
  }
};

window.perfilesCombinados = {
  responsiva_mercadeo: {
    nombre: 'The Vigilant',
    imagen: './assets/img/Avatars/El Vigilante.png',
    frase: '"The market has just changed direction; let\'s adapt our value proposition right now to remain the best choice for our customers."',
    descripcion: 'You are the commercial radar and the protector of our relevance in the market. You stand out for your extraordinary sensitivity to listen to the environment and your speed to react to the urgent demands of customers. When the competition moves or the customer changes their mind, you are the one who immediately mobilizes marketing and sales resources to adjust course. Your focus is reactive, extremely timely, and focused on protecting our market share with agile and pragmatic solutions.',
    artesanal: {
      fortalezas: [
        "Agile capacity to adapt the offer quickly",
        "Close contact with customers (listening to needs)",
        "Aligned sales/marketing team (quick communication)",
        "Operational flexibility"
      ],
      brechas: [
        "Lacks strategic market vision (you react, you do not anticipate)",
        "No clear differentiation (you are just one more adapting)",
        "Ad-hoc marketing processes (no system of market insights)",
        "Difficulty maintaining margins (competition by price)"
      ]
    },
    industrial: {
      fortalezas: [
        "Documented market monitoring process",
        "Marketing team with data (not just intuition)",
        "Clearer value proposition (although reactive)",
        "Predictable adaptation cycles"
      ],
      brechas: [
        "Still reactive: you wait for confirmed change to act",
        "Slow approval processes (market moves faster than the committee)",
        "No open innovation channels with customers",
        "Market metrics but no anticipation metrics"
      ]
    },
    agil: {
      fortalezas: [
        "Clear anticipation of market trends (not reactive)",
        "Fast and validated launch processes",
        "Culture of experimentation with customers",
        "Business model evolves with the market"
      ],
      brechas: [
        "Maintaining advantage without falling into commodity",
        "Connecting anticipation with R&D",
        "Innovation ecosystem with external partners",
        "Continuous redefinition of the business model"
      ]
    }
  },
  responsiva_talento: {
    nombre: 'The Coordinator',
    imagen: './assets/img/Avatars/La Coordinadora.png',
    frase: '"An obstacle has arisen in our team\'s path; let\'s unite right now, take care of everyone\'s well-being, and reorganize the flow to solve it."',
    descripcion: 'You are the heart of collaboration and the bridge that unites our people\'s efforts in the face of any storm. You stand out for your immense empathy and your ability to resolve internal friction under pressure, ensuring that people help each other with a smile. Faced with an operational imprevisto, you do not look for culprits; you reorganize workloads in a human way, taking care of the work climate and ensuring that no one feels alone or overwhelmed while we overcome the challenge.',
    artesanal: {
      fortalezas: [
        "Team with rapid response capacity to urgent challenges",
        "Leadership that understands the strategic value of creativity",
        "Documented history of creative solutions",
        "Existence of informal spaces where creativity flows"
      ],
      brechas: [
        "Formal processes to channel and prioritize ideas",
        "Creative impact indicators (currently only measuring business results)",
        "Dedicated spaces for experimentation without immediate pressure",
        "Connection between creative behavior and performance evaluation"
      ]
    },
    industrial: {
      fortalezas: [
        "Team with stable processes to respond creatively",
        "Clear activation protocol when a challenge arises",
        "Initial distribution of creative capacity (not just in 1-2 people)",
        "First metrics of speed and impact"
      ],
      brechas: [
        "Processes are still slow or bureaucratic (takes days to activate)",
        "Basic metrics but not sophisticated (lacks ROI context)",
        "Response teams still centralized",
        "Lack of scalability (works for crises, not for continuous improvement)"
      ]
    },
    agil: {
      fortalezas: [
        "Team already leads initiatives without waiting for them to be demanded",
        "Consolidated culture of rapid and flexible response",
        "Creative capacities distributed across multiple teams",
        "Sophisticated metrics of creative impact"
      ],
      brechas: [
        "Maintaining momentum without falling into complacency",
        "Proactive innovation (generating own challenges, not just responding)",
        "Integration with business strategy",
        "Scalability of the capacity to new contexts"
      ]
    }
  },
  responsiva_id: {
    nombre: 'The Investigator',
    imagen: './assets/img/Avatars/El Investigador.png',
    frase: '"A critical technical failure has occurred; let\'s analyze the data with methodological rigor, find the root cause, and design the definitive patch immediately."',
    descripcion: 'You are the guardian of technical excellence and the scientist who comes to the rescue of our infrastructure in the face of any product or system failure. You stand out for your deep analytical rigor and your ability to apply the experimental method under pressure. You are not satisfied with superficial fixes; you study the data, diagnose the origin of the problem, and design solid corrective solutions that not only put out the current technical fire, but prevent similar failures in the future of the company.',
    artesanal: {
      fortalezas: [
        "Rapid response capacity to market demands",
        "Technical team with development experience",
        "History of solutions that work (even if not breakthrough)",
        "Close contact with customers (direct feedback)"
      ],
      brechas: [
        "Lack of formal R&D processes (is more craft than system)",
        "No dedicated investment in research (only reactive development)",
        "Weak documentation and intellectual property",
        "Difficulty scaling or replicating innovations"
      ]
    },
    industrial: {
      fortalezas: [
        "Documented and repeatable development processes",
        "Clear technical roadmap (although responds only to customers)",
        "Team with defined roles (dev, QA, etc.)",
        "First metrics of speed (sprints, releases)"
      ],
      brechas: [
        "Lack of research on future technologies (you only solve the present)",
        "Slow processes (bureaucracy in approvals)",
        "No spaces for experimentation (everything must be 'productive')",
        "Difficult to attract young talent (lacks innovation)"
      ]
    },
    agil: {
      fortalezas: [
        "Dedicated research on emerging technologies",
        "Agile and continuous development processes (daily/weekly deployments)",
        "Culture of experimentation in engineering",
        "Ability to pivot quickly based on feedback"
      ],
      brechas: [
        "Maintaining speed without losing quality",
        "Connecting technical innovation with business strategy",
        "Attracting and retaining senior talent in research",
        "Managing risk in radical innovation"
      ]
    }
  },
  esperada_mercadeo: {
    nombre: 'The Implementer',
    imagen: './assets/img/Avatars/El Implementador.png',
    arquetipo: 'Expected',
    sistema: 'Marketing',
    frase: '"Each structured minor optimization in our current sales funnel translates into predictable and measurable growth for the business."',
    descripcion: 'You are the master of commercial efficiency and the artisan who turns creative ideas into highly ordered and predictable sales processes. You stand out for your operational rigor and your ability to naturally put incremental innovation at the service of today\'s customer. You do not seek to improvise or invent disruptive markets out of thin air; you prefer to design precise improvements on the sales channels we already have, the active offers, and the contact scripts, ensuring that the sales team innovates as part of their daily discipline and with mathematically consistent results.',
    artesanal: {
      fortalezas: [
        "Close relationship with customers (listening genuinely)",
        "Ability to adapt offers to specific needs",
        "Customers participate in solution development",
        "High customer satisfaction"
      ],
      brechas: [
        "Lack of formal co-creation process with customers",
        "Insights from customers are not documented",
        "Difficult to scale custom solutions to other customers",
        "No formal alliances with partners"
      ]
    },
    industrial: {
      fortalezas: [
        "Formal co-creation processes with customers",
        "Advisory boards or customer councils established",
        "Satisfaction metrics and customer feedback",
        "Some alliances with partners"
      ],
      brechas: [
        "Slow processes (much coordination with customers)",
        "Lack of scalability (solutions are personalized)",
        "No exploration of new business models with customers",
        "Difficult to measure co-creation ROI"
      ]
    },
    agil: {
      fortalezas: [
        "Consolidated open innovation ecosystem",
        "Network of partners collaborating on innovation",
        "New business models emerging from co-creation",
        "Speed of adaptation to market changes"
      ],
      brechas: [
        "Maintaining control and governance in distributed ecosystem",
        "Value capture in collaborative models",
        "Connecting open innovation with strategy",
        "Avoiding complexity paralysis"
      ]
    }
  },
  esperada_talento: {
    nombre: 'The Facilitator',
    imagen: './assets/img/Avatars/La Facilitadora.png',
    arquetipo: 'Expected',
    sistema: 'Human Resources / Talent',
    frase: '"Guaranteeing that continuous process improvement and human development are an orderly part of each collaborator\'s daily routine is the safe way to build a healthy and efficient company."',
    descripcion: 'You are the architect of continuous improvement routines and the guardian of making talent development an orderly, safe, and sustainable process for everyone. You stand out for your excellent organizational capacity and your structured approach to integrating innovation habits into staff daily responsibilities. You do not seek chaotic transformations overnight; you prefer to structure clear training plans, measurable learning goals, and orderly participation committees that ensure the company that the growth of its people is a constant and safe habit.',
    artesanal: {
      fortalezas: [
        "Teams collaborate naturally (culture of teamwork)",
        "Diversity of perspectives in the organization",
        "Problems are addressed holistically (no silos)",
        "People enjoy working together"
      ],
      brechas: [
        "Collaboration is informal (depends on people who 'pull' for others)",
        "No structured processes for co-creation",
        "Lack of dedicated time for collaboration (it's always 'after work')",
        "No documentation of what emerges from collaboration"
      ]
    },
    industrial: {
      fortalezas: [
        "Formal collaboration spaces established (meetings, regular workshops)",
        "Documented co-creation processes",
        "Clear roles and responsibilities in multidisciplinary teams",
        "Results of collaboration documented and communicated"
      ],
      brechas: [
        "Processes are still slow (much deliberation, little decision-making)",
        "Lack of dedicated time for collaborative exploration (it's always 'efficiency')",
        "No connection between internal and external collaboration (customers, partners)",
        "Difficulty scaling collaboration across the organization"
      ]
    },
    agil: {
      fortalezas: [
        "Collaboration is part of the organization\'s DNA",
        "Self-organized teams empowered to make decisions",
        "Innovation ecosystem that includes externals (customers, community)",
        "Ability to scale collaboration to multiple contexts"
      ],
      brechas: [
        "Maintaining energy of collaboration without falling into complacency",
        "Connecting internal collaboration with business strategy",
        "Governing decisions when there are multiple stakeholders",
        "Avoiding collaboration diluting responsibility"
      ]
    }
  },
  esperada_id: {
    nombre: 'The Technical Visionary',
    imagen: './assets/img/Avatars/El Visionario Tecnico.png',
    arquetipo: 'Expected',
    sistema: 'Research and Development',
    frase: '"Strictly documenting and patenting each of our innovations is the safe way to consolidate and shield our technological leadership in the market in the long term."',
    descripcion: 'You are the architect of engineering excellence and the guardian of our company\'s intellectual property. You stand out for your deep love of technical rigor, scientific standardization, and strict compliance with international quality standards. You are not excited by technical improvisation; you prefer to design solid, predictable, scalable, and perfectly documented technological architectures that guarantee that the company\'s technical products are consistent in their operation and extremely difficult for competitors to copy.',
    artesanal: {
      fortalezas: [
        "Technical team collaborates naturally",
        "Diversity of specialties (biology, engineering, computer science, etc.)",
        "Problems are addressed from multiple angles",
        "Culture of experimentation and learning"
      ],
      brechas: [
        "Lack of formal collaborative research process",
        "No prioritization of research lines",
        "Difficult to document and replicate findings",
        "No connection between research and product"
      ]
    },
    industrial: {
      fortalezas: [
        "Formal and prioritized research lines",
        "Documented collaborative research processes",
        "Regular knowledge sharing meetings",
        "First patents or publications"
      ],
      brechas: [
        "Slow research processes (much coordination)",
        "Lack of connection between research and commercialization",
        "No investment in emerging technologies (you only explore the known)",
        "Difficult to attract research talent (lacks visibility)"
      ]
    },
    agil: {
      fortalezas: [
        "Collaborative research ecosystem established",
        "Research connected with commercialization",
        "Collaboration with externals is the norm (universities, startups, customers)",
        "Ability to pivot research lines quickly"
      ],
      brechas: [
        "Maintaining scientific rigor without sacrificing speed",
        "Governing decentralization of research",
        "Connecting research with business strategy",
        "Avoiding collaboration delaying decisions"
      ]
    }
  },
  contributiva_talento: {
    nombre: 'The Inspirer',
    imagen: './assets/img/Avatars/La Inspiradora.png',
    arquetipo: 'Contributiva',
    sistema: 'Human Resources / Talent',
    frase: '"If we open the doors of mutual trust and empower our team, the best ideas to improve our company will emerge from them naturally."',
    descripcion: 'You are the engine of our intrapreneurship culture and the heart that ignites the passion to innovate in each collaborator. You stand out for your immense empathy and your ability to create an environment of high psychological safety, where collaborators propose ideas to improve the workplace openly and safely. You are an expert in connecting people with their individual purpose, ensuring that they feel that innovation is not a corporate order coming from above, but a wonderful initiative of their own that we are ready to support in a human way.',
    artesanal: {
      fortalezas: [
        "Employees have natural entrepreneurial initiative",
        "Leadership is open to ideas from below",
        "History of employee-led projects",
        "Culture of 'yes, we can try it'"
      ],
      brechas: [
        "Lack of formal process to channel initiatives",
        "No consistent evaluation of ideas",
        "Limited resources to support projects",
        "Risk of good ideas falling into oblivion"
      ]
    },
    industrial: {
      fortalezas: [
        "Formal intrapreneurship program (ideation, selection, development)",
        "Dedicated resources for employee projects",
        "Mentors or coaches to develop ideas",
        "Clear communication of evaluation criteria"
      ],
      brechas: [
        "Slow approval processes (killing momentum)",
        "Lack of scalability (small, non-transformational projects)",
        "No integration with strategy (ideas not aligned)",
        "Difficulty scaling successful projects"
      ]
    },
    agil: {
      fortalezas: [
        "Intrapreneurship is part of the culture",
        "Employees have real autonomy to pilot ideas",
        "Agile validation and scaling processes",
        "Internal entrepreneurship ecosystem"
      ],
      brechas: [
        "Maintaining alignment with strategy without controlling",
        "Governing risk of unsuccessful projects",
        "Connecting entrepreneurship successes with business",
        "Avoiding autonomy turning into anarchy"
      ]
    }
  },
  contributiva_mercadeo: {
    nombre: 'The Creative Marketer',
    imagen: './assets/img/Avatars/La Mercado Creativo.png',
    arquetipo: 'Contributiva',
    sistema: 'Marketing',
    frase: '"Let\'s launch a challenge to our community of users and internal collaborators; let\'s open the space for their best ideas to co-create our next commercial campaign."',
    descripcion: 'You are the bridge that unites our company\'s brilliant mind with the heart of our customers. You stand out for your passion for co-creation and your unwavering faith in collective intelligence applied to marketing. You firmly believe that the best commercial ideas do not emerge from closed offices, but from inviting your community, your front-line collaborators, and your allies to design the future of your brand in an open, dynamic, and participatory way.',
    artesanal: {
      fortalezas: [
        "Leadership has growth vision",
        "Exploratory marketing/sales team",
        "Ability to adapt to new contexts",
        "Growth energy"
      ],
      brechas: [
        "Lack of clear strategy of WHAT markets to expand into",
        "No formal opportunity analysis processes",
        "Expansion is chaotic (you try everything at once)",
        "Risk of burning resources without focus"
      ]
    },
    industrial: {
      fortalezas: [
        "Defined market expansion strategy",
        "Documented opportunity analysis processes",
        "First pilots in new markets",
        "Dedicated budget for expansion"
      ],
      brechas: [
        "Processes are still slow (much approval before acting)",
        "Lack of rigorous market validation (assuming instead of testing)",
        "No local collaboration in new markets (trying to replicate model)",
        "Difficulty scaling pilots to operations"
      ]
    },
    agil: {
      fortalezas: [
        "Growth ecosystem established",
        "Collaboration with local partners is the norm",
        "Agile validation and scaling processes",
        "Ability to pivot quickly"
      ],
      brechas: [
        "Maintaining brand consistency in multiple markets",
        "Governing complexity of multigeographic operations",
        "Connecting expansion with business strategy",
        "Avoiding growth killing profitability"
      ]
    }
  },
  contributiva_id: {
    nombre: 'The Disruptive Innovator',
    imagen: './assets/img/Avatars/El Innovador Disruptivo.png',
    arquetipo: 'Contributiva',
    sistema: 'Research and Development',
    frase: '"Let\'s open our technical infrastructure and facilitate the collaboration of specialists; summing technical knowledge we will solve the most complex engineering challenges."',
    descripcion: 'You are the promoter of open science and the bridge that connects our internal engineering with the immense sea of world knowledge. You stand out for your passion for collaborative technological development and your ability to unify minds of high specialization. You have a great ease in designing open technical collaboration environments, organizing engineering hackathons, open-source projects, and R&D alliances with universities, making technical development a transparent sum of collective intelligence that revolutionizes the sector.',
    artesanal: {
      fortalezas: [
        "Technical team has disruption ambition",
        "Awareness of emerging technologies",
        "Technical capacity to explore the new",
        "Long-term vision"
      ],
      brechas: [
        "Lack of clear strategy on WHAT to disrupt",
        "No dedicated budget for exploratory R&D",
        "Processes are still reactive (only if the client asks)",
        "Risk of spending resources without focus"
      ]
    },
    industrial: {
      fortalezas: [
        "Research lines in disruptive technologies defined",
        "Dedicated budget for exploration",
        "Rapid prototyping processes established",
        "First pilots or MVPs of disruptive technologies"
      ],
      brechas: [
        "Processes are still slow (much deliberation)",
        "Lack of integration with business (research does not generate ROI)",
        "No collaboration with externals (universities, startups)",
        "Difficulty scaling pilots to product"
      ]
    },
    agil: {
      fortalezas: [
        "Disruptive innovation ecosystem established",
        "Continuous collaboration with externals (startups, universities, partners)",
        "Agile validation and scaling processes",
        "Ability to pivot quickly"
      ],
      brechas: [
        "Maintaining speed without losing rigor",
        "Governing risks of disruptive projects",
        "Connecting disruption with business strategy",
        "Avoiding ambition paralyzing"
      ]
    }
  },
  proactiva_mercadeo: {
    nombre: 'The Explorer',
    imagen: './assets/img/Avatars/El Explorer.png',
    arquetipo: 'Proactiva',
    sistema: 'Marketing',
    frase: '"Let\'s not wait for customers to tell us what they need; let\'s research tomorrow\'s megatendencies and proactively design the industry\'s next blue ocean today."',
    descripcion: 'You are the visionary of our organization and the helmsman who points to the horizon of the company\'s commercial future. You stand out for your excellent market intuition, your long-term strategic thinking, and your commercial audacity to detect revolutionary business opportunities before they are obvious to the competition. You are not content with managing current market share; you prefer to explore emerging consumer trends, co-design disruptive value propositions, and open unprecedented commercial channels to ensure that the company continues to lead the sector in the next decade.',
    artesanal: {
      fortalezas: [
        "Leadership has radical transformation vision",
        "Openness to completely new business models",
        "Ability to pivot quickly",
        "Disruption energy"
      ],
      brechas: [
        "Lack of clear strategy of WHAT model to transform",
        "No formal business model innovation processes",
        "Transformation is chaotic (you try everything at once)",
        "Risk of losing identity or alienating customers"
      ]
    },
    industrial: {
      fortalezas: [
        "Model transformation strategy defined",
        "Documented business model analysis processes",
        "First pilots of new models",
        "Dedicated budget for transformation"
      ],
      brechas: [
        "Processes are still slow (much approval before acting)",
        "Lack of rigorous validation of models (assuming instead of testing)",
        "No collaboration in transformation (partners, consultants, startups)",
        "Difficulty scaling pilots to operations"
      ]
    },
    agil: {
      fortalezas: [
        "Model innovation ecosystem consolidated",
        "Collaboration with partners in transformation is the norm",
        "Agile validation and scaling processes",
        "Ability to pivot radically and quickly"
      ],
      brechas: [
        "Maintaining brand consistency in radical transformations",
        "Governing transition between old and new models",
        "Connecting transformation with business strategy",
        "Avoiding transformation killing current profitability"
      ]
    }
  },
  proactiva_talento: {
    nombre: 'The Agent of Change',
    imagen: './assets/img/Avatars/La Agente de Cambio.png',
    arquetipo: 'Proactiva',
    sistema: 'Human Resources / Talent',
    frase: '"Let\'s design today the agile culture and leadership that our organization will need to inspire our team and thrive in the next decade."',
    descripcion: 'You are the engine of the organizational future and the transformer of our corporate culture. You stand out for your passion to develop human potential and your ability to design innovative leadership strategies long before the industry demands them. You do not wait with folded arms for operational friction or demotivation to arise; you prefer to design flat organizational structures, propose comprehensive collaboration dynamics, and train staff in tomorrow\'s methodologies and skills, ensuring that the human team is motivated, integrated, and ready to advance happily towards the future goals of the company.',
    artesanal: {
      fortalezas: [
        "There is awareness of the need for transformation",
        "Some key employees lead change",
        "Openness to new ways of working",
        "Willingness to experiment"
      ],
      brechas: [
        "Transformation is led by few people (it is not cultural)",
        "Resistance from the rest of the organization",
        "No systematized change processes",
        "Risk of burnout of the transformers"
      ]
    },
    industrial: {
      fortalezas: [
        "Documented cultural change program",
        "Network of change agents in multiple areas",
        "Established transformation processes",
        "Metrics of change progress"
      ],
      brechas: [
        "Change processes are slow (much resistance)",
        "Lack of alignment between change and strategy",
        "No retention mechanisms during change",
        "Difficulty scaling change across the organization"
      ]
    },
    agil: {
      fortalezas: [
        "Transformation is part of the culture",
        "Employees empowered to question and change",
        "Agile processes of organizational adaptation",
        "Distributed innovation ecosystem"
      ],
      brechas: [
        "Maintaining direction without excessive control",
        "Governing multiple transformations simultaneously",
        "Connecting personal change with strategy",
        "Avoiding empowerment turning into anarchy"
      ]
    }
  },
  proactiva_id: {
    nombre: 'The Scientific Pioneer',
    imagen: './assets/img/Avatars/La Pionera Cientifica.png',
    arquetipo: 'Proactiva',
    sistema: 'Research and Development',
    frase: '"Let\'s explore the frontiers of scientific knowledge and design today the technologies and patents that will redefine our industry\'s standards in the next decade."',
    descripcion: 'You are the engine of cutting-edge knowledge and the scientist who opens the horizons of our state-of-the-art technology towards the future. You stand out for your excellent methodological rigor, your proactive technological vision, and your passion for disruptive Research and Development (R&D). You do not wait for the industry to raise demands; you prefer to experiment with new technologies, discover unprecedented properties of materials, design revolutionary software, and file innovative patents that build inimitable intellectual property assets, guaranteeing our organization\'s unquestionable long-term leadership.',
    artesanal: {
      fortalezas: [
        "Technical team with radical ambition",
        "Awareness of revolutionary technologies",
        "Theoretical capacity in research",
        "Long-term vision and disruption"
      ],
      brechas: [
        "Lack of strategy of HOW to revolutionize",
        "No dedicated budget for radical research",
        "Very theoretical processes (lacking pragmatism)",
        "Risk of generating IP without commercialization"
      ]
    },
    industrial: {
      fortalezas: [
        "Formal radical research lines",
        "Dedicated budget for exploratory research",
        "Some papers or patents generated",
        "Documented research processes"
      ],
      brechas: [
        "Processes are still slow (much scientific deliberation)",
        "Lack of commercialization of research (IP without revenue)",
        "No collaboration with externals (universities, institutes)",
        "Difficulty converting science into product"
      ]
    },
    agil: {
      fortalezas: [
        "Radical research ecosystem consolidated",
        "Collaboration with externals is the norm (universities, institutes, partners)",
        "Effective IP commercialization processes",
        "Ability of spin-off or licensing of technologies"
      ],
      brechas: [
        "Maintaining scientific rigor without sacrificing speed",
        "Governing portfolio of radical researches",
        "Connecting research with business strategy",
        "Scaling spun-off startups"
      ]
    }
  }
};

window.programasCompletos = {
  // ===== P1: THE COORDINATOR (Responsive + Talent) =====
  responsiva_talento: {
    artesanal: {
      titulo: "Mapping and Channeling Reactive Creativity",
      duracion: "3-4 months",
      objetivo: "Institutionalize the reactive creative capacity that exists in your team",
      acciones: [
        {
          numero: 1,
          titulo: "Create shared diagnosis on the current state of innovation",
          descripcion: "Conduct a 4-hour workshop with leadership to document: Who innovates? How does creativity happen? When is it activated? In what contexts? Map real cases where you saw creativity in action.",
          tiempo: "2-3 weeks",
          dueno: "Leadership + Human Resources"
        },
        {
          numero: 2,
          titulo: "Initiate mapping of individual creative capacities",
          descripcion: "Identify and inventory individual creative strengths and competencies of team members through interviews and quick profiling tools to optimize role assignments in future projects.",
          tiempo: "2-3 weeks",
          dueno: "Human Resources"
        },
        {
          numero: 3,
          titulo: "Establish basic innovation governance",
          descripcion: "Define a lightweight operational framework designating who reviews new ideas, how key decisions are escalated, and how resources are unlocked to support initial pilots.",
          tiempo: "2-3 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 4,
          titulo: "Institutionalize a creative recognition ritual",
          descripcion: "Design a simple, recurring ritual to celebrate and publicly thank employees for their creative contributions, reinforcing a safe, encouraging, and highly collaborative workspace.",
          tiempo: "Ongoing",
          dueno: "HR + Team Leaders"
        }
      ]
    },
    industrial: {
      titulo: "Systematization of Creative Response",
      duracion: "5-6 months",
      objetivo: "Consolidate rapid response processes to operational challenges",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidate opportunity identification process",
          descripcion: "Formalize how an opportunity or problem enters your company. Create a simple digital or physical form: What is the challenge? Who identified it? How urgent is it? What resources are needed? This channels ideas that were previously lost in emails.",
          tiempo: "3-4 weeks",
          dueno: "Innovation + Operations"
        },
        {
          numero: 2,
          titulo: "Train in agile problem-solving methodologies",
          descripcion: "Train the team in frameworks and methodologies such as Scrum, Kanban, or problem-solving Sprints to standardize how emergencies are tackled.",
          tiempo: "4-6 weeks",
          dueno: "Training + Innovation"
        },
        {
          numero: 3,
          titulo: "Create cross-functional and rotating response teams",
          descripcion: "Structure small commissions composed of diverse profiles (sales, operations, technology) ready to activate in a coordinated and flexible manner when facing critical challenges.",
          tiempo: "4-6 weeks",
          dueno: "Operations + HR"
        },
        {
          numero: 4,
          titulo: "Measure and document early results",
          descripcion: "Establish basic metrics for response times and impact on costs or quality to justify progress and adjust bottleneck phases in the innovation funnel.",
          tiempo: "3-4 weeks",
          dueno: "Analytics"
        }
      ]
    },
    agil: {
      titulo: "Scaling Distributed Creativity",
      duracion: "6-8 months",
      objetivo: "Scale reactive creativity across the entire organization",
      acciones: [
        {
          numero: 1,
          titulo: "Scale methodologies to the entire organization",
          descripcion: "Take rapid response methodologies (Design Thinking, SCAMPER) to EVERYONE, not just key teams. This means cascading training, clear documentation on the intranet, and sharing real examples. Goal: anyone can apply them when facing a challenge.",
          tiempo: "8-12 weeks",
          dueno: "Training + Innovation"
        },
        {
          numero: 2,
          titulo: "Connect innovation with performance evaluation",
          descripcion: "Design and integrate KPIs for innovative behavior and experimentation into HR annual evaluation metrics, aligning career incentives with cultural agility.",
          tiempo: "4-6 weeks",
          dueno: "Human Resources + Leadership"
        },
        {
          numero: 3,
          titulo: "Create an internal network of creativity mentors",
          descripcion: "Select and certify corporate change agents to act as internal innovation coaches, providing decentralized support for creative challenges in every area.",
          tiempo: "6-8 weeks",
          dueno: "Innovation + Training"
        },
        {
          numero: 4,
          titulo: "Implement tracking metrics and an innovation dashboard",
          descripcion: "Deploy an interactive visual dashboard (inputs, process, and outputs metrics) that gives the board of directors visibility into the health and ROI of the corporate system.",
          tiempo: "4-6 weeks",
          dueno: "Analytics / Business Intelligence"
        }
      ]
    }
  },

  // ===== P2: THE INVESTIGATOR (Responsive + R&D) =====
  responsiva_id: {
    artesanal: {
      titulo: "Formalization of Reactive R&D",
      duracion: "3-4 months",
      objetivo: "Create basic, repeatable processes for research and development",
      acciones: [
        {
          numero: 1,
          titulo: "Establish formal request intake process",
          descripcion: "Create a documented 'request pipeline'. When a client or internal area requests an improvement or new development, it enters a system. Define: Who receives it? How is it prioritized? What is the response window? This prevents requests from getting lost in chats.",
          tiempo: "2-3 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 2,
          titulo: "Create a basic technical roadmap for 6-12 months",
          descripcion: "Draft a high-level timeline showing upcoming technical milestones, critical software upgrades, and key development goals to align business expectations with tech capacity.",
          tiempo: "3-4 weeks",
          dueno: "Tech Lead / R&D Leadership"
        },
        {
          numero: 3,
          titulo: "Initiate structured documentation of developments",
          descripcion: "Set up a shared space (such as a wiki or shared drive) where developers must document the architecture, dependencies, and API endpoints of every major fix or product release.",
          tiempo: "3-4 weeks",
          dueno: "R&D Team"
        },
        {
          numero: 4,
          titulo: "Allocate dedicated time to innovation",
          descripcion: "Block a specific percentage of the technical team's schedule (e.g., 10%) solely for exploration and proof of concepts, separating it from daily bug-fixing and system maintenance.",
          tiempo: "Ongoing",
          dueno: "R&D Managers"
        }
      ]
    },
    industrial: {
      titulo: "Consolidation of Structured R&D",
      duracion: "5-6 months",
      objetivo: "Consolidate R&D operations using agile, repeatable methodologies",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidate annual technical roadmap with clear prioritization",
          descripcion: "Extend the basic roadmap into a formal document: technologies to investigate, products to improve, and capabilities to develop. Prioritise using an impact-versus-effort matrix. Review quarterly.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership + Strategy"
        },
        {
          numero: 2,
          titulo: "Train team in agile development methodologies",
          descripcion: "Conduct practical training on Scrum or Kanban practices for the technical team to optimize sprint planning, daily standups, and retrospective feedback loops.",
          tiempo: "6-8 weeks",
          dueno: "Scrum Master / Tech Lead"
        },
        {
          numero: 3,
          titulo: "Create dedicated 'prototyping labs' for exploration",
          descripcion: "Establish a safe sandbox environment with specific resources where developers can quickly test new frameworks or third-party integrations without risking live systems.",
          tiempo: "4-6 weeks",
          dueno: "R&D Team"
        },
        {
          numero: 4,
          titulo: "Establish quality and velocity metrics",
          descripcion: "Define key indicators like sprint velocity, deployment frequency, and code defect escape rate to measure the efficiency and stability of technical deliveries.",
          tiempo: "3-4 weeks",
          dueno: "Quality Assurance / Analytics"
        }
      ]
    },
    agil: {
      titulo: "Emerging Technologies Research",
      duracion: "8-12 months",
      objetivo: "Evolve operations toward foresight and disruptive technology research",
      acciones: [
        {
          numero: 1,
          titulo: "Investigate and experiment with emerging technologies",
          descripcion: "Allocate budget and team capacity (25-30% of time) to explore future technologies (AI/ML, IoT, advanced analytics). Conduct small, low-cost pilots to evaluate direct business applications.",
          tiempo: "12-16 weeks",
          dueno: "R&D Leadership + Innovation Team"
        },
        {
          numero: 2,
          titulo: "Explore open innovation with startups, universities, and partners",
          descripcion: "Form strategic alliances with external research centers, tech hubs, or startups to co-develop solutions, leverage specialized knowledge, and accelerate tech absorption.",
          tiempo: "8-12 weeks",
          dueno: "Business Development + R&D Leadership"
        },
        {
          numero: 3,
          titulo: "Implement an independent innovation lab separated from operations",
          descripcion: "Set up a separate physical or virtual team focused entirely on breakthrough ideas, shielding them from daily operational requests and fire-fighting.",
          tiempo: "8-12 weeks",
          dueno: "CEO / R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Generate strategic impact indicators",
          descripcion: "Define KPIs to measure the value generated by exploratory projects, such as patented technologies, new revenue lines, or strategic cost reductions achieved.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership + Finance"
        }
      ]
    }
  },

  // ===== P3: THE VIGILANT (Responsive + Marketing) =====
  responsiva_mercadeo: {
    artesanal: {
      titulo: "Systematic Market Monitoring",
      duracion: "3-4 months",
      objetivo: "Create basic, repeatable processes for market and competitor intelligence",
      acciones: [
        {
          numero: 1,
          titulo: "Create formal market monitoring process",
          descripcion: "Define: Who monitors? What do we monitor? How often? Where do we document? For example, designate a team member to spend 2 hours/week tracking competition and industry keywords on Google Alerts, Twitter, and LinkedIn, saving findings in a shared log.",
          tiempo: "2-3 weeks",
          dueno: "Marketing / Strategy"
        },
        {
          numero: 2,
          titulo: "Initiate systematic competitor analysis",
          descripcion: "Build a simple matrix: Who are our main competitors? What are they launching? How are they pricing? Update this monthly to identify early signals of market shifts.",
          tiempo: "3-4 weeks",
          dueno: "Marketing / Strategy"
        },
        {
          numero: 3,
          titulo: "Establish a clear ideas filter: 'Is this for us?'",
          descripcion: "Define your core commercial positioning, target audience, and key differentiators. Use this as a lens to evaluate new opportunities, avoiding chasing every competitor's move.",
          tiempo: "2-3 weeks",
          dueno: "Leadership + Strategy"
        },
        {
          numero: 4,
          titulo: "Document successful adaptations to learn patterns",
          descripcion: "Every time you adjust an offer or launch a reactive campaign, document the trigger, the change made, the sales result, and lessons learned to identify repeating customer demand patterns.",
          tiempo: "Ongoing",
          dueno: "Marketing"
        }
      ]
    },
    industrial: {
      titulo: "Market Intelligence and Co-creation",
      duracion: "5-6 months",
      objetivo: "Consolidate market intelligence and establish structured co-creation channels with customers",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidate market intelligence system",
          descripcion: "Formalize monitoring, competitor analysis, and signal tracking. Integrate digital tools (Semrush, Google Trends, social listening). Create a monthly 'Market Intelligence Report' for leadership.",
          tiempo: "4-6 weeks",
          dueno: "Marketing / Strategy"
        },
        {
          numero: 2,
          titulo: "Create formal co-creation channels with customers",
          descripcion: "Establish recurring customer focus groups, beta-testing programs, or a client advisory board. Move from listening to complaints to actively designing solutions alongside key users.",
          tiempo: "4-6 weeks",
          dueno: "Marketing + Product"
        },
        {
          numero: 3,
          titulo: "Implement agile launch processes: MVP, test & learn",
          descripcion: "Instead of waiting for 'perfect' product launches, deploy Minimum Viable Products quickly. Define rapid feedback loops and criteria to pivot or scale based on real sales data.",
          tiempo: "6-8 weeks",
          dueno: "Product + Marketing"
        },
        {
          numero: 4,
          titulo: "Measure response speed and success rate of new offerings",
          descripcion: "Track the days elapsed from identifying a market opportunity to actual launch, the conversion rates of reactive offers, and overall customer satisfaction with new rollouts.",
          tiempo: "3-4 weeks",
          dueno: "Strategy / Analytics"
        }
      ]
    },
    agil: {
      titulo: "Strategic Market Foresight",
      duracion: "8-12 months",
      objetivo: "Develop advanced capabilities for market foresight, trend analysis, and business model exploration",
      acciones: [
        {
          numero: 1,
          titulo: "Develop foresight capability: scenarios and weak signals",
          descripcion: "Look beyond immediate demands. Study industry trends on a 3-5 year horizon (demographics, emerging tech, regulations). Facilitate strategic scenario workshops to prepare the business before shifts occur.",
          tiempo: "10-12 weeks",
          dueno: "Strategy + Leadership"
        },
        {
          numero: 2,
          titulo: "Create a sandbox/laboratory for new business models",
          descripcion: "Experiment with alternative model hypotheses: subscriptions, revenue sharing, or platform models. Prototype these models on paper or with micro-pilots to keep strategic options open.",
          tiempo: "12-16 weeks",
          dueno: "Strategy + Product + Leadership"
        },
        {
          numero: 3,
          titulo: "Explore open innovation with startups, partners, and lead users",
          descripcion: "Connect with the agents driving change in your ecosystem. Build pilot partnerships with innovative startups or specialized consultants to access bleeding-edge market ideas.",
          tiempo: "8-12 weeks",
          dueno: "Strategy + Business Development"
        },
        {
          numero: 4,
          titulo: "Implement a strategic dashboard with leading indicators",
          descripcion: "Move beyond lagging financial results. Measure leading indicators: early customer adoption rates of new technologies, brand sentiment shifts, and competitor trial speeds.",
          tiempo: "6-8 weeks",
          dueno: "Strategy / Analytics"
        }
      ]
    }
  },

  // ===== P4: THE FACILITATOR (Expected + Talent) =====
  esperada_talento: {
    artesanal: {
      titulo: "Structuring Collaborative Innovation",
      duracion: "3-4 months",
      objetivo: "Create formal, scheduled spaces for employee collaboration and idea sharing",
      acciones: [
        {
          numero: 1,
          titulo: "Map current informal collaboration patterns",
          descripcion: "Diagnose how information flows today. Survey employees on who they collaborate with, identify communication silos between departments, and visualize this in a basic network diagram.",
          tiempo: "2-3 weeks",
          dueno: "Human Resources"
        },
        {
          numero: 2,
          titulo: "Establish formal spaces for collaboration",
          descripcion: "Schedule recurring sessions: monthly cross-departmental problem-solving workshops (2-3 hours), weekly structured brainstorms, or focused team sprints. Define clear objectives and owners.",
          tiempo: "2-3 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 3,
          titulo: "Train team in basic co-creation dynamics",
          descripcion: "Provide training on facilitation: guiding teams through divergent thinking (generating ideas without judgment), convergent thinking (sorting and voting), and collaborative decision-making.",
          tiempo: "4-6 weeks",
          dueno: "Training"
        },
        {
          numero: 4,
          titulo: "Document outputs of collaborative sessions",
          descripcion: "Create a simple template to capture every session's output: key ideas generated, nominated owners, clear next steps, and required resources. Prevent valuable thoughts from evaporating.",
          tiempo: "Ongoing",
          dueno: "Leadership Team"
        }
      ]
    },
    industrial: {
      titulo: "Co-creation Methodologies and Teams",
      duracion: "5-6 months",
      objetivo: "Consolidate structured co-creation methodologies and form dedicated cross-functional teams",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidate co-creation methodologies",
          descripcion: "Standardize frameworks like Design Thinking (empathize, define, ideate, prototype, test) across the company. Publish clear playbook guidelines in your knowledge base.",
          tiempo: "4-6 weeks",
          dueno: "Training + Leadership"
        },
        {
          numero: 2,
          titulo: "Create cross-functional teams with dedicated time",
          descripcion: "Form permanent multi-disciplinary teams (4-6 members from sales, operations, etc.). Allocate 10-20% of their weekly schedule to work on specific internal improvement projects.",
          tiempo: "4-6 weeks",
          dueno: "Human Resources + Leadership"
        },
        {
          numero: 3,
          titulo: "Explore co-creation with clients and partners",
          descripcion: "Invite external stakeholders to joint workshops. Co-design service improvements directly with key clients to validate operational value and strengthen relationships.",
          tiempo: "6-8 weeks",
          dueno: "Marketing + Leadership"
        },
        {
          numero: 4,
          titulo: "Measure collaboration effectiveness",
          descripcion: "Track: number of active cross-departmental projects, average project delivery time, employee participation rates, and team feedback via simple quarterly surveys.",
          tiempo: "3-4 weeks",
          dueno: "Leadership Team"
        }
      ]
    },
    agil: {
      titulo: "Collaborative Innovation Ecosystem",
      duracion: "8-12 months",
      objetivo: "Evolve internal collaboration into a broad, self-managed innovation ecosystem",
      acciones: [
        {
          numero: 1,
          titulo: "Evolve toward open innovation ecosystems",
          descripcion: "Extend collaboration beyond corporate borders. Create open developer/partner communities, organize external hackathons, and design co-creation platforms to multiply innovative capabilities.",
          tiempo: "12-16 weeks",
          dueno: "Strategy + Marketing"
        },
        {
          numero: 2,
          titulo: "Implement collaborative governance models",
          descripcion: "Establish lightweight, distributed rules for ecosystem management: define IP sharing terms, collaborative roadmap voting mechanisms, and conflict resolution policies.",
          tiempo: "8-12 weeks",
          dueno: "Strategy + Legal"
        },
        {
          numero: 3,
          titulo: "Create an experimental lab for future ways of working",
          descripcion: "Pilot advanced organizational dynamics: fully asynchronous workflows, self-managed cell structures, or AI-assisted project orchestration to stay ahead of workplace trends.",
          tiempo: "10-12 weeks",
          dueno: "Human Resources + Leadership"
        },
        {
          numero: 4,
          titulo: "Generate ecosystem health indicators",
          descripcion: "Monitor active external contributors, community satisfaction, the speed of collaborative releases, and net value co-created with partners.",
          tiempo: "4-6 weeks",
          dueno: "Strategy"
        }
      ]
    }
  },

  // ===== P5: THE TECHNICAL VISIONARY (Expected + R&D) =====
  esperada_id: {
    artesanal: {
      titulo: "Formalization of Collaborative Research",
      duracion: "3-4 months",
      objetivo: "Establish basic structure and guidelines for joint research and technological exploration",
      acciones: [
        {
          numero: 1,
          titulo: "Audit current individual research initiatives",
          descripcion: "Document what tech domains, frameworks, or scientific papers are currently being explored by developers. Identify overlapping interests and informational silos.",
          tiempo: "2-3 weeks",
          dueno: "Tech Lead"
        },
        {
          numero: 2,
          titulo: "Launch structured research exchange meetings",
          descripcion: "Set up bi-weekly 'Journal Clubs' (to discuss technical papers) and monthly 'Research Reviews' (to present findings on exploratory tools) to democratize technical knowledge.",
          tiempo: "2-3 weeks",
          dueno: "Tech Lead"
        },
        {
          numero: 3,
          titulo: "Train team in basic scientific/technical research methods",
          descripcion: "Provide light mentoring on systematic literature reviews, hypothesis-driven testing, and statistical design of experiments. Elevate research from trial-and-error to systematic discovery.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Document research hypotheses and experiments",
          descripcion: "Introduce a simple template: Hypothesis → Experiment Parameters → Result → Lessons Learned. Ensure every technical discovery or failure is recorded in a shared index.",
          tiempo: "1-2 weeks",
          dueno: "Tech Lead"
        }
      ]
    },
    industrial: {
      titulo: "Structured Collaborative Research",
      duracion: "5-6 months",
      objetivo: "Align collaborative research with development processes and IP capture",
      acciones: [
        {
          numero: 1,
          titulo: "Formalize lines of research and prioritizing methods",
          descripcion: "Standardize peer-review processes for research proposals. Define clear fields of inquiry (e.g., cloud cost reduction, API performance) aligned with business strategic plans.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 2,
          titulo: "Create operational bridges from research to development",
          descripcion: "Implement a formal Technology Readiness Level (TRL) framework to guide how a successfully researched concept is handed over to product development teams.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership + Tech Lead"
        },
        {
          numero: 3,
          titulo: "Explore collaborations with universities and technical hubs",
          descripcion: "Form partnerships with 1-2 external research institutes or university departments to co-conduct complex experiments or sponsor specialized graduate thesis projects.",
          tiempo: "6-8 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Measure research output and patent potential",
          descripcion: "Track: number of scientific reviews completed, technical patents drafted, unique architectures validated, and average R&D project lead times.",
          tiempo: "3-4 weeks",
          dueno: "R&D Leadership"
        }
      ]
    },
    agil: {
      titulo: "Open Research Ecosystem",
      duracion: "8-12 months",
      objetivo: "Evolve research activities into an open, agile, and decentralized network of scientific value",
      acciones: [
        {
          numero: 1,
          titulo: "Deploy an open research portal/ecosystem",
          descripcion: "Set up shared workspaces, open-source repositories, or shared data sandboxes where external researchers and partner institutions can collaborate in real time.",
          tiempo: "12-16 weeks",
          dueno: "R&D Leadership + Strategy"
        },
        {
          numero: 2,
          titulo: "Design spin-off and IP licensing frameworks",
          descripcion: "Define pathways to license proprietary technology, spin out specialized startups, or establish joint ventures to monetize advanced research outputs.",
          tiempo: "8-12 weeks",
          dueno: "R&D Leadership + Legal"
        },
        {
          numero: 3,
          titulo: "Grant autonomous exploratory budgets",
          descripcion: "Give researchers high autonomy: direct access to computing credits, freedom to steer secondary research lines, and simplified publishing permissions to retain senior talent.",
          tiempo: "6-8 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Deploy multidimensional technical impact indicators",
          descripcion: "Track patent value, citations, open-source community adoption, code contributions, and commercial product enhancements driven by basic research.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership"
        }
      ]
    }
  },

  // ===== P6: THE IMPLEMENTER (Expected + Marketing) =====
  esperada_mercadeo: {
    artesanal: {
      titulo: "Structured Customer Co-creation",
      duracion: "3-4 months",
      objetivo: "Develop formal, lightweight processes for client feedback and collaborative feature design",
      acciones: [
        {
          numero: 1,
          titulo: "Identify key co-creator client profiles",
          descripcion: "Identify which customers have a natural interest in giving feedback and testing new features. Segment them to form an active advisory pool.",
          tiempo: "2-3 weeks",
          dueno: "Customer Success + Product"
        },
        {
          numero: 2,
          titulo: "Establish formal feedback intake channels",
          descripcion: "Standardize client feedback collection. Set up monthly surveys, focus groups, or a structured beta-testing framework with explicit evaluation metrics.",
          tiempo: "3-4 weeks",
          dueno: "Product + Customer Success"
        },
        {
          numero: 3,
          titulo: "Train team in co-design techniques",
          descripcion: "Train sales, product, and success managers in eliciting requirements without bias, conducting user-experience mapping, and co-designing services with clients.",
          tiempo: "4-6 weeks",
          dueno: "Training"
        },
        {
          numero: 4,
          titulo: "Document and catalog custom solutions",
          descripcion: "Whenever you customize a product or service for a specific client, document the recipe. Create an internal catalog so other sales reps can offer it.",
          tiempo: "Ongoing",
          dueno: "Product"
        }
      ]
    },
    industrial: {
      titulo: "Sustained Open Innovation",
      duracion: "5-6 months",
      objetivo: "Consolidate customer co-creation boards and set up structured partner networks",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidate customer advisory councils",
          descripcion: "Set up regular, structured Customer Advisory Boards. Agree on meeting frequencies, operational agendas, and feature-request prioritization matrices.",
          tiempo: "4-6 weeks",
          dueno: "Product + Marketing"
        },
        {
          numero: 2,
          titulo: "Establish structured partner programs",
          descripcion: "Build reseller, integrator, or platform partner programs. Define shared commercial goals, APIs, and revenue-sharing mechanisms to enable joint innovation.",
          tiempo: "4-6 weeks",
          dueno: "Business Development"
        },
        {
          numero: 3,
          titulo: "Explore collaborative business models",
          descripcion: "Experiment with joint ventures, co-branded value propositions, or bundled offerings with strategic partners to increase market share.",
          tiempo: "8-12 weeks",
          dueno: "Estrategia + Business Development"
        },
        {
          numero: 4,
          titulo: "Measure co-creation impact on key accounts",
          descripcion: "Track: client retention, co-created feature adoption, referral rates, and Customer Lifetime Value (LTV) of co-creators versus traditional clients.",
          tiempo: "3-4 weeks",
          dueno: "Analytics"
        }
      ]
    },
    agil: {
      titulo: "Market Ecosystem Platform",
      duracion: "8-12 months",
      objetivo: "Transform your market channels into a self-sustaining open innovation platform",
      acciones: [
        {
          numero: 1,
          titulo: "Evolve toward a platform business model",
          descripcion: "Design a digital platform or marketplace where partners, developers, and clients can trade, integrate, and co-create value built on top of your core service.",
          tiempo: "12-16 weeks",
          dueno: "Strategy + Product"
        },
        {
          numero: 2,
          titulo: "Implement distributed platform governance",
          descripcion: "Build automated, community-driven mechanisms for developer onboarding, template validation, and fair revenue allocation to scale without bottlenecks.",
          tiempo: "8-12 weeks",
          dueno: "Strategy + Legal"
        },
        {
          numero: 3,
          titulo: "Run active business model R&D",
          descripcion: "Test transactional fees, premium developer APIs, and platform subscription tiers. Constantly experiment with new ways of monetizing ecosystem interactions.",
          tiempo: "10-12 weeks",
          dueno: "Strategy + Product"
        },
        {
          numero: 4,
          titulo: "Deploy platform health indicators",
          descripcion: "Measure API call volume, active external developers, ecosystem transaction volume (GMV), and platform-induced customer acquisition efficiency.",
          tiempo: "4-6 weeks",
          dueno: "Strategy"
        }
      ]
    }
  },

  // ===== P7: THE INSPIRER (Contributory + Talent) =====
  contributiva_talento: {
    artesanal: {
      titulo: "Channeling Employee Intrapreneurship",
      duracion: "3-4 months",
      objetivo: "Design basic, transparent processes to capture, evaluate, and seed employees' ideas",
      acciones: [
        {
          numero: 1,
          titulo: "Identify internal intrapreneurial talent",
          descripcion: "Map natural innovators within departments. Conduct informal focus groups or interviews to find individuals with a strong desire to propose and run projects.",
          tiempo: "2-3 weeks",
          dueno: "Human Resources"
        },
        {
          numero: 2,
          titulo: "Establish formal idea intake and routing process",
          descripcion: "Create a simple digital pipeline: idea submission → basic scorecard review → go/no-go decision. Communicate clear, basic evaluation criteria (value, feasibility).",
          tiempo: "3-4 weeks",
          dueno: "Innovation + Human Resources"
        },
        {
          numero: 3,
          titulo: "Allocate micro-budget for employee pilots",
          descripcion: "Set up a dedicated fund (e.g., $1,000 - $3,000) for testing early concepts. Prove to employees that viable ideas can access real resources without bureaucracy.",
          tiempo: "1-2 weeks",
          dueno: "CEO / Finance"
        },
        {
          numero: 4,
          titulo: "Designate a dedicated program owner",
          descripcion: "Assign an HR or innovation manager to act as the primary contact, facilitator, and advocate for employees' submitted projects, keeping the pipeline moving.",
          tiempo: "1 week",
          dueno: "CEO / Leadership"
        }
      ]
    },
    industrial: {
      titulo: "Sustained Intrapreneurship System",
      duracion: "5-6 months",
      objetivo: "Consolidate a company-wide intrapreneurship program with methodologies and mentors",
      acciones: [
        {
          numero: 1,
          titulo: "Standardize Lean Startup training for employees",
          descripcion: "Deliver structured workshops on Lean Canvas, MVP design, and rapid customer validation to employees. Equip them with practical skills, not just theories.",
          tiempo: "6-8 weeks",
          dueno: "Training + Innovation"
        },
        {
          numero: 2,
          titulo: "Design a fast-track channel for high-potential ideas",
          descripcion: "Create an expedited approval lane for ideas addressing core company KPIs. Minimize administrative steps to secure initial funding and sprint resources.",
          tiempo: "4-6 weeks",
          dueno: "Innovation"
        },
        {
          numero: 3,
          titulo: "Align intrapreneurship with strategic OKRs",
          descripcion: "Define specific 'challenges' based on the company's yearly goals. Direct employees' creative energy toward solving defined business-critical problems.",
          tiempo: "4-6 weeks",
          dueno: "Leadership + Strategy"
        },
        {
          numero: 4,
          titulo: "Build formal project scaling processes",
          descripcion: "Establish clear milestone-gates to transfer validated employee-led pilots into core business operations, assigning permanent operational budgets.",
          tiempo: "4-6 weeks",
          dueno: "Innovation + Operations"
        }
      ]
    },
    agil: {
      titulo: "Internal Venture Capital Ecosystem",
      duracion: "8-12 months",
      objetivo: "Deploy a decentralized corporate venture model driven by autonomous employee-led teams",
      acciones: [
        {
          numero: 1,
          titulo: "Evolve into an internal Venture Capital model",
          descripcion: "Operate like a VC. Let teams pitch for capital, allocate phantom equity shares to creators, and define clear corporate exit pathways for successful projects.",
          tiempo: "12-16 weeks",
          dueno: "Strategy + CEO"
        },
        {
          numero: 2,
          titulo: "Implement autonomous team governance",
          descripcion: "Delegate operational spending and execution rights to validated intrapreneurial teams. Replace heavy micromanagement with milestone-based OKR reviews.",
          tiempo: "6-8 weeks",
          dueno: "Leadership"
        },
        {
          numero: 3,
          titulo: "Deploy an independent innovation space/lab",
          descripcion: "Set up a physical or virtual hub where incubated teams can work, access experts, and leverage rapid-prototyping toolkits with complete autonomy.",
          tiempo: "6-8 weeks",
          dueno: "Human Resources + Leadership"
        },
        {
          numero: 4,
          titulo: "Track ecosystem health and graduate rates",
          descripcion: "Monitor: idea graduation rates, cost-efficiency of pilots, employee creative confidence scores, and revenue generated from internal spin-offs.",
          tiempo: "4-6 weeks",
          dueno: "Innovation"
        }
      ]
    }
  },

  // ===== P8: THE DISRUPTIVE INNOVATOR (Contributory + R&D) =====
  contributiva_id: {
    artesanal: {
      titulo: "Focussed Disruptive Exploration",
      duracion: "3-4 months",
      objetivo: "Define clear horizons and set basic targets for technological exploration",
      acciones: [
        {
          numero: 1,
          titulo: "Audit and catalog relevant emerging technologies",
          descripcion: "Create a technology matrix mapping: AI, advanced data science, IoT, and Cloud architectures. Score them by potential impact and business relevance.",
          tiempo: "4-6 weeks",
          dueno: "Strategy + R&D Leadership"
        },
        {
          numero: 2,
          titulo: "Set up basic technology monitoring routines",
          descripcion: "Delegate R&D members to spend a few hours weekly tracking relevant tech forums, patent databases, and research reports (arXiv, Scholar), logging trends.",
          tiempo: "2-3 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 3,
          titulo: "Reserve a dedicated exploration budget (15-20% capacity)",
          descripcion: "Formally set aside up to 20% of your technical bandwidth exclusively for testing future-proof concepts, completely isolated from maintenance tasks.",
          tiempo: "1 week",
          dueno: "CEO / R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Assign tech domains to specific 'guardians'",
          descripcion: "Designate specific technical mentors to own the monitoring of key tech fields, ensuring they report back to the team monthly with actionable insights.",
          tiempo: "1-2 weeks",
          dueno: "R&D Leadership"
        }
      ]
    },
    industrial: {
      titulo: "Consolidated Disruption Sprints",
      duracion: "5-6 months",
      objetivo: "Develop structured rapid prototyping and tech validation cycles",
      acciones: [
        {
          numero: 1,
          titulo: "Standardize rapid prototyping frameworks",
          descripcion: "Train the tech team in Design Sprints and rapid software/hardware prototyping. Build a framework to construct and demo concepts in weeks, not months.",
          tiempo: "6-8 weeks",
          dueno: "Training + R&D Leadership"
        },
        {
          numero: 2,
          titulo: "Establish clear technical-readiness transfer gates",
          descripcion: "Define technical handoff checklists (using TRL benchmarks) to bridge experimental lab projects into the standard, commercial product roadmap.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership + Strategy"
        },
        {
          numero: 3,
          titulo: "Initiate open R&D collaborations with startups and research hubs",
          descripcion: "Build partnerships with universities or early-stage tech startups. Outsource complex base-level testing and license novel algorithms to speed up delivery.",
          tiempo: "8-12 weeks",
          dueno: "Business Development + R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Define metrics for disruptive experiment pipelines",
          descripcion: "Track: number of technologies prototyped, speed of MVP validation, patented assets developed, and pipeline success ratios.",
          tiempo: "3-4 weeks",
          dueno: "R&D Leadership"
        }
      ]
    },
    agil: {
      titulo: "Breakthrough Innovation Laboratory",
      duracion: "8-12 months",
      objetivo: "Deploy an independent, agile laboratory focused entirely on future technologies and business models",
      acciones: [
        {
          numero: 1,
          titulo: "Launch a separate R&D lab for radical innovation",
          descripcion: "Separate a dedicated team of engineers and researchers (3-5 members) from standard business lines. Enable them to test high-risk hypotheses without operational interference.",
          tiempo: "8-12 weeks",
          dueno: "R&D Leadership + CEO"
        },
        {
          numero: 2,
          titulo: "Design corporate venture funding mechanics",
          descripcion: "Set up a venture vehicle to invest in early-stage startups working on core technologies. Gain valuable, fast insights and integrate software/hardware early.",
          tiempo: "8-12 weeks",
          dueno: "Strategy + CEO"
        },
        {
          numero: 3,
          titulo: "Deploy spin-off and IP licensing pathways",
          descripcion: "Draft clear guidelines to commercialize laboratory assets via technology licensing, joint venture partnerships, or by spinning off independent corporate entities.",
          tiempo: "8-12 weeks",
          dueno: "R&D Leadership + Legal"
        },
        {
          numero: 4,
          titulo: "Set up R&D value-capture indicators",
          descripcion: "Measure long-term asset value: generated patents, peer-reviewed publications, licensing revenue, and newly created business lines.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership"
        }
      ]
    }
  },

  // ===== P9: THE CREATIVE MARKETER (Contributory + Marketing) =====
  contributiva_mercadeo: {
    artesanal: {
      titulo: "Market Expansion Strategy",
      duracion: "3-4 months",
      objetivo: "Develop a structured opportunity analysis and target-market roadmap",
      acciones: [
        {
          numero: 1,
          titulo: "Map and prioritize target markets",
          descripcion: "Analyze potential customer segments, verticals, or geographic markets. Rank them using a simple opportunity matrix: market size × entry ease × capability fit.",
          tiempo: "4-6 weeks",
          dueno: "Strategy + Marketing"
        },
        {
          numero: 2,
          titulo: "Formulate a standardized market evaluation scorecard",
          descripcion: "Create a simple scorecard template to evaluate new segments: What are the buyer personas? What are key acquisition barriers? What are pricing expectations?",
          tiempo: "3-4 weeks",
          dueno: "Strategy"
        },
        {
          numero: 3,
          titulo: "Select 2-3 target segments for a 12-month pilot",
          descripcion: "Focus resources. Instead of general market expansion, select 3 specific segments. Assign clear budgets and milestones for each pilot.",
          tiempo: "2-3 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 4,
          titulo: "Appoint dedicated segment owners",
          descripcion: "Assign specific product or marketing managers to own each segment pilot, ensuring accountability for research and initial customer contact.",
          tiempo: "1-2 weeks",
          dueno: "Leadership Team"
        }
      ]
    },
    industrial: {
      titulo: "Rigorous Market Validation",
      duracion: "5-6 months",
      objetivo: "Deploy systematic customer discovery, interview processes, and MVP market tests",
      acciones: [
        {
          numero: 1,
          titulo: "Train team in systematic customer discovery",
          descripcion: "Standardize client validation interviews. Train sales and marketing reps to conduct unbiased problem interviews and draft highly descriptive Lean Canvases.",
          tiempo: "6-8 weeks",
          dueno: "Training + Strategy"
        },
        {
          numero: 2,
          titulo: "Build an expansion fast-track lane",
          descripcion: "Design a rapid-approval workflow to allocate ad spend and deploy promotional campaigns quickly once an opportunity meets scorecard standards.",
          tiempo: "3-4 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 3,
          titulo: "Leverage local channel partnerships",
          descripcion: "Partner with regional distributors, agencies, or influencers who understand the new target audience. Establish clear revenue-sharing terms.",
          tiempo: "8-12 weeks",
          dueno: "Business Development"
        },
        {
          numero: 4,
          titulo: "Measure segment-acquisition efficiency",
          descripcion: "Track segment metrics: Cost Per Acquisition (CAC), lead-to-opportunity velocity, average deal value, and feedback scores on new pitches.",
          tiempo: "3-4 weeks",
          dueno: "Analytics"
        }
      ]
    },
    agil: {
      titulo: "Distributed Market Adaptation",
      duracion: "8-12 months",
      objetivo: "Transition to a flat, highly responsive multi-market operation model",
      acciones: [
        {
          numero: 1,
          titulo: "Transition to a localized expansion model",
          descripcion: "Organize autonomous marketing and sales squads for each major segment. Allow them to tailor offers to local contexts, keeping the technology core standard.",
          tiempo: "12-16 weeks",
          dueno: "Strategy + CEO"
        },
        {
          numero: 2,
          titulo: "Build segment-decision governance guidelines",
          descripcion: "Define which decisions are handled locally (e.g., ad copywriting, pricing bundles) and which require global approval (e.g., core branding, data security).",
          tiempo: "8-12 weeks",
          dueno: "Strategy + Leadership"
        },
        {
          numero: 3,
          titulo: "Standardize scale and deployment playbooks",
          descripcion: "Draft standardized, reproducible execution playbooks: how to spin up regional campaigns, how to set up local CRM workflows, and how to scale ad spend.",
          tiempo: "10-12 weeks",
          dueno: "Operations"
        },
        {
          numero: 4,
          titulo: "Deploy multi-market health scorecards",
          descripcion: "Track growth rates across segments, customer retention curves, market share penetration, and localized campaign ROI.",
          tiempo: "4-6 weeks",
          dueno: "Strategy / Analytics"
        }
      ]
    }
  },

  // ===== P10: THE AGENT OF CHANGE (Proactive + Talent) =====
  proactiva_talento: {
    artesanal: {
      titulo: "Activating Core Transformation Agents",
      duracion: "3-4 months",
      objetivo: "Identify, empower, and train natural internal change advocates to guide cultural progress",
      acciones: [
        {
          numero: 1,
          titulo: "Identify internal cultural change agents",
          descripcion: "Audit who in the organization actively challenges old procedures and champions team-work. Select 10-20 advocates to act as the core transformation team.",
          tiempo: "2-3 weeks",
          dueno: "Human Resources + Leadership"
        },
        {
          numero: 2,
          titulo: "Launch transformational leadership workshops",
          descripcion: "Design a monthly session (2-3 hours) for change agents: training on change management, managing team resistance, and articulating a clear cultural vision.",
          tiempo: "6-8 weeks",
          dueno: "Training + Leadership"
        },
        {
          numero: 3,
          titulo: "Open leadership channels to share the vision",
          descripcion: "Create platforms where change agents can present ideas to leadership: periodic townhalls, open workspaces, or strategic feedback loops.",
          tiempo: "2-3 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 4,
          titulo: "Nominate cultural champions in key areas",
          descripcion: "Formally nominate 1-2 champions in each division. Empower them to model collaborative behaviors, run local retrospectives, and surface friction.",
          tiempo: "1-2 weeks",
          dueno: "Leadership Team"
        }
      ]
    },
    industrial: {
      titulo: "Sustained Culture Transformation",
      duracion: "5-6 months",
      objetivo: "Sistematize organizational change, metrics, and training frameworks",
      acciones: [
        {
          numero: 1,
          titulo: "Adopt structured change management methodologies",
          descripcion: "Standardize Kotter's 8-step framework (or equivalent) to plan changes. Train department heads on creating urgency, securing quick wins, and embedding changes.",
          tiempo: "6-8 weeks",
          dueno: "Training + Leadership"
        },
        {
          numero: 2,
          titulo: "Establish a fast-track for team-culture initiatives",
          descripcion: "Create an expedited approval lane for workspace or process improvement concepts, allocating quick-implementation budgets.",
          tiempo: "3-4 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 3,
          titulo: "Align culture initiatives with business OKRs",
          descripcion: "Connect cultural progress to strategic business targets. Ensure and track that organizational design directly supports commercial agility.",
          tiempo: "4-6 weeks",
          dueno: "Leadership + Strategy"
        },
        {
          numero: 4,
          titulo: "Build scaling processes for change playbooks",
          descripcion: "When an HR or cultural pilot shows success in one area, document the playbook, train other managers, and scale the policy company-wide.",
          tiempo: "4-6 weeks",
          dueno: "Leadership Team"
        }
      ]
    },
    agil: {
      titulo: "Continuous Organizational Evolution",
      duracion: "8-12 months",
      objetivo: "Develop a flat, highly adaptive, and self-improving cultural architecture",
      acciones: [
        {
          numero: 1,
          titulo: "Transition into an organic, adaptive culture",
          descripcion: "Embed continuous adaptation into the corporate DNA. Facilitate ongoing team-level retrospectives, decentralized decision-making, and open feedback loops.",
          tiempo: "12-16 weeks",
          dueno: "CEO + Leadership Team"
        },
        {
          numero: 2,
          titulo: "Implement adaptive, responsive governance",
          descripcion: "Replace rigid annual reviews with quarterly OKRs, distributed authorization limits, and fast feedback loops to steer operations on the fly.",
          tiempo: "8-12 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 3,
          titulo: "Set up an organizational design sandbox",
          descripcion: "Experiment with advanced workplace structures: asynchronous-first workflows, flat networks, or AI-integrated teams. Document performance.",
          tiempo: "10-12 weeks",
          dueno: "Human Resources + Leadership"
        },
        {
          numero: 4,
          titulo: "Deploy long-term cultural health dashboards",
          descripcion: "Measure organizational agility, continuous employee engagement, team adaptability, upskilling speed, and high-performer retention rates.",
          tiempo: "4-6 weeks",
          dueno: "Leadership Team"
        }
      ]
    }
  },

  // ===== P11: THE SCIENTIFIC PIONEER (Proactive + R&D) =====
  proactiva_id: {
    artesanal: {
      titulo: "Foresight Research Architecture",
      duracion: "3-4 months",
      objetivo: "Structure basic lines of advanced technological and scientific inquiry",
      acciones: [
        {
          numero: 1,
          titulo: "Identify core future research domains",
          descripcion: "Audit emerging tech fields (e.g., neural networks, materials science, distributed databases). Build an opportunities matrix: market size × tech readiness.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership + Strategy"
        },
        {
          numero: 2,
          titulo: "Set up peer-review mechanisms for new lines",
          descripcion: "Define: how does the team propose and evaluate a new research direction? Create a simple template detailing technical objectives, required APIs, and potential IP.",
          tiempo: "3-4 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 3,
          titulo: "Secure a protected exploratory R&D budget",
          descripcion: "Formally assign a minimum of 25% of R&D resources exclusively for advanced research, ensuring it cannot be diverted to fix everyday bugs.",
          tiempo: "1-2 weeks",
          dueno: "CEO / CFO"
        },
        {
          numero: 4,
          titulo: "Appoint technology domain mentors",
          descripcion: "Assign specialized engineers to own each chosen research field. They monitor academic papers, industry developments, and present monthly updates.",
          tiempo: "1-2 weeks",
          dueno: "R&D Leadership"
        }
      ]
    },
    industrial: {
      titulo: "Structured Advanced Research",
      duracion: "5-6 months",
      objetivo: "Consolidate scientific inquiry with formal TRL milestones and international research partnerships",
      acciones: [
        {
          numero: 1,
          titulo: "Standardize advanced R&D methodologies",
          descripcion: "Formalize systematic research sprints, hypothesis peer reviews, and strict experimental design rules. Train researchers in experimental rigor.",
          tiempo: "6-8 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 2,
          titulo: "Implement standard Technology Readiness Levels (TRL)",
          descripcion: "Deploy TRL gates (1-9) to guide research maturity, setting formal metrics that a technical concept must hit before moving to product development.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership + Strategy"
        },
        {
          numero: 3,
          titulo: "Establish partnerships with top universities and institutes",
          descripcion: "Collaborate with international technical universities or private labs. Sponsor research projects, co-publish papers, or hire graduate researchers.",
          tiempo: "8-12 weeks",
          dueno: "R&D Leadership"
        },
        {
          numero: 4,
          titulo: "Deploy intellectual property capture processes",
          descripcion: "Build an explicit workflow: how are discoveries cataloged, when are patents drafted, and how are open-source and trade secrets balanced?",
          tiempo: "4-6 weeks",
          dueno: "Legal + R&D Leadership"
        }
      ]
    },
    agil: {
      titulo: "Ecosystem Research Laboratory",
      duracion: "8-12 months",
      objetivo: "Form an independent research center utilizing virtual testing, open IP, and agile science",
      acciones: [
        {
          numero: 1,
          titulo: "Establish an independent advanced research lab",
          descripcion: "Set up an autonomous corporate laboratory focused solely on deep tech, with its own management structure and complete freedom from commercial sprint deadlines.",
          tiempo: "12-16 weeks",
          dueno: "R&D Leadership + CEO"
        },
        {
          numero: 2,
          titulo: "Design deep tech venture investment schemes",
          descripcion: "Set up a corporate venture arm to seed university spin-offs, license raw technology, or invest in early-stage R&D startups in your space.",
          tiempo: "8-12 weeks",
          dueno: "Strategy + CEO"
        },
        {
          numero: 3,
          titulo: "Deploy agile IP-commercialization pathways",
          descripcion: "Create clear, rapid-action protocols to license patents out, spin off internal technology units into startups, or sell secondary research assets.",
          tiempo: "8-12 weeks",
          dueno: "R&D Leadership + Legal"
        },
        {
          numero: 4,
          titulo: "Track scientific and financial value creation",
          descripcion: "Monitor indicators: filed patents, scientific publications, licensing revenue, startups successfully spun off, and long-term tech barriers built.",
          tiempo: "4-6 weeks",
          dueno: "R&D Leadership"
        }
      ]
    }
  },

  // ===== P12: THE EXPLORER (Proactive + Marketing) =====
  proactiva_mercadeo: {
    artesanal: {
      titulo: "Business Model Exploration",
      duracion: "3-4 months",
      objetivo: "Sistematize the discovery and evaluation of alternative business models",
      acciones: [
        {
          numero: 1,
          titulo: "Map alternative business model patterns",
          descripcion: "Analyze diverse models (subscription, marketplace, pay-per-use, platform) relevant to your sector. Map their financial and operational mechanics.",
          tiempo: "4-6 weeks",
          dueno: "Strategy + Leadership"
        },
        {
          numero: 2,
          titulo: "Build a model evaluation framework",
          descripcion: "Define: How do we evaluate a business model change? What are key test metrics? Create a light validation template to track experiments.",
          tiempo: "3-4 weeks",
          dueno: "Strategy"
        },
        {
          numero: 3,
          titulo: "Select 1-2 new models for micro-pilots",
          descripcion: "Choose up to two promising model variations to test in the next 6-12 months. Assign specific, limited resources to execute them.",
          tiempo: "2-3 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 4,
          titulo: "Form a dedicated business model sprint team",
          descripcion: "Appoint 2-3 members to run the pilots (can be part-time). Ensure they have clear accountability and direct access to leadership.",
          tiempo: "1-2 weeks",
          dueno: "CEO / Leadership"
        }
      ]
    },
    industrial: {
      titulo: "Systematic Model Transformation",
      duracion: "5-6 months",
      objetivo: "Deploy structured business-model canvas designs, testing loops, and market pilots",
      acciones: [
        {
          numero: 1,
          titulo: "Train team in Business Model Canvas design",
          descripcion: "Deliver structured workshops on Lean Canvas, value proposition design, and pricing strategy. Standardize how new business models are charted and validated.",
          tiempo: "6-8 weeks",
          dueno: "Training + Strategy"
        },
        {
          numero: 2,
          titulo: "Establish a rapid-funding lane for validated models",
          descripcion: "Build an expedited pathway to secure growth funds once a pilot model passes key conversion and retention tests in the market.",
          tiempo: "3-4 weeks",
          dueno: "Leadership Team"
        },
        {
          numero: 3,
          titulo: "Form strategic alliances with model experts",
          descripcion: "Partner with specialized consultants, venture builders, or startups who have experience in platform or subscription transitions.",
          tiempo: "8-12 weeks",
          dueno: "Strategy + Business Development"
        },
        {
          numero: 4,
          titulo: "Track model-validation economics",
          descripcion: "Measure: acquisition cost under the new model, churn rates, average revenue per user (ARPU), and overall cashflow efficiency compared to legacy models.",
          tiempo: "3-4 weeks",
          dueno: "Analytics"
        }
      ]
    },
    agil: {
      titulo: "Ambidextrous Business Model Architecture",
      duracion: "8-12 months",
      objetivo: "Develop the capability to operate multiple business models in parallel (exploitative and exploratory)",
      acciones: [
        {
          numero: 1,
          titulo: "Transition into an ambidextrous organization",
          descripcion: "Evolve your structure to manage multiple models in parallel: run the legacy engine (generates cashflow) and scale exploratory models (creates future value).",
          tiempo: "12-16 weeks",
          dueno: "CEO + Leadership Team"
        },
        {
          numero: 2,
          titulo: "Implement dual-model governance",
          descripcion: "Establish specific capital allocation rules, separate KPI targets, and dedicated decision paths for both the core business and new models.",
          tiempo: "8-12 weeks",
          dueno: "CEO + CFO"
        },
        {
          numero: 3,
          titulo: "Set up a continuous business model sandbox",
          descripcion: "Run an ongoing business model incubator that constantly tests new monetization theories, partnerships, and value propositions.",
          tiempo: "10-12 weeks",
          dueno: "Strategy + CEO"
        },
        {
          numero: 4,
          titulo: "Monitor multi-model strategic health",
          descripcion: "Track revenue mix (legacy vs. new), profitability per model, innovation pipeline health, and long-term organizational preparedness.",
          tiempo: "4-6 weeks",
          dueno: "Strategy / CFO"
        }
      ]
    }
  }
};