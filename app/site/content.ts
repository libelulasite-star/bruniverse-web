// Textos del sitio (PT por defecto, EN alternativo). Tomados de la landing aprobada.
export type Lang = "pt" | "en";
export type L = Record<Lang, string>;

export const nav: { href: string; label: L }[] = [
  { href: "#sou", label: { pt: "Para quem", en: "Who we help" } },
  {
    href: "#protegemos",
    label: { pt: "O que protegemos", en: "What we protect" },
  },
  { href: "#como", label: { pt: "Como trabalhamos", en: "How we work" } },
  {
    href: "#independencia",
    label: { pt: "Independência", en: "Independence" },
  },
  { href: "#advisor", label: { pt: "O advisor", en: "The advisor" } },
];

export const header = {
  brand: "BRUNIVERSE",
  tagline: {
    pt: "Football Player Advisory",
    en: "Football Player Advisory",
  } as L,
  navLabel: { pt: "Navegação principal", en: "Main navigation" } as L,
  langLabel: { pt: "Idioma", en: "Language" } as L,
};

export const hero = {
  videoLabel: {
    pt: "Vídeo: uma queda livre que termina num estádio a preto e branco, com uma única bandeira a cores",
    en: "Video: a free fall ending in a black-and-white stadium with a single flag in colour",
  } as L,
  kicker: {
    pt: "Assessoria independente, do lado do jogador e da família",
    en: "Independent advice, on the side of the player and the family",
  } as L,
  title: {
    pt: "As decisões que definem a tua carreira, o teu valor e o teu futuro.",
    en: "The decisions that shape your career, your value and your future.",
  } as L,
  sub: {
    pt: "Trabalhamos ao lado do jogador e da família: explicamos cada decisão antes de assinares, protegemos o que vales e coordenamos os especialistas certos ao longo da carreira.",
    en: "We work alongside players and their families: we explain every decision before you sign, protect what you are worth and coordinate the right specialists throughout your career.",
  } as L,
  cta: { pt: "Ver como te ajudamos", en: "See how we help you" } as L,
  facts: [
    {
      value: "1",
      text: {
        pt: "relação sénior, do primeiro contrato ao pós-carreira",
        en: "senior relationship, from first contract to life after football",
      },
    },
    {
      value: "8",
      text: {
        pt: "áreas da vida do jogador, coordenadas como uma só",
        en: "areas of the player’s life, coordinated as one",
      },
    },
    {
      value: "0",
      text: {
        pt: "comissões sobre transferências: aconselhamos, não transacionamos",
        en: "commission on transfers: we advise, we don’t transact",
      },
    },
  ] as { value: string; text: L }[],
};

