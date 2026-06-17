import { DEFAULT_LOCALE, HOME_COPY, GENERATOR_COPY, type Locale } from "@/lib/i18n";

export type LocalizedExampleEmail = {
  id: string;
  subject: string;
  situation: string;
  recipientKey: keyof typeof GENERATOR_COPY["en-en"]["recipients"];
  tone: number;
  aggressionScore: number;
  preview: string;
  categorySlug: string;
};

export type LocalizedHallEntry = {
  rank: number;
  title: string;
  subject: string;
  preview: string;
  aggressionScore: number;
  tone: number;
  votes: number;
};

export type LocalizedCategory = {
  slug: string;
  description: string;
  count: number;
};

type ExamplesPageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  jsonLdName: string;
  jsonLdDescription: string;
  title: string;
  description: string;
  scoreLabel: string;
  generateCta: string;
  emails: LocalizedExampleEmail[];
};

type HallOfFamePageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  jsonLdName: string;
  jsonLdDescription: string;
  title: string;
  description: string;
  votesLabel: string;
  generateCta: string;
  entries: LocalizedHallEntry[];
};

type CategoriesPageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  templatesLabel: string;
  backToCategories: string;
  relatedReading: string;
  readMore: string;
  categories: LocalizedCategory[];
};

const examplesCopy: Record<Locale, ExamplesPageCopy> = {
  "en-en": {
    metadataTitle: "Passive Aggressive Email Examples",
    metadataDescription:
      "Browse passive-aggressive workplace email examples. From mildly annoyed to corporate assassin level, find the perfect template.",
    jsonLdName: "Passive Aggressive Email Examples",
    jsonLdDescription: "Curated collection of passive-aggressive workplace email examples",
    title: "Email Examples",
    description:
      "A curated gallery of passive-aggressive workplace communication. Browse by category, tone level, or recipient type.",
    scoreLabel: "Score",
    generateCta: "Generate Your Own",
    emails: [
      {
        id: "late-reply-1",
        subject: "Re: Following Up (Again)",
        situation: "Late reply to important email",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 68,
        preview:
          "I hope this email finds you well, though I suspect it will find you the same way my last three emails did — unread.",
        categorySlug: "coworkers",
      },
      {
        id: "missed-deadline-1",
        subject: "Re: Project Deadline - Gentle Reminder #7",
        situation: "Missed deadline (again)",
        recipientKey: "freelancer",
        tone: 5,
        aggressionScore: 82,
        preview:
          "I'm writing to inquire about the deliverable that was due last Tuesday. Or was it the Tuesday before? Time loses meaning when you're waiting.",
        categorySlug: "deadlines",
      },
      {
        id: "credit-stealing-1",
        subject: "Re: Great presentation! (The one I made)",
        situation: "Taking credit for my work",
        recipientKey: "coworker",
        tone: 6,
        aggressionScore: 91,
        preview:
          "I noticed the slides from yesterday's presentation looked remarkably familiar. Almost as if I'd created them myself. Which, of course, I did.",
        categorySlug: "coworkers",
      },
      {
        id: "lunch-meeting-1",
        subject: "Re: 12:00 PM Meeting - A Few Thoughts",
        situation: "Scheduling meetings during lunch",
        recipientKey: "manager",
        tone: 3,
        aggressionScore: 45,
        preview:
          "I wanted to flag that the recurring noon meeting does coincide with what some cultures refer to as 'lunch.' Just flagging for awareness.",
        categorySlug: "meetings",
      },
      {
        id: "invoice-1",
        subject: "Invoice #4521 - 90 Day Follow Up",
        situation: "Late payment on invoice",
        recipientKey: "client",
        tone: 5,
        aggressionScore: 78,
        preview:
          "I trust this email finds you well and your accounts payable department equally thriving, despite the apparent hibernation of the past quarter.",
        categorySlug: "invoices",
      },
      {
        id: "reply-all-1",
        subject: "Re: Re: Re: Re: All - Quick Question",
        situation: "Replying all unnecessarily",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 55,
        preview:
          "Thank you for sharing your lunch preferences with all 847 employees. I'm sure the CFO was equally delighted to learn you prefer Thai over Italian.",
        categorySlug: "coworkers",
      },
      {
        id: "micromanage-1",
        subject: "Re: Status Update Request #14 (This Week)",
        situation: "Micromanaging every task",
        recipientKey: "manager",
        tone: 4,
        aggressionScore: 65,
        preview:
          "As requested, here is my hourly update. Between 2:00 and 2:15, I breathed approximately 200 times and had one thought about quitting.",
        categorySlug: "managers",
      },
      {
        id: "wrong-order-1",
        subject: "Re: Order #8847 - Creative Interpretation of Our Requirements",
        situation: "Sent wrong order again",
        recipientKey: "supplier",
        tone: 5,
        aggressionScore: 74,
        preview:
          "We received 500 units of what appears to be a product we've never ordered, from a catalogue we've never seen, in a color that doesn't exist in nature.",
        categorySlug: "suppliers",
      },
      {
        id: "vague-brief-1",
        subject: "Re: Project Brief - Seeking Clarification on... Everything",
        situation: "Sending vague requirements",
        recipientKey: "client",
        tone: 3,
        aggressionScore: 48,
        preview:
          "Thank you for the brief. I have a few clarifying questions, specifically regarding the parts between the beginning and the end.",
        categorySlug: "clients",
      },
    ],
  },
  "pt-pt": {
    metadataTitle: "Exemplos de Emails Passivo-Agressivos",
    metadataDescription:
      "Explore exemplos de emails passivo-agressivos no trabalho. Do ligeiramente irritado ao assassino corporativo, encontre o modelo perfeito.",
    jsonLdName: "Exemplos de Emails Passivo-Agressivos",
    jsonLdDescription: "Coleção de exemplos de emails passivo-agressivos no ambiente profissional",
    title: "Exemplos de Emails",
    description:
      "Uma galeria de comunicação passivo-agressiva no trabalho. Explore por categoria, nível de tom ou tipo de destinatário.",
    scoreLabel: "Pontuação",
    generateCta: "Gere o Seu",
    emails: [
      {
        id: "late-reply-1",
        subject: "Re: A retomar (outra vez)",
        situation: "Resposta tardia a um email importante",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 68,
        preview:
          "Espero que este email o encontre bem, embora suspeite que o encontrará da mesma forma que os meus últimos três — por ler.",
        categorySlug: "coworkers",
      },
      {
        id: "missed-deadline-1",
        subject: "Re: Prazo do projeto - Lembrete gentil n.º 7",
        situation: "Prazo falhado outra vez",
        recipientKey: "freelancer",
        tone: 5,
        aggressionScore: 82,
        preview:
          "Escrevo para saber do entregável que era devido na terça-feira passada. Ou foi na anterior? O tempo perde o sentido quando se espera.",
        categorySlug: "deadlines",
      },
      {
        id: "credit-stealing-1",
        subject: "Re: Excelente apresentação! (A que eu fiz)",
        situation: "Apropriar-se do meu trabalho",
        recipientKey: "coworker",
        tone: 6,
        aggressionScore: 91,
        preview:
          "Reparei que os slides de ontem pareciam estranhamente familiares. Quase como se os tivesse criado eu. O que, claro, fiz.",
        categorySlug: "coworkers",
      },
      {
        id: "lunch-meeting-1",
        subject: "Re: Reunião das 12:00 - Algumas reflexões",
        situation: "Marcar reuniões à hora de almoço",
        recipientKey: "manager",
        tone: 3,
        aggressionScore: 45,
        preview:
          "Queria sinalizar que a reunião recorrente ao meio-dia coincide com o que algumas culturas chamam de 'almoço'. Apenas para consciencialização.",
        categorySlug: "meetings",
      },
      {
        id: "invoice-1",
        subject: "Fatura n.º 4521 - Seguimento aos 90 dias",
        situation: "Pagamento atrasado de fatura",
        recipientKey: "client",
        tone: 5,
        aggressionScore: 78,
        preview:
          "Confio que este email o encontre bem e que o departamento de contabilidade prospere, apesar da aparente hibernação do último trimestre.",
        categorySlug: "invoices",
      },
      {
        id: "reply-all-1",
        subject: "Re: Re: Re: Re: Todos - Pergunta rápida",
        situation: "Responder a todos sem necessidade",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 55,
        preview:
          "Obrigado por partilhar as preferências de almoço com os 847 colaboradores. Tenho a certeza de que o CFO ficou encantado em saber que prefere tailandês a italiano.",
        categorySlug: "coworkers",
      },
      {
        id: "micromanage-1",
        subject: "Re: Pedido de atualização n.º 14 (esta semana)",
        situation: "Microgerir cada tarefa",
        recipientKey: "manager",
        tone: 4,
        aggressionScore: 65,
        preview:
          "Conforme pedido, eis a minha atualização horária. Entre as 14:00 e as 14:15, respirei cerca de 200 vezes e tive um pensamento sobre desistir.",
        categorySlug: "managers",
      },
      {
        id: "wrong-order-1",
        subject: "Re: Encomenda n.º 8847 - Interpretação criativa dos requisitos",
        situation: "Enviar encomenda errada outra vez",
        recipientKey: "supplier",
        tone: 5,
        aggressionScore: 74,
        preview:
          "Recebemos 500 unidades de um produto que nunca encomendámos, de um catálogo que nunca vimos, numa cor que não existe na natureza.",
        categorySlug: "suppliers",
      },
      {
        id: "vague-brief-1",
        subject: "Re: Briefing do projeto - Esclarecimentos sobre... tudo",
        situation: "Enviar requisitos vagos",
        recipientKey: "client",
        tone: 3,
        aggressionScore: 48,
        preview:
          "Obrigado pelo briefing. Tenho algumas questões de clarificação, nomeadamente sobre as partes entre o início e o fim.",
        categorySlug: "clients",
      },
    ],
  },
  "fr-fr": {
    metadataTitle: "Exemples d'E-mails Passif-Agressifs",
    metadataDescription:
      "Parcourez des exemples d'e-mails passif-agressifs au travail. Du légèrement agacé à l'assassin corporate, trouvez le modèle parfait.",
    jsonLdName: "Exemples d'E-mails Passif-Agressifs",
    jsonLdDescription: "Collection d'exemples d'e-mails passif-agressifs en milieu professionnel",
    title: "Exemples d'E-mails",
    description:
      "Une galerie de communication passif-agressive au travail. Parcourez par catégorie, niveau de ton ou type de destinataire.",
    scoreLabel: "Score",
    generateCta: "Générez le Vôtre",
    emails: [
      {
        id: "late-reply-1",
        subject: "Re : Relance (encore)",
        situation: "Réponse tardive à un e-mail important",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 68,
        preview:
          "J'espère que cet e-mail vous trouve bien, bien que je soupçonne qu'il vous trouvera comme mes trois derniers — non lu.",
        categorySlug: "coworkers",
      },
      {
        id: "missed-deadline-1",
        subject: "Re : Délai du projet - Rappel amical n° 7",
        situation: "Délai encore manqué",
        recipientKey: "freelancer",
        tone: 5,
        aggressionScore: 82,
        preview:
          "J'écris pour m'informer du livrable qui était dû mardi dernier. Ou était-ce celui d'avant ? Le temps perd son sens quand on attend.",
        categorySlug: "deadlines",
      },
      {
        id: "credit-stealing-1",
        subject: "Re : Excellente présentation ! (Celle que j'ai faite)",
        situation: "S'attribuer mon travail",
        recipientKey: "coworker",
        tone: 6,
        aggressionScore: 91,
        preview:
          "J'ai remarqué que les slides d'hier semblaient étrangement familiers. Comme si je les avais créés moi-même. Ce que j'ai fait, bien sûr.",
        categorySlug: "coworkers",
      },
      {
        id: "lunch-meeting-1",
        subject: "Re : Réunion de 12h00 - Quelques réflexions",
        situation: "Planifier des réunions pendant le déjeuner",
        recipientKey: "manager",
        tone: 3,
        aggressionScore: 45,
        preview:
          "Je souhaitais signaler que la réunion récurrente de midi coïncide avec ce que certaines cultures appellent le 'déjeuner'. Pour information.",
        categorySlug: "meetings",
      },
      {
        id: "invoice-1",
        subject: "Facture n° 4521 - Relance à 90 jours",
        situation: "Paiement de facture en retard",
        recipientKey: "client",
        tone: 5,
        aggressionScore: 78,
        preview:
          "J'espère que cet e-mail vous trouve bien et que votre comptabilité prospère, malgré l'hibernation apparente du trimestre passé.",
        categorySlug: "invoices",
      },
      {
        id: "reply-all-1",
        subject: "Re : Re : Re : Re : Tous - Question rapide",
        situation: "Répondre à tous inutilement",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 55,
        preview:
          "Merci d'avoir partagé vos préférences de déjeuner avec les 847 employés. Le DAF a dû être ravi d'apprendre que vous préférez le thaï à l'italien.",
        categorySlug: "coworkers",
      },
      {
        id: "micromanage-1",
        subject: "Re : Demande de mise à jour n° 14 (cette semaine)",
        situation: "Microgérer chaque tâche",
        recipientKey: "manager",
        tone: 4,
        aggressionScore: 65,
        preview:
          "Comme demandé, voici ma mise à jour horaire. Entre 14h00 et 14h15, j'ai respiré environ 200 fois et eu une pensée sur la démission.",
        categorySlug: "managers",
      },
      {
        id: "wrong-order-1",
        subject: "Re : Commande n° 8847 - Interprétation créative de nos exigences",
        situation: "Envoyer une mauvaise commande encore",
        recipientKey: "supplier",
        tone: 5,
        aggressionScore: 74,
        preview:
          "Nous avons reçu 500 unités d'un produit que nous n'avons jamais commandé, d'un catalogue que nous n'avons jamais vu, dans une couleur qui n'existe pas.",
        categorySlug: "suppliers",
      },
      {
        id: "vague-brief-1",
        subject: "Re : Brief du projet - Clarifications sur... tout",
        situation: "Envoyer des exigences vagues",
        recipientKey: "client",
        tone: 3,
        aggressionScore: 48,
        preview:
          "Merci pour le brief. J'ai quelques questions de clarification, notamment sur les parties entre le début et la fin.",
        categorySlug: "clients",
      },
    ],
  },
  "es-es": {
    metadataTitle: "Ejemplos de Emails Pasivo-Agresivos",
    metadataDescription:
      "Explora ejemplos de emails pasivo-agresivos en el trabajo. Del ligeramente molesto al asesino corporativo, encuentra la plantilla perfecta.",
    jsonLdName: "Ejemplos de Emails Pasivo-Agresivos",
    jsonLdDescription: "Colección de ejemplos de emails pasivo-agresivos en el entorno laboral",
    title: "Ejemplos de Emails",
    description:
      "Una galería de comunicación pasivo-agresiva en el trabajo. Explora por categoría, nivel de tono o tipo de destinatario.",
    scoreLabel: "Puntuación",
    generateCta: "Genera el Tuyo",
    emails: [
      {
        id: "late-reply-1",
        subject: "Re: Retomando (otra vez)",
        situation: "Respuesta tardía a un email importante",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 68,
        preview:
          "Espero que este email te encuentre bien, aunque sospecho que te encontrará igual que mis tres anteriores — sin leer.",
        categorySlug: "coworkers",
      },
      {
        id: "missed-deadline-1",
        subject: "Re: Plazo del proyecto - Recordatorio amable n.º 7",
        situation: "Plazo incumplido otra vez",
        recipientKey: "freelancer",
        tone: 5,
        aggressionScore: 82,
        preview:
          "Escribo para preguntar por el entregable que vencía el martes pasado. ¿O fue el anterior? El tiempo pierde sentido cuando esperas.",
        categorySlug: "deadlines",
      },
      {
        id: "credit-stealing-1",
        subject: "Re: ¡Gran presentación! (La que hice yo)",
        situation: "Atribuirse mi trabajo",
        recipientKey: "coworker",
        tone: 6,
        aggressionScore: 91,
        preview:
          "Noté que las diapositivas de ayer parecían extrañamente familiares. Casi como si las hubiera creado yo. Lo cual, por supuesto, hice.",
        categorySlug: "coworkers",
      },
      {
        id: "lunch-meeting-1",
        subject: "Re: Reunión de las 12:00 - Algunas reflexiones",
        situation: "Programar reuniones durante la comida",
        recipientKey: "manager",
        tone: 3,
        aggressionScore: 45,
        preview:
          "Quería señalar que la reunión recurrente del mediodía coincide con lo que algunas culturas llaman 'comida'. Solo para tu conocimiento.",
        categorySlug: "meetings",
      },
      {
        id: "invoice-1",
        subject: "Factura n.º 4521 - Seguimiento a 90 días",
        situation: "Pago atrasado de factura",
        recipientKey: "client",
        tone: 5,
        aggressionScore: 78,
        preview:
          "Confío en que este email te encuentre bien y que contabilidad prospere, a pesar de la aparente hibernación del último trimestre.",
        categorySlug: "invoices",
      },
      {
        id: "reply-all-1",
        subject: "Re: Re: Re: Re: Todos - Pregunta rápida",
        situation: "Responder a todos sin necesidad",
        recipientKey: "coworker",
        tone: 4,
        aggressionScore: 55,
        preview:
          "Gracias por compartir tus preferencias de comida con los 847 empleados. Seguro que al CFO le encantó saber que prefieres tailandés a italiano.",
        categorySlug: "coworkers",
      },
      {
        id: "micromanage-1",
        subject: "Re: Solicitud de actualización n.º 14 (esta semana)",
        situation: "Microgestionar cada tarea",
        recipientKey: "manager",
        tone: 4,
        aggressionScore: 65,
        preview:
          "Como pediste, aquí va mi actualización horaria. Entre las 14:00 y las 14:15, respiré unas 200 veces y tuve un pensamiento sobre renunciar.",
        categorySlug: "managers",
      },
      {
        id: "wrong-order-1",
        subject: "Re: Pedido n.º 8847 - Interpretación creativa de nuestros requisitos",
        situation: "Enviar pedido equivocado otra vez",
        recipientKey: "supplier",
        tone: 5,
        aggressionScore: 74,
        preview:
          "Recibimos 500 unidades de un producto que nunca pedimos, de un catálogo que nunca vimos, en un color que no existe en la naturaleza.",
        categorySlug: "suppliers",
      },
      {
        id: "vague-brief-1",
        subject: "Re: Briefing del proyecto - Aclaraciones sobre... todo",
        situation: "Enviar requisitos vagos",
        recipientKey: "client",
        tone: 3,
        aggressionScore: 48,
        preview:
          "Gracias por el briefing. Tengo algunas preguntas de clarificación, concretamente sobre las partes entre el principio y el final.",
        categorySlug: "clients",
      },
    ],
  },
};

