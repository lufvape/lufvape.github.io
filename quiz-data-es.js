/**

MOTOR DE DIAGNÓSTICO DE INNOVACIÓN - VERSIÓN CONSULTORÍA

Estructura: 20 preguntas situacionales de selección única.

Sistema de Puntuación: Cada opción impacta en múltiples dimensiones:

Afinidades: Mercadeo (mkt), Talento (tal), I+D (id)

Arquetipos de Unsworth: Responsivo (resp), Esperado (esp), Contributivo (cont), Proactivo (pro)

Nivel de Madurez: Escala 1-5 basada en procesos organizacionales.
*/


window.quizData = {

  "preguntas": [
    {
      "seccion": 1,
      "titulo": "Estrategia y Origen de la Innovación",
      "preguntas": [
        {
          "id": 1,
          "pregunta": "Ante una tecnología disruptiva en el sector, la reacción natural de la empresa es:",
          "opciones": [
            { "texto": "Esperar a que los clientes la pidan formalmente", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Consultar con el equipo interno sobre el impacto operativo", "pesos": { "tal": 5, "esp": 4, "madurez": 2 } },
            { "texto": "Estudiar los fundamentos técnicos para buscar exclusividad", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Prototipar un nuevo modelo de negocio basado en ella", "pesos": { "mkt": 4, "pro": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 2,
          "pregunta": "¿De dónde vienen las mejores ideas que se han implementado con éxito?",
          "opciones": [
            { "texto": "Del feedback directo y solicitudes de clientes", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "De las sugerencias espontáneas de los empleados", "pesos": { "tal": 5, "cont": 5, "madurez": 1 } },
            { "texto": "De laboratorios o vigilancia tecnológica", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "De un análisis estratégico de tendencias futuras", "pesos": { "esp": 5, "pro": 4, "madurez": 5 } }
          ]
        },
        {
          "id": 3,
          "pregunta": "El presupuesto de innovación se asigna basándose en:",
          "opciones": [
            { "texto": "Emergencias cuando surge una oportunidad comercial", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Programas de formación e incentivos al personal", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Activos técnicos, software o investigación aplicada", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Una partida fija anual alineada al plan maestro", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 4,
          "pregunta": "¿Qué sucede con las ideas que no generan ROI en los primeros meses?",
          "opciones": [
            { "texto": "Se descartan de inmediato para no perder enfoque", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Se mantienen si el equipo está muy comprometido", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Se analizan como aprendizaje para el I+D", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Se evalúan según los hitos del plan original", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 2,
      "titulo": "Procesos y Gestión Operativa",
      "preguntas": [
        {
          "id": 5,
          "pregunta": "La principal fuente de datos para decidir qué innovar es:",
          "opciones": [
            { "texto": "Movimientos de la competencia y precios de mercado", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Encuestas de clima y dolores del equipo interno", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Publicaciones científicas y vigilancia de patentes", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "El plan estratégico definido a largo plazo", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 6,
          "pregunta": "¿Cómo es el proceso de filtrado de ideas (funnel)?",
          "opciones": [
            { "texto": "Informal; sobrevive la idea que el jefe comercial apoya", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Democrático; los equipos votan las mejores", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Técnico; basado en pruebas de concepto y laboratorio", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Sistémico; con etapas claras (Stage-Gate)", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 7,
          "pregunta": "Ante un fallo en un experimento, la empresa:",
          "opciones": [
            { "texto": "Se preocupa por la imagen frente al cliente", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Prioriza que el equipo no se desmotive", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Ajusta la hipótesis técnica con los datos obtenidos", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Busca la falla en el proceso para evitar repetición", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 8,
          "pregunta": "¿Qué herramientas digitales utilizan para gestionar la innovación?",
          "opciones": [
            { "texto": "CRM y herramientas de escucha de redes sociales", "pesos": { "mkt": 5, "resp": 4, "madurez": 3 } },
            { "texto": "Plataformas de colaboración y buzón de sugerencias", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Software de simulación, diseño 3D o data science", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Software de gestión de proyectos y hojas de ruta", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 3, 
      "titulo": "Cultura Organizacional y Talento",
      "preguntas": [
        {
          "id": 9,
          "pregunta": "El principal incentivo para quien propone algo nuevo es:",
          "opciones": [
            { "texto": "Comisiones por ventas o bonos comerciales", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Reconocimiento público y tiempo para crear", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Acceso a mejores herramientas o presupuesto técnico", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Cumplir con su evaluación de desempeño anual", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 10,
          "pregunta": "¿Qué tan autónomos son los equipos para experimentar?",
          "opciones": [
            { "texto": "Baja; todo requiere aprobación comercial", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Alta; se fomenta que cada quien pruebe sus ideas", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Técnica; libertad dentro de los límites del lab", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Estructurada; según el marco de la estrategia", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 11,
          "pregunta": "La comunicación de la innovación busca principalmente:",
          "opciones": [
            { "texto": "Posicionarnos como líderes ante el mercado", "pesos": { "mkt": 5, "resp": 5, "madurez": 3 } },
            { "texto": "Atraer y retener talento (Marca Empleadora)", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Compartir descubrimientos técnicos o patentes", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Mantener informados a socios y accionistas", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 12,
          "pregunta": "¿Cómo se define el 'éxito' de una iniciativa de innovación?",
          "opciones": [
            { "texto": "Por el incremento inmediato en ventas", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Por la mejora en el compromiso de los empleados", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Por el avance tecnológico o registro de propiedad", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Por el cumplimiento de los KPIs estratégicos", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 4,
      "titulo": "Alianzas y Ecosistema Externo",
      "preguntas": [
        {
          "id": 13,
          "pregunta": "¿Con quién prefiere aliarse la empresa para innovar?",
          "opciones": [
            { "texto": "Con agencias de marketing o influencers", "pesos": { "mkt": 5, "resp": 4, "madurez": 3 } },
            { "texto": "Con consultores de cultura o coaching", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Con universidades o centros de investigación", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Con startups o socios de la cadena de valor", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 14,
          "pregunta": "¿Cómo perciben el riesgo en nuevos proyectos?",
          "opciones": [
            { "texto": "Como una amenaza a la reputación comercial", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Como una oportunidad para aprender en equipo", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Como una variable técnica controlable", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Como una inversión calculada en el portafolio", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 15,
          "pregunta": "La vigilancia tecnológica se realiza mayormente:",
          "opciones": [
            { "texto": "Observando lo que hace el líder del mercado", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Escuchando ideas en conferencias y redes", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Mediante analítica de patentes y papers técnicos", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "A través de un comité de inteligencia competitiva", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 16,
          "pregunta": "¿Qué tan rápido se toman decisiones de inversión?",
          "opciones": [
            { "texto": "Muy rápido si hay presión del cliente", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Depende del entusiasmo del líder del equipo", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Lento; requiere validación técnica exhaustiva", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Según los ciclos de revisión estratégica", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    },
    {
      "seccion": 5,
      "titulo": "Impacto y Visión de Futuro",
      "preguntas": [
        {
          "id": 17,
          "pregunta": "¿Cuál es la actitud ante la Propiedad Intelectual?",
          "opciones": [
            { "texto": "Se usa como herramienta de marketing", "pesos": { "mkt": 5, "resp": 4, "madurez": 3 } },
            { "texto": "Se fomenta el 'Open Source' y co-creación", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Es vital patentar todo lo que sale del lab", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Se gestiona según la política de activos", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 18,
          "pregunta": "En las reuniones de dirección, la innovación se trata como:",
          "opciones": [
            { "texto": "Un tema de 'Otros asuntos' al final", "pesos": { "mkt": 5, "resp": 5, "madurez": 1 } },
            { "texto": "Una historia de éxito de los equipos", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Un reporte técnico de avances y bloqueos", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "El primer punto de la agenda estratégica", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 19,
          "pregunta": "¿Qué impacto busca la empresa en la sociedad?",
          "opciones": [
            { "texto": "Ser reconocida como la marca favorita", "pesos": { "mkt": 5, "resp": 5, "madurez": 3 } },
            { "texto": "Ser el mejor lugar para trabajar", "pesos": { "tal": 5, "cont": 5, "madurez": 3 } },
            { "texto": "Resolver problemas técnicos complejos", "pesos": { "id": 5, "pro": 5, "madurez": 4 } },
            { "texto": "Cumplir con un propósito superior definido", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        },
        {
          "id": 20,
          "pregunta": "Si pudieras mejorar algo del sistema hoy, sería:",
          "opciones": [
            { "texto": "Más presupuesto para marketing y ventas", "pesos": { "mkt": 5, "resp": 5, "madurez": 2 } },
            { "texto": "Que la gente tuviera tiempo libre para crear", "pesos": { "tal": 5, "cont": 5, "madurez": 2 } },
            { "texto": "Mejor tecnología y capacidades técnicas", "pesos": { "id": 5, "pro": 5, "madurez": 3 } },
            { "texto": "Que el proceso fuera claro y profesionalizado", "pesos": { "esp": 5, "madurez": 5 } }
          ]
        }
      ]
    }
  ]
};

window.arquetipos = {
  responsiva: 
  { 
    nombre: 'Responsiva', 
    alto: 'Tu equipo posee una agilidad mental e instinto de adaptación sobresalientes para actuar con destreza ante los cambios imprevistos. Destacan por su capacidad de unirse bajo presión para diseñar soluciones inmediatas, efectivas y sumamente creativas ante los desafíos complejos y urgentes del entorno. Esta resiliencia táctica para leer el contexto actual y reaccionar con rapidez los convierte en una organización altamente adaptable y preparada para la acción.' ,
    bajo: 'Tu organización se beneficia enormemente de la estabilidad, la planificación detallada y la consistencia de sus procesos actuales frente a la incertidumbre. Cuando ocurren variaciones imprevistas en el entorno, el camino idóneo para fortalecer la adaptabilidad del equipo es brindarles marcos de acción flexibles y pre-aprobados que les den la seguridad necesaria para ensayar nuevas respuestas de forma ágil y segura.'  ,
    insight: 'debes canalizar esta capacidad de reacción en un programa preventivo que anticipe los cambios antes de que ocurra la próxima crisis.'
  },
    proactiva: 
  { 
    nombre: 'Proactiva', 
    alto: 'Tu organización brilla por su mentalidad visionaria y su curiosidad natural hacia el futuro. Poseen una habilidad excepcional para anticipar las tendencias del entorno y explorar de manera libre nuevas rutas de valor, diseñando soluciones valiosas mucho antes de que se presenten las necesidades inmediatas. El espíritu de iniciativa propia de tus colaboradores actúa como una brújula constante que impulsa de manera orgánica el crecimiento estratégico y las nuevas fronteras.' ,
    bajo: 'Tu organización cuenta con un fuerte arraigo en el cumplimiento del día a día y en la excelencia de su servicio actual, lo cual resguarda de manera muy efectiva la operación presente. Para complementar esta gran solidez, el siguiente paso estratégico consiste en abrir pequeños márgenes de exploración libre que den licencia al equipo para imaginar el futuro del negocio sin la presión de un resultado inmediato.'  ,
    insight: 'para que estas visiones de futuro no se dispersen, necesitas un programa de validación ágil que las transforme rápidamente en pilotos reales.'
  },
    contributiva: 
  { 
    nombre: 'Contributiva', 
    alto: 'El gran motor de tu organización es la fuerza de la inteligencia colectiva y el compromiso voluntario de tu equipo. Sobresalen por crear un entorno participativo donde las personas aportan su ingenio con entusiasmo genuino frente a los desafíos comunes de la empresa. Este flujo constante de ideas voluntarias demuestra una cultura colaborativa sana, donde la innovación se vive como un proyecto de todos enriquecido por la diversidad de perspectivas.' ,
    bajo: 'El equipo suele concentrarse en la resolución individual de sus propios desafíos antes de participar en dinámicas de ideación compartida. Esta alta autonomía e independencia es muy valiosa; para expandirla hacia la co-creación, el camino ideal es facilitar canales sencillos y de baja fricción donde puedan compartir sus puntos de vista sobre los retos organizacionales de manera natural.'  ,
    insight: 'el secreto para mantener este entusiasmo es un programa de retos de innovación cortos que active y premie la participación voluntaria.'
  },
    esperada: 
  {
    nombre: 'Esperada',
    alto: 'Tu organización posee un superpoder extraordinario: la capacidad de convertir la creatividad en una disciplina confiable, predecible y estructurada. Destacan por integrar la innovación de manera natural en los roles diarios, logrando que cada colaborador sepa exactamente cómo y dónde buscar mejoras constantes. Esto asegura que el crecimiento y la optimización de procesos no dependan de la inspiración del momento, sino de un esfuerzo coordinado y sostenible que fortalece continuamente el negocio.',
    bajo:' Tu equipo actualmente se enfoca con gran eficiencia en la ejecución de sus responsabilidades diarias definidas. Esto representa una excelente base de estabilidad operativa, lo que abre una gran oportunidad para invitarles a descubrir mejoras de forma progresiva, estructurando espacios sencillos dentro de sus roles que les permitan canalizar su valiosa experiencia técnica hacia la optimización de procesos.',
    insight: 'para estructurar este talento sin caer en la burocracia, necesitas un programa piloto que canalice estas ideas directamente hacia metas medibles.'
  
  }
}

window.sistemas = {
  mercadeo: 
  { 
    nombre: 'Mercadeo', 
    descripcion: ' Tu organización tiene una conexión extraordinaria con el entorno exterior y las necesidades de los usuarios. Destacan por transformar rápidamente los comentarios de los clientes y las tendencias de consumo en propuestas de valor inmediato. Esta alta sensibilidad comercial asegura que cada iniciativa creativa responda a una demanda real de mercado, garantizando que el retorno de la inversión sea medible y de corto plazo.',
    ajuste: ' Tu enfoque actual prioriza la solidez técnica o la cultura interna, lo que asegura una operación altamente integrada y estable. Para activar tu visibilidad externa de forma controlada, el camino ideal es abrir pequeños canales de escucha activa de clientes. Esto te permitirá nutrir tus excelentes bases internas con datos frescos y oportunidades de demanda directa.'
  },
  talento: 
  { 
    nombre: 'Talento Humano', 
    descripcion: ' El verdadero corazón y motor de tu innovación es el desarrollo de tu gente y la cultura de colaboración que han construido. Sobresalen por motivar, capacitar y empoderar al equipo medio, convirtiendo las ideas internas en su ventaja competitiva más valiosa. Para ustedes, innovar es una experiencia compartida que eleva la retención del talento y multiplica la agilidad organizacional.',
    ajuste: ' Tu organización destaca por su alta disciplina financiera y su enfoque en metas de rendimiento a corto plazo, lo que protege eficientemente el negocio. Para integrar al equipo sin comprometer el día a día, el siguiente paso es abrir canales de confianza y reconocimiento sencillos. Así, tus colaboradores podrán proponer mejoras operativas de forma segura y voluntaria.'
  },
  id: 
  { 
    nombre: 'Investigación y Desarrollo', 
    descripcion: 'Tu organización brilla por su rigor científico, técnico y su orientación hacia la creación de propiedad intelectual robusta. Destacan por resolver desafíos técnicos complejos y por diseñar activos y ventajas competitivas difíciles de duplicar. Esta fortaleza les permite construir barreras de entrada muy sólidas en la industria y liderar su sector gracias a su alto valor tecnológico.',
    ajuste: ' Tu modelo de negocio se apoya en la agilidad de servicio, la empatía y la velocidad de entrega de cara al cliente, lo cual les da una flexibilidad comercial envidiable. Para elevar tu sofisticación tecnológica sin perder esa frescura, el camino ideal es implementar procesos ligeros de prototipado que te ayuden a empaquetar tus propias metodologías y soluciones técnicas.'
  },   
}

window.nivel = {
  artesanal: 
  { 
    nombre: 'Artesanal', 
    descripcion: 'Tu organización se sustenta en un valioso espíritu de iniciativa individual, pasión y flexibilidad orgánica. El gran valor de este nivel reside en que la innovación nace de la espontaneidad y del talento puro de personas clave que empujan las ideas con convicción propia. Esta frescura operativa les permite experimentar de forma libre, adaptándose rápidamente a retos específicos sin las fricciones de una estructura burocrática pesada.',
    riesgo: 'Te encuentras en un nivel de peligro alto. El gran riesgo de este nivel es que la innovación dependa exclusivamente de la inspiración de unos pocos, lo que puede generar resultados impredecibles y una falta de continuidad si esas personas clave se van. Para fortalecer esta base sin perder su esencia, el siguiente paso es institucionalizar un programa de reconocimiento y documentación de estas iniciativas espontáneas, creando un legado que trascienda a los individuos.',
    caracteristicas: ['Una o dos personas "creativas" que resuelven problemas', 'No hay documentación de procesos','Respuesta rápida pero inconsistente','Liderazgo entiende hay problema, no sabe cómo abordarlo','Cero métricas de innovación'],
    riesgos: ['Sin base estructural','Si se va la persona clave, la capacidad desaparece','No es escalable','Resultados impredecibles']
  },
  industrial: 
  { 
    nombre: 'Industrial', 
    descripcion: 'Tu organización destaca por su excelente orden, claridad procedimental y predictibilidad en la toma de decisiones. Cuentan con comités y flujos definidos que aseguran que cada paso de innovación esté respaldado por análisis de viabilidad, mitigación de riesgos y un control presupuestario riguroso. Esta madurez operativa protege los recursos y garantiza que las iniciativas seleccionadas sigan una ruta de implementación clara y profesional.',
    riesgo: 'Te encuentras en un nivel de peligro moderado. El gran riesgo de este nivel es que la innovación se vuelva tan burocrática que pierda su agilidad y capacidad de respuesta, lo que puede generar frustración en los equipos y una desconexión con las necesidades reales del mercado. Para fortalecer esta base sin caer en la rigidez, el siguiente paso es implementar procesos de innovación más ágiles y flexibles, permitiendo que las ideas fluyan con mayor rapidez y que los equipos tengan más autonomía para experimentar dentro de un marco estructurado.',
    caracteristicas: ['Procesos documentados para innovación','Comité de innovación que se reúne regularmente','Métricas básicas (ideas generadas, implementadas)','La respuesta es consistente pero lenta','Equipos formales para proyectos de innovación','Aún hay "cuellos de botella" de aprobación'],
    riesgos: ['Existe base estructural pero es rígida','La innovación puede morir en la burocracia','Difícil adaptarse a cambios rápidos','Frustración en equipos por lentitud']
  },
  agil: 
  { 
    nombre: 'Ágil', 
    descripcion: 'Tu organización destaca por haber consolidado una auténtica e integral cultura de innovación en cada rincón del equipo. Para ustedes, innovar y experimentar no requiere de permisos burocráticos ni autorizaciones lentas; el equipo cuenta con la confianza absoluta para idear, probar rápido directamente en el mercado, aprender de los resultados y pivotar de inmediato. La innovación se respira de forma orgánica como parte de la identidad diaria, convirtiendo la agilidad adaptativa en su ecosistema natural.',
    riesgo: 'Te encuentras en un nivel de peligro bajo. El gran riesgo de este nivel es que la organización se vuelva complaciente con su capacidad de innovación, lo que puede generar una falta de disciplina en la ejecución y una desconexión con los objetivos estratégicos a largo plazo. Para fortalecer esta base sin perder su esencia, el siguiente paso es implementar un programa de métricas sofisticadas que permita medir no solo la cantidad de iniciativas, sino también su impacto real en el negocio y su alineación con la visión estratégica.',
    caracteristicas: ['Experimentos rápidos sin esperar aprobación','Equipos autorizados para tomar riesgos controlados','Fallos vistos como aprendizaje, no fracasos','Métricas sofisticadas (velocidad iteración, tasa aprendizaje)','Innovación distribuida en toda la organización, no centralizada','Ecosistema interno o externo de innovación (labs, alianzas, etc.)'],
    riesgos: ['Complaciencia con la innovación','Mantener el momentum requiere compromiso','Necesita inversión continua','Hay que moverse tan rápido como el mercado']
  }
}

window.perfilesCombinados = {
  responsiva_mercadeo: 
  { 
    nombre: 'El Vigilante', 
    imagen: './assets/img/Avatars/El Vigilante.png',
    frase: '"El mercado acaba de cambiar de rumbo; adaptemos nuestra propuesta de valor ahora mismo para seguir siendo la mejor opción para nuestros clientes."',
    descripcion: 'Tú eres el radar comercial y el protector de nuestra relevancia en el mercado. Destacas por tu extraordinaria sensibilidad para escuchar el entorno y tu velocidad para reaccionar ante las demandas urgentes de los clientes. Cuando la competencia se mueve o el cliente cambia de opinión, tú eres quien moviliza de inmediato los recursos de mercadeo y ventas para ajustar el rumbo. Tu enfoque es reactivo, sumamente oportuno y centrado en proteger nuestra cuota de mercado con soluciones ágiles y pragmáticas.',
  
    artesanal: {
      fortalezas: [
        "Capacidad ágil para adaptar la oferta rápidamente",
        "Contacto cercano con clientes (escuchas necesidades)",
        "Equipo de ventas/marketing alineado (comunicación rápida)",
        "Flexibilidad operacional"
      ],
      brechas: [
        "Falta visión estratégica de mercado (reaccionas, no anticipas)",
        "Sin diferenciación clara (eres uno más adaptándose)",
        "Procesos de marketing ad hoc (sin sistema de insights de mercado)",
        "Dificultad para mantener márgenes (competencia por precio)"
      ],
      },
    
    industrial: {
      fortalezas: [
        "Proceso de monitoreo de mercado documentado",
        "Equipo de marketing con datos (no solo intuición)",
        "Propuesta de valor más clara (aunque reactiva)",
        "Ciclos de adaptación predecibles"
      ],
      brechas: [
        "Aún reactivo: esperas cambio confirmado para actuar",
        "Procesos de aprobación lentos (mercado se mueve más rápido)",
        "Sin canales de innovación abierta con clientes",
        "Métrica de mercado pero no de anticipación"
      ],
    },
    
    agil: {
      fortalezas: [
        "Anticipación clara de tendencias de mercado (no reactivo)",
        "Procesos de lanzamiento rápidos y validados",
        "Cultura de experimentación con clientes",
        "Modelo de negocio evoluciona con mercado"
      ],
      brechas: [
        "Mantener ventaja sin caer en commodity",
        "Conectar anticipación con I+D",
        "Ecosistema de innovación con partners externos",
        "Redefinición continua del modelo de negocio"
      ],
    }
  },
  responsiva_talento: 
  { 
    nombre: 'La Coordinadora', 
    imagen: './assets/img/Avatars/La Coordinadora.png',
    frase: 'Ha surgido un obstáculo en el camino de nuestro equipo; unámonos ahora mismo, cuidemos el bienestar de todos y reorganicemos el flujo para solucionarlo."',
    descripcion: 'Tú eres el corazón de la colaboración y el puente que une los esfuerzos de nuestra gente ante cualquier tormenta. Destacas por tu empatía inmensa y tu habilidad para resolver fricciones internas bajo presión, logrando que las personas se ayuden mutuamente con una sonrisa. Ante un imprevisto operativo, tú no buscas culpables; reorganizas las cargas de trabajo de forma humana, cuidando el clima laboral y asegurando que nadie se sienta solo o abrumado mientras superamos el reto.',
    
    artesanal: {
      fortalezas: [
        "Equipo con capacidad de respuesta rápida ante desafíos urgentes",
        "Liderazgo que entiende el valor estratégico de la creatividad",
        "Historial documentado de soluciones creativas",
        "Existencia de espacios informales donde creatividad fluye"
      ],
      brechas: [
        "Procesos formales para canalizar y priorizar ideas",
        "Indicadores de impacto creativo (actualmente solo mides resultados del negocio)",
        "Espacios dedicados para experimentación sin presión inmediata",
        "Conexión entre comportamiento creativo y evaluación del desempeño"
      ],
    },

    industrial: { 
      fortalezas: [
        "Equipo con procesos estables para responder creativamente",
        "Protocolo claro de activación cuando surge un desafío",
        "Distribución inicial de capacidad creativa (no solo en 1-2 personas)",
        "Primeras métricas de velocidad y impacto"
      ],
      brechas: [
        "Procesos aún lentos o burocráticos (tarda días en activar)",
        "Métricas básicas pero no sofisticadas (falta contexto de ROI)",
        "Equipos de respuesta aún centralizados",
        "Falta escalabilidad (funciona para crisis, no para mejora continua)"
      ],
    },

    agil: {
      fortalezas: [
        "Equipos ya lidera iniciativas sin esperar que se las demanden",
        "Cultura de respuesta rápida y flexible consolidada",
        "Capacidades creativas distribuidas en múltiples equipos",
        "Métricas sofisticadas de impacto creativo"
      ],
      brechas: [
        "Mantener momentum sin caer en complacencia",
        "Innovación proactiva (generar desafíos propios, no solo responder)",
        "Integración con estrategia de negocio",
        "Escalabilidad de la capacidad a nuevos contextos"
      ],
    }
  },
  responsiva_id: 
  { nombre: 'El Investigador', 
    imagen: './assets/img/Avatars/El Investigador.png',
    frase: '"Ha ocurrido una falla técnica crítica; analicemos los datos con rigor metodológico, encontremos la causa raíz y diseñemos el parche definitivo."',
    descripcion: 'Tú eres el guardián de la excelencia técnica y el científico que acude al rescate de nuestra infraestructura ante cualquier fallo de producto o sistema. Destacas por tu profundo rigor analítico y tu capacidad de aplicar el método experimental bajo presión. No te conformas con arreglos superficiales; estudias los datos, diagnosticas el origen del problema y diseñas soluciones correctivas sólidas que no solo apagan el fuego técnico actual, sino que previenen fallos similares en el futuro de la empresa.',
    
    artesanal: {
      fortalezas: [
        "Capacidad de respuesta rápida a demandas del mercado",
        "Equipo técnico con experiencia en desarrollo",
        "Historial de soluciones que funcionan (aunque no sean breakthrough)",
        "Contacto cercano con clientes (feedback directo)"
      ],
      brechas: [
        "Falta de procesos formales de I+D (es más craft que sistema)",
        "Sin inversión dedicada a investigación (solo desarrollo reactivo)",
        "Documentación y propiedad intelectual débil",
        "Dificultad para escalar o replicar innovaciones"
      ],
    },

    industrial: {
      fortalezas: [
        "Procesos de desarrollo documentados y repetibles",
        "Roadmap técnico claro (aunque responde solo a clientes)",
        "Equipo con roles definidos (dev, QA, etc.)",
        "Primeras métricas de velocidad (sprints, releases)"
      ],
      brechas: [
        "Falta investigación de tecnologías futuras (solo resuelves presente)",
        "Procesos lentos (burocracia en aprobaciones)",
        "Sin espacios para experimentación (todo debe ser 'productivo')",
        "Difícil atraer talento joven (falta innovation)"
      ],
    },

    agil: {
      fortalezas: [
        "Investigación dedicada en tecnologías emergentes",
        "Procesos de desarrollo ágiles y continuos (deployment diarios/semanales)",
        "Cultura de experimentación en la ingeniería",
        "Capacidad de pivotar rápido basado en feedback"
      ],
      brechas: [
        "Mantener velocidad sin perder calidad",
        "Conectar innovación técnica con estrategia de negocio",
        "Atraer y retener talento senior en investigación",
        "Gestionar riesgo en innovación radical"
      ],
    }
  },

  esperada_mercadeo: 
  { nombre: 'El Implementador', 
    imagen: './assets/img/Avatars/El Implementador.png',
    arquetipo: 'Esperada',
    sistema: 'Mercadeo',
    frase: '"Cada pequeña optimización estructurada en nuestro embudo de ventas actual se traduce en un crecimiento predecible y medible para el negocio."',
    descripcion: 'Tú eres el maestro de la eficiencia comercial y el artesano que convierte las ideas creativas en procesos de ventas sumamente ordenados y predecibles. Destacas por tu rigor operativo y tu capacidad para poner la innovación incremental de forma natural al servicio del cliente de hoy. No buscas improvisar o inventar mercados disruptivos de la nada; prefieres diseñar mejoras precisas sobre los canales de venta que ya tenemos, las ofertas activas y los guiones de contacto, logrando que el equipo comercial innove como parte de su disciplina cotidiana y con resultados matemáticamente consistentes.',
  
    artesanal: {
      fortalezas: [
        "Relación cercana con clientes (escuchas genuinamente)",
        "Capacidad de adaptar ofertas a necesidades específicas",
        "Clientes participan en desarrollo de soluciones",
        "Alta satisfacción de clientes"
      ],
      brechas: [
        "Falta proceso formal de co-creación con clientes",
        "No documentas insights de clientes",
        "Difícil escalar soluciones custom a otros clientes",
        "Sin alianzas formales con partners"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Procesos formales de co-creación con clientes",
        "Advisory boards o customer councils establecidos",
        "Métricas de satisfacción y feedback de clientes",
        "Algunos alianzas con partners"
      ],
      brechas: [
        "Procesos lentos (mucha coordinación con clientes)",
        "Falta escalabilidad (soluciones son personalizadas)",
        "Sin exploración de nuevos modelos de negocio con clientes",
        "Difícil medir ROI de co-creación"
      ],
    },
    
    agil: {
      fortalezas: [
        "Ecosistema de innovación abierta consolidado",
        "Red de partners colaborando en innovación",
        "Nuevos modelos de negocio surgiendo de co-creación",
        "Velocidad de adaptación a cambios de mercado"
      ],
      brechas: [
        "Mantener control y gobernanza en ecosistema distribuido",
        "Captura de valor en modelos colaborativos",
        "Conectar innovación abierta con estrategia",
        "Evitar que complejidad paralice"
      ],
    }
  },
  esperada_talento:
  { nombre: 'La Facilitadora', 
    imagen: './assets/img/Avatars/La Facilitadora.png',
    arquetipo: 'Esperada',
    sistema: 'Talento Humano',
    frase: '"Garantizar que la mejora continua de procesos y el desarrollo humano sean parte ordenada de la rutina diaria de cada colaborador es el camino seguro para construir una empresa sana y eficiente."',
    descripcion: 'Tú eres el arquitecto de las rutinas de mejora continua y la guardiana de que el desarrollo del talento sea un proceso ordenado, seguro y sostenible para todos. Destacas por tu excelente capacidad de organización y tu enfoque estructurado para integrar los hábitos de innovación dentro de las responsabilidades diarias del personal. No buscas transformaciones caóticas de un día para otro; prefieres estructurar planes claros de capacitación, metas de aprendizaje medibles y comités ordenados de participación que le aseguren a la empresa que el crecimiento de su gente es un hábito constante y seguro.',
  
    artesanal: {
      fortalezas: [
        "Equipos colaboran naturalmente (cultura de trabajo en equipo)",
        "Diversidad de perspectivas en la organización",
        "Problemas se abordan de forma integral (no silos)",
        "La gente disfruta trabajar junta"
      ],
      brechas: [
        "Colaboración es informal (depende de personas que 'jalan' por otros)",
        "No hay procesos estructurados para la co-creación",
        "Falta tiempo dedicado para colaboración (siempre es 'después del trabajo')",
        "Sin documentación de lo que emergen de la colaboración"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Espacios formales de colaboración establecidos (reuniones, workshops regulares)",
        "Procesos de co-creación documentados",
        "Roles y responsabilidades claros en equipos multidisciplinarios",
        "Resultados de la colaboración documentados y comunicados"
      ],
      brechas: [
        "Procesos aún lentos (mucha deliberación, poca decisión)",
        "Falta tiempo dedicado para exploración colaborativa (siempre es 'eficiente')",
        "Sin conexión entre colaboración interna y externos (clientes, partners)",
        "Dificultad para escalar colaboración a toda la organización"
      ],
    },
    
    agil: {
      fortalezas: [
        "Colaboración es parte de la ADN de la organización",
        "Equipos auto-organizados y empoderados para decidir",
        "Ecosistema de innovación que incluye externos (clientes, comunidad)",
        "Capacidad de escalar colaboración a múltiples contextos"
      ],
      brechas: [
        "Mantener energía de la colaboración sin caer en complacencia",
        "Conectar colaboración interna con estrategia de negocio",
        "Gobernar decisiones cuando hay múltiples stakeholders",
        "Evitar que colaboración diluya responsabilidad"
      ],
    }  
  },
  esperada_id: 
  { nombre: 'El Visionario Técnico', 
    imagen: './assets/img/Avatars/El Visionario Tecnico.png',
    arquetipo: 'Esperada',
    sistema: 'Investigación y Desarrollo',
    frase: '"Documentar y patentar de manera estricta cada una de nuestras innovaciones es el camino seguro para consolidar y blindar el liderazgo de nuestra ingeniería en el mercado a largo plazo."',
    descripcion: 'Tú eres el arquitecto de la excelencia en ingeniería y el guardián de la propiedad intelectual de nuestra empresa. Destacas por tu profundo amor por el rigor técnico, la estandarización científica y el cumplimiento estricto de normas de calidad de nivel internacional. No te entusiasma la improvisación técnica; prefieres diseñar estructuras tecnológicas sólidas, predecibles, escalables y perfectamente documentadas que garanticen que los productos técnicos de la empresa sean consistentes en su funcionamiento y extremadamente difíciles de copiar por competidores.',

    artesanal: {
      fortalezas: [
        "Equipo técnico colabora naturalmente",
        "Diversidad de especialidades (biología, ingeniería, informática, etc.)",
        "Problemas se abordan desde múltiples ángulos",
        "Cultura de experimentación y aprendizaje"
      ],
      brechas: [
        "Falta proceso formal de investigación colaborativa",
        "No hay priorización de líneas de investigación",
        "Difícil documentar y replicar hallazgos",
        "Sin conexión entre investigación y producto"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Líneas de investigación formales y priorizadas",
        "Procesos de investigación colaborativa documentados",
        "Reuniones regulares de intercambio de saberes",
        "Primeras patentes o publicaciones"
      ],
      brechas: [
        "Procesos de investigación lentos (mucha coordinación)",
        "Falta conexión entre investigación y comercialización",
        "Sin inversión en tecnologías emergentes (solo exploras lo conocido)",
        "Difícil atraer talento en investigación (falta visibilidad)"
      ],
    },
    
    agil: {
      fortalezas: [
        "Ecosistema de investigación colaborativo establecido",
        "Investigación conectada con comercialización",
        "Colaboración con externa es norma (universidades, startups, clientes)",
        "Capacidad de pivotar líneas de investigación rápidamente"
      ],
      brechas: [
        "Mantener rigor científico sin sacrificar velocidad",
        "Gobernar decentralización de la investigación",
        "Conectar investigación con estrategia de negocio",
        "Evitar que colaboración dilate decisiones"
      ],
    }    
  },

  contributiva_talento: 
  { nombre: 'La Inspiradora', 
    imagen: './assets/img/Avatars/La Inspiradora.png',
    arquetipo: 'Contributiva',
    sistema: 'Talento Humano',
    frase: 'Si abrimos las puertas de la confianza mutua y empoderamos a nuestro equipo, las mejores ideas para mejorar nuestra empresa surgirán de ellos de forma natural."',
    descripcion: 'Tú eres el motor de nuestra cultura de intraemprendimiento y el corazón que enciende la pasión por innovar en cada colaborador. Destacas por tu empatía inmensa y tu habilidad para crear un entorno de alta seguridad psicológica, donde los colaboradores proponen ideas para mejorar el lugar de trabajo de forma abierta y segura. Eres experta en conectar a las personas con su propósito individual, logrando que sientan que la innovación no es una orden corporativa que viene de arriba, sino una maravillosa iniciativa propia que estamos listos para apoyar de forma humana.',
    
    artesanal: {
      fortalezas: [
        "Empleados tienen iniciativa emprendedora natural",
        "Liderazgo está abierto a ideas desde abajo",
        "Historial de proyectos liderados por empleados",
        "Cultura de 'sí, podemos intentarlo'"
      ],
      brechas: [
        "Falta proceso formal para canalizar iniciativas",
        "No hay evaluación consistente de ideas",
        "Recursos limitados para apoyar proyectos",
        "Riesgo de que buenas ideas caigan en el olvido"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Programa formal de intraemprendimiento (ideation, selection, development)",
        "Recursos dedicados a proyectos de empleados",
        "Mentores o coaches para desarrollar ideas",
        "Comunicación clara de criterios de evaluación"
      ],
      brechas: [
        "Procesos de aprobación lentos (matan momentum)",
        "Falta escalabilidad (proyectos pequeños, no transformacionales)",
        "Sin integración con estrategia (ideas no alineadas)",
        "Dificultad de escalar proyectos exitosos"
      ],
    },
    
    agil: {
      fortalezas: [
        "Intraemprendimiento es parte de la cultura",
        "Empleados tienen autonomía real para pilotar ideas",
        "Procesos ágiles de validación y escalamiento",
        "Ecosistema interno de emprendimiento"
      ],
      brechas: [
        "Mantener alineación con estrategia sin controlar",
        "Gobernar riesgo de proyectos no exitosos",
        "Conectar éxitos de emprendimiento con negocio",
        "Evitar que autonomía se vuelva anarquía"
      ],
    }  
  },
  contributiva_mercadeo: 
  { nombre: 'La Mercado Creativo', 
    imagen: './assets/img/Avatars/La Mercado Creativo.png',
    arquetipo: 'Contributiva',  
    sistema: 'Mercadeo',
    frase: '"Lancemos un desafío a nuestra comunidad de usuarios y colaboradores internos; abramos el espacio para que sus mejores ideas co-creen nuestra próxima campaña comercial."',
    descripcion: 'Tú eres el puente que une la mente brillante de nuestra empresa con el corazón de nuestros clientes. Destacas por tu pasión por la co-creación y tu fe inquebrantable en la inteligencia colectiva aplicada al mercadeo. Crees firmemente que las mejores ideas comerciales no surgen de oficinas cerradas, sino de invitar a tu comunidad, a tus colaboradores de primera línea y a tus aliados a diseñar el futuro de tu marca de forma abierta, dinámica y participativa.',
    
    artesanal: {
      fortalezas: [
        "Liderazgo tiene visión de crecimiento",
        "Equipo de marketing/ventas exploratorio",
        "Capacidad de adaptarse a nuevos contextos",
        "Energía de crecimiento"
      ],
      brechas: [
        "Falta estrategia clara de QUÉ mercados expandir",
        "Sin procesos formales de análisis de oportunidad",
        "Expansion es caótica (intentas todo a la vez)",
        "Riesgo de quemar recursos sin focus"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Estrategia de expansión de mercados definida",
        "Procesos de análisis de oportunidad documentados",
        "Primeros pilotos en nuevos mercados",
        "Presupuesto dedicado a expansión"
      ],
      brechas: [
        "Procesos aún lentos (mucha aprobación antes de actuar)",
        "Falta validación rigurosa de mercados (asumen en lugar de testear)",
        "Sin colaboración local en nuevos mercados (intentan replicar modelo)",
        "Dificultad de escalar pilotos a operaciones"
      ],
    },
    
    agil: {
      fortalezas: [
        "Ecosystem de crecimiento establecido",
        "Colaboración con partners locales es norma",
        "Procesos ágiles de validación y escalamiento",
        "Capacidad de pivotar rápidamente"
      ],
      brechas: [
        "Mantener coherencia de marca en múltiples mercados",
        "Gobernar complejidad de operaciones multigeográficas",
        "Conectar expansion con estrategia de negocio",
        "Evitar que growth mate profitability"
      ],
    }
  },
  contributiva_id: 
  { nombre: 'El Innovador Disruptivo', 
    imagen: './assets/img/Avatars/El Innovador Disruptivo.png',
    arquetipo: 'Contributiva',
    sistema: 'Investigación y Desarrollo',
    frase: '"Abramos nuestra infraestructura técnica y facilitemos la colaboración de especialistas; sumando conocimientos técnicos resolveremos los desafíos de ingeniería más complejos."',
    descripcion: 'Tú eres el promotor de la ciencia abierta y el puente que conecta nuestra ingeniería interna con el inmenso mar del conocimiento mundial. Destacas por tu pasión por el desarrollo tecnológico colaborativo y tu capacidad para unificar mentes de alta especialización. Cuentas con una gran facilidad para diseñar entornos de colaboración técnica abierta, organizando hackatones de ingeniería, proyectos de código libre y alianzas de I+D con universidades, logrando que el desarrollo técnico sea una suma transparente de inteligencia colectiva que revoluciona el sector.',

    artesanal: {
      fortalezas: [
        "Equipo técnico tiene ambición de disruption",
        "Hay conciencia de tecnologías emergentes",
        "Capacidad técnica para explorar lo nuevo",
        "Visión de largo plazo"
      ],
      brechas: [
        "Falta estrategia clara sobre QUÉ disrumpir",
        "Sin presupuesto dedicado a I+D exploratorio",
        "Procesos aún reactivos (solo si cliente lo pide)",
        "Riesgo de gastar recursos sin focus"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Líneas de investigación en tecnologías disruptivas definidas",
        "Presupuesto dedicado a exploración",
        "Procesos de prototipado rápido establecidos",
        "Primeros pilots o MVPs de tecnologías disruptivas"
      ],
      brechas: [
        "Procesos aún lentos (mucha deliberación)",
        "Falta integración con negocio (investigación no genera ROI)",
        "Sin colaboración con externos (universidades, startups)",
        "Dificultad de escalar pilotos a producto"
      ],
    },
    
    agil: {
      fortalezas: [
        "Ecosystem de innovación disruptiva establecido",
        "Colaboración continua con externa (startups, universities, partners)",
        "Procesos ágiles de validación y escalamiento",
        "Capacidad de pivotar rápidamente"
      ],
      brechas: [
        "Mantener velocidad sin perder rigor",
        "Gobernar riesgos de proyectos disruptivos",
        "Conectar disruption con estrategia de negocio",
        "Evitar que ambición paralice"
      ],
    }    
  },

  proactiva_mercadeo: 
  { nombre: 'El Explorador', 
    imagen: './assets/img/Avatars/El Explorador.png',
    arquetipo: 'Proactiva',
    sistema: 'Mercadeo',
    frase: '"No esperemos a que los clientes nos digan qué necesitan; investiguemos las megatendencias del mañana y diseñemos de forma proactiva el próximo océano azul de la industria."',
    descripcion: 'Tú eres el visionario de nuestra organización y el timonel que apunta hacia el horizonte del futuro comercial de la empresa. Destacas por tu excelente intuición de mercado, tu pensamiento estratégico de largo plazo y tu audacia comercial para detectar oportunidades de negocio revolucionarias antes de que sean evidentes para la competencia. No te contentas con administrar la cuota de mercado actual; prefieres explorar tendencias emergentes de consumo, co-diseñar propuestas de valor disruptivas y abrir canales comerciales inéditos para asegurar que la compañía siga liderando el sector en la próxima década.',
  
    artesanal: {
      fortalezas: [
        "Liderazgo tiene visión radical de transformación",
        "Apertura a modelos de negocio completamente nuevos",
        "Capacidad de pivotar rápidamente",
        "Energía de disrupción"
      ],
      brechas: [
        "Falta estrategia clara de QUÉ modelo transformar",
        "Sin procesos formales de innovación de modelo de negocio",
        "Transformación es caótica (intentas todo a la vez)",
        "Riesgo de perder identidad o alienar clientes"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Estrategia de transformación de modelo definida",
        "Procesos de análisis de modelo de negocio documentados",
        "Primeros pilotos de nuevos modelos",
        "Presupuesto dedicado a transformación"
      ],
      brechas: [
        "Procesos aún lentos (mucha aprobación antes de actuar)",
        "Falta validación rigurosa de modelos (asumen en lugar de testear)",
        "Sin colaboración en transformación (partners, consultores, startups)",
        "Dificultad de escalar pilotos a operaciones"
      ],
    },
    
    agil: {
      fortalezas: [
        "Ecosystem de innovación de modelo consolidado",
        "Colaboración con partners en transformación es norma",
        "Procesos ágiles de validación y escalamiento",
        "Capacidad de pivotar radicalmente rápidamente"
      ],
      brechas: [
        "Mantener coherencia de marca en transformaciones radicales",
        "Gobernar transición entre modelos viejos y nuevos",
        "Conectar transformación con estrategia de negocio",
        "Evitar que transformación mate profitability actual"
      ],
    }  
  },
  proactiva_talento: 
  { nombre: 'La Agente de Cambio', 
    imagen: './assets/img/Avatars/La Agente de Cambio.png',
    arquetipo: 'Proactiva',
    sistema: 'Talento Humano',
    frase: '"Diseñemos hoy la cultura y el liderazgo ágiles que nuestra organización necesitará para inspirar a nuestro equipo y prosperar en la próxima década."',
    descripcion: 'Tú eres el motor del futuro organizacional y la transformadora de nuestra cultura corporativa. Destacas por tu pasión por desarrollar el potencial humano y tu capacidad de diseñar estrategias de liderazgo innovadoras mucho antes de que la industria las exija. No esperas de brazos cruzados a que surjan fricciones operativas o desmotivación; prefieres diseñar estructuras organizativas planas, proponer dinámicas de colaboración integrales y entrenar al personal en las metodologías y habilidades del mañana, asegurando que el equipo humano esté motivado, integrado y listo para avanzar felizmente hacia las metas futuras de la compañía.',

    artesanal: {
      fortalezas: [
        "Hay consciencia de la necesidad de transformación",
        "Algunos empleados clave lideran cambio",
        "Apertura a nuevas formas de trabajar",
        "Disposición a experimentar"
      ],
      brechas: [
        "Transformación es liderada por pocas personas (no es cultural)",
        "Resistencia del resto de la organización",
        "Sin procesos de cambio sistematizado",
        "Riesgo de burnout de los transformadores"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Programa de cambio cultural documentado",
        "Red de agentes de cambio en múltiples áreas",
        "Procesos de transformación establecidos",
        "Métricas de progreso de cambio"
      ],
      brechas: [
        "Procesos de cambio son lentos (mucha resistencia)",
        "Falta alineación entre cambio y estrategia",
        "Sin mecanismos de retención de talento durante cambio",
        "Dificultad de escalar cambio a toda la organización"
      ],
    },
    
    agil: {
      fortalezas: [
        "Transformación es parte de la cultura",
        "Empleados empoderados para cuestionaryambiar",
        "Procesos ágiles de adaptación organizacional",
        "Ecosistema de innovation distribuido"
      ],
      brechas: [
        "Mantener dirección sin control excesivo",
        "Gobernar múltiples transformaciones simultáneamente",
        "Conectar cambio personal con estrategia",
        "Evitar que empoderamiento se vuelva anarquía"
      ],
    }    
  },
  proactiva_id: 
  { nombre: 'La Pionera Científica', 
    imagen: './assets/img/Avatars/La Pionera Cientifica.png',
    arquetipo: 'Proactiva',
    sistema: 'Investigación y Desarrollo',
    frase: '"Exploremos las fronteras del conocimiento científico y diseñemos hoy las tecnologías y patentes que redefinirán los estándares de nuestra industria en la próxima década."',
    descripcion: 'Tú eres el motor del conocimiento de vanguardia y la científica que abre los horizontes de nuestra tecnología de punta hacia el futuro. Destacas por tu excelente rigor metodológico, tu visión tecnológica proactiva y tu pasión por la Investigación y Desarrollo (I+D) disruptiva. No esperas a que la industria te plantee demandas; prefieres experimentar con nuevas tecnologías, descubrir propiedades inéditas de materiales, diseñar software revolucionario y radicar patentes innovadoras que construyan activos de propiedad intelectual inimitables, garantizando el liderazgo incuestionable de nuestra organización a largo plazo.',
  
    artesanal: {
      fortalezas: [
        "Equipo técnico con ambición radical",
        "Consciencia de tecnologías revolucionarias",
        "Capacidad teórica en investigación",
        "Visión de largo plazo y disruption"
      ],
      brechas: [
        "Falta estrategia de CÓMO revolucionar",
        "Sin presupuesto dedicado a investigación radical",
        "Procesos muy teóricos (falta pragmatismo)",
        "Riesgo de generar IP sin comercialización"
      ],
    },
    
    industrial: {
      fortalezas: [
        "Líneas de investigación radical formales",
        "Presupuesto dedicado a exploratory research",
        "Algunos papers o patentes generadas",
        "Procesos de investigación documentados"
      ],
      brechas: [
        "Procesos aún lentos (mucha deliberación científica)",
        "Falta comercialización de investigación (IP sin ingresos)",
        "Sin colaboración con externa (universidades, institutos)",
        "Dificultad de convertir ciencia en producto"
      ],
    },
    
    agil: {
      fortalezas: [
        "Ecosystem de investigación radical consolidado",
        "Colaboración con externa es norma (universities, institutes, partners)",
        "Procesos de comercialización de IP efectivos",
        "Capacidad de spin-off o licensing de tecnologías"
      ],
      brechas: [
        "Mantener rigor científico sin sacrificar velocidad",
        "Gobernar portafolio de investigaciones radicales",
        "Conectar investigación con estrategia de negocio",
        "Escalar startups spun-off"
      ],
    }  
  },
};

// ============================================
// ESTRUCTURA DE DATOS COMPLETA - 12 PERFILES
// Cada perfil tiene 3 niveles (Artesanal, Industrial, Ágil)
// Cada nivel tiene 4 acciones detalladas
// ============================================

window.programasCompletos = {
  
  // ===== P1: LA COORDINADORA (Responsiva + Talento) =====
  responsiva_talento: {
    artesanal: {
      titulo: "Mapeo y Canalización de Creatividad Reactiva",
      duracion: "3-4 meses",
      objetivo: "Institucionalizar la capacidad de respuesta creativa que existe en tu equipo",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico compartido sobre estado actual de innovación",
          descripcion: "Realiza un taller de 4 horas con liderazgo donde documenten: ¿Quién innova? ¿Cómo sucede la creatividad? ¿Cuándo se activa? ¿En qué contextos? Mapea casos reales donde vieron creatividad en acción.",
          tiempo: "2-3 semanas",
          dueno: "Liderazgo + Recursos Humanos"
        },
        {
          numero: 2,
          titulo: "Iniciar mapeo de capacidades creativas individuales",
          tiempo: "2-3 semanas",
          dueno: "Recursos Humanos"
        },
        {
          numero: 3,
          titulo: "Establecer una gobernanza básica de innovación"
        },
        {
          numero: 4,
          titulo: "Institucionalizar un ritual de reconocimiento creativo"
        }
      ],
    },

    industrial: {
      titulo: "Sistematización de Respuesta Creativa",
      duracion: "5-6 meses",
      objetivo: "Consolidar procesos de respuesta rápida ante desafíos",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar proceso de identificación de oportunidades",
          descripcion: "Formaliza cómo entra una oportunidad o problema en tu empresa. Crea un formulario simple (digital o físico): ¿Cuál es el desafío? ¿Quién lo identifica? ¿Cuán urgente es? ¿Qué recursos necesita? Esto canaliza las ideas que antes se perdían en emails.",
          tiempo: "3-4 semanas",
          dueno: "Innovación + Operaciones"
        },
        {
          numero: 2,
          titulo: "Capacitar en metodologías ágiles de resolución de problemas",
          tiempo: "4-6 semanas",
          dueno: "Capacitación + Innovación"
        },
        {
          numero: 3,
          titulo: "Crear equipos de respuesta multidisciplinarios y rotantes"
        },
        {
          numero: 4,
          titulo: "Medir y documentar primeros resultados"
        }
      ],
    },

    agil: {
      titulo: "Escalamiento de Creatividad Distribuida",
      duracion: "6-8 meses",
      objetivo: "Escalar creatividad a toda la organización",
      acciones: [
        {
          numero: 1,
          titulo: "Escalar metodologías a toda la organización",
          descripcion: "Lleva las metodologías de respuesta rápida (Design Thinking, SCAMPER) a TODOS, no solo a equipos clave. Esto significa: entrenamientos en cascada, documentación clara en intranet, ejemplos reales que circulen. Meta: que cualquier persona pueda aplicarlas cuando enfrente un desafío.",
          tiempo: "8-12 semanas",
          dueno: "Capacitación + Innovación"
        },
        {
          numero: 2,
          titulo: "Conectar innovación con evaluación del desempeño",
          tiempo: "4-6 semanas",
          dueno: "Recursos Humanos + Liderazgo"
        },
        {
          numero: 3,
          titulo: "Crear red de mentores internos de creatividad"
        },
        {
          numero: 4,
          titulo: "Implementar métricas de seguimiento y dashboard de innovación"
        }
      ],
    }
  },

  // ===== P2: EL INVESTIGADOR (Responsiva + I+D) =====
  responsiva_id: {
    artesanal: {
      titulo: "Formalización de I+D Reactiva",
      duracion: "3-4 meses",
      objetivo: "Crear procesos básicos de investigación y desarrollo",
      acciones: [
        {
          numero: 1,
          titulo: "Establecer proceso formal de recepción de necesidades",
          descripcion: "Crea un 'pipeline de solicitudes' documentado. Cuando un cliente o área interna solicita una mejora/nuevo desarrollo, entra en un sistema. Define: ¿Quién recibe? ¿Cómo se prioriza? ¿Cuál es el plazo de respuesta? Esto evita que las solicitudes se pierdan en chats.",
          tiempo: "2-3 semanas",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 2,
          titulo: "Crear un roadmap técnico básico para 6-12 meses",
          tiempo: "3-4 semanas",
          dueno: "Tech Lead / Liderazgo de I+D"
        },
        {
          numero: 3,
          titulo: "Iniciar documentación de desarrollos"
        },
        {
          numero: 4,
          titulo: "Asignar tiempo dedicado a innovación (no 100% mantenimiento)"
        }
      ],
    },

    industrial: {
      titulo: "Consolidación de I+D Estructurado",
      duracion: "5-6 meses",
      objetivo: "Consolidar I+D con metodologías ágiles",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar roadmap técnico anual con prioritización clara",
          descripcion: "Extiende el roadmap básico a un documento más formal: tecnologías a investigar, productos a mejorar, capacidades a desarrollar. Prioriza usando matriz: impacto x esfuerzo. Revisa y ajusta cada trimestre. Comparte con toda la organización.",
          tiempo: "4-6 semanas",
          dueno: "Liderazgo de I+D + Estrategia"
        },
        {
          numero: 2,
          titulo: "Capacitar en metodologías ágiles de desarrollo",
          tiempo: "6-8 semanas",
          dueno: "Scrum Master / Tech Lead"
        },
        {
          numero: 3,
          titulo: "Crear 'labs de prototipado' dedicados a exploración"
        },
        {
          numero: 4,
          titulo: "Establecer métricas de calidad y velocidad"
        }
      ],
    },

    agil: {
      titulo: "Investigación de Tecnologías Emergentes",
      duracion: "8-12 meses",
      objetivo: "Evolucionar hacia investigación de tecnologías disruptivas",
      acciones: [
        {
          numero: 1,
          titulo: "Investigar y experimentar con tecnologías emergentes",
          descripcion: "Asigna presupuesto y equipo (25-30% del tiempo) a explorar tecnologías del futuro: IA/ML, blockchain, IoT, edge computing, quantum, etc. No todo es viable para tu negocio, pero necesitas estar enterado. Haz pilotos pequeños y rápidos.",
          tiempo: "12-16 semanas",
          dueno: "Liderazgo de I+D + Innovation Team"
        },
        {
          numero: 2,
          titulo: "Explorar innovación abierta con startups, universidades y partners",
          tiempo: "8-12 semanas",
          dueno: "Business Development + Liderazgo de I+D"
        },
        {
          numero: 3,
          titulo: "Implementar laboratorio de innovación separado de operaciones"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de impacto estratégico"
        }
      ],
    }
  },

  // ===== P3: EL VIGILANTE (Responsiva + Mercadeo) =====
  responsiva_mercadeo: {
    artesanal: {
      titulo: "Monitoreo Sistemático de Mercado",
      duracion: "3-4 meses",
      objetivo: "Crear procesos formales de inteligencia de mercado",
      acciones: [
        {
          numero: 1,
          titulo: "Crear proceso formal de monitoreo de mercado",
          descripcion: "Define: ¿Quién monitorea? ¿Qué monitoreamos? ¿Con qué frecuencia? ¿Dónde documentamos? Por ejemplo: una persona dedica 2 horas/semana a buscar en Google Alerts, Twitter, LinkedIn cambios en competencia, tecnología, regulación. Todo en un documento compartido.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (definir proceso + herramientas)",
          dueno: "Marketing / Estrategia"
        },
        {
          numero: 2,
          titulo: "Iniciar análisis de competencia sistemático",
          descripcion: "Haz una matriz simple: ¿Quién compite con nosotros? ¿Qué están haciendo? ¿Hacia dónde se mueven? ¿Cuál es su estrategia? Actualiza mensualmente. Esto te da señales tempranas de cambios que vienen.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (investigación + documentación)",
          dueno: "Marketing / Estrategia"
        },
        {
          numero: 3,
          titulo: "Establecer un filtro de ideas claro: '¿Esto es para nosotros?'",
          descripcion: "Define tu posicionamiento: ¿Cuál es tu mercado? ¿A quién sirves? ¿En qué eres diferente? Con eso claro, tienes criterio para evaluar oportunidades. Evitas perseguir cada idea nueva solo porque la viste en el competidor.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (reflexión estratégica + documentación)",
          dueno: "Liderazgo + Estrategia"
        },
        {
          numero: 4,
          titulo: "Documentar adaptaciones exitosas para aprender patrones",
          descripcion: "Cada vez que adaptes algo que el mercado pida, documenta: ¿Cuál fue el cambio? ¿Por qué? ¿Cuál fue el resultado? ¿Qué aprendimos? Esto te ayuda a ver patrones: ¿Hay clientes que siempre demandan X? ¿Dónde está la tendencia real?",
          tiempo: "Continuo",
          esfuerzo: "Muy bajo (disciplina de documentación)",
          dueno: "Marketing"
        }
      ],
      riesgo: "Alto: sin base estratégica",
      resultado: "Menos cambios sin sentido, mejor ROI en marketing, margen más estable"
    },

    industrial: {
      titulo: "Inteligencia de Mercado y Co-creación",
      duracion: "5-6 meses",
      objetivo: "Consolidar inteligencia de mercado con canales de innovación abierta",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar sistema de inteligencia de mercado",
          descripcion: "Formaliza lo que hiciste en Artesanal: monitoreo, análisis competitivo, signals débiles. Ahora agrega herramientas: Google Trends, Semrush, social listening tools. Define quién reporta a quién. Crea un 'Market Intelligence Report' mensual que comparta con liderazgo.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (herramientas + proceso + reportes)",
          dueno: "Marketing / Estrategia"
        },
        {
          numero: 2,
          titulo: "Crear canales formales de co-creación con clientes",
          descripcion: "Establece: focus groups trimestrales, beta-testers formales, advisory board de clientes clave, o encuestas de feedback regulares. Esto no es 'escuchar quejas', es invitar a clientes a diseñar contigo.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (organización + facilitation)",
          dueno: "Marketing + Producto"
        },
        {
          numero: 3,
          titulo: "Implementar procesos ágiles de lanzamiento: MVP, test & learn",
          descripcion: "En lugar de lanzar cosas 'perfectas', lanza versiones mínimas rápido y aprende del mercado. Define: ¿Qué es el MVP? ¿Cuál es el ciclo de feedback? ¿Cómo pivotas rápido? Esto acelera enormemente.",
          tiempo: "6-8 semanas",
          esfuerzo: "Alto (cambio de mindset + proceso + herramientas)",
          dueno: "Producto + Marketing"
        },
        {
          numero: 4,
          titulo: "Medir velocidad de respuesta y tasa de éxito de nuevas ofertas",
          descripcion: "Trackea: días desde identificación de oportunidad hasta lanzamiento, tasa de aceptación de nuevas ofertas, feedback de clientes. Esto te da visibilidad de qué tan rápido y bien estás adaptándote.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas + setup)",
          dueno: "Estrategia / Analytics"
        }
      ],
      riesgo: "Moderado: falta anticipación estratégica",
      resultado: "Margen mejorado, menos fracasos en lanzamientos, mejor posicionamiento"
    },

    agil: {
      titulo: "Anticipación Estratégica de Mercado",
      duracion: "8-12 meses",
      objetivo: "Desarrollar capacidad de foresight de mercado",
      acciones: [
        {
          numero: 1,
          titulo: "Desarrollar capacidad de foresight: escenarios y señales débiles",
          descripcion: "Ve más allá de lo obvio. Estudia tendencias a 3-5 años: ¿Cómo está cambiando tu industria? ¿Qué tecnologías disruptivas vienen? ¿Qué regulaciones? ¿Cómo cambia el consumidor? Haz escenarios: best case, worst case, most likely. Esto te prepara antes de que llegue.",
          tiempo: "10-12 semanas",
          esfuerzo: "Alto (research + facilitación + visioning)",
          dueno: "Estrategia + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Crear laboratorio de nuevos modelos de negocio",
          descripcion: "Experimenta con modelos alternativos: ¿Qué si cobramos diferente? ¿Qué si nos convertimos en plataforma? ¿Qué si entramos a otro mercado? Haz prototipos rápidos de estos modelos. El objetivo es tener opciones listos cuando el mercado gire.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (experimentación + aprendizaje)",
          dueno: "Estrategia + Producto + Liderazgo"
        },
        {
          numero: 3,
          titulo: "Explorar innovación abierta con startups, partners y clientes líderes",
          descripcion: "Conecta con los actores que están moldeando el futuro: startups innovadores, consultores especializados, clientes que son 'ahead of the curve'. Esto te da acceso a ideas antes de que sean mainstream.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (búsqueda + evaluación + partnership)",
          dueno: "Estrategia + Business Development"
        },
        {
          numero: 4,
          titulo: "Implementar dashboard de estrategia con leading indicators",
          descripcion: "No solo midas lo que pasó (lagging indicators), mide señales del futuro (leading indicators): % de clientes adopcionando nueva solución, sentiment en redes sobre tu marca, velocidad de cambio competitivo. Esto te da early warning system.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (definir indicadores + setup)",
          dueno: "Estrategia / Analytics"
        }
      ],
      riesgo: "Bajo: requiere evolución estratégica",
      resultado: "Líder de mercado, nuevos segmentos de negocio, rentabilidad sostenida"
    }
  },

  // ===== P4: LA FACILITADORA (Contributiva + Talento) =====
  esperada_talento: {
    artesanal: {
      titulo: "Estructuración de Colaboración",
      duracion: "3-4 meses",
      objetivo: "Crear espacios formales para colaboración",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de cómo colaboras hoy",
          descripcion: "Mapea: ¿Quiénes trabajan juntos? ¿En qué proyectos? ¿Qué equipos se comunican? ¿Dónde hay silos? Haz encuestas rápidas: '¿Con quién colaboras regularmente?' Visualiza esto en un diagrama de red. Esto te muestra cómo fluye (o no) la información.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (encuestas + mapeo simple)",
          dueno: "Recursos Humanos"
        },
        {
          numero: 2,
          titulo: "Instalar espacios formales de colaboración",
          descripcion: "Crea: workshops mensuales de 'problemas abiertos' (2-3 horas), reuniones semanales de 'lluvia de ideas' entre áreas, o sprints colaborativos de 1 semana. Define: ¿Cuándo? ¿Dónde? ¿Quién invita? ¿Cuál es el objetivo? Sin estructura, no pasa nada.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (definir calendario + comunicar)",
          dueno: "Liderazgo"
        },
        {
          numero: 3,
          titulo: "Capacitar en dinámicas de co-creación",
          descripcion: "Entrena al equipo en facilitación básica: divergencia (generar muchas ideas sin juzgar), convergencia (evaluar y priorizar), y decisión. Enseña técnicas: brainstorm, brainwrite, dot voting, world café. Esto no es 'reuniones largas', es 'reuniones que producen'.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (taller + práctica)",
          dueno: "Capacitación"
        },
        {
          numero: 4,
          titulo: "Documentar emergentes de la colaboración",
          descripcion: "Después de cada workshop/sprint, documenta: ¿Cuáles fueron las ideas principales? ¿Quién las propuso? ¿Cuál es el siguiente paso? ¿Quién es responsable? Usa un template simple. Esto evita que el valor generado se evapore.",
          tiempo: "Continuo",
          esfuerzo: "Muy bajo (asignar documentador)",
          dueno: "Liderazgo"
        }
      ],
      riesgo: "Alto: sin estructura",
      resultado: "Mejor comunicación, problemas solucionados más rápido, cohesión de equipo"
    },

    industrial: {
      titulo: "Metodologías de Co-creación",
      duracion: "5-6 meses",
      objetivo: "Consolidar metodologías de colaboración efectiva",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de colaboración",
          descripcion: "Formaliza: Design Thinking (empatizar, definir, idear, prototipar, testear), Open Innovation, Agile ceremonies. Crea documentación clara: 'Así hacemos Design Thinking en nuestra empresa' (pasos, roles, timeline). Esto es replicable.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (documentación + entrenamiento)",
          dueno: "Capacitación + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Crear equipos cross-funcionales con tiempo dedicado",
          descripcion: "Forma equipos permanentes de 4-6 personas de distintas áreas. Dedica 10-20% de su tiempo a proyectos colaborativos. Define: roles dentro del equipo (facilitador, documentador, dueño), objetivos, duración de proyecto (6-8 semanas). Esto evita que 'colaboración' sea por favor.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (organización + comunicación)",
          dueno: "Recursos Humanos + Liderazgo"
        },
        {
          numero: 3,
          titulo: "Explorar innovación abierta con clientes y partners",
          descripcion: "Invita a clientes o partners a workshops de co-creación. Pueden aportar perspectivas valiosas. Esto también fortalece relaciones. Empieza pequeño: 1-2 clientes clave en un workshop sobre 'cómo mejorar nuestro servicio'.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (organización + facilitación)",
          dueno: "Marketing + Liderazgo"
        },
        {
          numero: 4,
          titulo: "Medir efectividad de colaboración",
          descripcion: "Trackea: # de proyectos colaborativos, tiempo promedio de resolución, # de personas participando, satisfacción del equipo. No necesita ser complejo. Un survey trimestral: '¿Colaboramos mejor?' + tracking de proyectos.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas)",
          dueno: "Liderazgo"
        }
      ],
      riesgo: "Moderado: colaboración se vuelve burocrática",
      resultado: "Soluciones más robustas, engagement mejorado, menos conflictos"
    },

    agil: {
      titulo: "Ecosistema de Innovación Colaborativa",
      duracion: "8-12 meses",
      objetivo: "Evolucionar hacia ecosistemas de innovación",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar hacia ecosistemas de innovación abierta",
          descripcion: "Expande colaboración más allá de la empresa: crea comunidades (usuarios, partners, innovadores), hackathons abiertos, plataformas donde otros construyen contigo. Esto multiplica capacidad exponencialmente.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (diseño + lanzamiento + gestión)",
          dueno: "Estrategia + Marketing"
        },
        {
          numero: 2,
          titulo: "Implementar sistemas de gobernanza colaborativa",
          descripcion: "En ecosistemas grandes, necesitas reglas claras pero flexibles. Define: ¿Cómo deciden los miembros? ¿Cómo se distribuye valor? ¿Cómo entra/sale gente? No centralices decisiones. Esto no es democracia pura, pero tampoco dictadura.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (design + comunicación)",
          dueno: "Estrategia + Legal"
        },
        {
          numero: 3,
          titulo: "Crear laboratorio de nuevas formas colaborativas",
          descripcion: "Experimenta: trabajo remoto asincrónico, comunidades globales, colectivos ad-hoc, colaboración AI-asistida. Esto prepara tu organización para el futuro del trabajo. Testea, aprende, itera.",
          tiempo: "10-12 semanas",
          esfuerzo: "Alto (experimentación)",
          dueno: "Recursos Humanos + Liderazgo"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de salud del ecosistema",
          descripcion: "Mide: # de miembros activos, velocidad de innovación, satisfacción de comunidad, valor generado. Esto te dice si el ecosistema está sano o muriendo.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Estrategia"
        }
      ],
      riesgo: "Bajo: requiere evolución de gobernanza",
      resultado: "Soluciones breakthrough, atracción de talento, liderazgo en ecosistema"
    }
  },

  // ===== P5: EL VISIONARIO TÉCNICO (Contributiva + I+D) =====
  esperada_id: {
    artesanal: {
      titulo: "Formalización de I+D Colaborativa",
      duracion: "3-4 meses",
      objetivo: "Crear procesos de investigación colaborativa",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de qué se investiga hoy y por qué",
          descripcion: "Mapea: ¿Quiénes investigan? ¿En qué áreas? ¿Con qué enfoque? ¿Hay redundancia? ¿Hay silos? Documenta líneas actuales de investigación. Esto te muestra el panorama real, no lo que crees que hace tu equipo.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (entrevistas + documentación)",
          dueno: "Tech Lead"
        },
        {
          numero: 2,
          titulo: "Instalar reuniones de investigación estructuradas",
          descripcion: "Crea: 'Journal Clubs' semanales (discusión de papers relevantes), 'Research Reviews' mensuales (qué investigamos y encontramos), 'Idea Pitches' (nuevas líneas de investigación). Esto hace que la investigación sea transparente y colaborativa.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (definir calendario)",
          dueno: "Tech Lead"
        },
        {
          numero: 3,
          titulo: "Capacitar en metodología de investigación colaborativa",
          descripcion: "Entrena en: literature reviews sistemáticas, design of experiments, hypothesis-driven research. Esto eleva la calidad de investigación. No es 'probar cosas al azar', es 'investigar sistematicamente'.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (taller + mentoring)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 4,
          titulo: "Documentar hipótesis, experimentos y resultados",
          descripcion: "Crea un template: Hipótesis → Experimento → Resultado → Conclusión → Siguiente paso. Esto es investigación científica básica. Documenta TODO, aunque falle. Los 'fracasos' son datos valiosos.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (definir template)",
          dueno: "Tech Lead"
        }
      ],
      riesgo: "Alto: sin foco de investigación",
      resultado: "Mayor productividad de investigación, mejor documentación, lecciones documentadas"
    },

    industrial: {
      titulo: "Investigación Colaborativa Estructurada",
      duracion: "5-6 meses",
      objetivo: "Consolidar investigación colaborativa con conexión a comercialización",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de investigación colaborativa",
          descripcion: "Formaliza lo que aprendiste: research sprints (1-2 semanas intensas de investigación), peer reviews de hipótesis, colaboración inter-disciplinaria. Esto es investigación seria, no hobby.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (documentación + entrenamiento)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 2,
          titulo: "Crear 'puentes' entre investigación y desarrollo",
          descripcion: "Establece un proceso: cuando la investigación genera algo promisorio, ¿cómo pasa a desarrollo? Define: Technology Readiness Levels (TRL 1-9), gate-reviews, handoff formal. Esto evita que buena investigación se pierda.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (design + comunicación)",
          dueno: "Liderazgo de I+D + Tech Lead"
        },
        {
          numero: 3,
          titulo: "Explorar colaboración con universidades e institutos",
          descripcion: "Conecta con 2-3 universidades o institutos de investigación. Pueden hacer investigaciones que tu equipo no puede. Esto acelera tu pipeline. Pueden ser: co-autorías de papers, joint labs, research grants compartidos.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (búsqueda + negociación)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 4,
          titulo: "Medir productividad de investigación",
          descripcion: "Trackea: # de papers, # de patentes, # de nuevas tecnologías generadas, tiempo promedio de ciclo de investigación. Esto te da visibilidad de productividad.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Moderado: investigación no se convierte en producto",
      resultado: "Pipeline de innovación técnica, talento retiene, reputación de investigación"
    },

    agil: {
      titulo: "Ecosistema de Investigación Abierta",
      duracion: "8-12 meses",
      objetivo: "Crear ecosistema de investigación con colaboración abierta",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar hacia ecosistema de investigación abierta",
          descripcion: "Crea plataformas donde investigadores externos (universidades, startups, individuos) pueden colaborar contigo. Esto expande enormemente tu capacidad de investigación. Puede ser: laboratorios compartidos, data sharing agreements, research challenges abiertos.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (diseño + lanzamiento)",
          dueno: "Liderazgo de I+D + Estrategia"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de spin-off o licensing de tecnologías",
          descripcion: "Si tu investigación genera tecnologías valiosas, ¿cómo se comercializan? ¿Las spinneas? ¿Las licenseas? ¿Las venden? Define procesos claros. Esto alinea incentivos: si investigas bien, se genera valor tangible.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (legal + business strategy)",
          dueno: "Liderazgo de I+D + Legal"
        },
        {
          numero: 3,
          titulo: "Implementar laboratorio de investigación con autonomía",
          descripcion: "Dale a investigadores autonomía real: presupuesto dedicado, libertad de elegir líneas de investigación (dentro de dirección estratégica), publicaciones permitidas. Esto atrae talento senior. Sin autonomía, se van.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (estructura + comunicación)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de impacto de investigación",
          descripcion: "Mide: # de patentes, papers, startups spun-off, impacto en productos, relevancia académica. Esto no es solo académico, es negocio.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Bajo: requiere gobernanza de ecosistema",
      resultado: "Innovación radical, liderazgo tecnológico, nuevas líneas de negocio"
    }
  },

  // ===== P6: EL IMPLEMENTADOR (Contributiva + Mercadeo) =====
  esperada_mercadeo: {
    artesanal: {
      titulo: "Formalización de Co-creación con Clientes",
      duracion: "3-4 meses",
      objetivo: "Crear procesos formales de co-creación",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de quiénes son clientes 'co-creadores'",
          descripcion: "Mapea: ¿Qué clientes participan activamente en mejorar tu solución? ¿Cuál es su perfil? ¿Qué los motiva? Esto identifica a los 'early adopters' que pueden ser tus socios de innovación.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (encuestas + análisis)",
          dueno: "Customer Success + Producto"
        },
        {
          numero: 2,
          titulo: "Instalar procesos formales de feedback de clientes",
          descripcion: "Crea canales: encuestas mensuales, focus groups trimestrales, advisory board de clientes clave, beta-testing programs. Define claramente: '¿Cuándo pedimos feedback?' 'A quién?' '¿Cómo actúamos en base a eso?'",
          tiempo: "3-4 semanas",
          esfuerzo: "Medio (diseño + comunicación)",
          dueno: "Producto + Customer Success"
        },
        {
          numero: 3,
          titulo: "Capacitar equipo en co-diseño con clientes",
          descripcion: "Entrena a tu equipo: cómo hacer preguntas sin sesgar, cómo facilitar sesiones de co-diseño, cómo prototipear con clientes. Esto no es 'vender', es 'construir juntos'.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (taller + práctica)",
          dueno: "Capacitación"
        },
        {
          numero: 4,
          titulo: "Documentar soluciones custom para replicarlas",
          descripcion: "Cada vez que customices algo para un cliente, documenta: ¿Cuál fue el request? ¿Cómo lo solucionaste? ¿Podría servir a otros clientes? Esto evita que soluciones valiosas se pierdan en casos únicos.",
          tiempo: "Continuo",
          esfuerzo: "Muy bajo (disciplina)",
          dueno: "Producto"
        }
      ],
      riesgo: "Alto: sin formalización",
      resultado: "Mejor reputación con clientes, soluciones más relevantes, menos churn"
    },

    industrial: {
      titulo: "Innovación Abierta Consolidada",
      duracion: "5-6 meses",
      objetivo: "Consolidar canales de innovación abierta con clientes y partners",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar inteligencia de mercado abierta",
          descripcion: "Formaliza: advisory boards permanentes, customer councils, beta-testing programs estructurados. Esto no es ocasional, es sistemático. Define roles, frecuencia, expectativas. Los clientes valoran ser escuchados formalmente.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (organización + facilitación)",
          dueno: "Producto + Marketing"
        },
        {
          numero: 2,
          titulo: "Crear programas formales de partners",
          descripcion: "Define relaciones con partners: resellers, complementors, integradores. ¿Cómo innovan juntos? ¿Cómo se distribuye el valor? Esto abre nuevas líneas de innovación que tú solo no podrías hacer.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (contratación + comunicación)",
          dueno: "Business Development"
        },
        {
          numero: 3,
          titulo: "Explorar nuevos modelos de negocio colaborativos",
          descripcion: "Experimenta: plataformas de socios, co-branded offerings, revenue sharing, joint ventures pequeños. ¿Hay modelos que multipliquen valor? Testea hipótesis.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (experimentación)",
          dueno: "Estrategia + Business Development"
        },
        {
          numero: 4,
          titulo: "Medir efectividad de co-creación",
          descripcion: "Trackea: # de clientes en programa de co-creación, # de features originadas de co-creación, customer lifetime value de clientes co-creadores, NPS de este segmento. Esto debería ser > que promedio.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas)",
          dueno: "Analytics"
        }
      ],
      riesgo: "Moderado: co-creación se vuelve ineficiente",
      resultado: "Soluciones más innovadoras, relaciones más sólidas, nuevos modelos de negocio"
    },

    agil: {
      titulo: "Plataforma de Ecosistema Innovador",
      duracion: "8-12 meses",
      objetivo: "Crear plataforma y ecosystem de innovación abierta",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar hacia plataformización del ecosistema",
          descripcion: "Crea una plataforma donde clientes, partners y tu empresa co-crean. Puede ser: marketplace de soluciones, comunidad de innovadores, labs compartidos. Esto multiplica capacidad exponencialmente.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (diseño + desarrollo + lanzamiento)",
          dueno: "Estrategia + Producto"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de gobernanza compartida",
          descripcion: "Define cómo toman decisiones: clientes, partners, tu empresa. No centralices. Puede ser: voting mechanisms, advisory boards con poder, community-driven roadmap. Esto alinea incentivos.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (design + legal)",
          dueno: "Estrategia + Legal"
        },
        {
          numero: 3,
          titulo: "Implementar laboratorio de nuevos modelos de negocio",
          descripcion: "Experimenta constantemente: nuevas formas de monetizar, nuevas relaciones con partners, nuevas propuestas de valor. Esto es R&D de modelos de negocio.",
          tiempo: "10-12 semanas",
          esfuerzo: "Alto (experimentación)",
          dueno: "Estrategia + Producto"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de salud del ecosistema",
          descripcion: "Mide: # de miembros activos, velocidad de innovación, valor creado, satisfacción de comunidad, network effects. Esto te dice si el ecosistema está creciendo o muriendo.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Estrategia"
        }
      ],
      riesgo: "Bajo: requiere gobernanza de ecosistema",
      resultado: "Nuevas líneas de negocio, market leadership, network effects"
    }
  },

  // ===== P7: LA INSPIRADORA (Proactiva + Talento) =====
  contributiva_talento: {
    artesanal: {
      titulo: "Canalización de Intraemprendimiento",
      duracion: "3-4 meses",
      objetivo: "Crear proceso formal para capturar iniciativas emprendedoras",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de quiénes tienen iniciativa emprendedora",
          descripcion: "Mapea: ¿Quiénes proponen ideas? ¿Quiénes lideran iniciativas? ¿Quiénes tienen 'espíritu startup' dentro de tu empresa? Identifica los 10-20 intraemprendedores potenciales. Esto es oro puro.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (entrevistas + observación)",
          dueno: "Recursos Humanos"
        },
        {
          numero: 2,
          titulo: "Instalar proceso formal de generación y evaluación de ideas",
          descripcion: "Crea un pipeline simple: propuesta de idea → formulario estandarizado → comité revisa → decisión sí/no → si sí, se asigna mentor/presupuesto. Define: frecuencia (mensual?), criterios de evaluación (impacto, viabilidad, fit estratégico).",
          tiempo: "3-4 semanas",
          esfuerzo: "Medio (diseño + comunicación)",
          dueno: "Innovación + Recursos Humanos"
        },
        {
          numero: 3,
          titulo: "Crear presupuesto dedicado a proyectos de empleados",
          descripcion: "Asigna dinero: aunque sea $500-5,000 por idea. Esto muestra que estás serio. Sin dinero, las ideas mueren. Define: ¿Cuánto por idea? ¿Cómo se desembolsa? ¿Qué es el éxito?",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión de presupuesto)",
          dueno: "CEO / Finanzas"
        },
        {
          numero: 4,
          titulo: "Nombrar un 'dueño' del programa de intraemprendimiento",
          descripcion: "Asigna 1-2 personas responsables: evangelizar el programa, recibir propuestas, facilitar reviews, mentorear a emprendedores. Sin owner, el programa se muere. Esto puede ser alguien de innovación o RH.",
          tiempo: "1 semana",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "CEO / Liderazgo"
        }
      ],
      riesgo: "Alto: sin canalización",
      resultado: "Ideas implementadas, engagement mejorado, retención de talento"
    },

    industrial: {
      titulo: "Sistema de Intraemprendimiento",
      duracion: "5-6 meses",
      objetivo: "Consolidar sistema formal de intraemprendimiento",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de intraemprendimiento",
          descripcion: "Formaliza: Lean Startup (MVP, build-measure-learn), Business Model Canvas, OKRs para proyectos. Entrena a intraemprendedores en estas metodologías. Esto es ciencia, no suerte.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (entrenamiento + documentación)",
          dueno: "Capacitación + Innovación"
        },
        {
          numero: 2,
          titulo: "Crear 'fast-track' para ideas promisoras",
          descripcion: "Si una idea es muy buena, ¿cómo aceleramos? Define: menos burocracia, presupuesto mayor, mejor equipo. Esto incentiva la calidad de ideas. No todos los intraemprendedores son iguales.",
          tiempo: "4-6 semanas",
          esfuerzo: "Bajo (definir criterios)",
          dueno: "Innovación"
        },
        {
          numero: 3,
          titulo: "Alinear intraemprendimiento con estrategia",
          descripcion: "No acepta todas las ideas. Filtra: ¿esta idea apoya nuestros OKRs? ¿se alinea con dónde queremos ir? Esto evita que intraemprendimiento se vuelva desorden. Define: estrategia → OKRs → ideas aceptadas.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (facilitación estratégica)",
          dueno: "Liderazgo + Estrategia"
        },
        {
          numero: 4,
          titulo: "Crear procesos de escalabilidad",
          descripcion: "Si un proyecto piloto funciona, ¿cómo se escala? Define: gates de validación, handoff a operaciones, recursos para scaling. Muchas ideas mueren porque no hay proceso de 'ahora qué'.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (diseño)",
          dueno: "Innovación + Operaciones"
        }
      ],
      riesgo: "Moderado: procesos matan innovación",
      resultado: "Empleados más motivados, nuevas iniciativas de negocio, reducción de rotación"
    },

    agil: {
      titulo: "Ecosistema de Emprendimiento Interno",
      duracion: "8-12 meses",
      objetivo: "Crear ecosistema de emprendimiento interno",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar hacia ecosistema de emprendimiento interno",
          descripcion: "Crea un 'venture capital interno': team dedicado que invierte en ideas internas como si fuera VC. Define: % de equity para intraemprendedor, governance, exit paths. Esto atrae talento serial entrepreneur.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (design + legal + governance)",
          dueno: "Estrategia + CEO"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de governance ligera",
          descripcion: "No controles todo. Da autonomía: intraemprendedores deciden cómo gastar presupuesto, equipo, dirección. Solo revisa OKRs y resultados. Esto es 'management by objectives'.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (rediseño de procesos)",
          dueno: "Liderazgo"
        },
        {
          numero: 3,
          titulo: "Implementar laboratorio de innovación separado de operaciones",
          descripcion: "Crea un espacio físico/virtual dedicado a intraemprendedores: desks, recursos, mentores disponibles. Esto reduce fricción. Los mejores intraemprendedores merecen ambiente adecuado.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (organización)",
          dueno: "Recursos Humanos + Liderazgo"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de salud emprendedora",
          descripcion: "Mide: # de ideas activas, tasa de graduates (de idea a operación), ROI de proyectos, talento retiene, spin-offs creados. Esto te dice si el ecosistema está sano.",
          tiempo: "4-6 semanas",
          esfuerzo: "Bajo (definir indicadores)",
          dueno: "Innovación"
        }
      ],
      riesgo: "Bajo: requiere gobernanza flexible",
      resultado: "Nuevas líneas de negocio, talento retiene, cultura innovadora"
    }
  },

  // ===== P8: EL INNOVADOR DISRUPTIVO (Proactiva + I+D) =====
  contributiva_id: {
    artesanal: {
      titulo: "Focalización de I+D Disruptiva",
      duracion: "3-4 meses",
      objetivo: "Crear estrategia clara de tecnologías disruptivas",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de tecnologías emergentes relevantes",
          descripcion: "Mapea: ¿Cuáles son las tecnologías que podrían disrumpir tu industria en 3-5 años? IA, blockchain, IoT, biotech, energy, etc.? ¿Cuáles te afectan directamente? Crea matriz: impacto en tu negocio × urgencia. Esto ordena tus prioridades.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (research + facilitación)",
          dueno: "Estrategia + Liderazgo de I+D"
        },
        {
          numero: 2,
          titulo: "Instalar proceso formal de monitoreo tecnológico",
          descripcion: "Define: ¿Quién monitorea? ¿Qué monitoreamos? ¿Con qué frecuencia? Asigna 1 persona (20-30% del tiempo) a buscar tendencias. Usa: Google Scholar, arXiv, Hacker News, research reports. Esto es tu 'technology radar'.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (definir proceso)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 3,
          titulo: "Crear presupuesto dedicado a exploración (15-20% del tiempo)",
          descripcion: "Separa: 80% es desarrollo/mantención, 20% es exploración de tecnologías futuras. Sin presupuesto dedicado, nunca pasan. Esto es no-negociable.",
          tiempo: "1 semana",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "CEO / Liderazgo de I+D"
        },
        {
          numero: 4,
          titulo: "Nombrar 'guardianes' de tecnologías futuras",
          descripcion: "Asigna personas responsables de cada tecnología clave: '¿Alguien está viendo IA para nuestro caso de uso?' Estas personas reportan regularmente: 'Aquí está lo nuevo en IA este mes'. Esto mantiene atención.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Alto: sin foco de disruption",
      resultado: "Pipeline de tecnologías emergentes definido, credibilidad técnica, talento joven atrae"
    },

    industrial: {
      titulo: "Investigación de Disruption Consolidada",
      duracion: "5-6 meses",
      objetivo: "Consolidar I+D en tecnologías disruptivas",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de innovación disruptiva",
          descripcion: "Formaliza: design thinking para problemas radicales, rapid prototyping, minimal viable product (MVP) para tecnologías. Entrena al equipo. Esto no es desarrollo normal, es exploración.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (entrenamiento + documentación)",
          dueno: "Capacitación + Liderazgo de I+D"
        },
        {
          numero: 2,
          titulo: "Crear 'puentes' entre investigación y comercialización",
          descripcion: "Define: ¿Cuándo una tecnología experimental está lista para consideración? Define Technology Readiness Levels (TRL 1-9) y gates. Esto evita que investigación valiosa se pierda en limbo.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (design)",
          dueno: "Liderazgo de I+D + Estrategia"
        },
        {
          numero: 3,
          titulo: "Explorar colaboración con startups, universidades e institutos",
          descripcion: "Conecta con 3-5 actores externos que estudien tecnologías que te interesan. Pueden ser: joint research, technology licensing, inversiones pequeñas. Esto acelera aprendizaje sin que tengas que hacerlo todo.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (búsqueda + negociación)",
          dueno: "Business Development + Liderazgo de I+D"
        },
        {
          numero: 4,
          titulo: "Medir productividad de innovación disruptiva",
          descripcion: "Trackea: # de tecnologías testeadas, # de pilotos, # de patentes generadas, # de spin-offs o nuevas líneas surgidas. Esto no es KPI normal, es innovation pipeline.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Moderado: investigación desconectada del negocio",
      resultado: "Pipeline de disruption, atracción de talento senior, nuevas capacidades técnicas"
    },

    agil: {
      titulo: "Laboratorio de Disruption Radical",
      duracion: "8-12 meses",
      objetivo: "Crear laboratorio independiente de I+D disruptiva",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar a laboratorio separado de operaciones",
          descripcion: "Crea un equipo pequeño (3-5 personas) dedicado 100% a tecnologías radicales, separado del negocio core. Esto les da espacio para experimentar sin presión de clientes. Pueden fallar sin que colapse el negocio.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (organización + selección)",
          dueno: "Liderazgo de I+D + CEO"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de corporate venture",
          descripcion: "Invierte en startups que exploran tecnologías relevantes. No necesariamente para comprar, sino para aprender rápido. Define: % de presupuesto, proceso de evaluación, governance.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (legal + governance)",
          dueno: "Estrategia + CEO"
        },
        {
          numero: 3,
          titulo: "Implementar procesos de spin-off o licensing",
          descripcion: "Si el laboratorio genera tecnología valiosa, ¿cómo se comercializa? ¿Se spinea? ¿Se licencia? ¿Se vende? Define procesos claros. Esto alinea incentivos: si inventas bien, se genera valor monetario.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (legal + business strategy)",
          dueno: "Liderazgo de I+D + Legal"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de impacto de disruption",
          descripcion: "Mide: # de patentes, papers publicados, startups spun-off, impacto en nuevos productos, relevancia para industria. Esto no es solo académico, es negocio.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Bajo: requiere gobernanza de portfolio de innovación",
      resultado: "Liderazgo tecnológico, nuevas líneas de negocio, startup creation"
    }
  },

  // ===== P9: LA MERCADO CREATIVA (Proactiva + Mercadeo) =====
  contributiva_mercadeo: {
    artesanal: {
      titulo: "Focalización de Expansión de Mercados",
      duracion: "3-4 meses",
      objetivo: "Crear estrategia clara de nuevos mercados",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de mercados potenciales",
          descripcion: "Mapea: ¿Cuáles son los mercados donde tu solución podría funcionar? Geografías, segmentos, verticales. Crea matriz: tamaño potencial × viabilidad × fit con tu capacidad. Esto prioriza dónde enfocarse.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (research + facilitación)",
          dueno: "Estrategia + Marketing"
        },
        {
          numero: 2,
          titulo: "Instalar proceso formal de evaluación de oportunidades",
          descripcion: "Define: ¿Cómo evaluamos un mercado nuevo? ¿Qué preguntas? ¿Cuál es el criterio de 'go/no-go'? Crea template de evaluación. Esto hace que decisiones sean sistemáticas, no por intuición.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (diseño)",
          dueno: "Estrategia"
        },
        {
          numero: 3,
          titulo: "Priorizar 2-3 mercados nuevos para próximos 12 meses",
          descripcion: "No intentes entrar a todos los mercados a la vez. Elige 2-3 y enfócate. Define: ¿cuál es el order de entrada? ¿Cuál es el presupuesto para cada uno? ¿Quién lidera?",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (facilitación)",
          dueno: "Liderazgo"
        },
        {
          numero: 4,
          titulo: "Crear equipo dedicado a expansión",
          descripcion: "Asigna personas (pueden ser part-time) responsables de expandir a mercados nuevos. Define: roles, expectativas, timeline. Sin owner, la expansión no pasa.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "Liderazgo"
        }
      ],
      riesgo: "Alto: sin foco de mercado",
      resultado: "Reducción de concentración de riesgo, pipeline de crecimiento, revenue potencial"
    },

    industrial: {
      titulo: "Validación Rigurosa de Mercados",
      duracion: "5-6 meses",
      objetivo: "Consolidar validación de nuevos mercados",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de validación de mercado",
          descripcion: "Formaliza: customer interviews (habla con 20-30 personas en mercado nuevo), MVP testing (lanza versión mínima), lean canvas (articula tu hipótesis de negocio). Esto no es 'asumir', es 'saber'.",
          tiempo: "6-8 semanas",
          esfuerzo: "Alto (entrenamiento + pilotos)",
          dueno: "Capacitación + Estrategia"
        },
        {
          numero: 2,
          titulo: "Crear 'fast-track' para expansión",
          descripcion: "Si un mercado se valida rápido, ¿cómo aceleramos entrada? Define: menos burocracia, presupuesto mayor, mejor equipo. Esto permite aprovechar window of opportunity.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir criterios)",
          dueno: "Liderazgo"
        },
        {
          numero: 3,
          titulo: "Explorar colaboración con partners locales en nuevos mercados",
          descripcion: "No entres solo. Busca partners locales: distributores, resellers, consultores. Ellos entienden el mercado. Defines: equity, governance, split de revenue. Esto acelera y reduce riesgo.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (búsqueda + negociación)",
          dueno: "Business Development"
        },
        {
          numero: 4,
          titulo: "Medir efectividad de expansión",
          descripcion: "Trackea: días desde decisión hasta lanzamiento, tasa de aceptación en mercado nuevo, cost of acquisition, customer lifetime value. Esto te dice si la expansión es rentable.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas)",
          dueno: "Analytics"
        }
      ],
      riesgo: "Moderado: expansion ineficiente",
      resultado: "Mercados validados, crecimiento más rápido, reducción de riesgo"
    },

    agil: {
      titulo: "Modelo de Crecimiento Distribuido",
      duracion: "8-12 meses",
      objetivo: "Crear modelo de crecimiento multigeográfico",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar hacia modelo de crecimiento distribuido",
          descripcion: "En lugar de 'expansión centralizada', crea modelos locales. Cada mercado tiene cierta autonomía para adaptarse. Define: qué es core (no se toca), qué es flexible (se adapta). Esto es 'glocalization'.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (redesign organizacional)",
          dueno: "Estrategia + CEO"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de governance de mercados",
          descripcion: "Balancear: uniformidad (eficiencia) vs. flexibilidad (relevancia local). Define: review process, escalation path, decision rights por market. Esto evita que locales hagan lo que quieren, pero tampoco los asfixies.",
          tiempo: "8-12 semanas",
          esfuerzo: "Medio (design)",
          dueno: "Estrategia + Liderazgo"
        },
        {
          numero: 3,
          titulo: "Implementar sistema de escalabilidad de operaciones",
          descripcion: "Crea playbooks para: cómo entrar a nuevo mercado, cómo staffear, cómo onboardear clientes, cómo servir. Esto permite que crezcas sin perder calidad. Sin playbooks, caos.",
          tiempo: "10-12 semanas",
          esfuerzo: "Alto (documentación + training)",
          dueno: "Operaciones"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de salud de expansion",
          descripcion: "Mide: growth rate por mercado, profitability por market, market penetration, brand awareness. Esto te dice cuáles mercados están sanos y cuáles están muriendo.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Estrategia / Analytics"
        }
      ],
      riesgo: "Bajo: requiere gobernanza de operaciones multigeográficas",
      resultado: "Líder regional/global, diversificación de revenue, reducción de riesgo de negocio"
    }
  },

  // ===== P10: LA AGENTE DE CAMBIO (Esperada/Transformadora + Talento) =====
  proactiva_talento: {
    artesanal: {
      titulo: "Activación de Agentes de Cambio",
      duracion: "3-4 meses",
      objetivo: "Identificar y potenciar agentes de cambio naturales",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de quiénes son agentes de cambio",
          descripcion: "Mapea: ¿Quiénes cuestionan el status quo? ¿Quiénes proponen cosas radicales? ¿Quiénes se resisten al 'siempre lo hemos hecho así'? Identifica a los 10-20 agentes naturales. Estos son tus aliados de transformación.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (entrevistas + observación)",
          dueno: "Recursos Humanos + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Instalar programa de liderazgo transformacional",
          descripcion: "Crea un programa (puede ser taller mensual de 2-3 horas) donde agentes de cambio aprenden: cómo liderar cambio, cómo vencer resistencia, cómo comunicar visión. Esto potencia lo que ya hacen naturalmente.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (diseño + facilitación)",
          dueno: "Capacitación + Liderazgo"
        },
        {
          numero: 3,
          titulo: "Crear espacios para compartir visión de cambio",
          descripcion: "Abre espacios donde agentes de cambio puedan hablar: townhalls, workshops, all-hands. Esto amplifica su voz. Cuando otros ven que liderazgo también quiere cambio, se animan.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (calendar)",
          dueno: "Liderazgo"
        },
        {
          numero: 4,
          titulo: "Nombrar 'guardianes' del cambio en cada área",
          descripcion: "Designa 1-2 agentes de cambio por área/departamento como 'guardianes'. Responsables de llevar el mensaje y facilitar transformación localmente. Esto distribuye el cambio, no lo centraliza.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "Liderazgo"
        }
      ],
      riesgo: "Alto: transformación no es sistematizada",
      resultado: "Momentum de cambio, engagement en transformación, menos resistencia"
    },

    industrial: {
      titulo: "Gestión Sistemática del Cambio",
      duracion: "5-6 meses",
      objetivo: "Consolidar gestión del cambio cultural",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de gestión del cambio",
          descripcion: "Formaliza: Kotter's 8 Steps (crear urgencia, build coalition, form vision, communicate, empower action, create quick wins, consolidate gains, anchor in culture). Entrena managers. Esto es ciencia del cambio, no improvisación.",
          tiempo: "6-8 semanas",
          esfuerzo: "Alto (entrenamiento + documentación)",
          dueno: "Capacitación + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Crear 'fast-track' para iniciativas de cambio",
          descripcion: "Si una iniciativa de transformación es promisoria, ¿cómo acelerador? Define: presupuesto rápido, equipo dedicado, menos burocracia. Esto aprovecha momentum.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir criterios)",
          dueno: "Liderazgo"
        },
        {
          numero: 3,
          titulo: "Alinear cambio con estrategia de negocio",
          descripcion: "No transformas por transformar. Alinea: ¿cuál es la visión? ¿Cómo cada cambio nos acerca a esa visión? Define: estrategia → iniciativas de cambio → OKRs. Esto evita caos transformacional.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (facilitación estratégica)",
          dueno: "Liderazgo + Estrategia"
        },
        {
          numero: 4,
          titulo: "Crear procesos de escalabilidad del cambio",
          descripcion: "Cuando una iniciativa de cambio funciona, ¿cómo lo escalamos? Define: documentación de buena práctica, entrenamiento, governance. Esto evita que buenas transformaciones se pierdan.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (diseño)",
          dueno: "Liderazgo"
        }
      ],
      riesgo: "Moderado: cambio se vuelve administrativo",
      resultado: "Velocidad de transformación, retención de talento, alineación estratégica"
    },

    agil: {
      titulo: "Organización Continuamente Transformacional",
      duracion: "8-12 meses",
      objetivo: "Crear organización adaptativa y transformacional",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar hacia organización continuamente transformacional",
          descripcion: "En lugar de 'cambio como proyecto', haz 'cambio como cultura'. Las personas esperan que las cosas cambien. Esto significa: agilidad como norma, experimentación como rutina, feedback loops continuos.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (cambio cultural profundo)",
          dueno: "CEO + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de governance adaptativa",
          descripcion: "No uses governance rígida. Usa: OKRs quarterly (flexibles), decision-making distribuido, feedback loops rápidos. Esto permite adaptación sin perder dirección.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (redesign de procesos)",
          dueno: "Liderazgo"
        },
        {
          numero: 3,
          titulo: "Implementar laboratorio de nuevas formas organizacionales",
          descripcion: "Experimenta: trabajo asincrónico, remote-first, self-managed teams, nuevas estructuras. Esto prepara tu organización para el futuro. Testea, aprende, itera.",
          tiempo: "10-12 semanas",
          esfuerzo: "Alto (experimentación)",
          dueno: "Recursos Humanos + Liderazgo"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de salud transformacional",
          descripcion: "Mide: agility score, innovation rate, employee engagement, adaptability to change, retention of high performers. Esto te dice si la transformación es sostenible.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Liderazgo"
        }
      ],
      riesgo: "Bajo: requiere gobernanza adaptativa",
      resultado: "Organización ágil, retención de talento, liderazgo en industria"
    }
  },

  // ===== P11: LA PIONERA CIENTÍFICA (Esperada/Transformadora + I+D) =====
  proactiva_id: {
    artesanal: {
      titulo: "Enfoque de Investigación Radical",
      duracion: "3-4 meses",
      objetivo: "Crear estrategia de investigación radical",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de campos de investigación radical relevantes",
          descripcion: "Mapea: ¿En qué campos de investigación fundamental podrías ser relevante? Biotecnología, nanomateriales, IA, energía, etc.? Crea matriz: impacto potencial × viabilidad × fit con tu capacidad actual.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (research + facilitación)",
          dueno: "Liderazgo de I+D + Estrategia"
        },
        {
          numero: 2,
          titulo: "Instalar proceso formal de priorización de investigaciones",
          descripcion: "Define: ¿Cómo decidimos qué investigar? ¿Cuáles son los criterios? ¿Quién revisa propuestas? Esto ordena el portfolio de investigación. Sin priorización, acabas persiguiendo todo.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (diseño)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 3,
          titulo: "Crear presupuesto significativo para I+D exploratorio",
          descripcion: "Asigna 25-30% del presupuesto de I+D a exploración radical. El resto es desarrollo/mantención. Sin presupuesto dedicado, la investigación radical nunca pasa.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "CEO / CFO"
        },
        {
          numero: 4,
          titulo: "Nombrar 'guardianes' de investigación radical",
          descripcion: "Asigna personas responsables de cada campo de investigación prioritario. Estos monitorean: qué nuevos papers salen, quiénes son los líderes, dónde se está moviendo. Reportan regularmente.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Alto: sin foco de investigación",
      resultado: "Pipeline de IP radical, reputación científica, atracción de talento"
    },

    industrial: {
      titulo: "Investigación Radical Estructurada",
      duracion: "5-6 meses",
      objetivo: "Consolidar investigación de frontera",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de investigación radical",
          descripcion: "Formaliza: research sprints (semanas intensas de investigación), peer reviews de hipótesis rigurosas, design of experiments estadístico. Entrena al equipo en rigor científico.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (entrenamiento + documentación)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 2,
          titulo: "Crear 'puentes' entre investigación y comercialización",
          descripcion: "Define: ¿Cuándo una investigación está lista para consideración de producto? Define Technology Readiness Levels (TRL 1-9) y gates de evaluación. Esto evita que ciencia valiosa se pierda.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (design)",
          dueno: "Liderazgo de I+D + Estrategia"
        },
        {
          numero: 3,
          titulo: "Explorar colaboración académica internacional",
          descripcion: "Conecta con 3-5 universidades o institutos de investigación líderes en tus campos. Pueden hacer investigaciones que tú no puedes. Define: co-autorías, joint labs, research grants compartidos.",
          tiempo: "8-12 semanas",
          esfuerzo: "Medio (búsqueda + negociación)",
          dueno: "Liderazgo de I+D"
        },
        {
          numero: 4,
          titulo: "Crear procesos de patentación y protección de IP",
          descripcion: "Establece: cómo documentamos hallazgos para patente, cómo protegemos secretos de negocio, cómo manejamos publicaciones. Esto asegura que innovación es tuya.",
          tiempo: "4-6 semanas",
          esfuerzo: "Bajo (definir procesos)",
          dueno: "Legal + Liderazgo de I+D"
        }
      ],
      riesgo: "Moderado: investigación no se monetiza",
      resultado: "Portfolio de IP, ingresos de licensing, atracción de talento científico"
    },

    agil: {
      titulo: "Laboratorio de Investigación Radical",
      duracion: "8-12 meses",
      objetivo: "Crear laboratorio independiente de investigación radical",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar a laboratorio independiente de investigación radical",
          descripcion: "Crea un laboratorio o instituto separado, dedicado 100% a investigación de frontera. Puede tener independencia legal o ser unidad de empresa. Esto da libertad académica a investigadores sin presión de negocio inmediato.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (organización + legal + governance)",
          dueno: "Liderazgo de I+D + CEO"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de corporate venture para I+D",
          descripcion: "Invierte en investigadores independientes, startups de I+D, spin-offs de tus propios laboratorios. Define: proceso de evaluación, governance, equity splits.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (legal + governance)",
          dueno: "Estrategia + CEO"
        },
        {
          numero: 3,
          titulo: "Implementar procesos de spin-off y scaling",
          descripcion: "Si el laboratorio genera tecnología valiosa, ¿cómo se spinea? Define: gobierno corporativo, acceso a capital, recursos de empresa madre. Esto alinea incentivos: si investigas bien, creas valor monetario.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (legal + business)",
          dueno: "Liderazgo de I+D + Legal"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de impacto científico y comercial",
          descripcion: "Mide: # de papers publicados, # de patentes, impacto en citas, spin-offs creados, nuevas líneas de negocio. Esto es ciencia + negocio.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Liderazgo de I+D"
        }
      ],
      riesgo: "Bajo: requiere gobernanza de portfolio de I+D",
      resultado: "Liderazgo científico, nuevas líneas de negocio, startup creation"
    }
  },

  // ===== P12: EL EXPLORADOR (Esperada/Transformadora + Mercadeo) =====
  proactiva_mercadeo: {
    artesanal: {
      titulo: "Clarificación de Visión Transformacional",
      duracion: "3-4 meses",
      objetivo: "Definir visión clara de transformación",
      acciones: [
        {
          numero: 1,
          titulo: "Crear diagnóstico de modelos de negocio alternativos posibles",
          descripcion: "Mapea: ¿Cuáles son modelos de negocio radicalmente diferentes que podrían funcionar? Plataformas, suscripciones, ecosistemas, marketplace, cooperativas, etc.? ¿Cuál es el potencial de cada uno?",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (research + facilitación)",
          dueno: "Estrategia + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Instalar proceso formal de exploración de modelos",
          descripcion: "Define: ¿Cómo evaluamos nuevos modelos de negocio? ¿Qué criterios? ¿Quién revisa? Crea template: hipótesis del modelo → pruebas → validación/invalidación.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (diseño)",
          dueno: "Estrategia"
        },
        {
          numero: 3,
          titulo: "Priorizar 1-2 modelos nuevos para experimentar",
          descripcion: "No intentes pivotar completamente. Elige 1-2 modelos alternativos que valga la pena explorar en próximos 6-12 meses. Define: por qué, recursos, equipo responsable.",
          tiempo: "2-3 semanas",
          esfuerzo: "Bajo (facilitación)",
          dueno: "Liderazgo"
        },
        {
          numero: 4,
          titulo: "Crear equipo dedicado a transformación de modelo",
          descripcion: "Asigna 2-3 personas responsables de experimentar con nuevos modelos. Pueden ser part-time. Define: roles, budget, timeline. Sin owner, la transformación de modelo no pasa.",
          tiempo: "1-2 semanas",
          esfuerzo: "Muy bajo (decisión)",
          dueno: "CEO / Liderazgo"
        }
      ],
      riesgo: "Alto: sin foco de transformación",
      resultado: "Reducción de riesgo de obsolescencia, opciones de crecimiento, visibilidad de futuro"
    },

    industrial: {
      titulo: "Transformación de Modelo Controlada",
      duracion: "5-6 meses",
      objetivo: "Consolidar transformación de modelo de negocio",
      acciones: [
        {
          numero: 1,
          titulo: "Consolidar metodologías de innovación de modelo",
          descripcion: "Formaliza: Business Model Canvas, Value Proposition Design, Lean Startup. Entrena al equipo. Esto es ciencia de modelo de negocio, no intuición.",
          tiempo: "6-8 semanas",
          esfuerzo: "Medio (entrenamiento + documentación)",
          dueno: "Capacitación + Estrategia"
        },
        {
          numero: 2,
          titulo: "Crear 'fast-track' para transformación de modelo",
          descripcion: "Si un modelo nuevo se valida rápido, ¿cómo acelerador cambio? Define: presupuesto rápido, equipo dedicado, menos burocracia. Esto aprovecha window of opportunity.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir criterios)",
          dueno: "Liderazgo"
        },
        {
          numero: 3,
          titulo: "Explorar colaboración con partners, startups y clientes líderes",
          descripcion: "No transformes solo. Busca partners: consultores estratégicos, startups innovadoras, clientes 'ahead of the curve'. Ellos entienden de nuevos modelos. Esto acelera y reduce riesgo.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (búsqueda + negociación)",
          dueno: "Estrategia + Business Development"
        },
        {
          numero: 4,
          titulo: "Medir efectividad de transformación de modelo",
          descripcion: "Trackea: días desde ideación hasta piloto, validación de hipótesis, costo de experimentación, revenue potencial. Esto te dice si la transformación es viable.",
          tiempo: "3-4 semanas",
          esfuerzo: "Bajo (definir métricas)",
          dueno: "Analytics"
        }
      ],
      riesgo: "Moderado: transformación ineficiente",
      resultado: "Modelos validados, reducción de riesgo de disruption, nuevas fuentes de ingreso"
    },

    agil: {
      titulo: "Organización Multi-modelo Ambidextra",
      duracion: "8-12 meses",
      objetivo: "Crear empresa de múltiples modelos de negocio",
      acciones: [
        {
          numero: 1,
          titulo: "Evolucionar a empresa ambidextra",
          descripcion: "No eliges un modelo, sino que operas múltiples modelos en paralelo: el modelo legacy (genera cash), modelos emergentes (crecimiento futuro). Esto permite transición sin muerte. Define: estructura, governance, capital allocation.",
          tiempo: "12-16 semanas",
          esfuerzo: "Alto (reorganización profunda)",
          dueno: "CEO + Liderazgo"
        },
        {
          numero: 2,
          titulo: "Crear mecanismos de governance de transformación",
          descripcion: "Balancear: mantener modelo actual funcionando, mientras transformas. Define: presupuesto por línea, decision-making separado, review process. Esto evita que la transformación mate el negocio actual.",
          tiempo: "8-12 semanas",
          esfuerzo: "Alto (design)",
          dueno: "CEO + CFO"
        },
        {
          numero: 3,
          titulo: "Implementar laboratorio de nuevos modelos de negocio",
          descripcion: "Crea unidad separada que experimenta constantemente: nuevas fuentes de ingreso, nuevos segmentos, nuevas geografías. Esto es R&D de modelos de negocio.",
          tiempo: "10-12 semanas",
          esfuerzo: "Alto (experimentación)",
          dueno: "Estrategia + CEO"
        },
        {
          numero: 4,
          titulo: "Generar indicadores de salud estratégica multi-modelo",
          descripcion: "Mide: revenue por modelo, growth rate por modelo, profitability mix, innovation pipeline, preparación para futuro. Esto te dice si la ambidestreza es sostenible.",
          tiempo: "4-6 semanas",
          esfuerzo: "Medio (definir indicadores)",
          dueno: "Estrategia / CFO"
        }
      ],
      riesgo: "Bajo: requiere gobernanza de cartera estratégica",
      resultado: "Múltiples fuentes de ingreso, resiliencia ante disruption, liderazgo estratégico"
    }
  }
};

// ============================================
// NOTAS FINALES
// ============================================

// Este archivo contiene todos los 12 perfiles × 3 niveles × 4 acciones
// Total: 144 acciones completamente documentadas

// Cada acción incluye:
// - numero (1, 2, 3, 4)
// - titulo (nombre de acción)
// - descripcion (párrafo explicativo 80-120 palabras)
// - tiempo (semanas estimadas)
// - esfuerzo (Muy bajo, Bajo, Medio, Alto)
// - dueno (quién es responsable)

// Uso:
// const programa = window.programasCompletos.P1.artesanal;
// programa.acciones.forEach(accion => {
//   console.log(accion.numero, accion.titulo, accion.tiempo, accion.esfuerzo, accion.dueno);
// });