// ---------- Para quem ----------
type WhoCopy = { label: string; say: string; cols: [string, string[]][] };
export const who = {
  tag: { pt: "Para quem", en: "Who we help" } as L,
  title: { pt: "Diz-nos quem és.", en: "Tell us who you are." } as L,
  lede: {
    pt: "Escolhe a tua situação e vê, em poucas linhas, o que fazemos por ti.",
    en: "Choose your situation and see, in a few lines, what we do for you.",
  } as L,
  groupLabel: { pt: "Quem és", en: "Who you are" } as L,
  items: [
    {
      pt: {
        label: "Jogador em crescimento",
        say: "Os primeiros contratos produzem efeitos durante anos.",
        cols: [
          [
            "Antes de assinar",
            [
              "Primeiro contrato profissional",
              "Propostas de representação",
              "Cláusulas, comissões e duração explicadas sem pressa",
            ],
          ],
          [
            "Ao teu lado",
            [
              "A tua família presente em cada decisão",
              "Os especialistas certos, só quando são precisos",
              "Uma segunda leitura independente",
            ],
          ],
        ],
      },
      en: {
        label: "Rising player",
        say: "Your first contracts have effects for years.",
        cols: [
          [
            "Before you sign",
            [
              "First professional contract",
              "Representation proposals",
              "Clauses, commissions and duration explained without rush",
            ],
          ],
          [
            "By your side",
            [
              "Your family present in every decision",
              "The right specialists, only when needed",
              "An independent second reading",
            ],
          ],
        ],
      },
    },
    {
      pt: {
        label: "Jogador consolidado",
        say: "Mais carreira significa mais intervenientes. Alguém tem de ver o conjunto.",
        cols: [
          [
            "Mudar de país",
            [
              "Residência fiscal e estrutura avaliadas antes de assinar",
              "Mobilidade internacional coordenada",
            ],
          ],
          [
            "Fora do campo",
            [
              "Direitos de imagem e patrocínios",
              "As perguntas certas aos gestores de património",
              "Preparar a transição depois do futebol",
            ],
          ],
        ],
      },
      en: {
        label: "Established player",
        say: "More career means more people involved. Someone has to see the whole.",
        cols: [
          [
            "Moving country",
            [
              "Tax residence and structure assessed before signing",
              "International mobility, coordinated",
            ],
          ],
          [
            "Off the pitch",
            [
              "Image rights and sponsorship",
              "The right questions for wealth managers",
              "Preparing the transition after football",
            ],
          ],
        ],
      },
    },
    {
      pt: {
        label: "Pai, mãe ou família",
        say: "A família é a primeira linha de proteção de um jogador jovem.",
        cols: [
          [
            "O que fazemos convosco",
            [
              "Explicar o que está realmente a ser proposto",
              "Mostrar quem ganha o quê em cada proposta",
              "Acompanhar as conversas com clubes e agentes",
            ],
          ],
          [
            "O que não somos",
            [
              "Não somos mais um agente a querer o vosso filho",
              "Não recebemos comissões de transferências",
            ],
          ],
        ],
      },
      en: {
        label: "Parent or family",
        say: "Family is a young player’s first line of protection.",
        cols: [
          [
            "What we do with you",
            [
              "Explain what is really being proposed",
              "Show who gains what in every proposal",
              "Stand beside you in talks with clubs and agents",
            ],
          ],
          [
            "What we are not",
            [
              "We are not another agent after your child",
              "We earn no commission on transfers",
            ],
          ],
        ],
      },
    },
    {
      pt: {
        label: "Agente",
        say: "O agente continua a ser o agente.",
        cols: [
          [
            "O que podes esperar",
            [
              "Não negociamos transferências",
              "Não recebemos comissões sobre elas",
              "Interesses alinhados à volta do jogador comum",
            ],
          ],
          [
            "Como colaboramos",
            [
              "Um interlocutor sénior para os temas fora do campo",
              "Coordenação fiscal, patrimonial e de imagem",
            ],
          ],
        ],
      },
      en: {
        label: "Agent",
        say: "The agent stays the agent.",
        cols: [
          [
            "What to expect",
            [
              "We do not negotiate transfers",
              "We earn no commission on them",
              "Interests aligned around the player we share",
            ],
          ],
          [
            "How we work together",
            [
              "A senior contact for off-pitch matters",
              "Tax, wealth and image coordination",
            ],
          ],
        ],
      },
    },
    {
      pt: {
        label: "Advogado, fiscalista ou gestor",
        say: "Chamamos o especialista certo para cada matéria.",
        cols: [
          [
            "A bancada de especialistas",
            [
              "Cada matéria e jurisdição com quem a domina",
              "Serviços jurídicos prestados de forma autónoma",
            ],
          ],
          [
            "O que ganhas",
            [
              "Um cliente que chega com o contexto completo",
              "Um único interlocutor do lado do jogador",
            ],
          ],
        ],
      },
      en: {
        label: "Lawyer, tax or wealth adviser",
        say: "We bring in the right specialist for each matter.",
        cols: [
          [
            "The specialist bench",
            [
              "Each matter and jurisdiction with those who master it",
              "Legal services provided independently",
            ],
          ],
          [
            "What you gain",
            [
              "A client who arrives with full context",
              "A single contact on the player’s side",
            ],
          ],
        ],
      },
    },
  ] as Record<Lang, WhoCopy>[],
};