const hallOfFameCopy: Record<Locale, HallOfFamePageCopy> = {
  "en-en": {
    metadataTitle: "Hall of Fame",
    metadataDescription:
      "The greatest passive-aggressive workplace emails ever crafted. Finest examples of professional hostility, ranked by aggression score.",
    jsonLdName: "Hall of Fame - Best Passive Aggressive Emails",
    jsonLdDescription: "The greatest passive-aggressive workplace emails, ranked by the community",
    title: "Hall of Fame",
    description:
      "The greatest passive-aggressive emails ever crafted. These masterpieces of professional hostility have earned their place in corporate communication history.",
    votesLabel: "votes",
    generateCta: "Create Your Masterpiece",
    entries: [
      {
        rank: 1,
        title: "The Thermonuclear Reply-All",
        subject: "Re: Re: Re: Re: Re: Quick Question About the Printer",
        preview:
          "Since this thread has now exceeded the length of War and Peace, I thought I'd add my contribution to what will surely be studied by future historians.",
        aggressionScore: 97,
        tone: 6,
        votes: 4821,
      },
      {
        rank: 2,
        title: "The Invoice Ultimatum",
        subject: "Invoice #1247 - Day 180 - A Retrospective",
        preview:
          "Half a year ago, I sent you an invoice. Since then, entire civilizations have risen and fallen. Seasons have changed. I've learned a new language. And yet, my payment remains outstanding.",
        aggressionScore: 94,
        tone: 6,
        votes: 4156,
      },
      {
        rank: 3,
        title: "The Calendar Assassin",
        subject: "Declining: 7:00 AM Brainstorm Session (For the 12th Time)",
        preview:
          "I appreciate your enthusiasm for early morning creativity, though I note that our 'brainstorm' sessions have yet to produce a single actionable idea, much like scheduling them at dawn.",
        aggressionScore: 89,
        tone: 5,
        votes: 3892,
      },
      {
        rank: 4,
        title: "The Scope Creep Symphony",
        subject: "Re: Just One More Small Change (Version 47)",
        preview:
          "I've attached the revised design incorporating your latest feedback. For reference, the original brief was 2 pages. The change log is now 847 pages. I trust this aligns with your vision.",
        aggressionScore: 86,
        tone: 5,
        votes: 3641,
      },
      {
        rank: 5,
        title: "The Lunch Thief Manifesto",
        subject: "To the Person Who Took My Clearly Labeled Lunch",
        preview:
          "I hope you enjoyed the organic quinoa bowl I spent 45 minutes preparing this morning. I've attached a receipt so you can Venmo me. I've also CC'd HR, facilities, and the security team.",
        aggressionScore: 92,
        tone: 6,
        votes: 3498,
      },
      {
        rank: 6,
        title: "The Deadline Archaeologist",
        subject: "Unearthing the Original Deadline from the Paleolithic Era",
        preview:
          "According to my records—and carbon dating—this deliverable was originally due six weeks ago. I'm beginning to think 'end of week' means something different in your time zone.",
        aggressionScore: 84,
        tone: 5,
        votes: 3201,
      },
      {
        rank: 7,
        title: "The Meeting-That-Should-Be-An-Email",
        subject: "Re: Meeting Invite - 'Quick Sync' (Duration: 2 Hours)",
        preview:
          "I notice this 'quick sync' has a longer runtime than most feature films. I've taken the liberty of preparing a written summary that covers what we'll likely discuss, which is nothing.",
        aggressionScore: 78,
        tone: 4,
        votes: 2987,
      },
      {
        rank: 8,
        title: "The Credit Thief Correction",
        subject: "RE: Great Job on the Presentation! (Correction Enclosed)",
        preview:
          "Thank you all for the kind words about 'my' presentation. I've attached the original file metadata showing the actual author. Spoiler: it's me. You're welcome, Derek.",
        aggressionScore: 95,
        tone: 6,
        votes: 2876,
      },
      {
        rank: 9,
        title: "The 'As Per My Last Email' Symphony",
        subject: "As Per My Last 7 Emails, 3 Slack Messages, and 2 Carrier Pigeons",
        preview:
          "I'm following up on my previous communications, which span multiple platforms, time zones, and at this point, dimensions of reality.",
        aggressionScore: 88,
        tone: 5,
        votes: 2654,
      },
      {
        rank: 10,
        title: "The Passive Aggressive Out-of-Office",
        subject: "Automatic Reply: I Am Currently Unavailable",
        preview:
          "I am out of the office and will not be responding to emails until I return, much like how I don't respond to emails when I'm in the office. Expected delay: unchanged.",
        aggressionScore: 91,
        tone: 6,
        votes: 2543,
      },
    ],
  },
  "pt-pt": {
    metadataTitle: "Hall da Fama",
    metadataDescription:
      "Os maiores emails passivo-agressivos já escritos no trabalho. Os melhores exemplos de hostilidade profissional, classificados por pontuação de agressividade.",
    jsonLdName: "Hall da Fama - Melhores Emails Passivo-Agressivos",
    jsonLdDescription: "Os maiores emails passivo-agressivos no trabalho, classificados pela comunidade",
    title: "Hall da Fama",
    description:
      "Os maiores emails passivo-agressivos já criados. Estas obras-primas de hostilidade profissional conquistaram o seu lugar na história da comunicação corporativa.",
    votesLabel: "votos",
    generateCta: "Crie a Sua Obra-Prima",
    entries: [
      {
        rank: 1,
        title: "O Responder-a-Todos Termonuclear",
        subject: "Re: Re: Re: Re: Re: Pergunta rápida sobre a impressora",
        preview:
          "Como este thread já excede o comprimento de Guerra e Paz, pensei contribuir para o que certamente será estudado por historiadores futuros.",
        aggressionScore: 97,
        tone: 6,
        votes: 4821,
      },
      {
        rank: 2,
        title: "O Ultimato da Fatura",
        subject: "Fatura n.º 1247 - Dia 180 - Uma retrospectiva",
        preview:
          "Há meio ano enviei-lhe uma fatura. Desde então, civilizações inteiras surgiram e caíram. As estações mudaram. Aprendi uma nova língua. E o pagamento continua em falta.",
        aggressionScore: 94,
        tone: 6,
        votes: 4156,
      },
      {
        rank: 3,
        title: "O Assassino do Calendário",
        subject: "A recusar: sessão de brainstorming às 7:00 (pela 12.ª vez)",
        preview:
          "Aprecio o entusiasmo pela criatividade matinal, embora note que as nossas sessões de 'brainstorm' ainda não produziram uma ideia acionável, tal como marcá-las ao amanhecer.",
        aggressionScore: 89,
        tone: 5,
        votes: 3892,
      },
      {
        rank: 4,
        title: "A Sinfonia do Alargamento de Âmbito",
        subject: "Re: Só mais uma pequena alteração (versão 47)",
        preview:
          "Anexo o design revisto com o seu último feedback. Para referência, o briefing original tinha 2 páginas. O registo de alterações tem agora 847. Confio que alinha com a sua visão.",
        aggressionScore: 86,
        tone: 5,
        votes: 3641,
      },
      {
        rank: 5,
        title: "O Manifesto do Ladrão de Almoços",
        subject: "À pessoa que levou o meu almoço claramente identificado",
        preview:
          "Espero que tenha apreciado a bowl de quinoa biológica que preparei 45 minutos esta manhã. Anexo o recibo para reembolso. Coloquei também RH, instalações e segurança em CC.",
        aggressionScore: 92,
        tone: 6,
        votes: 3498,
      },
      {
        rank: 6,
        title: "O Arqueólogo dos Prazos",
        subject: "Desenterrar o prazo original da era paleolítica",
        preview:
          "Segundo os meus registos — e datação por carbono — este entregável era devido há seis semanas. Começo a pensar que 'fim de semana' significa outra coisa no seu fuso horário.",
        aggressionScore: 84,
        tone: 5,
        votes: 3201,
      },
      {
        rank: 7,
        title: "A Reunião Que Devia Ser um Email",
        subject: "Re: Convite para reunião - 'Sincronização rápida' (duração: 2 horas)",
        preview:
          "Reparei que esta 'sincronização rápida' dura mais do que a maioria dos filmes. Preparei um resumo escrito do que provavelmente discutiremos, ou seja, nada.",
        aggressionScore: 78,
        tone: 4,
        votes: 2987,
      },
      {
        rank: 8,
        title: "A Correção do Ladrão de Crédito",
        subject: "RE: Excelente trabalho na apresentação! (Correção em anexo)",
        preview:
          "Obrigado pelas gentilezas sobre 'a minha' apresentação. Anexo os metadados originais que mostram o autor real. Spoiler: sou eu. De nada, Derek.",
        aggressionScore: 95,
        tone: 6,
        votes: 2876,
      },
      {
        rank: 9,
        title: "A Sinfonia do 'Conforme o Meu Email Anterior'",
        subject: "Conforme os meus 7 emails, 3 mensagens Slack e 2 pombos-correio",
        preview:
          "Retomo as minhas comunicações anteriores, que abrangem várias plataformas, fusos horários e, neste ponto, dimensões da realidade.",
        aggressionScore: 88,
        tone: 5,
        votes: 2654,
      },
      {
        rank: 10,
        title: "A Resposta Automática Passivo-Agressiva",
        subject: "Resposta automática: estou indisponível",
        preview:
          "Estou fora do escritório e não responderei a emails até regressar, tal como não respondo quando estou no escritório. Atraso previsto: inalterado.",
        aggressionScore: 91,
        tone: 6,
        votes: 2543,
      },
    ],
  },
  "fr-fr": {
    metadataTitle: "Hall of Fame",
    metadataDescription:
      "Les plus grands e-mails passif-agressifs jamais rédigés au travail. Les meilleurs exemples d'hostilité professionnelle, classés par score d'agressivité.",
    jsonLdName: "Hall of Fame - Meilleurs E-mails Passif-Agressifs",
    jsonLdDescription: "Les plus grands e-mails passif-agressifs au travail, classés par la communauté",
    title: "Hall of Fame",
    description:
      "Les plus grands e-mails passif-agressifs jamais rédigés. Ces chefs-d'œuvre d'hostilité professionnelle ont gagné leur place dans l'histoire de la communication corporate.",
    votesLabel: "votes",
    generateCta: "Créez Votre Chef-d'Œuvre",
    entries: [
      {
        rank: 1,
        title: "Le Répondre-à-Tous Thermonucléaire",
        subject: "Re : Re : Re : Re : Re : Question rapide sur l'imprimante",
        preview:
          "Comme ce fil dépasse désormais la longueur de Guerre et Paix, j'ai pensé apporter ma contribution à ce que les historiens futurs étudieront sûrement.",
        aggressionScore: 97,
        tone: 6,
        votes: 4821,
      },
      {
        rank: 2,
        title: "L'Ultimatum de Facture",
        subject: "Facture n° 1247 - Jour 180 - Une rétrospective",
        preview:
          "Il y a six mois, je vous ai envoyé une facture. Depuis, des civilisations entières sont nées et sont tombées. Les saisons ont changé. J'ai appris une nouvelle langue. Et mon paiement reste impayé.",
        aggressionScore: 94,
        tone: 6,
        votes: 4156,
      },
      {
        rank: 3,
        title: "L'Assassin du Calendrier",
        subject: "Refus : session de brainstorming à 7h00 (pour la 12e fois)",
        preview:
          "J'apprécie votre enthousiasme pour la créativité matinale, bien que nos sessions de 'brainstorm' n'aient produit aucune idée actionnable, un peu comme les planifier à l'aube.",
        aggressionScore: 89,
        tone: 5,
        votes: 3892,
      },
      {
        rank: 4,
        title: "La Symphonie de la Dérive de Périmètre",
        subject: "Re : Juste un petit changement de plus (version 47)",
        preview:
          "J'ai joint le design révisé avec vos derniers retours. Pour référence, le brief original faisait 2 pages. Le journal des modifications en compte 847. J'espère que cela correspond à votre vision.",
        aggressionScore: 86,
        tone: 5,
        votes: 3641,
      },
      {
        rank: 5,
        title: "Le Manifeste du Voleur de Déjeuner",
        subject: "À la personne qui a pris mon déjeuner clairement étiqueté",
        preview:
          "J'espère que vous avez apprécié le bol de quinoa bio que j'ai préparé 45 minutes ce matin. J'ai joint le reçu pour remboursement. J'ai aussi mis RH, services généraux et sécurité en copie.",
        aggressionScore: 92,
        tone: 6,
        votes: 3498,
      },
      {
        rank: 6,
        title: "L'Archéologue des Délais",
        subject: "Déterrer le délai original de l'ère paléolithique",
        preview:
          "Selon mes archives — et la datation au carbone — ce livrable était dû il y a six semaines. Je commence à penser que 'fin de semaine' signifie autre chose dans votre fuseau horaire.",
        aggressionScore: 84,
        tone: 5,
        votes: 3201,
      },
      {
        rank: 7,
        title: "La Réunion Qui Aurait Dû Être un E-mail",
        subject: "Re : Invitation - 'Point rapide' (durée : 2 heures)",
        preview:
          "Je remarque que ce 'point rapide' dure plus longtemps que la plupart des longs-métrages. J'ai préparé un résumé écrit de ce que nous discuterons probablement, c'est-à-dire rien.",
        aggressionScore: 78,
        tone: 4,
        votes: 2987,
      },
      {
        rank: 8,
        title: "La Correction du Voleur de Crédit",
        subject: "RE : Excellent travail sur la présentation ! (Correction ci-jointe)",
        preview:
          "Merci pour les compliments sur 'ma' présentation. J'ai joint les métadonnées originales montrant le vrai auteur. Spoiler : c'est moi. De rien, Derek.",
        aggressionScore: 95,
        tone: 6,
        votes: 2876,
      },
      {
        rank: 9,
        title: "La Symphonie du 'Suite à Mon Précédent E-mail'",
        subject: "Suite à mes 7 e-mails, 3 messages Slack et 2 pigeons voyageurs",
        preview:
          "Je reviens sur mes communications précédentes, qui couvrent plusieurs plateformes, fuseaux horaires et, à ce stade, dimensions de la réalité.",
        aggressionScore: 88,
        tone: 5,
        votes: 2654,
      },
      {
        rank: 10,
        title: "La Réponse Automatique Passif-Agressive",
        subject: "Réponse automatique : je suis indisponible",
        preview:
          "Je suis absent du bureau et ne répondrai pas aux e-mails avant mon retour, un peu comme quand je suis au bureau. Délai prévu : inchangé.",
        aggressionScore: 91,
        tone: 6,
        votes: 2543,
      },
    ],
  },
  "es-es": {
    metadataTitle: "Hall de la Fama",
    metadataDescription:
      "Los mejores emails pasivo-agresivos jamás redactados en el trabajo. Los mejores ejemplos de hostilidad profesional, clasificados por puntuación de agresividad.",
    jsonLdName: "Hall de la Fama - Mejores Emails Pasivo-Agresivos",
    jsonLdDescription: "Los mejores emails pasivo-agresivos en el trabajo, clasificados por la comunidad",
    title: "Hall de la Fama",
    description:
      "Los mejores emails pasivo-agresivos jamás creados. Estas obras maestras de hostilidad profesional se han ganado su lugar en la historia de la comunicación corporativa.",
    votesLabel: "votos",
    generateCta: "Crea Tu Obra Maestra",
    entries: [
      {
        rank: 1,
        title: "El Responder-a-Todos Termonuclear",
        subject: "Re: Re: Re: Re: Re: Pregunta rápida sobre la impresora",
        preview:
          "Como este hilo ya supera la longitud de Guerra y Paz, pensé aportar mi contribución a lo que sin duda estudiarán los historiadores del futuro.",
        aggressionScore: 97,
        tone: 6,
        votes: 4821,
      },
      {
        rank: 2,
        title: "El Ultimátum de la Factura",
        subject: "Factura n.º 1247 - Día 180 - Una retrospectiva",
        preview:
          "Hace medio año te envié una factura. Desde entonces, civilizaciones enteras han surgido y caído. Han cambiado las estaciones. Aprendí un idioma nuevo. Y el pago sigue pendiente.",
        aggressionScore: 94,
        tone: 6,
        votes: 4156,
      },
      {
        rank: 3,
        title: "El Asesino del Calendario",
        subject: "Rechazando: sesión de lluvia de ideas a las 7:00 (por 12.ª vez)",
        preview:
          "Aprecio tu entusiasmo por la creatividad matutina, aunque nuestras sesiones de 'brainstorm' aún no han producido una sola idea accionable, como programarlas al amanecer.",
        aggressionScore: 89,
        tone: 5,
        votes: 3892,
      },
      {
        rank: 4,
        title: "La Sinfonía de la Ampliación de Alcance",
        subject: "Re: Solo un cambio más pequeño (versión 47)",
        preview:
          "Adjunto el diseño revisado con tu último feedback. Para referencia, el briefing original tenía 2 páginas. El registro de cambios tiene ahora 847. Confío en que encaja con tu visión.",
        aggressionScore: 86,
        tone: 5,
        votes: 3641,
      },
      {
        rank: 5,
        title: "El Manifiesto del Ladrón de Comidas",
        subject: "A la persona que se llevó mi comida claramente etiquetada",
        preview:
          "Espero que hayas disfrutado del bowl de quinoa ecológica que preparé 45 minutos esta mañana. Adjunto el recibo para reembolso. También he puesto a RR. HH., instalaciones y seguridad en copia.",
        aggressionScore: 92,
        tone: 6,
        votes: 3498,
      },
      {
        rank: 6,
        title: "El Arqueólogo de los Plazos",
        subject: "Desenterrar el plazo original de la era paleolítica",
        preview:
          "Según mis registros — y datación por carbono — este entregable vencía hace seis semanas. Empiezo a pensar que 'fin de semana' significa otra cosa en tu zona horaria.",
        aggressionScore: 84,
        tone: 5,
        votes: 3201,
      },
      {
        rank: 7,
        title: "La Reunión Que Debió Ser un Email",
        subject: "Re: Invitación - 'Sincronización rápida' (duración: 2 horas)",
        preview:
          "Noto que esta 'sincronización rápida' dura más que la mayoría de películas. He preparado un resumen escrito de lo que probablemente discutiremos, es decir, nada.",
        aggressionScore: 78,
        tone: 4,
        votes: 2987,
      },
      {
        rank: 8,
        title: "La Corrección del Ladrón de Crédito",
        subject: "RE: ¡Gran trabajo en la presentación! (Corrección adjunta)",
        preview:
          "Gracias por las amabilidades sobre 'mi' presentación. Adjunto los metadatos originales que muestran el autor real. Spoiler: soy yo. De nada, Derek.",
        aggressionScore: 95,
        tone: 6,
        votes: 2876,
      },
      {
        rank: 9,
        title: "La Sinfonía del 'Según Mi Email Anterior'",
        subject: "Según mis 7 emails, 3 mensajes de Slack y 2 palomas mensajeras",
        preview:
          "Retomo mis comunicaciones anteriores, que abarcan varias plataformas, zonas horarias y, en este punto, dimensiones de la realidad.",
        aggressionScore: 88,
        tone: 5,
        votes: 2654,
      },
      {
        rank: 10,
        title: "La Respuesta Automática Pasivo-Agresiva",
        subject: "Respuesta automática: no estoy disponible",
        preview:
          "Estoy fuera de la oficina y no responderé emails hasta volver, igual que cuando estoy en la oficina. Retraso previsto: sin cambios.",
        aggressionScore: 91,
        tone: 6,
        votes: 2543,
      },
    ],
  },
};

