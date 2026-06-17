import { DEFAULT_LOCALE, HOME_COPY, type Locale } from "@/lib/i18n";

export type AboutCopy = {
  metadataTitle: string;
  metadataDescription: string;
  jsonLdName: string;
  title: string;
  subtitle: string;
  missionTitle: string;
  missionParagraphs: [string, string];
  whatWeDoTitle: string;
  whatWeDoParagraph: string;
  whatWeDoBullets: string[];
  philosophyTitle: string;
  philosophyParagraph: string;
  philosophyBullets: string[];
  editorialTitle: string;
  editorialParagraphBefore: string;
  editorialLinkLabel: string;
  editorialParagraphAfter: string;
  disclaimerTitle: string;
  disclaimerParagraph: string;
  disclaimerNote: string;
};

export type MethodologyCopy = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  subtitle: string;
  toneScaleTitle: string;
  toneScaleIntro: string;
  toneDescriptions: Record<number, string>;
  aggressionTitle: string;
  aggressionIntro: string;
  aggressionFactors: { factor: string; weight: string; desc: string }[];
  damageTitle: string;
  damageParagraph: string;
  translationTitle: string;
  translationParagraph: string;
  qualityTitle: string;
  qualityIntro: string;
  qualityBullets: string[];
  faqs: { question: string; answer: string }[];
};

export type EditorialCopy = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  subtitle: string;
  principlesTitle: string;
  principlesIntro: string;
  principles: { title: string; body: string }[];
  reviewTitle: string;
  reviewIntro: string;
  reviewSteps: string[];
  updatesTitle: string;
  updatesParagraph: string;
  aiTitle: string;
  aiParagraph: string;
  feedbackTitle: string;
  feedbackParagraph: string;
  seeAlsoMethodology: string;
  seeAlsoAbout: string;
  seeAlsoLabel: string;
};

export type ContactCopy = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  subtitle: string;
  getInTouchTitle: string;
  getInTouchParagraph: string;
  emailLabel: string;
  scenarioTitle: string;
  scenarioParagraph: string;
  responseTitle: string;
  responseParagraph: string;
  responseNote: string;
};