// ---------- O que protegemos ----------
export const protect = {
  tag: { pt: "O que protegemos", en: "What we protect" } as L,
  title: {
    pt: "Quatro coisas difíceis de recuperar.",
    en: "Four things that are hard to win back.",
  } as L,
  lede: {
    pt: "Não fazemos tudo. Vemos o todo, e cuidamos do que mais importa.",
    en: "We don’t do everything. We see the whole, and we look after what matters most.",
  } as L,
  cards: [
    {
      title: { pt: "Decisões", en: "Decisions" },
      text: {
        pt: "Perceber antes de assinar. Os primeiros contratos produzem efeitos durante anos.",
        en: "Understand before signing. The first contracts have effects for years.",
      },
      points: [
        {
          pt: "Primeiro contrato, renovações e transferências",
          en: "First contract, renewals and transfers",
        },
        { pt: "Propostas de representação", en: "Representation proposals" },
        {
          pt: "Uma segunda leitura independente",
          en: "An independent second reading",
        },
      ],
    },
    {
      title: { pt: "Valor", en: "Value" },
      text: {
        pt: "O que o jogador vale dentro e fora do campo, tratado como um todo.",
        en: "What the player is worth on and off the pitch, treated as a whole.",
      },
      points: [
        {
          pt: "Direitos de imagem e patrocínios",
          en: "Image rights and sponsorship",
        },
        {
          pt: "Residência fiscal avaliada antes de mudar de país",
          en: "Tax residence assessed before moving country",
        },
        { pt: "Reputação a longo prazo", en: "Long-term reputation" },
      ],
    },
    {
      title: { pt: "Proteção", en: "Protection" },
      text: {
        pt: "Saber quem ganha o quê em cada proposta.",
        en: "Knowing who gains what in every proposal.",
      },
      points: [
        {
          pt: "Conflitos de interesse à vista",
          en: "Conflicts of interest made visible",
        },
        {
          pt: "Seguros e os especialistas certos",
          en: "Insurance and the right specialists",
        },
        {
          pt: "A família ao lado de cada decisão",
          en: "The family beside every decision",
        },
      ],
    },
    {
      title: { pt: "Futuro", en: "Future" },
      text: {
        pt: "A carreira é curta. O que ela constrói não deve ser.",
        en: "A career is short. What it builds should not be.",
      },
      points: [
        {
          pt: "As perguntas certas aos gestores de património",
          en: "The right questions for wealth managers",
        },
        {
          pt: "Oportunidades de negócio analisadas com critério",
          en: "Business opportunities examined with judgement",
        },
        {
          pt: "A transição depois do futebol",
          en: "The transition after football",
        },
      ],
    },
  ] as { title: L; text: L; points: L[] }[],
};

// ---------- Como trabalhamos ----------
export const how = {
  tag: { pt: "Como trabalhamos", en: "How we work" } as L,
  title: {
    pt: "One player. One global view. One coordinated team.",
    en: "One player. One global view. One coordinated team.",
  } as L,
  lede: {
    pt: "Tu no centro. À tua volta, os especialistas certos em cada momento. Não substituímos nenhum deles; garantimos que todos trabalham na mesma direção.",
    en: "You at the centre. Around you, the right specialists at each moment. We replace none of them; we make sure they all work in the same direction.",
  } as L,
  player: { pt: "Jogador", en: "Player" } as L,
  diagramLabel: {
    pt: "Diagrama: o jogador ao centro e oito áreas coordenadas à volta",
    en: "Diagram: the player at the centre with eight coordinated areas around",
  } as L,
  areas: [
    {
      name: { pt: "Agente", en: "Agent" },
      text: {
        pt: "O agente continua a ser o agente. Alinhamos interesses.",
        en: "Your agent stays your agent. We align interests.",
      },
    },
    {
      name: { pt: "Jurídico", en: "Legal" },
      text: {
        pt: "O advogado certo para cada matéria e jurisdição.",
        en: "The right lawyer for each matter and jurisdiction.",
      },
    },
    {
      name: { pt: "Fiscal", en: "Tax" },
      text: {
        pt: "Residência e estrutura avaliadas antes de assinar.",
        en: "Residence and structure assessed before you sign.",
      },
    },
    {
      name: { pt: "Património", en: "Wealth" },
      text: {
        pt: "As perguntas certas aos gestores de património.",
        en: "The right questions for wealth managers.",
      },
    },
    {
      name: { pt: "Imagem", en: "Image" },
      text: {
        pt: "Direitos de imagem, patrocínios e reputação.",
        en: "Image rights, sponsorship and reputation.",
      },
    },
    {
      name: { pt: "Negócios", en: "Business" },
      text: {
        pt: "Sociedades e oportunidades analisadas com critério.",
        en: "Companies and opportunities, examined with judgement.",
      },
    },
    {
      name: { pt: "Família", en: "Family" },
      text: {
        pt: "Os pais ao lado de cada decisão.",
        en: "Parents beside every decision.",
      },
    },
    {
      name: { pt: "Especialistas", en: "Specialists" },
      text: {
        pt: "Seguros, imigração, saúde: quem for preciso.",
        en: "Insurance, immigration, health: whoever is needed.",
      },
    },
  ] as { name: L; text: L }[],
};