const categoriesCopy: Record<Locale, CategoriesPageCopy> = {
  "en-en": {
    metadataTitle: "Email Categories",
    metadataDescription:
      "Browse passive-aggressive email templates by category: clients, coworkers, managers, suppliers, meetings, deadlines, invoices, and corporate buzzwords.",
    title: "Categories",
    description:
      "Every workplace frustration, categorized and catalogued for your passive-aggressive convenience.",
    templatesLabel: "templates",
    backToCategories: "Back to Categories",
    relatedReading: "From the Blog",
    readMore: "Read →",
    categories: [
      {
        slug: "clients",
        description: "For when deliverables are clear but payment isn't, or when the brief changes for the 47th time.",
        count: 125,
      },
      {
        slug: "coworkers",
        description: "Reply-all offenders, lunch thieves, credit stealers, and people who schedule 4pm Friday meetings.",
        count: 180,
      },
      {
        slug: "managers",
        description: "Micromanagers, meeting addicts, and those who say 'let's circle back' without ever circling forward.",
        count: 150,
      },
      {
        slug: "suppliers",
        description: "Wrong orders, missed deliveries, and creative interpretations of 'next-day shipping.'",
        count: 95,
      },
      {
        slug: "meetings",
        description: "The ones that should have been emails, the ones at 7am, and the ones that go 45 minutes overtime.",
        count: 110,
      },
      {
        slug: "deadlines",
        description: "For those who treat 'end of day' as a philosophical concept rather than a temporal constraint.",
        count: 130,
      },
      {
        slug: "invoices",
        description: "Payment follow-ups ranging from polite to 'I know where your office is.'",
        count: 85,
      },
      {
        slug: "corporate-buzzwords",
        description: "Synergy, circle back, low-hanging fruit, and other phrases that make people question their career choices.",
        count: 75,
      },
    ],
  },
  "pt-pt": {
    metadataTitle: "Categorias de Email",
    metadataDescription:
      "Explore modelos de emails passivo-agressivos por categoria: clientes, colegas, chefias, fornecedores, reuniões, prazos, faturas e jargão corporativo.",
    title: "Categorias",
    description:
      "Todas as frustrações do trabalho, categorizadas e catalogadas para a sua conveniência passivo-agressiva.",
    templatesLabel: "modelos",
    backToCategories: "Voltar às Categorias",
    relatedReading: "Do Blog",
    readMore: "Ler →",
    categories: [
      {
        slug: "clients",
        description: "Para quando os entregáveis são claros mas o pagamento não, ou quando o briefing muda pela 47.ª vez.",
        count: 125,
      },
      {
        slug: "coworkers",
        description: "Ofensores do responder-a-todos, ladrões de almoço, apropriadores de crédito e quem marca reuniões às 16h de sexta.",
        count: 180,
      },
      {
        slug: "managers",
        description: "Microgestores, viciados em reuniões e quem diz 'voltamos a este tema' sem nunca voltar.",
        count: 150,
      },
      {
        slug: "suppliers",
        description: "Encomendas erradas, entregas falhadas e interpretações criativas de 'envio no dia seguinte'.",
        count: 95,
      },
      {
        slug: "meetings",
        description: "As que deviam ser emails, as das 7h da manhã e as que passam 45 minutos do tempo previsto.",
        count: 110,
      },
      {
        slug: "deadlines",
        description: "Para quem trata 'fim do dia' como conceito filosófico em vez de limite temporal.",
        count: 130,
      },
      {
        slug: "invoices",
        description: "Seguimentos de pagamento que vão do educado ao 'sei onde fica o vosso escritório'.",
        count: 85,
      },
      {
        slug: "corporate-buzzwords",
        description: "Sinergia, voltar ao tema, frutos acessíveis e outras frases que fazem questionar escolhas de carreira.",
        count: 75,
      },
    ],
  },
  "fr-fr": {
    metadataTitle: "Catégories d'E-mail",
    metadataDescription:
      "Parcourez des modèles d'e-mails passif-agressifs par catégorie : clients, collègues, managers, fournisseurs, réunions, délais, factures et jargon corporate.",
    title: "Catégories",
    description:
      "Toutes les frustrations au travail, catégorisées et cataloguées pour votre confort passif-agressif.",
    templatesLabel: "modèles",
    backToCategories: "Retour aux Catégories",
    relatedReading: "Depuis le Blog",
    readMore: "Lire →",
    categories: [
      {
        slug: "clients",
        description: "Quand les livrables sont clairs mais pas le paiement, ou quand le brief change pour la 47e fois.",
        count: 125,
      },
      {
        slug: "coworkers",
        description: "Répondeurs à tous, voleurs de déjeuner, voleurs de crédit et planificateurs de réunions vendredi 16h.",
        count: 180,
      },
      {
        slug: "managers",
        description: "Microgestionnaires, accros aux réunions et ceux qui disent 'on reviendra là-dessus' sans jamais revenir.",
        count: 150,
      },
      {
        slug: "suppliers",
        description: "Mauvaises commandes, livraisons manquées et interprétations créatives de 'livraison le lendemain'.",
        count: 95,
      },
      {
        slug: "meetings",
        description: "Celles qui auraient dû être des e-mails, celles à 7h et celles qui dépassent de 45 minutes.",
        count: 110,
      },
      {
        slug: "deadlines",
        description: "Pour ceux qui traitent 'fin de journée' comme concept philosophique plutôt que contrainte temporelle.",
        count: 130,
      },
      {
        slug: "invoices",
        description: "Relances de paiement du poli au 'je sais où se trouve votre bureau'.",
        count: 85,
      },
      {
        slug: "corporate-buzzwords",
        description: "Synergie, revenir vers vous, gains rapides et autres phrases qui font remettre en question sa carrière.",
        count: 75,
      },
    ],
  },
  "es-es": {
    metadataTitle: "Categorías de Email",
    metadataDescription:
      "Explora plantillas de emails pasivo-agresivos por categoría: clientes, compañeros, jefes, proveedores, reuniones, plazos, facturas y jerga corporativa.",
    title: "Categorías",
    description:
      "Todas las frustraciones laborales, categorizadas y catalogadas para tu comodidad pasivo-agresiva.",
    templatesLabel: "plantillas",
    backToCategories: "Volver a Categorías",
    relatedReading: "Del Blog",
    readMore: "Leer →",
    categories: [
      {
        slug: "clients",
        description: "Cuando los entregables son claros pero el pago no, o cuando el briefing cambia por 47.ª vez.",
        count: 125,
      },
      {
        slug: "coworkers",
        description: "Ofensores del responder-a-todos, ladrones de comida, usurpadores de crédito y quien programa reuniones viernes a las 16:00.",
        count: 180,
      },
      {
        slug: "managers",
        description: "Microgestores, adictos a reuniones y quienes dicen 'retomamos el tema' sin retomarlo nunca.",
        count: 150,
      },
      {
        slug: "suppliers",
        description: "Pedidos equivocados, entregas fallidas e interpretaciones creativas de 'envío al día siguiente'.",
        count: 95,
      },
      {
        slug: "meetings",
        description: "Las que debieron ser emails, las de las 7:00 y las que se pasan 45 minutos del tiempo previsto.",
        count: 110,
      },
      {
        slug: "deadlines",
        description: "Para quienes tratan 'fin del día' como concepto filosófico en lugar de límite temporal.",
        count: 130,
      },
      {
        slug: "invoices",
        description: "Seguimientos de pago que van de lo educado a 'sé dónde está vuestra oficina'.",
        count: 85,
      },
      {
        slug: "corporate-buzzwords",
        description: "Sinergia, retomar el tema, fruta madura y otras frases que hacen cuestionar elecciones de carrera.",
        count: 75,
      },
    ],
  },
};