const aboutCopy: Record<Locale, AboutCopy> = {
  "en-en": {
    metadataTitle: "About PassiveAggressiveEmails.com",
    metadataDescription:
      "The story behind PassiveAggressiveEmails.com. Our mission, methodology, and the team crafting professional hostility.",
    jsonLdName: "About PassiveAggressiveEmails.com",
    title: "About",
    subtitle: "The story behind professional hostility, perfected.",
    missionTitle: "Our Mission",
    missionParagraphs: [
      "PassiveAggressiveEmails.com exists because workplace communication is broken. Every day, millions of professionals stare at their screens, trying to craft the perfect email that says \"I'm furious\" while technically reading as \"I hope you're well.\"",
      "We built the definitive resource for navigating this delicate art form. Part generator, part reference library, part cathartic experience — our platform helps you communicate with precision, professionalism, and just the right amount of barely-concealed frustration.",
    ],
    whatWeDoTitle: "What We Do",
    whatWeDoParagraph:
      "We maintain the internet's largest collection of passive-aggressive email templates, categorized by recipient, situation, and aggression level. Our tone scale ranges from genuinely professional (level 1) to \"Corporate Assassin\" (level 6) — because sometimes the situation calls for precision-guided hostility.",
    whatWeDoBullets: [
      "8 workplace categories",
      "6-point aggression tone scale",
      "AI-powered custom generation",
      "Shareable results with aggression scoring",
    ],
    philosophyTitle: "Our Philosophy",
    philosophyParagraph:
      "We believe the best passive-aggressive communication is an art form. It requires subtlety, restraint, and an intimate understanding of corporate language. A truly great passive-aggressive email should:",
    philosophyBullets: [
      "Be technically unobjectionable",
      "Carry unmistakable subtext",
      "Make the reader question their life choices",
      "Never cross the line into overt hostility",
      "Sound completely reasonable if read aloud in a meeting",
    ],
    editorialTitle: "Editorial Standards",
    editorialParagraphBefore: "Every template in our library is reviewed for quality, creativity, and plausible deniability. We maintain strict ",
    editorialLinkLabel: "editorial standards",
    editorialParagraphAfter: " to ensure our content is both useful and entertaining.",
    disclaimerTitle: "Disclaimer",
    disclaimerParagraph:
      "PassiveAggressiveEmails.com is a humor and productivity tool. While our templates are crafted to be workplace-appropriate, we encourage users to exercise judgment before sending. We are not responsible for any HR meetings, performance reviews, or career consequences that may result from the use of our higher-tier aggression levels.",
    disclaimerNote: "Use Corporate Assassin mode at your own risk.",
  },
  "pt-pt": {
    metadataTitle: "Sobre o PassiveAggressiveEmails.com",
    metadataDescription:
      "A história por trás do PassiveAggressiveEmails.com. A nossa missão, metodologia e a equipa que aperfeiçoa a hostilidade profissional.",
    jsonLdName: "Sobre o PassiveAggressiveEmails.com",
    title: "Sobre",
    subtitle: "A história por trás da hostilidade profissional, aperfeiçoada.",
    missionTitle: "A Nossa Missão",
    missionParagraphs: [
      "O PassiveAggressiveEmails.com existe porque a comunicação no trabalho está partida. Todos os dias, milhões de profissionais olham para o ecrã, a tentar redigir o email perfeito que diz \"estou furioso\" mas que, tecnicamente, soa a \"espero que esteja bem\".",
      "Construímos o recurso definitivo para navegar esta forma de arte delicada. Parte gerador, parte biblioteca de referência, parte experiência catártica — a nossa plataforma ajuda-o a comunicar com precisão, profissionalismo e a quantidade certa de frustração mal disfarçada.",
    ],
    whatWeDoTitle: "O Que Fazemos",
    whatWeDoParagraph:
      "Mantemos a maior coleção de modelos de emails passivo-agressivos da internet, categorizados por destinatário, situação e nível de agressividade. A nossa escala de tom vai do genuinamente profissional (nível 1) ao \"Assassino Corporativo\" (nível 6) — porque por vezes a situação exige hostilidade de precisão cirúrgica.",
    whatWeDoBullets: [
      "8 categorias profissionais",
      "Escala de tom com 6 níveis de agressividade",
      "Geração personalizada com IA",
      "Resultados partilháveis com pontuação de agressividade",
    ],
    philosophyTitle: "A Nossa Filosofia",
    philosophyParagraph:
      "Acreditamos que a melhor comunicação passivo-agressiva é uma forma de arte. Exige subtileza, contenção e um conhecimento íntimo da linguagem corporativa. Um email passivo-agressivo verdadeiramente excelente deve:",
    philosophyBullets: [
      "Ser tecnicamente incontestável",
      "Transportar um subtexto inconfundível",
      "Levar o destinatário a questionar as suas escolhas de vida",
      "Nunca ultrapassar a linha da hostilidade explícita",
      "Parecer completamente razoável se lido em voz alta numa reunião",
    ],
    editorialTitle: "Normas Editoriais",
    editorialParagraphBefore: "Cada modelo da nossa biblioteca é revisto quanto à qualidade, criatividade e plausibilidade de negação. Mantemos ",
    editorialLinkLabel: "normas editoriais",
    editorialParagraphAfter: " rigorosas para garantir que o conteúdo é útil e divertido.",
    disclaimerTitle: "Aviso Legal",
    disclaimerParagraph:
      "O PassiveAggressiveEmails.com é uma ferramenta de humor e produtividade. Embora os nossos modelos sejam pensados para serem adequados ao ambiente de trabalho, encorajamos os utilizadores a usar o bom senso antes de enviar. Não nos responsabilizamos por reuniões com RH, avaliações de desempenho ou consequências na carreira resultantes dos níveis mais elevados de agressividade.",
    disclaimerNote: "Use o modo Assassino Corporativo por sua conta e risco.",
  },
  "fr-fr": {
    metadataTitle: "À propos de PassiveAggressiveEmails.com",
    metadataDescription:
      "L'histoire de PassiveAggressiveEmails.com. Notre mission, notre méthodologie et l'équipe qui perfectionne l'hostilité professionnelle.",
    jsonLdName: "À propos de PassiveAggressiveEmails.com",
    title: "À propos",
    subtitle: "L'histoire de l'hostilité professionnelle, perfectionnée.",
    missionTitle: "Notre Mission",
    missionParagraphs: [
      "PassiveAggressiveEmails.com existe parce que la communication au travail est défaillante. Chaque jour, des millions de professionnels fixent leur écran, tentant de rédiger l'e-mail parfait qui dit « je suis furieux » tout en sonnant techniquement comme « j'espère que vous allez bien ».",
      "Nous avons construit la ressource de référence pour naviguer cet art délicat. Partie générateur, partie bibliothèque, partie expérience cathartique — notre plateforme vous aide à communiquer avec précision, professionnalisme et juste la bonne dose de frustration à peine dissimulée.",
    ],
    whatWeDoTitle: "Ce Que Nous Faisons",
    whatWeDoParagraph:
      "Nous maintenons la plus grande collection de modèles d'e-mails passif-agressifs sur internet, classés par destinataire, situation et niveau d'agressivité. Notre échelle de ton va du véritablement professionnel (niveau 1) à « Assassin Corporate » (niveau 6) — parce que parfois la situation exige une hostilité de précision chirurgicale.",
    whatWeDoBullets: [
      "8 catégories professionnelles",
      "Échelle de ton à 6 niveaux d'agressivité",
      "Génération personnalisée par IA",
      "Résultats partageables avec score d'agressivité",
    ],
    philosophyTitle: "Notre Philosophie",
    philosophyParagraph:
      "Nous croyons que la meilleure communication passif-agressive est un art. Elle exige subtilité, retenue et une connaissance intime du langage corporate. Un excellent e-mail passif-agressif doit :",
    philosophyBullets: [
      "Être techniquement incontestable",
      "Porter un sous-texte indiscutable",
      "Amener le lecteur à remettre en question ses choix de vie",
      "Ne jamais franchir la ligne de l'hostilité ouverte",
      "Paraître parfaitement raisonnable lu à voix haute en réunion",
    ],
    editorialTitle: "Normes Éditoriales",
    editorialParagraphBefore: "Chaque modèle de notre bibliothèque est examiné pour la qualité, la créativité et la déniabilité plausible. Nous maintenons des ",
    editorialLinkLabel: "normes éditoriales",
    editorialParagraphAfter: " strictes pour garantir un contenu utile et divertissant.",
    disclaimerTitle: "Avertissement",
    disclaimerParagraph:
      "PassiveAggressiveEmails.com est un outil d'humour et de productivité. Bien que nos modèles soient conçus pour être adaptés au milieu professionnel, nous encourageons les utilisateurs à faire preuve de jugement avant d'envoyer. Nous ne sommes pas responsables des entretiens RH, évaluations de performance ou conséquences de carrière liées aux niveaux d'agressivité les plus élevés.",
    disclaimerNote: "Utilisez le mode Assassin Corporate à vos risques et périls.",
  },
  "es-es": {
    metadataTitle: "Sobre PassiveAggressiveEmails.com",
    metadataDescription:
      "La historia detrás de PassiveAggressiveEmails.com. Nuestra misión, metodología y el equipo que perfecciona la hostilidad profesional.",
    jsonLdName: "Sobre PassiveAggressiveEmails.com",
    title: "Sobre",
    subtitle: "La historia detrás de la hostilidad profesional, perfeccionada.",
    missionTitle: "Nuestra Misión",
    missionParagraphs: [
      "PassiveAggressiveEmails.com existe porque la comunicación laboral está rota. Cada día, millones de profesionales miran la pantalla intentando redactar el email perfecto que dice \"estoy furioso\" pero que técnicamente suena a \"espero que estés bien\".",
      "Construimos el recurso definitivo para navegar este delicado arte. Parte generador, parte biblioteca de referencia, parte experiencia catártica — nuestra plataforma te ayuda a comunicar con precisión, profesionalismo y la cantidad justa de frustración apenas disimulada.",
    ],
    whatWeDoTitle: "Qué Hacemos",
    whatWeDoParagraph:
      "Mantenemos la mayor colección de plantillas de emails pasivo-agresivos de internet, categorizadas por destinatario, situación y nivel de agresividad. Nuestra escala de tono va de lo genuinamente profesional (nivel 1) al \"Asesino Corporativo\" (nivel 6) — porque a veces la situación exige hostilidad de precisión quirúrgica.",
    whatWeDoBullets: [
      "8 categorías laborales",
      "Escala de tono de 6 niveles de agresividad",
      "Generación personalizada con IA",
      "Resultados compartibles con puntuación de agresividad",
    ],
    philosophyTitle: "Nuestra Filosofía",
    philosophyParagraph:
      "Creemos que la mejor comunicación pasivo-agresiva es un arte. Requiere sutileza, contención y un conocimiento íntimo del lenguaje corporativo. Un email pasivo-agresivo verdaderamente excelente debe:",
    philosophyBullets: [
      "Ser técnicamente inobjetable",
      "Llevar un subtexto inconfundible",
      "Hacer que el lector cuestione sus decisiones de vida",
      "Nunca cruzar la línea de la hostilidad explícita",
      "Sonar completamente razonable si se lee en voz alta en una reunión",
    ],
    editorialTitle: "Normas Editoriales",
    editorialParagraphBefore: "Cada plantilla de nuestra biblioteca se revisa por calidad, creatividad y plausibilidad de negación. Mantenemos ",
    editorialLinkLabel: "normas editoriales",
    editorialParagraphAfter: " estrictas para garantizar contenido útil y entretenido.",
    disclaimerTitle: "Aviso Legal",
    disclaimerParagraph:
      "PassiveAggressiveEmails.com es una herramienta de humor y productividad. Aunque nuestras plantillas están pensadas para ser adecuadas al entorno laboral, animamos a los usuarios a usar el criterio antes de enviar. No nos responsabilizamos de reuniones con RR. HH., evaluaciones de desempeño o consecuencias profesionales derivadas de los niveles más altos de agresividad.",
    disclaimerNote: "Usa el modo Asesino Corporativo bajo tu propio riesgo.",
  },
};

