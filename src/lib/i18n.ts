export const LOCALES = ["en-en", "pt-pt", "fr-fr", "es-es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en-en";

export const LOCALE_CONFIG: Record<
  Locale,
  {
    label: string;
    languageName: string;
    htmlLang: string;
    ogLocale: string;
  }
> = {
  "en-en": {
    label: "EN",
    languageName: "English",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  "pt-pt": {
    label: "PT",
    languageName: "Portuguese",
    htmlLang: "pt-PT",
    ogLocale: "pt_PT",
  },
  "fr-fr": {
    label: "FR",
    languageName: "French",
    htmlLang: "fr-FR",
    ogLocale: "fr_FR",
  },
  "es-es": {
    label: "ES",
    languageName: "Spanish",
    htmlLang: "es-ES",
    ogLocale: "es_ES",
  },
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localizedPath(locale: Locale, path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export const HOME_COPY: Record<
  Locale,
  {
    metadataTitle: string;
    metadataDescription: string;
    heroTitleTop: string;
    heroTitleBottom: string;
    heroDescription: string;
    generateCta: string;
    examplesCta: string;
    generatorTitle: string;
    generatorDescription: string;
    toneScaleTitle: string;
    toneScaleDescription: string;
    fromBlog: string;
    popularCategories: string;
    popularCategoriesDescription: string;
    categories: Array<{ slug: string; label: string }>;
    tones: Array<{ level: number; label: string; emoji: string; desc: string }>;
  }
> = {
  "en-en": {
    metadataTitle: "Passive Aggressive Email Generator",
    metadataDescription:
      "Generate passive-aggressive emails for every workplace situation. From politely professional to 'per my previous email.' Free tool.",
    heroTitleTop: "Passive Aggressive",
    heroTitleBottom: "Email Generator",
    heroDescription:
      "Generate workplace emails ranging from politely professional to \"per my previous email.\"",
    generateCta: "Generate Email",
    examplesCta: "Browse Examples",
    generatorTitle: "Craft Your Email",
    generatorDescription: "Select your parameters. We'll handle the passive aggression.",
    toneScaleTitle: "The Tone Scale",
    toneScaleDescription: "From cordial professionalism to career-ending precision.",
    fromBlog: "From the Blog",
    popularCategories: "Popular Categories",
    popularCategoriesDescription:
      "Browse our curated collection of workplace communication templates.",
    categories: [
      { slug: "clients", label: "Clients" },
      { slug: "coworkers", label: "Coworkers" },
      { slug: "managers", label: "Managers" },
      { slug: "deadlines", label: "Deadlines" },
      { slug: "meetings", label: "Meetings" },
      { slug: "invoices", label: "Invoices" },
      { slug: "suppliers", label: "Suppliers" },
      { slug: "corporate-buzzwords", label: "Buzzwords" },
    ],
    tones: [
      { level: 1, label: "Professional", emoji: "😊", desc: "Genuinely polite" },
      { level: 2, label: "Slightly Annoyed", emoji: "🙂", desc: "Smile is slipping" },
      { level: 3, label: "Concerned", emoji: "😐", desc: "Patience wearing thin" },
      { level: 4, label: "Passive Aggressive", emoji: "🙃", desc: "Reading between lines" },
      { level: 5, label: "Per My Previous Email", emoji: "😤", desc: "CC'ing the manager" },
      { level: 6, label: "Corporate Assassin", emoji: "💀", desc: "Career-ending precision" },
    ],
  },
  "pt-pt": {
    metadataTitle: "Gerador de Emails Passivo-Agressivos",
    metadataDescription:
      "Gere emails passivo-agressivos para qualquer situação profissional. Do educado ao 'conforme o meu email anterior'.",
    heroTitleTop: "Gerador de Emails",
    heroTitleBottom: "Passivo-Agressivos",
    heroDescription:
      "Gere emails profissionais que vão do cordial ao \"conforme o meu email anterior\".",
    generateCta: "Gerar Email",
    examplesCta: "Ver Exemplos",
    generatorTitle: "Crie o Seu Email",
    generatorDescription: "Escolha os parâmetros. Nós tratamos da agressividade subtil.",
    toneScaleTitle: "Escala de Tom",
    toneScaleDescription: "Da cordialidade profissional à precisão que termina carreiras.",
    fromBlog: "Do Blog",
    popularCategories: "Categorias Populares",
    popularCategoriesDescription:
      "Explore a nossa coleção de modelos de comunicação profissional.",
    categories: [
      { slug: "clients", label: "Clientes" },
      { slug: "coworkers", label: "Colegas" },
      { slug: "managers", label: "Chefias" },
      { slug: "deadlines", label: "Prazos" },
      { slug: "meetings", label: "Reuniões" },
      { slug: "invoices", label: "Faturas" },
      { slug: "suppliers", label: "Fornecedores" },
      { slug: "corporate-buzzwords", label: "Jargão" },
    ],
    tones: [
      { level: 1, label: "Profissional", emoji: "😊", desc: "Realmente educado" },
      { level: 2, label: "Ligeiramente Irritado", emoji: "🙂", desc: "O sorriso começa a cair" },
      { level: 3, label: "Preocupado", emoji: "😐", desc: "A paciência está a acabar" },
      { level: 4, label: "Passivo-Agressivo", emoji: "🙃", desc: "Subtexto evidente" },
      { level: 5, label: "Conforme o Meu Email Anterior", emoji: "😤", desc: "Com chefia em CC" },
      { level: 6, label: "Assassino Corporativo", emoji: "💀", desc: "Precisão devastadora" },
    ],
  },
  "fr-fr": {
    metadataTitle: "Générateur d'E-mails Passif-Agressifs",
    metadataDescription:
      "Générez des e-mails passif-agressifs pour chaque situation professionnelle, du poli au 'suite à mon précédent e-mail'.",
    heroTitleTop: "Générateur d'E-mails",
    heroTitleBottom: "Passif-Agressifs",
    heroDescription:
      "Générez des e-mails professionnels, du ton cordial au \"suite à mon précédent e-mail\".",
    generateCta: "Générer un E-mail",
    examplesCta: "Voir les Exemples",
    generatorTitle: "Rédigez Votre E-mail",
    generatorDescription: "Choisissez les paramètres. Nous gérons le sous-texte.",
    toneScaleTitle: "L'Échelle de Ton",
    toneScaleDescription: "Du professionnalisme cordial à la précision destructrice.",
    fromBlog: "Depuis le Blog",
    popularCategories: "Catégories Populaires",
    popularCategoriesDescription:
      "Parcourez notre collection de modèles de communication professionnelle.",
    categories: [
      { slug: "clients", label: "Clients" },
      { slug: "coworkers", label: "Collègues" },
      { slug: "managers", label: "Managers" },
      { slug: "deadlines", label: "Délais" },
      { slug: "meetings", label: "Réunions" },
      { slug: "invoices", label: "Factures" },
      { slug: "suppliers", label: "Fournisseurs" },
      { slug: "corporate-buzzwords", label: "Jargon" },
    ],
    tones: [
      { level: 1, label: "Professionnel", emoji: "😊", desc: "Vraiment poli" },
      { level: 2, label: "Un Peu Agacé", emoji: "🙂", desc: "Le sourire glisse" },
      { level: 3, label: "Préoccupé", emoji: "😐", desc: "La patience s'amenuise" },
      { level: 4, label: "Passif-Agressif", emoji: "🙃", desc: "Sous-texte lisible" },
      { level: 5, label: "Suite à Mon Précédent E-mail", emoji: "😤", desc: "Manager en copie" },
      { level: 6, label: "Assassin Corporate", emoji: "💀", desc: "Précision fatale" },
    ],
  },
  "es-es": {
    metadataTitle: "Generador de Emails Pasivo-Agresivos",
    metadataDescription:
      "Genera emails pasivo-agresivos para cualquier situación laboral. De profesional educado a 'según mi email anterior'.",
    heroTitleTop: "Generador de Emails",
    heroTitleBottom: "Pasivo-Agresivos",
    heroDescription:
      "Genera emails laborales desde lo educadamente profesional hasta \"según mi email anterior\".",
    generateCta: "Generar Email",
    examplesCta: "Ver Ejemplos",
    generatorTitle: "Crea Tu Email",
    generatorDescription: "Elige los parámetros. Nosotros ponemos la agresividad sutil.",
    toneScaleTitle: "Escala de Tono",
    toneScaleDescription: "De la cordialidad profesional a la precisión letal.",
    fromBlog: "Del Blog",
    popularCategories: "Categorías Populares",
    popularCategoriesDescription:
      "Explora nuestra colección de plantillas de comunicación laboral.",
    categories: [
      { slug: "clients", label: "Clientes" },
      { slug: "coworkers", label: "Compañeros" },
      { slug: "managers", label: "Jefes" },
      { slug: "deadlines", label: "Plazos" },
      { slug: "meetings", label: "Reuniones" },
      { slug: "invoices", label: "Facturas" },
      { slug: "suppliers", label: "Proveedores" },
      { slug: "corporate-buzzwords", label: "Jerga" },
    ],
    tones: [
      { level: 1, label: "Profesional", emoji: "😊", desc: "Sinceramente educado" },
      { level: 2, label: "Algo Molesto", emoji: "🙂", desc: "La sonrisa se rompe" },
      { level: 3, label: "Preocupado", emoji: "😐", desc: "La paciencia se agota" },
      { level: 4, label: "Pasivo-Agresivo", emoji: "🙃", desc: "Subtexto evidente" },
      { level: 5, label: "Según Mi Email Anterior", emoji: "😤", desc: "Jefe en copia" },
      { level: 6, label: "Asesino Corporativo", emoji: "💀", desc: "Precisión devastadora" },
    ],
  },
};

export const BLOG_INDEX_COPY: Record<
  Locale,
  { title: string; description: string; backToBlog: string; by: string; ready: string; cta: string; relatedPosts: string; readMore: string; fromBlog: string }
> = {
  "en-en": {
    title: "Blog",
    description:
      "Insights, guides, and observations on workplace communication — from the mildly helpful to the deeply cathartic.",
    backToBlog: "Back to Blog",
    by: "By",
    ready: "Ready to craft your own?",
    cta: "Generate an Email",
    relatedPosts: "Related Posts",
    readMore: "Read →",
    fromBlog: "From the Blog",
  },
  "pt-pt": {
    title: "Blog",
    description:
      "Guias e observações sobre comunicação no trabalho — do ligeiramente útil ao profundamente catártico.",
    backToBlog: "Voltar ao Blog",
    by: "Por",
    ready: "Pronto para criar o seu?",
    cta: "Gerar um Email",
    relatedPosts: "Artigos Relacionados",
    readMore: "Ler →",
    fromBlog: "Do Blog",
  },
  "fr-fr": {
    title: "Blog",
    description:
      "Analyses et guides sur la communication professionnelle — du légèrement utile au franchement cathartique.",
    backToBlog: "Retour au Blog",
    by: "Par",
    ready: "Prêt à rédiger le vôtre ?",
    cta: "Générer un E-mail",
    relatedPosts: "Articles Similaires",
    readMore: "Lire →",
    fromBlog: "Depuis le Blog",
  },
  "es-es": {
    title: "Blog",
    description:
      "Guías y observaciones sobre comunicación laboral — de lo ligeramente útil a lo profundamente catártico.",
    backToBlog: "Volver al Blog",
    by: "Por",
    ready: "¿Listo para crear el tuyo?",
    cta: "Generar un Email",
    relatedPosts: "Artículos Relacionados",
    readMore: "Leer →",
    fromBlog: "Del Blog",
  },
};

export const LAYOUT_COPY: Record<
  Locale,
  {
    nav: {
      generator: string;
      examples: string;
      hallOfFame: string;
      categories: string;
    };
    languageLabel: string;
    footer: {
      product: string;
      categories: string;
      company: string;
      legal: string;
      generator: string;
      examples: string;
      hallOfFame: string;
      blog: string;
      clients: string;
      coworkers: string;
      managers: string;
      deadlines: string;
      about: string;
      methodology: string;
      editorialStandards: string;
      contact: string;
      privacy: string;
      terms: string;
      rights: string;
      tagline: string;
    };
    signature: {
      label: string;
      phrases: Array<{ text: string; score: number }>;
    };
  }
> = {
  "en-en": {
    nav: {
      generator: "Generator",
      examples: "Examples",
      hallOfFame: "Hall of Fame",
      categories: "Categories",
    },
    languageLabel: "Language",
    footer: {
      product: "Product",
      categories: "Categories",
      company: "Company",
      legal: "Legal",
      generator: "Generator",
      examples: "Examples",
      hallOfFame: "Hall of Fame",
      blog: "Blog",
      clients: "Clients",
      coworkers: "Coworkers",
      managers: "Managers",
      deadlines: "Deadlines",
      about: "About",
      methodology: "Methodology",
      editorialStandards: "Editorial Standards",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved.",
      tagline: "Made with barely concealed frustration",
    },
    signature: {
      label: "Aggression Level",
      phrases: [
        { text: "Just checking in...", score: 15 },
        { text: "Hope you're doing well...", score: 25 },
        { text: "Wanted to circle back...", score: 40 },
        { text: "Per our previous conversation...", score: 60 },
        { text: "As previously mentioned...", score: 75 },
        { text: "As mentioned in my previous emails...", score: 92 },
      ],
    },
  },
  "pt-pt": {
    nav: {
      generator: "Gerador",
      examples: "Exemplos",
      hallOfFame: "Hall da Fama",
      categories: "Categorias",
    },
    languageLabel: "Idioma",
    footer: {
      product: "Produto",
      categories: "Categorias",
      company: "Empresa",
      legal: "Legal",
      generator: "Gerador",
      examples: "Exemplos",
      hallOfFame: "Hall da Fama",
      blog: "Blog",
      clients: "Clientes",
      coworkers: "Colegas",
      managers: "Chefias",
      deadlines: "Prazos",
      about: "Sobre",
      methodology: "Metodologia",
      editorialStandards: "Normas Editoriais",
      contact: "Contacto",
      privacy: "Privacidade",
      terms: "Termos",
      rights: "Todos os direitos reservados.",
      tagline: "Feito com frustração mal disfarçada",
    },
    signature: {
      label: "Nível de Agressividade",
      phrases: [
        { text: "Só a confirmar...", score: 15 },
        { text: "Espero que esteja tudo bem...", score: 25 },
        { text: "Queria retomar este tema...", score: 40 },
        { text: "Conforme a nossa conversa anterior...", score: 60 },
        { text: "Como referido anteriormente...", score: 75 },
        { text: "Como mencionado nos meus emails anteriores...", score: 92 },
      ],
    },
  },
  "fr-fr": {
    nav: {
      generator: "Générateur",
      examples: "Exemples",
      hallOfFame: "Hall of Fame",
      categories: "Catégories",
    },
    languageLabel: "Langue",
    footer: {
      product: "Produit",
      categories: "Catégories",
      company: "Entreprise",
      legal: "Légal",
      generator: "Générateur",
      examples: "Exemples",
      hallOfFame: "Hall of Fame",
      blog: "Blog",
      clients: "Clients",
      coworkers: "Collègues",
      managers: "Managers",
      deadlines: "Délais",
      about: "À propos",
      methodology: "Méthodologie",
      editorialStandards: "Standards Éditoriaux",
      contact: "Contact",
      privacy: "Confidentialité",
      terms: "Conditions",
      rights: "Tous droits réservés.",
      tagline: "Fait avec une frustration à peine dissimulée",
    },
    signature: {
      label: "Niveau d'Agressivité",
      phrases: [
        { text: "Je relance simplement...", score: 15 },
        { text: "J'espère que vous allez bien...", score: 25 },
        { text: "Je souhaitais revenir vers vous...", score: 40 },
        { text: "Suite à notre échange précédent...", score: 60 },
        { text: "Comme indiqué précédemment...", score: 75 },
        { text: "Comme mentionné dans mes précédents e-mails...", score: 92 },
      ],
    },
  },
  "es-es": {
    nav: {
      generator: "Generador",
      examples: "Ejemplos",
      hallOfFame: "Hall de la Fama",
      categories: "Categorías",
    },
    languageLabel: "Idioma",
    footer: {
      product: "Producto",
      categories: "Categorías",
      company: "Empresa",
      legal: "Legal",
      generator: "Generador",
      examples: "Ejemplos",
      hallOfFame: "Hall de la Fama",
      blog: "Blog",
      clients: "Clientes",
      coworkers: "Compañeros",
      managers: "Jefes",
      deadlines: "Plazos",
      about: "Sobre",
      methodology: "Metodología",
      editorialStandards: "Normas Editoriales",
      contact: "Contacto",
      privacy: "Privacidad",
      terms: "Términos",
      rights: "Todos los derechos reservados.",
      tagline: "Hecho con frustración apenas disimulada",
    },
    signature: {
      label: "Nivel de Agresividad",
      phrases: [
        { text: "Solo quería comprobar...", score: 15 },
        { text: "Espero que todo vaya bien...", score: 25 },
        { text: "Quería retomar este tema...", score: 40 },
        { text: "Según nuestra conversación anterior...", score: 60 },
        { text: "Como indiqué anteriormente...", score: 75 },
        { text: "Como mencioné en mis emails anteriores...", score: 92 },
      ],
    },
  },
};

export const GENERATOR_COPY: Record<
  Locale,
  {
    recipientLabel: string;
    recipientPlaceholder: string;
    situationLabel: string;
    situationPlaceholder: string;
    customSituation: string;
    customPlaceholder: string;
    toneLabel: string;
    lengthLabel: string;
    lengths: Record<"short" | "medium" | "long", string>;
    loading: string;
    generate: string;
    recipients: Record<string, string>;
    situations: string[];
  }
> = {
  "en-en": {
    recipientLabel: "Who are you emailing?",
    recipientPlaceholder: "Select recipient",
    situationLabel: "What happened?",
    situationPlaceholder: "Select situation",
    customSituation: "Custom situation...",
    customPlaceholder: "Describe your workplace situation...",
    toneLabel: "Tone",
    lengthLabel: "Length",
    lengths: { short: "short", medium: "medium", long: "long" },
    loading: "Crafting passive aggression...",
    generate: "Generate Email",
    recipients: {
      manager: "Manager",
      client: "Client",
      supplier: "Supplier",
      coworker: "Coworker",
      employee: "Employee",
      freelancer: "Freelancer",
    },
    situations: [
      "Late reply to important email",
      "Missed deadline (again)",
      "Taking credit for my work",
      "Scheduling meetings during lunch",
      "Not reading the brief",
      "Replying all unnecessarily",
      "Ignoring previous instructions",
      "Micromanaging every task",
      "Late payment on invoice",
      "Sending vague requirements",
      "Cancelling meeting last minute",
      "Not showing up to standup",
      "Stealing food from fridge",
      "Playing music without headphones",
      "CC'ing the entire company",
    ],
  },
  "pt-pt": {
    recipientLabel: "A quem vai enviar?",
    recipientPlaceholder: "Escolha o destinatário",
    situationLabel: "O que aconteceu?",
    situationPlaceholder: "Escolha a situação",
    customSituation: "Situação personalizada...",
    customPlaceholder: "Descreva a situação profissional...",
    toneLabel: "Tom",
    lengthLabel: "Extensão",
    lengths: { short: "curto", medium: "médio", long: "longo" },
    loading: "A criar agressividade subtil...",
    generate: "Gerar Email",
    recipients: {
      manager: "Chefia",
      client: "Cliente",
      supplier: "Fornecedor",
      coworker: "Colega",
      employee: "Colaborador",
      freelancer: "Freelancer",
    },
    situations: [
      "Resposta tardia a um email importante",
      "Prazo falhado outra vez",
      "Apropriar-se do meu trabalho",
      "Marcar reuniões à hora de almoço",
      "Não ler o briefing",
      "Responder a todos sem necessidade",
      "Ignorar instruções anteriores",
      "Microgerir cada tarefa",
      "Pagamento atrasado de fatura",
      "Enviar requisitos vagos",
      "Cancelar reunião à última hora",
      "Não aparecer na reunião diária",
      "Roubar comida do frigorífico",
      "Ouvir música sem auscultadores",
      "Colocar toda a empresa em CC",
    ],
  },
  "fr-fr": {
    recipientLabel: "À qui écrivez-vous ?",
    recipientPlaceholder: "Choisir le destinataire",
    situationLabel: "Que s'est-il passé ?",
    situationPlaceholder: "Choisir la situation",
    customSituation: "Situation personnalisée...",
    customPlaceholder: "Décrivez la situation professionnelle...",
    toneLabel: "Ton",
    lengthLabel: "Longueur",
    lengths: { short: "court", medium: "moyen", long: "long" },
    loading: "Rédaction du sous-texte...",
    generate: "Générer l'e-mail",
    recipients: {
      manager: "Manager",
      client: "Client",
      supplier: "Fournisseur",
      coworker: "Collègue",
      employee: "Employé",
      freelancer: "Freelance",
    },
    situations: [
      "Réponse tardive à un e-mail important",
      "Délai encore manqué",
      "S'attribuer mon travail",
      "Planifier des réunions pendant le déjeuner",
      "Ne pas lire le brief",
      "Répondre à tous inutilement",
      "Ignorer les instructions précédentes",
      "Microgérer chaque tâche",
      "Paiement de facture en retard",
      "Envoyer des exigences vagues",
      "Annuler une réunion à la dernière minute",
      "Ne pas venir au stand-up",
      "Voler de la nourriture au frigo",
      "Écouter de la musique sans casque",
      "Mettre toute l'entreprise en copie",
    ],
  },
  "es-es": {
    recipientLabel: "¿A quién escribes?",
    recipientPlaceholder: "Elige destinatario",
    situationLabel: "¿Qué ha pasado?",
    situationPlaceholder: "Elige situación",
    customSituation: "Situación personalizada...",
    customPlaceholder: "Describe tu situación laboral...",
    toneLabel: "Tono",
    lengthLabel: "Extensión",
    lengths: { short: "corto", medium: "medio", long: "largo" },
    loading: "Redactando agresividad sutil...",
    generate: "Generar Email",
    recipients: {
      manager: "Jefe",
      client: "Cliente",
      supplier: "Proveedor",
      coworker: "Compañero",
      employee: "Empleado",
      freelancer: "Freelancer",
    },
    situations: [
      "Respuesta tardía a un email importante",
      "Plazo incumplido otra vez",
      "Atribuirse mi trabajo",
      "Programar reuniones durante la comida",
      "No leer el briefing",
      "Responder a todos sin necesidad",
      "Ignorar instrucciones anteriores",
      "Microgestionar cada tarea",
      "Pago atrasado de factura",
      "Enviar requisitos vagos",
      "Cancelar reunión en el último minuto",
      "No aparecer en la reunión diaria",
      "Robar comida de la nevera",
      "Poner música sin auriculares",
      "Poner a toda la empresa en copia",
    ],
  },
};

export const COOKIE_CONSENT_COPY: Record<
  Locale,
  {
    bannerTitle: string;
    bannerDescription: string;
    settingsTitle: string;
    settingsDescription: string;
    acceptAll: string;
    rejectNonEssential: string;
    customize: string;
    savePreferences: string;
    cancel: string;
    privacyLink: string;
    doNotSell: string;
    cookieSettings: string;
    analyticsLabel: string;
    analyticsDescription: string;
    advertisingLabel: string;
    advertisingDescription: string;
  }
> = {
  "en-en": {
    bannerTitle: "We value your privacy",
    bannerDescription:
      "We use cookies for analytics (Google Analytics) and advertising (Google AdSense). You can accept all, reject non-essential cookies, or customize your choices. See our Privacy Policy for details.",
    settingsTitle: "Cookie preferences",
    settingsDescription: "Choose which optional cookies and data uses you allow. Essential cookies are always active.",
    acceptAll: "Accept all",
    rejectNonEssential: "Reject non-essential",
    customize: "Customize",
    savePreferences: "Save preferences",
    cancel: "Cancel",
    privacyLink: "Privacy Policy",
    doNotSell: "Do Not Sell or Share My Personal Information",
    cookieSettings: "Cookie Settings",
    analyticsLabel: "Analytics",
    analyticsDescription: "Helps us understand how the site is used via Google Analytics.",
    advertisingLabel: "Advertising",
    advertisingDescription: "Allows Google AdSense to show ads and measure ad performance.",
  },
  "pt-pt": {
    bannerTitle: "Valorizamos a sua privacidade",
    bannerDescription:
      "Utilizamos cookies para análise (Google Analytics) e publicidade (Google AdSense). Pode aceitar todos, rejeitar os não essenciais ou personalizar as suas escolhas. Consulte a nossa Política de Privacidade.",
    settingsTitle: "Preferências de cookies",
    settingsDescription: "Escolha que cookies opcionais e usos de dados permite. Os cookies essenciais estão sempre ativos.",
    acceptAll: "Aceitar todos",
    rejectNonEssential: "Rejeitar não essenciais",
    customize: "Personalizar",
    savePreferences: "Guardar preferências",
    cancel: "Cancelar",
    privacyLink: "Política de Privacidade",
    doNotSell: "Não Vender nem Partilhar os Meus Dados",
    cookieSettings: "Definições de Cookies",
    analyticsLabel: "Análise",
    analyticsDescription: "Ajuda-nos a perceber como o site é usado via Google Analytics.",
    advertisingLabel: "Publicidade",
    advertisingDescription: "Permite que o Google AdSense mostre anúncios e meça o desempenho.",
  },
  "fr-fr": {
    bannerTitle: "Nous respectons votre vie privée",
    bannerDescription:
      "Nous utilisons des cookies pour l'analyse (Google Analytics) et la publicité (Google AdSense). Vous pouvez tout accepter, refuser les cookies non essentiels ou personnaliser vos choix. Consultez notre Politique de Confidentialité.",
    settingsTitle: "Préférences cookies",
    settingsDescription: "Choisissez les cookies optionnels et usages de données que vous autorisez. Les cookies essentiels restent actifs.",
    acceptAll: "Tout accepter",
    rejectNonEssential: "Refuser les non essentiels",
    customize: "Personnaliser",
    savePreferences: "Enregistrer",
    cancel: "Annuler",
    privacyLink: "Politique de Confidentialité",
    doNotSell: "Ne Pas Vendre ni Partager Mes Informations",
    cookieSettings: "Paramètres Cookies",
    analyticsLabel: "Analyse",
    analyticsDescription: "Nous aide à comprendre l'utilisation du site via Google Analytics.",
    advertisingLabel: "Publicité",
    advertisingDescription: "Permet à Google AdSense d'afficher des annonces et mesurer leurs performances.",
  },
  "es-es": {
    bannerTitle: "Valoramos tu privacidad",
    bannerDescription:
      "Usamos cookies para análisis (Google Analytics) y publicidad (Google AdSense). Puedes aceptar todas, rechazar las no esenciales o personalizar tus opciones. Consulta nuestra Política de Privacidad.",
    settingsTitle: "Preferencias de cookies",
    settingsDescription: "Elige qué cookies opcionales y usos de datos permites. Las cookies esenciales siempre están activas.",
    acceptAll: "Aceptar todas",
    rejectNonEssential: "Rechazar no esenciales",
    customize: "Personalizar",
    savePreferences: "Guardar preferencias",
    cancel: "Cancelar",
    privacyLink: "Política de Privacidad",
    doNotSell: "No Vender ni Compartir Mi Información",
    cookieSettings: "Configuración de Cookies",
    analyticsLabel: "Análisis",
    analyticsDescription: "Nos ayuda a entender cómo se usa el sitio con Google Analytics.",
    advertisingLabel: "Publicidad",
    advertisingDescription: "Permite que Google AdSense muestre anuncios y mida su rendimiento.",
  },
};