const CATEGORY_ICONS: Record<
  string,
  { color: string; path: string }
> = {
  clients: {
    color: "#0d9488",
    path: "M12 21c-1.5-1.5-6-5-6-9a4 4 0 0 1 6-3.46A4 4 0 0 1 18 12c0 4-4.5 7.5-6 9z",
  },
  coworkers: {
    color: "#ea580c",
    path: "M3 7h18v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  },
  managers: {
    color: "#2563eb",
    path: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5.5 21v-2a5.5 5.5 0 0 1 11 0v2",
  },
  suppliers: {
    color: "#7c3aed",
    path: "M5 8h14l-1.5 10H6.5L5 8zM9 8V6a3 3 0 0 1 6 0v2",
  },
  meetings: {
    color: "#7c3aed",
    path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M2 10h20",
  },
  deadlines: {
    color: "#dc2626",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
  },
  invoices: {
    color: "#ca8a04",
    path: "M12 2a7 7 0 0 0-7 7v1a3 3 0 0 0 3 3h1v5h6v-5h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zM12 12v4M10 22h4",
  },
  "corporate-buzzwords": {
    color: "#374151",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
  },
};

function getCategoryLabel(locale: Locale, slug: string): string {
  const fromHome = HOME_COPY[locale].categories.find((c) => c.slug === slug);
  if (fromHome) return fromHome.label;
  return slug;
}

function getToneLabel(locale: Locale, tone: number): string {
  return HOME_COPY[locale].tones[tone - 1]?.label ?? "";
}

function getRecipientLabel(
  locale: Locale,
  key: keyof typeof GENERATOR_COPY["en-en"]["recipients"],
): string {
  return GENERATOR_COPY[locale].recipients[key] ?? key;
}

export function getExamplesPageCopy(locale: Locale) {
  const copy = examplesCopy[locale] ?? examplesCopy[DEFAULT_LOCALE];
  return {
    ...copy,
    emails: copy.emails.map((email) => ({
      ...email,
      recipient: getRecipientLabel(locale, email.recipientKey),
      toneLabel: getToneLabel(locale, email.tone),
      categoryLabel: getCategoryLabel(locale, email.categorySlug),
    })),
  };
}

export function getHallOfFamePageCopy(locale: Locale) {
  const copy = hallOfFameCopy[locale] ?? hallOfFameCopy[DEFAULT_LOCALE];
  return {
    ...copy,
    entries: copy.entries.map((entry) => ({
      ...entry,
      toneLabel: getToneLabel(locale, entry.tone),
    })),
  };
}

export function getCategoriesPageCopy(locale: Locale) {
  const copy = categoriesCopy[locale] ?? categoriesCopy[DEFAULT_LOCALE];
  return {
    ...copy,
    categories: copy.categories.map((category) => ({
      ...category,
      label: getCategoryLabel(locale, category.slug),
      icon: CATEGORY_ICONS[category.slug],
    })),
  };
}