const methodologyCopy: Record<Locale, MethodologyCopy> = {
  "en-en": {
    metadataTitle: "Our Methodology",
    metadataDescription:
      "How we craft passive-aggressive emails. Our 6-point tone scale, aggression scoring methodology, and the science behind it.",
    title: "Methodology",
    subtitle: "The science behind professionally hostile communication.",
    toneScaleTitle: "The 6-Point Tone Scale",
    toneScaleIntro:
      "Our proprietary tone scale was developed through extensive analysis of real workplace communication. Each level represents a distinct escalation in subtext intensity while maintaining surface-level professionalism.",
    toneDescriptions: {
      1: "Genuinely polite. No subtext. The email equivalent of a sincere handshake.",
      2: "Professional with a hint of impatience. The smile is still there, but it's tightening at the corners.",
      3: "The tone shifts from friendly to formal. Words like 'flagging' and 'noting' appear. Patience is visibly thinning.",
      4: "The classic. Technically polite, undeniably hostile. 'Per my last email' territory. Maximum plausible deniability.",
      5: "Gloves are off but the language remains corporate. CC chains grow. Attachments are wielded as weapons. Timestamps become evidence.",
      6: "Precision-guided professional hostility. Every word is calculated. Careers may not survive. Use sparingly and deliberately.",
    },
    aggressionTitle: "Aggression Scoring",
    aggressionIntro: "Every email receives an aggression score from 0-100. This composite score is calculated based on:",
    aggressionFactors: [
      { factor: "Language Directness", weight: "25%", desc: "How explicitly the frustration is communicated vs implied" },
      { factor: "Corporate Euphemism Density", weight: "20%", desc: "Volume of phrases like 'going forward' and 'as discussed'" },
      { factor: "Implied Consequences", weight: "20%", desc: "Whether escalation, deadlines, or consequences are suggested" },
      { factor: "Strategic CC Usage", weight: "15%", desc: "Who else is looped in and the political implications" },
      { factor: "Plausible Deniability", weight: "10%", desc: "Could this be read aloud in HR without issue?" },
      { factor: "Emotional Impact", weight: "10%", desc: "How much existential dread the recipient will experience" },
    ],
    damageTitle: "Damage Assessment",
    damageParagraph:
      "Each email includes a damage assessment — a brief evaluation of the potential workplace consequences of sending it. This ranges from \"Relationship unaffected\" at the lower end to \"Update your LinkedIn\" at the upper end. These assessments help users calibrate their response to the situation's severity.",
    translationTitle: "Corporate Translation",
    translationParagraph:
      "Every generated email comes with a \"Corporate Translation\" — showing what you actually mean versus how it's phrased in corporate speak. This feature highlights the gap between intent and expression, which is the fundamental mechanism of all passive-aggressive communication.",
    qualityTitle: "Quality Standards",
    qualityIntro: "Every email in our library meets these criteria:",
    qualityBullets: [
      "Technically workplace-appropriate",
      "Carries clear subtext readable by the recipient",
      "Could survive an HR review (mostly)",
      "Is genuinely funny or satisfying to read",
      "Addresses a real workplace situation",
      "Demonstrates craft in language and structure",
    ],
    faqs: [
      {
        question: "How does the aggression scoring work?",
        answer:
          "Emails are scored 0-100 based on multiple factors: directness of language, use of corporate euphemisms, implied threats, strategic CC usage, and overall plausible deniability.",
      },
      {
        question: "What determines the tone level?",
        answer:
          "Our 6-point scale measures escalation from genuinely professional (1) through increasingly hostile corporate speak to 'Corporate Assassin' (6), which involves career-ending precision.",
      },
      {
        question: "How are templates quality-controlled?",
        answer:
          "Each template is reviewed for workplace appropriateness, humor quality, realism, and plausible deniability. Templates must be technically professional while carrying unmistakable subtext.",
      },
    ],
  },
  "pt-pt": {
    metadataTitle: "A Nossa Metodologia",
    metadataDescription:
      "Como criamos emails passivo-agressivos. A nossa escala de 6 níveis, metodologia de pontuação de agressividade e a ciência por trás dela.",
    title: "Metodologia",
    subtitle: "A ciência por trás da comunicação profissionalmente hostil.",
    toneScaleTitle: "A Escala de Tom de 6 Níveis",
    toneScaleIntro:
      "A nossa escala proprietária foi desenvolvida através de uma análise extensa da comunicação real no trabalho. Cada nível representa uma escalada distinta na intensidade do subtexto, mantendo o profissionalismo à superfície.",
    toneDescriptions: {
      1: "Genuinamente educado. Sem subtexto. O equivalente por email de um aperto de mão sincero.",
      2: "Profissional com um toque de impaciência. O sorriso ainda está lá, mas aperta-se nos cantos.",
      3: "O tom passa de amigável a formal. Aparecem palavras como 'sinalizar' e 'registar'. A paciência esgota-se visivelmente.",
      4: "O clássico. Tecnicamente educado, indiscutivelmente hostil. Território de 'conforme o meu email anterior'. Máxima plausibilidade de negação.",
      5: "As luvas saem mas a linguagem continua corporativa. As cadeias de CC crescem. Anexos tornam-se armas. Timestamps tornam-se provas.",
      6: "Hostilidade profissional de precisão cirúrgica. Cada palavra é calculada. Carreiras podem não sobreviver. Use com parcimónia e intenção.",
    },
    aggressionTitle: "Pontuação de Agressividade",
    aggressionIntro: "Cada email recebe uma pontuação de agressividade de 0 a 100. Esta pontuação composta é calculada com base em:",
    aggressionFactors: [
      { factor: "Diretividade da Linguagem", weight: "25%", desc: "Quão explicitamente a frustração é comunicada vs. implícita" },
      { factor: "Densidade de Eufemismos Corporativos", weight: "20%", desc: "Volume de frases como 'a partir de agora' e 'conforme discutido'" },
      { factor: "Consequências Implícitas", weight: "20%", desc: "Se são sugeridas escaladas, prazos ou consequências" },
      { factor: "Uso Estratégico de CC", weight: "15%", desc: "Quem mais está em cópia e as implicações políticas" },
      { factor: "Plausibilidade de Negação", weight: "10%", desc: "Isto poderia ser lido em voz alta no RH sem problema?" },
      { factor: "Impacto Emocional", weight: "10%", desc: "Quanto pavor existencial o destinatário irá sentir" },
    ],
    damageTitle: "Avaliação de Danos",
    damageParagraph:
      "Cada email inclui uma avaliação de danos — uma breve análise das potenciais consequências no trabalho de o enviar. Varia de \"Relação inalterada\" no extremo inferior a \"Atualize o LinkedIn\" no superior. Estas avaliações ajudam os utilizadores a calibrar a resposta à gravidade da situação.",
    translationTitle: "Tradução Corporativa",
    translationParagraph:
      "Cada email gerado inclui uma \"Tradução Corporativa\" — mostrando o que realmente quer dizer versus como está formulado em linguagem corporativa. Esta funcionalidade destaca o fosso entre intenção e expressão, o mecanismo fundamental de toda a comunicação passivo-agressiva.",
    qualityTitle: "Padrões de Qualidade",
    qualityIntro: "Cada email da nossa biblioteca cumpre estes critérios:",
    qualityBullets: [
      "Tecnicamente adequado ao ambiente de trabalho",
      "Transporta subtexto claro legível pelo destinatário",
      "Poderia sobreviver a uma revisão do RH (na maior parte dos casos)",
      "É genuinamente engraçado ou satisfatório de ler",
      "Aborda uma situação real no trabalho",
      "Demonstra mestria na linguagem e estrutura",
    ],
    faqs: [
      {
        question: "Como funciona a pontuação de agressividade?",
        answer:
          "Os emails são pontuados de 0 a 100 com base em vários fatores: diretividade da linguagem, uso de eufemismos corporativos, ameaças implícitas, uso estratégico de CC e plausibilidade geral de negação.",
      },
      {
        question: "O que determina o nível de tom?",
        answer:
          "A nossa escala de 6 pontos mede a escalada do genuinamente profissional (1) até linguagem corporativa cada vez mais hostil até 'Assassino Corporativo' (6), que envolve precisão devastadora para carreiras.",
      },
      {
        question: "Como são controlados os modelos?",
        answer:
          "Cada modelo é revisto quanto à adequação ao trabalho, qualidade do humor, realismo e plausibilidade de negação. Os modelos devem ser tecnicamente profissionais enquanto transportam subtexto inconfundível.",
      },
    ],
  },
  "fr-fr": {
    metadataTitle: "Notre Méthodologie",
    metadataDescription:
      "Comment nous rédigeons des e-mails passif-agressifs. Notre échelle à 6 niveaux, la méthodologie de score d'agressivité et la science qui la sous-tend.",
    title: "Méthodologie",
    subtitle: "La science derrière la communication professionnellement hostile.",
    toneScaleTitle: "L'Échelle de Ton à 6 Niveaux",
    toneScaleIntro:
      "Notre échelle propriétaire a été développée grâce à une analyse approfondie de la communication réelle au travail. Chaque niveau représente une escalade distincte de l'intensité du sous-texte tout en maintenant un professionnalisme de surface.",
    toneDescriptions: {
      1: "Vraiment poli. Aucun sous-texte. L'équivalent e-mail d'une poignée de main sincère.",
      2: "Professionnel avec une pointe d'impatience. Le sourire est toujours là, mais se crispe aux coins.",
      3: "Le ton passe de cordial à formel. Des mots comme « signaler » et « noter » apparaissent. La patience s'épuise visiblement.",
      4: "Le classique. Techniquement poli, indéniablement hostile. Territoire « suite à mon précédent e-mail ». Déniabilité plausible maximale.",
      5: "Les gants sont retirés mais le langage reste corporate. Les chaînes de CC s'allongent. Les pièces jointes deviennent des armes. Les horodatages deviennent des preuves.",
      6: "Hostilité professionnelle de précision chirurgicale. Chaque mot est calculé. Des carrières peuvent ne pas survivre. À utiliser avec parcimonie et délibération.",
    },
    aggressionTitle: "Score d'Agressivité",
    aggressionIntro: "Chaque e-mail reçoit un score d'agressivité de 0 à 100. Ce score composite est calculé sur la base de :",
    aggressionFactors: [
      { factor: "Directivité du Langage", weight: "25%", desc: "À quel point la frustration est exprimée explicitement vs implicitement" },
      { factor: "Densité d'Euphémismes Corporate", weight: "20%", desc: "Volume de phrases comme « going forward » et « comme discuté »" },
      { factor: "Conséquences Implicites", weight: "20%", desc: "Si des escalades, délais ou conséquences sont suggérés" },
      { factor: "Usage Stratégique du CC", weight: "15%", desc: "Qui d'autre est en copie et les implications politiques" },
      { factor: "Déniabilité Plausible", weight: "10%", desc: "Cela pourrait-il être lu à voix haute aux RH sans problème ?" },
      { factor: "Impact Émotionnel", weight: "10%", desc: "Quelle angoisse existentielle le destinataire ressentira" },
    ],
    damageTitle: "Évaluation des Dégâts",
    damageParagraph:
      "Chaque e-mail inclut une évaluation des dégâts — une brève analyse des conséquences professionnelles potentielles de l'envoi. Cela va de « Relation intacte » au bas de l'échelle à « Mettez à jour LinkedIn » au sommet. Ces évaluations aident les utilisateurs à calibrer leur réponse à la gravité de la situation.",
    translationTitle: "Traduction Corporate",
    translationParagraph:
      "Chaque e-mail généré inclut une « Traduction Corporate » — montrant ce que vous voulez vraiment dire versus comment c'est formulé en langage corporate. Cette fonctionnalité met en lumière l'écart entre intention et expression, le mécanisme fondamental de toute communication passif-agressive.",
    qualityTitle: "Standards de Qualité",
    qualityIntro: "Chaque e-mail de notre bibliothèque respecte ces critères :",
    qualityBullets: [
      "Techniquement adapté au milieu professionnel",
      "Porte un sous-texte clair lisible par le destinataire",
      "Pourrait survivre à un examen RH (en général)",
      "Est vraiment drôle ou satisfaisant à lire",
      "Traite d'une situation professionnelle réelle",
      "Démontre un savoir-faire dans le langage et la structure",
    ],
    faqs: [
      {
        question: "Comment fonctionne le score d'agressivité ?",
        answer:
          "Les e-mails sont notés de 0 à 100 selon plusieurs facteurs : directivité du langage, usage d'euphémismes corporate, menaces implicites, usage stratégique du CC et déniabilité plausible globale.",
      },
      {
        question: "Qu'est-ce qui détermine le niveau de ton ?",
        answer:
          "Notre échelle à 6 points mesure l'escalade du véritablement professionnel (1) à un langage corporate de plus en plus hostile jusqu'à « Assassin Corporate » (6), qui implique une précision fatale pour les carrières.",
      },
      {
        question: "Comment les modèles sont-ils contrôlés ?",
        answer:
          "Chaque modèle est examiné pour l'adaptation au travail, la qualité de l'humour, le réalisme et la déniabilité plausible. Les modèles doivent être techniquement professionnels tout en portant un sous-texte indiscutable.",
      },
    ],
  },
  "es-es": {
    metadataTitle: "Nuestra Metodología",
    metadataDescription:
      "Cómo creamos emails pasivo-agresivos. Nuestra escala de 6 niveles, metodología de puntuación de agresividad y la ciencia detrás.",
    title: "Metodología",
    subtitle: "La ciencia detrás de la comunicación profesionalmente hostil.",
    toneScaleTitle: "La Escala de Tono de 6 Niveles",
    toneScaleIntro:
      "Nuestra escala propietaria se desarrolló mediante un análisis exhaustivo de la comunicación laboral real. Cada nivel representa una escalada distinta en la intensidad del subtexto manteniendo el profesionalismo en la superficie.",
    toneDescriptions: {
      1: "Genuinamente educado. Sin subtexto. El equivalente por email de un apretón de manos sincero.",
      2: "Profesional con un toque de impaciencia. La sonrisa sigue ahí, pero se tensa en las comisuras.",
      3: "El tono pasa de amigable a formal. Aparecen palabras como 'señalar' y 'anotar'. La paciencia se agota visiblemente.",
      4: "El clásico. Técnicamente educado, indudablemente hostil. Territorio de 'según mi email anterior'. Máxima plausibilidad de negación.",
      5: "Se quitan los guantes pero el lenguaje sigue corporativo. Las cadenas de CC crecen. Los adjuntos se usan como armas. Las marcas de tiempo son pruebas.",
      6: "Hostilidad profesional de precisión quirúrgica. Cada palabra está calculada. Las carreras pueden no sobrevivir. Usar con moderación y deliberación.",
    },
    aggressionTitle: "Puntuación de Agresividad",
    aggressionIntro: "Cada email recibe una puntuación de agresividad de 0 a 100. Esta puntuación compuesta se calcula en base a:",
    aggressionFactors: [
      { factor: "Directividad del Lenguaje", weight: "25%", desc: "Qué tan explícitamente se comunica la frustración vs. implícita" },
      { factor: "Densidad de Eufemismos Corporativos", weight: "20%", desc: "Volumen de frases como 'de ahora en adelante' y 'como se comentó'" },
      { factor: "Consecuencias Implícitas", weight: "20%", desc: "Si se sugieren escaladas, plazos o consecuencias" },
      { factor: "Uso Estratégico de CC", weight: "15%", desc: "Quién más está en copia y las implicaciones políticas" },
      { factor: "Plausibilidad de Negación", weight: "10%", desc: "¿Podría leerse en voz alta en RR. HH. sin problema?" },
      { factor: "Impacto Emocional", weight: "10%", desc: "Cuánto pavor existencial sentirá el destinatario" },
    ],
    damageTitle: "Evaluación de Daños",
    damageParagraph:
      "Cada email incluye una evaluación de daños — un breve análisis de las posibles consecuencias laborales de enviarlo. Va desde \"Relación intacta\" en el extremo inferior hasta \"Actualiza LinkedIn\" en el superior. Estas evaluaciones ayudan a calibrar la respuesta según la gravedad de la situación.",
    translationTitle: "Traducción Corporativa",
    translationParagraph:
      "Cada email generado incluye una \"Traducción Corporativa\" — mostrando lo que realmente quieres decir versus cómo está formulado en lenguaje corporativo. Esta función destaca la brecha entre intención y expresión, el mecanismo fundamental de toda comunicación pasivo-agresiva.",
    qualityTitle: "Estándares de Calidad",
    qualityIntro: "Cada email de nuestra biblioteca cumple estos criterios:",
    qualityBullets: [
      "Técnicamente adecuado al entorno laboral",
      "Lleva un subtexto claro legible por el destinatario",
      "Podría sobrevivir a una revisión de RR. HH. (en general)",
      "Es genuinamente divertido o satisfactorio de leer",
      "Aborda una situación laboral real",
      "Demuestra maestría en lenguaje y estructura",
    ],
    faqs: [
      {
        question: "¿Cómo funciona la puntuación de agresividad?",
        answer:
          "Los emails se puntúan de 0 a 100 según varios factores: directividad del lenguaje, uso de eufemismos corporativos, amenazas implícitas, uso estratégico de CC y plausibilidad general de negación.",
      },
      {
        question: "¿Qué determina el nivel de tono?",
        answer:
          "Nuestra escala de 6 puntos mide la escalada desde lo genuinamente profesional (1) hasta un lenguaje corporativo cada vez más hostil hasta 'Asesino Corporativo' (6), que implica precisión devastadora para carreras.",
      },
      {
        question: "¿Cómo se controla la calidad de las plantillas?",
        answer:
          "Cada plantilla se revisa por adecuación laboral, calidad del humor, realismo y plausibilidad de negación. Las plantillas deben ser técnicamente profesionales mientras llevan un subtexto inconfundible.",
      },
    ],
  },
};