// ---------- Independência ----------
export const independence = {
  tag: { pt: "Independência", en: "Independence" } as L,
  statement: ["We advise.", "Others transact."],
  nots: [
    {
      title: { pt: "Não somos uma agência", en: "We are not an agency" },
      text: {
        pt: "Não negociamos transferências nem recebemos comissões sobre elas.",
        en: "We do not negotiate transfers or earn commission on them.",
      },
    },
    {
      title: {
        pt: "Não substituímos o teu agente",
        en: "We do not replace your agent",
      },
      text: {
        pt: "O agente continua a ser o agente. Alinhamos interesses.",
        en: "The agent stays the agent. We align interests.",
      },
    },
    {
      title: {
        pt: "Não somos um escritório de advogados",
        en: "We are not a law firm",
      },
      text: {
        pt: "Os serviços jurídicos são prestados de forma autónoma, pelos advogados certos.",
        en: "Legal services are provided independently by the right lawyers.",
      },
    },
    {
      title: {
        pt: "Não vendemos produtos financeiros",
        en: "We do not sell financial products",
      },
      text: {
        pt: "Ajudamos a fazer as perguntas certas aos gestores de património.",
        en: "We help ask wealth managers the right questions.",
      },
    },
  ] as { title: L; text: L }[],
};

// ---------- O advisor ----------
export const advisor = {
  tag: { pt: "O advisor", en: "The advisor" } as L,
  title: { pt: "Quem está do teu lado.", en: "Who is on your side." } as L,
  name: "Bruno Xavier de Pina",
  portraitNote: { pt: "Retrato a fotografar", en: "Portrait to be shot" } as L,
  bio: {
    pt: "Percurso feito na Deloitte, na PLMJ e na Morais Leitão, entre Portugal e Angola. Hoje, uma única relação sénior do lado do jogador.",
    en: "Career built at Deloitte, PLMJ and Morais Leitão, between Portugal and Angola. Today, a single senior relationship on the player’s side.",
  } as L,
  roles: [
    {
      title: { pt: "Interlocutor", en: "Point of contact" },
      text: {
        pt: "Uma pessoa que conhece o conjunto e responde por ele.",
        en: "One person who knows the whole picture and answers for it.",
      },
    },
    {
      title: { pt: "Coordenador", en: "Coordinator" },
      text: {
        pt: "Chama os especialistas certos e mantém-nos alinhados.",
        en: "Brings in the right specialists and keeps them aligned.",
      },
    },
    {
      title: { pt: "Challenger", en: "Challenger" },
      text: {
        pt: "Faz as perguntas que ninguém com interesse no negócio vai fazer.",
        en: "Asks the questions nobody with a stake in the deal will ask.",
      },
    },
  ] as { title: L; text: L }[],
};

// ---------- Rodapé ----------
export const footer = {
  motto: {
    pt: "Não fazemos tudo. Vemos o todo.",
    en: "We don’t do everything. We see the whole.",
  } as L,
  links: nav,
  // Contacto discreto para agentes e outros profissionais. Email por confirmar com o cliente.
  contactLabel: {
    pt: "Contacto profissional",
    en: "Professional enquiries",
  } as L,
  contactValue: { pt: "Email a confirmar", en: "Email to be confirmed" } as L,
  note: {
    pt: "A BRUNIVERSE presta consultoria estratégica. Os serviços jurídicos são prestados de forma autónoma pela BrunoXP Advogados ou por outros advogados à escolha do jogador.",
    en: "BRUNIVERSE provides strategic advisory. Legal services are provided independently by BrunoXP Advogados or by other lawyers of the player’s choice.",
  } as L,
  company: "BRUNIVERSE Consulting",
  fine: {
    pt: "Amostra de design para revisão do cliente. Textos, fotografia e contactos por validar.",
    en: "Design sample for client review. Copy, photography and contacts to be validated.",
  } as L,
};