const editorialCopy: Record<Locale, EditorialCopy> = {
  "en-en": {
    metadataTitle: "Editorial Standards",
    metadataDescription:
      "Our editorial standards ensure every passive-aggressive email template meets our quality bar for humor, professionalism, and plausible deniability.",
    title: "Editorial Standards",
    subtitle: "Quality control for professional hostility.",
    principlesTitle: "Content Principles",
    principlesIntro: "Every piece of content on PassiveAggressiveEmails.com adheres to these core principles:",
    principles: [
      {
        title: "Humor with Purpose",
        body: "Content must be both entertaining and practically useful. We don't create humor for humor's sake — every template should be something a real professional could adapt for a real situation.",
      },
      {
        title: "Workplace Appropriateness",
        body: "No template should cross the line into harassment, discrimination, or genuinely hostile communication. The art is in the subtext, not in explicit aggression.",
      },
      {
        title: "Plausible Deniability",
        body: "The best passive-aggressive emails could be read aloud in a meeting without obvious issue. If it would get you fired if read by HR, it doesn't make our library.",
      },
      {
        title: "Originality",
        body: "We avoid clichés and overused templates. Every entry should offer a fresh perspective or creative approach to the situation.",
      },
    ],
    reviewTitle: "Review Process",
    reviewIntro: "All content goes through our editorial review process:",
    reviewSteps: [
      "Initial creation with situation research and tone calibration",
      "Quality review for humor, clarity, and appropriateness",
      "Tone scale verification to ensure correct categorization",
      "Aggression score calibration against our scoring rubric",
      "Final editorial review for language quality and consistency",
    ],
    updatesTitle: "Content Updates",
    updatesParagraph:
      "Our library is regularly reviewed and updated. Templates may be revised for improved humor, updated language, or better situational accuracy. All content displays a \"last reviewed\" date for transparency.",
    aiTitle: "AI-Generated Content",
    aiParagraph:
      "When users generate custom emails through our AI feature, the output follows the same quality standards as our pre-crafted library. The AI model is fine-tuned to our tone scale and trained on our style guidelines to maintain consistency across all generated content.",
    feedbackTitle: "Feedback",
    feedbackParagraph:
      "If you find content that doesn't meet these standards, or have suggestions for improvement, please contact us. We take our editorial quality seriously — after all, poorly crafted passive aggression is just... aggression.",
    seeAlsoMethodology: "Methodology",
    seeAlsoAbout: "About Us",
    seeAlsoLabel: "See also:",
  },
  "pt-pt": {
    metadataTitle: "Normas Editoriais",
    metadataDescription:
      "As nossas normas editoriais garantem que cada modelo de email passivo-agressivo cumpre os nossos padrões de humor, profissionalismo e plausibilidade de negação.",
    title: "Normas Editoriais",
    subtitle: "Controlo de qualidade para hostilidade profissional.",
    principlesTitle: "Princípios de Conteúdo",
    principlesIntro: "Todo o conteúdo no PassiveAggressiveEmails.com segue estes princípios fundamentais:",
    principles: [
      {
        title: "Humor com Propósito",
        body: "O conteúdo deve ser divertido e praticamente útil. Não criamos humor por humor — cada modelo deve ser algo que um profissional real possa adaptar a uma situação real.",
      },
      {
        title: "Adequação ao Trabalho",
        body: "Nenhum modelo deve ultrapassar a linha do assédio, discriminação ou comunicação genuinamente hostil. A arte está no subtexto, não na agressividade explícita.",
      },
      {
        title: "Plausibilidade de Negação",
        body: "Os melhores emails passivo-agressivos poderiam ser lidos em voz alta numa reunião sem problema óbvio. Se o levasse a ser despedido se lido pelo RH, não entra na nossa biblioteca.",
      },
      {
        title: "Originalidade",
        body: "Evitamos clichés e modelos gastos. Cada entrada deve oferecer uma perspetiva fresca ou abordagem criativa à situação.",
      },
    ],
    reviewTitle: "Processo de Revisão",
    reviewIntro: "Todo o conteúdo passa pelo nosso processo de revisão editorial:",
    reviewSteps: [
      "Criação inicial com pesquisa da situação e calibração do tom",
      "Revisão de qualidade para humor, clareza e adequação",
      "Verificação da escala de tom para garantir categorização correta",
      "Calibração da pontuação de agressividade segundo a nossa rubrica",
      "Revisão editorial final para qualidade e consistência da linguagem",
    ],
    updatesTitle: "Atualizações de Conteúdo",
    updatesParagraph:
      "A nossa biblioteca é revista e atualizada regularmente. Os modelos podem ser revistos para melhorar o humor, atualizar a linguagem ou aumentar a precisão situacional. Todo o conteúdo exibe uma data de \"última revisão\" para transparência.",
    aiTitle: "Conteúdo Gerado por IA",
    aiParagraph:
      "Quando os utilizadores geram emails personalizados através da nossa funcionalidade de IA, o resultado segue os mesmos padrões de qualidade da nossa biblioteca pré-criada. O modelo de IA está afinado à nossa escala de tom e treinado nas nossas diretrizes de estilo para manter consistência.",
    feedbackTitle: "Feedback",
    feedbackParagraph:
      "Se encontrar conteúdo que não cumpre estes padrões, ou tiver sugestões de melhoria, contacte-nos. Levamos a qualidade editorial a sério — afinal, agressividade passiva mal elaborada é apenas... agressividade.",
    seeAlsoMethodology: "Metodologia",
    seeAlsoAbout: "Sobre Nós",
    seeAlsoLabel: "Ver também:",
  },
  "fr-fr": {
    metadataTitle: "Normes Éditoriales",
    metadataDescription:
      "Nos normes éditoriales garantissent que chaque modèle d'e-mail passif-agressif respecte nos critères d'humour, de professionnalisme et de déniabilité plausible.",
    title: "Normes Éditoriales",
    subtitle: "Contrôle qualité pour l'hostilité professionnelle.",
    principlesTitle: "Principes de Contenu",
    principlesIntro: "Chaque contenu sur PassiveAggressiveEmails.com respecte ces principes fondamentaux :",
    principles: [
      {
        title: "Humour avec un But",
        body: "Le contenu doit être à la fois divertissant et pratiquement utile. Nous ne créons pas d'humour pour l'humour — chaque modèle doit être adaptable par un vrai professionnel à une vraie situation.",
      },
      {
        title: "Adaptation au Milieu Professionnel",
        body: "Aucun modèle ne doit franchir la ligne du harcèlement, de la discrimination ou d'une communication réellement hostile. L'art est dans le sous-texte, pas dans l'agression explicite.",
      },
      {
        title: "Déniabilité Plausible",
        body: "Les meilleurs e-mails passif-agressifs pourraient être lus à voix haute en réunion sans problème évident. Si cela vous ferait licencier lu par les RH, cela n'entre pas dans notre bibliothèque.",
      },
      {
        title: "Originalité",
        body: "Nous évitons les clichés et les modèles usés. Chaque entrée doit offrir une perspective fraîche ou une approche créative de la situation.",
      },
    ],
    reviewTitle: "Processus de Révision",
    reviewIntro: "Tout le contenu passe par notre processus de révision éditoriale :",
    reviewSteps: [
      "Création initiale avec recherche de situation et calibration du ton",
      "Révision qualité pour l'humour, la clarté et l'adaptation",
      "Vérification de l'échelle de ton pour garantir la bonne catégorisation",
      "Calibration du score d'agressivité selon notre grille",
      "Révision éditoriale finale pour la qualité et la cohérence du langage",
    ],
    updatesTitle: "Mises à Jour du Contenu",
    updatesParagraph:
      "Notre bibliothèque est régulièrement revue et mise à jour. Les modèles peuvent être révisés pour améliorer l'humour, actualiser le langage ou mieux refléter la situation. Tout contenu affiche une date de « dernière révision » pour la transparence.",
    aiTitle: "Contenu Généré par IA",
    aiParagraph:
      "Lorsque les utilisateurs génèrent des e-mails personnalisés via notre fonctionnalité IA, le résultat suit les mêmes standards de qualité que notre bibliothèque pré-rédigée. Le modèle IA est ajusté à notre échelle de ton et entraîné sur nos directives de style pour maintenir la cohérence.",
    feedbackTitle: "Retours",
    feedbackParagraph:
      "Si vous trouvez du contenu qui ne respecte pas ces standards, ou avez des suggestions d'amélioration, contactez-nous. Nous prenons la qualité éditoriale au sérieux — après tout, une agressivité passive mal rédigée n'est que... de l'agression.",
    seeAlsoMethodology: "Méthodologie",
    seeAlsoAbout: "À Propos",
    seeAlsoLabel: "Voir aussi :",
  },
  "es-es": {
    metadataTitle: "Normas Editoriales",
    metadataDescription:
      "Nuestras normas editoriales garantizan que cada plantilla de email pasivo-agresivo cumple los estándares de humor, profesionalismo y plausibilidad de negación.",
    title: "Normas Editoriales",
    subtitle: "Control de calidad para la hostilidad profesional.",
    principlesTitle: "Principios de Contenido",
    principlesIntro: "Todo el contenido en PassiveAggressiveEmails.com sigue estos principios fundamentales:",
    principles: [
      {
        title: "Humor con Propósito",
        body: "El contenido debe ser entretenido y prácticamente útil. No creamos humor por el humor — cada plantilla debe ser algo que un profesional real pueda adaptar a una situación real.",
      },
      {
        title: "Adecuación Laboral",
        body: "Ninguna plantilla debe cruzar la línea del acoso, la discriminación o la comunicación genuinamente hostil. El arte está en el subtexto, no en la agresión explícita.",
      },
      {
        title: "Plausibilidad de Negación",
        body: "Los mejores emails pasivo-agresivos podrían leerse en voz alta en una reunión sin problema evidente. Si te despedirían si lo lee RR. HH., no entra en nuestra biblioteca.",
      },
      {
        title: "Originalidad",
        body: "Evitamos clichés y plantillas gastadas. Cada entrada debe ofrecer una perspectiva fresca o un enfoque creativo de la situación.",
      },
    ],
    reviewTitle: "Proceso de Revisión",
    reviewIntro: "Todo el contenido pasa por nuestro proceso de revisión editorial:",
    reviewSteps: [
      "Creación inicial con investigación de la situación y calibración del tono",
      "Revisión de calidad para humor, claridad y adecuación",
      "Verificación de la escala de tono para garantizar categorización correcta",
      "Calibración de la puntuación de agresividad según nuestra rúbrica",
      "Revisión editorial final para calidad y consistencia del lenguaje",
    ],
    updatesTitle: "Actualizaciones de Contenido",
    updatesParagraph:
      "Nuestra biblioteca se revisa y actualiza regularmente. Las plantillas pueden revisarse para mejorar el humor, actualizar el lenguaje o aumentar la precisión situacional. Todo el contenido muestra una fecha de \"última revisión\" para transparencia.",
    aiTitle: "Contenido Generado por IA",
    aiParagraph:
      "Cuando los usuarios generan emails personalizados con nuestra función de IA, el resultado sigue los mismos estándares de calidad que nuestra biblioteca preelaborada. El modelo de IA está afinado a nuestra escala de tono y entrenado en nuestras directrices de estilo para mantener consistencia.",
    feedbackTitle: "Comentarios",
    feedbackParagraph:
      "Si encuentras contenido que no cumple estos estándares, o tienes sugerencias de mejora, contáctanos. Nos tomamos la calidad editorial en serio — al fin y al cabo, agresividad pasiva mal elaborada es solo... agresión.",
    seeAlsoMethodology: "Metodología",
    seeAlsoAbout: "Sobre Nosotros",
    seeAlsoLabel: "Ver también:",
  },
};

const contactCopy: Record<Locale, ContactCopy> = {
  "en-en": {
    metadataTitle: "Contact Us",
    metadataDescription:
      "Get in touch with the PassiveAggressiveEmails.com team. We welcome feedback, partnership inquiries, and suggestions for new email scenarios.",
    title: "Contact",
    subtitle: "We'd love to hear from you. Politely or otherwise.",
    getInTouchTitle: "Get in Touch",
    getInTouchParagraph:
      "Whether you have feedback, a partnership inquiry, a suggestion for a new scenario, or just want to share your finest passive-aggressive masterpiece, we're here for it.",
    emailLabel: "For everything: ",
    scenarioTitle: "Submit a Scenario",
    scenarioParagraph:
      "Have a workplace situation that deserves the passive-aggressive treatment? We're always looking for new scenarios to add to our library. Send us the situation, and The Dept. of Plausible Deniability will craft the perfect response.",
    responseTitle: "Response Time",
    responseParagraph:
      "We aim to respond within 2-3 business days. If you don't hear back, feel free to send a follow-up. We promise not to be passive-aggressive about it.",
    responseNote: "(Unlike some people, we actually read our emails.)",
  },
  "pt-pt": {
    metadataTitle: "Contacto",
    metadataDescription:
      "Entre em contacto com a equipa do PassiveAggressiveEmails.com. Aceitamos feedback, pedidos de parceria e sugestões de novos cenários de email.",
    title: "Contacto",
    subtitle: "Adorávamos ouvir de si. Educadamente ou não.",
    getInTouchTitle: "Entre em Contacto",
    getInTouchParagraph:
      "Quer tenha feedback, um pedido de parceria, uma sugestão de novo cenário ou apenas queira partilhar a sua obra-prima passivo-agressiva, estamos aqui para isso.",
    emailLabel: "Para tudo: ",
    scenarioTitle: "Submeter um Cenário",
    scenarioParagraph:
      "Tem uma situação no trabalho que merece tratamento passivo-agressivo? Estamos sempre à procura de novos cenários para a nossa biblioteca. Envie-nos a situação e o Dept. de Plausibilidade de Negação criará a resposta perfeita.",
    responseTitle: "Tempo de Resposta",
    responseParagraph:
      "Procuramos responder em 2-3 dias úteis. Se não receber resposta, envie um follow-up. Prometemos não ser passivo-agressivos sobre isso.",
    responseNote: "(Ao contrário de algumas pessoas, nós realmente lemos os nossos emails.)",
  },
  "fr-fr": {
    metadataTitle: "Contact",
    metadataDescription:
      "Contactez l'équipe PassiveAggressiveEmails.com. Nous accueillons les retours, demandes de partenariat et suggestions de nouveaux scénarios d'e-mail.",
    title: "Contact",
    subtitle: "Nous serions ravis de vous entendre. Poliment ou non.",
    getInTouchTitle: "Nous Contacter",
    getInTouchParagraph:
      "Que vous ayez un retour, une demande de partenariat, une suggestion de nouveau scénario ou simplement envie de partager votre chef-d'œuvre passif-agressif, nous sommes là.",
    emailLabel: "Pour tout : ",
    scenarioTitle: "Soumettre un Scénario",
    scenarioParagraph:
      "Vous avez une situation au travail qui mérite le traitement passif-agressif ? Nous cherchons toujours de nouveaux scénarios pour notre bibliothèque. Envoyez-nous la situation et le Dept. de Déniabilité Plausible rédigera la réponse parfaite.",
    responseTitle: "Délai de Réponse",
    responseParagraph:
      "Nous visons une réponse sous 2-3 jours ouvrés. Si vous n'avez pas de nouvelles, n'hésitez pas à relancer. Nous promettons de ne pas être passif-agressifs à ce sujet.",
    responseNote: "(Contrairement à certaines personnes, nous lisons vraiment nos e-mails.)",
  },
  "es-es": {
    metadataTitle: "Contacto",
    metadataDescription:
      "Ponte en contacto con el equipo de PassiveAggressiveEmails.com. Aceptamos comentarios, consultas de colaboración y sugerencias de nuevos escenarios de email.",
    title: "Contacto",
    subtitle: "Nos encantaría saber de ti. Educadamente o no.",
    getInTouchTitle: "Ponte en Contacto",
    getInTouchParagraph:
      "Tengas comentarios, una consulta de colaboración, una sugerencia de nuevo escenario o simplemente quieras compartir tu obra maestra pasivo-agresiva, estamos aquí.",
    emailLabel: "Para todo: ",
    scenarioTitle: "Enviar un Escenario",
    scenarioParagraph:
      "¿Tienes una situación laboral que merece tratamiento pasivo-agresivo? Siempre buscamos nuevos escenarios para nuestra biblioteca. Envíanos la situación y el Dept. de Plausibilidad de Negación creará la respuesta perfecta.",
    responseTitle: "Tiempo de Respuesta",
    responseParagraph:
      "Intentamos responder en 2-3 días laborables. Si no recibes respuesta, envía un seguimiento. Prometemos no ser pasivo-agresivos al respecto.",
    responseNote: "(A diferencia de algunas personas, sí leemos nuestros emails.)",
  },
};

const TONE_COLORS: Record<number, string> = {
  1: "border-l-green-500",
  2: "border-l-lime-500",
  3: "border-l-yellow-500",
  4: "border-l-orange-500",
  5: "border-l-red-500",
  6: "border-l-red-700",
};

export function getAboutCopy(locale: Locale) {
  return aboutCopy[locale] ?? aboutCopy[DEFAULT_LOCALE];
}

export function getMethodologyCopy(locale: Locale) {
  return methodologyCopy[locale] ?? methodologyCopy[DEFAULT_LOCALE];
}

export function getEditorialCopy(locale: Locale) {
  return editorialCopy[locale] ?? editorialCopy[DEFAULT_LOCALE];
}

export function getContactCopy(locale: Locale) {
  return contactCopy[locale] ?? contactCopy[DEFAULT_LOCALE];
}

export function getMethodologyTones(locale: Locale) {
  const copy = getMethodologyCopy(locale);
  return HOME_COPY[locale].tones.map((tone) => ({
    level: tone.level,
    name: tone.label,
    desc: copy.toneDescriptions[tone.level],
    color: TONE_COLORS[tone.level],
  }));
}

export function getMethodologyLevelLabel(locale: Locale) {
  const labels: Record<Locale, string> = {
    "en-en": "Level",
    "pt-pt": "Nível",
    "fr-fr": "Niveau",
    "es-es": "Nivel",
  };
  return labels[locale] ?? labels[DEFAULT_LOCALE];
}
