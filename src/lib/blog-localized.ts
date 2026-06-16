import { BLOG_POSTS, type BlogBlock, type BlogPost } from "@/lib/blog";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

type BlogTranslation = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  visualLabel: string;
  content: BlogBlock[];
};

const translations: Record<Exclude<Locale, "en-en">, Record<string, BlogTranslation>> = {
  "pt-pt": {
    "ultimate-guide-passive-aggressive-emails": {
      title: "Guia de Emails Passivo-Agressivos",
      description:
        "Tudo o que precisa de saber para escrever o email profissional passivo-agressivo perfeito: tom, timing, CC e frases-chave.",
      category: "Comunicação Profissional",
      readTime: "8 min de leitura",
      visualLabel: "Guia Prático",
      content: [
        { type: "paragraph", text: "Os emails passivo-agressivos são uma forma de arte. Exigem o equilíbrio perfeito entre profissionalismo e subtexto: a capacidade de comunicar descontentamento sem nunca parecer tecnicamente inadequado." },
        { type: "paragraph", text: "A base é a negação plausível. Se alguém lesse o seu email em voz alta numa reunião, deveria soar perfeitamente razoável. A tensão vive entre as linhas, no timing, na escolha de palavras e na seleção cuidadosa de quem é colocado em cópia." },
        { type: "heading", text: "A Anatomia de um Email Passivo-Agressivo" },
        {
          type: "list",
          items: [
            "Uma abertura calorosa que parece generosa mas sinaliza exaustão.",
            "Um lembrete de contexto que não deveria ser necessário.",
            "O pedido, repetido como se esta fosse a primeira vez.",
            "Uma linha de fecho que pode ser sincera ou ameaçadora, dependendo da consciência do leitor.",
          ],
        },
        { type: "heading", text: "O Timing É Tudo" },
        { type: "paragraph", text: "Um seguimento enviado às 8:01 sobre algo que era devido ontem envia uma mensagem clara. Uma resposta enviada três minutos após receber uma desculpa demonstra que esteve, de facto, a prestar atenção o tempo todo." },
        { type: "heading", text: "A Estratégia do CC" },
        { type: "paragraph", text: "O uso estratégico do CC é a opção nuclear da comunicação passivo-agressiva. Colocar a chefia de alguém em CC diz 'preciso de uma testemunha.' Colocar a sua própria chefia em CC diz 'estou a construir um caso.'" },
        { type: "heading", text: "Frases-Chave e os Seus Significados" },
        {
          type: "table",
          columns: ["Frase", "O que realmente significa"],
          rows: [
            ["Conforme o meu email anterior", "Já expliquei isto e não foi lido."],
            ["Daqui em diante", "Não volte a fazer isto."],
            ["Só para clarificar", "Claramente não compreendeu da primeira vez."],
            ["Queria sinalizar", "Isto é culpa sua e estou a documentar."],
            ["Para sua conveniência", "Porque claramente não conseguiu encontrar sozinho."],
          ],
        },
        { type: "quote", text: "A precisão supera o volume. Uma frase cuidadosamente escolhida pode fazer mais estragos do que um parágrafo de hostilidade evidente." },
      ],
    },
    "per-my-last-email-history": {
      title: "A História de 'Conforme o Meu Email Anterior'",
      description:
        "Como quatro palavras se tornaram a frase mais temida da comunicação corporativa. A origem, evolução e impacto cultural da linguagem passivo-agressiva por email.",
      category: "Humor Corporativo",
      readTime: "6 min de leitura",
      visualLabel: "História de Origem",
      content: [
        { type: "paragraph", text: "'Conforme o meu email anterior.' Quatro palavras que conseguem fazer até o profissional mais confiante suar frio. Mas de onde veio esta frase e como se tornou o sinal universal de frustração mal contida?" },
        { type: "paragraph", text: "A frase é enganosamente simples. Apenas referencia uma comunicação anterior. Mas o contexto é tudo: o remetente está a dizer que já abordou o assunto, o destinatário não leu, e agora existe um registo escrito." },
        { type: "heading", text: "A Evolução da Hostilidade Corporativa" },
        { type: "paragraph", text: "Antes do email, a agressividade passiva no trabalho exigia criatividade: memorandos com marcações estratégicas, atas de reunião que acidentalmente omitiam contribuições, ou impressões deixadas exatamente onde seriam notadas. O email deu aos profissionais um arquivo pesquisável." },
        { type: "heading", text: "Porque Funciona" },
        { type: "paragraph", text: "A genialidade de 'conforme o meu email anterior' é a sua negação completa. Se confrontado, o remetente pode alegar que estava simplesmente a ser prestável e a apontar para contexto prévio relevante. O subtexto é inconfundível, mas o texto em si é inocente." },
        { type: "heading", text: "Variações Encontradas" },
        {
          type: "table",
          columns: ["Frase", "Sinal"],
          rows: [
            ["Como referido anteriormente", "A variante formal."],
            ["A retomar este tema", "A variante persistente."],
            ["Apenas a dar seguimento", "A variante 'sei que me está a ignorar'."],
            ["Reenvio para conveniência", "A variante 'perdeu isto, certo?'."],
          ],
        },
        { type: "paragraph", text: "A frase transcendeu o email e tornou-se um fenómeno cultural porque praticamente todos os profissionais já experimentaram ambos os lados: a frustração de ser ignorado e a culpa de ser apanhado." },
      ],
    },
    "corporate-buzzwords-decoded": {
      title: "50 Expressões Corporativas Decifradas",
      description:
        "Um dicionário de jargão corporativo e do verdadeiro subtexto passivo-agressivo por trás de cada frase. De sinergia a retomar, tudo descodificado.",
      category: "Humor Corporativo",
      readTime: "10 min de leitura",
      visualLabel: "Mesa de Tradução",
      content: [
        { type: "paragraph", text: "A linguagem corporativa é um dialeto concebido para dizer muito pouco enquanto soa extremamente ocupado. Por trás de cada expressão está uma verdade mais simples que alguém decidiu ser demasiado direta para consumo profissional." },
        { type: "paragraph", text: "Aqui está a versão limpa: o que as pessoas dizem em reuniões e o que todos silenciosamente entendem que significa." },
        {
          type: "table",
          columns: ["O que se diz", "O que realmente significa"],
          rows: [
            ["Sinergia", "Queremos que uma pessoa, processo ou orçamento faça o trabalho de dois."],
            ["Voltar a este tema", "Estou a terminar esta conversa agora."],
            ["Frutos mais acessíveis", "O trabalho fácil que de alguma forma ainda não fizemos."],
            ["Mover a agulha", "Por favor, consiga algo mensurável pelo menos uma vez."],
            ["Análise profunda", "Algo está errado e precisamos de olhar mais de perto."],
            ["Daqui em diante", "Não volte a fazer isto."],
            ["Para referência futura", "Lembre-se disto, porque eu vou lembrar."],
            ["Conforme discutido", "Tenho testemunhas."],
            ["Para ser transparente", "Estou prestes a dizer algo inconveniente."],
            ["Com todo o respeito", "Discordo fortemente e estou a tentar manter o emprego."],
            ["Capacidade", "Tempo, energia ou paciência. Normalmente os três."],
            ["Alavancar", "Usar."],
            ["Ecossistema", "Um monte de coisas relacionadas que ninguém quer mapear."],
            ["Ideação", "Pensar, mas com convite de calendário."],
            ["Mudança de paradigma", "Algo mudou e precisamos que soe caro."],
            ["Levar para fora da reunião", "Pare de dizer isto à frente de toda a gente."],
            ["Estacionar o tema", "A sua ideia não vai entrar nesta reunião."],
            ["Ações a tomar", "As coisas que vão ser esquecidas a menos que sejam perseguidas."],
            ["Alinhamento de partes interessadas", "Pôr toda a gente de acordo, o que vai demorar eternamente."],
            ["Sincronização rápida", "Uma reunião que podia ter sido uma mensagem."],
            ["Tocar base", "Preciso de uma atualização mas quero soar casual."],
            ["Incluir no circuito", "Outra pessoa é agora também responsável."],
            ["Dar visibilidade", "A gestão quer observar isto mais de perto."],
            ["Responsabilidade", "Este problema agora pertence-lhe."],
            ["Responsabilização", "Alguém está prestes a ser culpado."],
            ["Otimizar processos", "Remover passos, pessoas ou orçamento."],
            ["Otimizar", "Tornar mais barato, mais rápido, ou ambos."],
            ["Redimensionar", "Cortar algo evitando a palavra cortar."],
            ["Alocação de recursos", "Quem fica com pessoas, dinheiro ou desculpas."],
            ["Boa prática", "A forma como preferimos fazer, pelo menos hoje."],
            ["Valor acrescentado", "Por favor justifique porque isto existe."],
            ["Estrela-guia", "O objetivo que mencionamos quando as prioridades estão confusas."],
            ["Roteiro", "Um documento esperançoso a fingir ser uma promessa."],
            ["Entregáveis", "As coisas concretas pelas quais alguém pode ser responsabilizado."],
            ["Dependências", "Razões pelas quais isto pode não ser culpa nossa."],
            ["Bloqueadores", "Razões pelas quais isto definitivamente não está a avançar."],
            ["Vitória rápida", "Algo pequeno o suficiente para sobreviver a aprovações."],
            ["Estratégico", "Importante, vago ou politicamente protegido."],
            ["Tático", "Útil mas menos glamoroso."],
            ["Holístico", "Não decidimos onde ficam as fronteiras."],
            ["Transversal", "Várias equipas vão ficar confusas juntas."],
            ["Socializar isto", "Avisar as pessoas antes da decisão oficial aparecer."],
            ["Alinhamento", "Permissão disfarçada de entusiasmo."],
            ["Gestão de mudança", "Convencer as pessoas a não entrar em pânico."],
            ["Aprendizagens", "Erros, mas formatados para uma apresentação."],
            ["Post-mortem", "Uma reunião sobre o que correu mal, cuidadosamente formulada."],
            ["Escalar para cima", "Perguntar a alguém sénior antes de correr riscos."],
            ["Ferver o oceano", "Tornar o âmbito impossivelmente grande."],
            ["Resumindo", "A versão curta depois de demasiada conversa."],
            ["No final do dia", "Estou prestes a simplificar demasiado."],
          ],
        },
        { type: "quote", text: "O jargão sobrevive porque cria distância das verdades desconfortáveis. São pequenos airbags profissionais." },
        { type: "paragraph", text: "Use-os com moderação. Quando tudo é estratégico, alinhado, otimizado e transversal, a verdadeira mensagem desaparece debaixo do crachá." },
      ],
    },
    "how-to-follow-up-without-sounding-desperate": {
      title: "Como Fazer Seguimento Sem Parecer Desesperado",
      description:
        "Como escrever emails de seguimento que soam calmos, profissionais e firmes sem implorar por resposta ou fingir que não está irritado.",
      category: "Estratégia de Email",
      readTime: "7 min de leitura",
      visualLabel: "Laboratório de Seguimento",
      content: [
        { type: "paragraph", text: "Um email de seguimento tem uma função: tornar o silêncio menos confortável do que responder. O truque é soar composto, não necessitado." },
        { type: "heading", text: "A Fórmula do Seguimento" },
        {
          type: "list",
          items: [
            "Referencie o pedido original de forma clara.",
            "Indique a decisão ou ação que precisa.",
            "Adicione um prazo se o timing importa.",
            "Torne o próximo passo fácil de responder.",
          ],
        },
        {
          type: "table",
          columns: ["Versão fraca", "Versão mais forte"],
          rows: [
            ["Só a confirmar como está isto.", "A retomar o pedido de aprovação abaixo. Pode confirmar até quinta-feira?"],
            ["Alguma novidade?", "Tem atualização sobre o prazo, ou devo planear considerando atraso?"],
            ["Desculpe incomodar novamente.", "A retomar isto porque afeta o próximo passo."],
          ],
        },
        { type: "paragraph", text: "Não precisa de pedir desculpa por precisar de uma resposta. Se o trabalho depende de uma resposta, o seguimento não é um incómodo. É higiene de projeto." },
      ],
    },
    "email-tone-scale-polite-to-nuclear": {
      title: "Escala de Tom: Do Educado ao Nuclear",
      description:
        "Uma análise prática dos níveis de tom em email, de lembretes gentis a formulações corporativamente termonucleares, com exemplos para cada fase.",
      category: "Estratégia de Tom",
      readTime: "7 min de leitura",
      visualLabel: "Medidor de Tom",
      content: [
        { type: "paragraph", text: "O tom não é apenas o que diz. É a quantidade de provas, urgência e desapontamento implícito que embala numa frase." },
        {
          type: "table",
          columns: ["Nível de tom", "Exemplo"],
          rows: [
            ["Caloroso", "Espero que esteja bem. Queria confirmar se já teve oportunidade de rever isto."],
            ["Claro", "Por favor envie o ficheiro revisto até às 15h para mantermos o cronograma."],
            ["Firme", "Isto está agora a bloquear o próximo passo. Por favor confirme a responsabilidade hoje."],
            ["Documentado", "Conforme referido no thread anterior, isto era devido sexta-feira e permanece pendente."],
            ["Nuclear", "Incluo a equipa alargada para visibilidade, dado que foram agora falhados dois prazos acordados."],
          ],
        },
        { type: "paragraph", text: "A maioria dos emails deve viver no meio: direto o suficiente para funcionar, calmo o suficiente para ser encaminhado." },
      ],
    },
    "what-to-say-instead-of-just-checking-in": {
      title: "O Que Dizer em Vez de 'Só a Confirmar'",
      description:
        "Alternativas melhores a 'só a confirmar' que tornam os emails de seguimento mais claros, mais úteis e mais difíceis de ignorar.",
      category: "Frases de Email",
      readTime: "6 min de leitura",
      visualLabel: "Clínica de Frases",
      content: [
        { type: "paragraph", text: "'Só a confirmar' parece inofensivo, mas muitas vezes não dá ao destinatário uma razão clara para agir. Um seguimento mais forte nomeia a coisa, o impacto e a decisão necessária." },
        {
          type: "table",
          columns: ["Em vez de", "Experimente"],
          rows: [
            ["Só a confirmar.", "A retomar a aprovação do orçamento para confirmarmos os próximos passos."],
            ["Queria ver como está isto.", "Pode confirmar se isto está aprovado, bloqueado ou ainda em análise?"],
            ["Alguma opinião?", "Prefere a opção A ou a opção B?"],
            ["A dar seguimento.", "A retomar isto porque o prazo é agora sexta-feira."],
          ],
        },
        { type: "paragraph", text: "A melhor substituição é específica. Se o destinatário conseguir responder numa frase, o seu seguimento cumpriu a função." },
      ],
    },
    "professional-ways-to-say-no-by-email": {
      title: "Formas Profissionais de Dizer Não por Email",
      description:
        "Como dizer não no trabalho sem explicar demais, pedir desculpa em excesso, ou iniciar uma negociação que nunca pretendeu ter.",
      category: "Comunicação Profissional",
      readTime: "8 min de leitura",
      visualLabel: "O Não Educado",
      content: [
        { type: "paragraph", text: "Um não profissional deve ser claro, breve e difícil de reinterpretar. Quanto mais explica, mais superfície cria para negociação." },
        {
          type: "table",
          columns: ["Situação", "Formulação útil"],
          rows: [
            ["Sem capacidade", "Não consigo assumir isto esta semana sem mover outra prioridade."],
            ["Fora do âmbito", "Isto fica fora do meu âmbito, mas o contacto certo é provavelmente a equipa de operações."],
            ["Prazo inviável", "Esse prazo não é viável do meu lado. O mais cedo que consigo entregar é terça-feira."],
            ["Pedido pouco claro", "Não consigo comprometer-me até que o âmbito e os critérios de sucesso estejam mais claros."],
          ],
        },
        { type: "quote", text: "Um bom não fecha a porta sem a bater." },
      ],
    },
    "deadline-reminder-emails-that-work": {
      title: "Emails de Lembrete de Prazo que Funcionam",
      description:
        "Exemplos de lembretes de prazo que são claros, calmos e firmes o suficiente para fazer o trabalho avançar sem soar frenético.",
      category: "Prazos",
      readTime: "7 min de leitura",
      visualLabel: "Secretária dos Prazos",
      content: [
        { type: "paragraph", text: "Um lembrete de prazo deve tornar a data visível, não fazê-lo parecer em pânico. O objetivo é reduzir a ambiguidade antes que se torne desculpa." },
        {
          type: "list",
          items: [
            "Nomeie o entregável.",
            "Repita a data de entrega.",
            "Explique o que depende disto.",
            "Peça confirmação ou um prazo revisto.",
          ],
        },
        {
          type: "table",
          columns: ["Necessidade", "Formulação do lembrete"],
          rows: [
            ["Lembrete gentil", "Lembrete rápido: o rascunho é devido amanhã para podermos rever antes de sexta."],
            ["Lembrete firme", "O rascunho é devido hoje. Por favor confirme se será enviado até às 17h."],
            ["Escalamento", "Este prazo já passou e está a afetar o cronograma de lançamento. Por favor confirme o plano de recuperação."],
          ],
        },
      ],
    },
    "client-scope-creep-email-examples": {
      title: "Exemplos de Emails para Alargamento de Âmbito",
      description:
        "Como responder quando um cliente continua a adicionar pedidos extra, com formulações educadas que protegem o âmbito e o orçamento do projeto.",
      category: "Emails para Clientes",
      readTime: "8 min de leitura",
      visualLabel: "Patrulha do Âmbito",
      content: [
        { type: "paragraph", text: "O alargamento de âmbito normalmente chega disfarçado de pedido pequeno. O email tem de ser suficientemente amigável para preservar a relação e suficientemente claro para proteger o projeto." },
        {
          type: "table",
          columns: ["O cliente diz", "Pode responder"],
          rows: [
            ["Podemos também acrescentar esta coisinha?", "Com todo o gosto. Envio o âmbito e custo revistos para aprovação."],
            ["Isto deve ser rápido.", "Pode ser simples, mas está fora do âmbito acordado, por isso quero documentar o tempo adicional antes de avançarmos."],
            ["Pode só incluir isto?", "Posso substituir uma das entregas atuais ou adicioná-lo como um pedido de alteração separado."],
          ],
        },
        { type: "paragraph", text: "A expressão 'com todo o gosto' faz um trabalho útil aqui. Mantém o tom cooperativo enquanto torna claro que trabalho extra continua a ser trabalho extra." },
      ],
    },
    "meeting-follow-up-emails-that-document-everything": {
      title: "Seguimentos de Reunião que Documentam Tudo",
      description:
        "Como escrever emails pós-reunião que confirmam decisões, atribuem responsabilidade e evitam confusão futura de forma subtil.",
      category: "Reuniões",
      readTime: "7 min de leitura",
      visualLabel: "Atas com Dentes",
      content: [
        { type: "paragraph", text: "O melhor seguimento de reunião não é um resumo. É um recibo. Confirma o que foi decidido, quem é responsável pelo quê, e quando todos concordaram que aconteceria." },
        {
          type: "list",
          items: [
            "Comece pelas decisões, não pela discussão.",
            "Atribua responsáveis pelo nome.",
            "Inclua datas sempre que possível.",
            "Sinalize questões por resolver antes que se tornem surpresas.",
          ],
        },
        {
          type: "table",
          columns: ["Secção", "Exemplo de formulação"],
          rows: [
            ["Decisão", "Acordámos avançar com a opção B para a primeira versão."],
            ["Responsável", "A Marta envia a versão final até quarta-feira."],
            ["Risco", "A data de lançamento depende de aprovação até sexta-feira."],
            ["Questão em aberto", "Ainda pendente: confirmação do timing da revisão legal."],
          ],
        },
        { type: "quote", text: "Uma reunião sem seguimento é teatro corporativo com melhor iluminação." },
      ],
    },
  },
  "fr-fr": {
    "ultimate-guide-passive-aggressive-emails": {
      title: "Guide des E-mails Passif-Agressifs",
      description:
        "Tout ce qu'il faut savoir pour rédiger l'e-mail passif-agressif professionnel parfait. Ton, timing, stratégie de copie et phrases-clés décryptées.",
      category: "Communication Professionnelle",
      readTime: "8 min de lecture",
      visualLabel: "Guide Pratique",
      content: [
        { type: "paragraph", text: "Les e-mails passif-agressifs sont un art. Ils exigent l'équilibre parfait entre professionnalisme et sous-texte : la capacité de communiquer un mécontentement sans jamais être techniquement inapproprié." },
        { type: "paragraph", text: "Le fondement est le déni plausible. Si quelqu'un lisait votre e-mail à voix haute en réunion, il devrait sonner parfaitement raisonnable. La tension vit entre les lignes, dans le timing, le choix des mots et la sélection soigneuse de qui est mis en copie." },
        { type: "heading", text: "L'Anatomie d'un E-mail Passif-Agressif" },
        {
          type: "list",
          items: [
            "Une ouverture chaleureuse qui semble généreuse mais signale l'épuisement.",
            "Un rappel de contexte qui ne devrait pas être nécessaire.",
            "La demande, répétée comme si c'était la première fois.",
            "Une phrase de clôture qui peut être sincère ou menaçante, selon la conscience du lecteur.",
          ],
        },
        { type: "heading", text: "Le Timing Est Primordial" },
        { type: "paragraph", text: "Une relance envoyée à 8h01 au sujet de quelque chose qui était dû hier envoie un message clair. Une réponse envoyée trois minutes après avoir reçu une excuse démontre que vous étiez, en réalité, attentif tout du long." },
        { type: "heading", text: "La Stratégie de la Copie" },
        { type: "paragraph", text: "L'utilisation stratégique de la copie est l'option nucléaire de la communication passif-agressive. Mettre le manager de quelqu'un en copie dit : 'J'ai besoin d'un témoin.' Mettre votre propre manager en copie dit : 'Je constitue un dossier.'" },
        { type: "heading", text: "Phrases Clés et Leurs Significations" },
        {
          type: "table",
          columns: ["Phrase", "Ce que ça signifie vraiment"],
          rows: [
            ["Suite à mon précédent e-mail", "Je l'ai déjà expliqué et vous ne l'avez pas lu."],
            ["À l'avenir", "Ne refaites pas cela."],
            ["Juste pour clarifier", "Vous n'avez clairement pas compris la première fois."],
            ["Je souhaitais signaler", "C'est votre faute et je le documente."],
            ["Pour votre commodité", "Parce que vous n'avez clairement pas pu le trouver vous-même."],
          ],
        },
        { type: "quote", text: "La précision bat le volume. Une phrase soigneusement choisie peut faire plus de dégâts qu'un paragraphe d'hostilité évidente." },
      ],
    },
    "per-my-last-email-history": {
      title: "L'Histoire de 'Suite à Mon Précédent E-mail'",
      description:
        "Comment quelques mots sont devenus la phrase la plus redoutée de la communication corporate. Origine, évolution et impact culturel.",
      category: "Humour Corporate",
      readTime: "6 min de lecture",
      visualLabel: "Histoire d'Origine",
      content: [
        { type: "paragraph", text: "'Suite à mon précédent e-mail.' Quelques mots qui peuvent faire transpirer même le professionnel le plus confiant. Mais d'où vient cette phrase et comment est-elle devenue le signal universel d'une frustration à peine contenue ?" },
        { type: "paragraph", text: "La formule est d'une simplicité trompeuse. Elle ne fait que référencer une communication précédente. Mais le contexte est tout : l'expéditeur dit qu'il a déjà traité le sujet, le destinataire n'a pas lu, et un écrit existe désormais." },
        { type: "heading", text: "L'Évolution de l'Hostilité Corporate" },
        { type: "paragraph", text: "Avant l'e-mail, l'agressivité passive au travail demandait de la créativité : mémos avec surlignage stratégique, comptes rendus omettant accidentellement des contributions, ou impressions laissées exactement là où elles seraient remarquées. L'e-mail a donné aux professionnels une archive interrogeable." },
        { type: "heading", text: "Pourquoi Ça Fonctionne" },
        { type: "paragraph", text: "Le génie de 'suite à mon précédent e-mail' est son déni total. Si on le conteste, l'expéditeur peut affirmer qu'il essayait simplement d'être utile en pointant vers un contexte pertinent. Le sous-texte est évident, mais le texte lui-même est innocent." },
        { type: "heading", text: "Variations Observées" },
        {
          type: "table",
          columns: ["Phrase", "Signal"],
          rows: [
            ["Comme indiqué précédemment", "La variante formelle."],
            ["Je reviens sur ce point", "La variante persistante."],
            ["Je relance simplement", "La variante 'je sais que vous m'ignorez'."],
            ["Je joins à nouveau pour facilité", "La variante 'vous l'avez perdu, non ?'."],
          ],
        },
        { type: "paragraph", text: "La phrase a transcendé l'e-mail pour devenir un phénomène culturel parce que presque tous les professionnels ont vécu les deux côtés : la frustration d'être ignoré et la culpabilité d'être pris en flagrant délit." },
      ],
    },
    "corporate-buzzwords-decoded": {
      title: "50 Expressions Corporate Décodées",
      description:
        "Un dictionnaire du jargon corporate et du vrai sous-texte passif-agressif derrière chaque expression. De synergie à revenir vers vous, tout décrypté.",
      category: "Humour Corporate",
      readTime: "10 min de lecture",
      visualLabel: "Bureau de Traduction",
      content: [
        { type: "paragraph", text: "Le langage corporate est un dialecte conçu pour dire très peu tout en sonnant extrêmement occupé. Derrière chaque expression se cache une vérité plus simple que quelqu'un a jugée trop directe pour la consommation professionnelle." },
        { type: "paragraph", text: "Voici la version claire : ce que les gens disent en réunion, et ce que tout le monde comprend silencieusement." },
        {
          type: "table",
          columns: ["Ce qui est dit", "Ce que ça signifie vraiment"],
          rows: [
            ["Synergie", "Nous voulons qu'une personne, un processus ou un budget fasse le travail de deux."],
            ["Revenir vers vous", "Je termine cette conversation maintenant."],
            ["Gains rapides", "Le travail facile que nous n'avons toujours pas fait."],
            ["Faire bouger les lignes", "Veuillez accomplir quelque chose de mesurable pour une fois."],
            ["Analyse approfondie", "Quelque chose ne va pas et nous devons regarder de plus près."],
            ["À l'avenir", "Ne refaites pas cela."],
            ["Pour référence future", "Souvenez-vous-en, car moi je m'en souviendrai."],
            ["Comme convenu", "J'ai des témoins."],
            ["En toute transparence", "Je vais dire quelque chose d'inconvénient."],
            ["Avec tout le respect que je vous dois", "Je suis en profond désaccord et j'essaie de garder mon emploi."],
            ["Bande passante", "Temps, énergie ou patience. Généralement les trois."],
            ["Capitaliser", "Utiliser."],
            ["Écosystème", "Un tas de choses liées que personne ne veut cartographier."],
            ["Idéation", "Réfléchir, mais avec une invitation calendrier."],
            ["Changement de paradigme", "Quelque chose a changé et nous avons besoin que ça sonne cher."],
            ["Prendre ça hors réunion", "Arrêtez de dire cela devant tout le monde."],
            ["Mettre de côté", "Votre idée ne rentrera pas dans cette réunion."],
            ["Points d'action", "Les choses que les gens oublieront si on ne les relance pas."],
            ["Alignement des parties prenantes", "Obtenir l'accord de tous, ce qui prendra une éternité."],
            ["Point rapide", "Une réunion qui aurait pu être un message."],
            ["Faire un point", "J'ai besoin d'une mise à jour mais je veux paraître décontracté."],
            ["Inclure dans la boucle", "Quelqu'un d'autre est maintenant aussi responsable."],
            ["Visibilité", "La direction veut surveiller cela de plus près."],
            ["Prise en charge", "Ce problème vous appartient désormais."],
            ["Responsabilisation", "Quelqu'un va bientôt être blâmé."],
            ["Rationaliser", "Supprimer des étapes, des personnes ou du budget."],
            ["Optimiser", "Rendre moins cher, plus rapide, ou les deux."],
            ["Redimensionner", "Couper quelque chose en évitant le mot couper."],
            ["Allocation de ressources", "Qui reçoit les personnes, l'argent ou les excuses."],
            ["Bonne pratique", "La façon dont nous préférons faire, au moins aujourd'hui."],
            ["Valeur ajoutée", "Veuillez justifier pourquoi ceci existe."],
            ["Étoile polaire", "L'objectif qu'on mentionne quand les priorités sont confuses."],
            ["Feuille de route", "Un document optimiste qui prétend être une promesse."],
            ["Livrables", "Les choses concrètes dont quelqu'un peut être tenu responsable."],
            ["Dépendances", "Raisons pour lesquelles ce n'est peut-être pas notre faute."],
            ["Bloqueurs", "Raisons pour lesquelles ça n'avance définitivement pas."],
            ["Victoire rapide", "Quelque chose d'assez petit pour survivre aux validations."],
            ["Stratégique", "Important, vague ou politiquement protégé."],
            ["Tactique", "Utile mais moins glamour."],
            ["Holistique", "Nous n'avons pas décidé où sont les frontières."],
            ["Transverse", "Plusieurs équipes seront confuses ensemble."],
            ["Socialiser ça", "Prévenir les gens avant que la décision officielle n'apparaisse."],
            ["Adhésion", "Permission déguisée en enthousiasme."],
            ["Conduite du changement", "Convaincre les gens de ne pas paniquer."],
            ["Apprentissages", "Erreurs, mais formatées pour un slide."],
            ["Post-mortem", "Une réunion sur ce qui a mal tourné, soigneusement formulée."],
            ["Escalader", "Demander à quelqu'un de senior avant de prendre un risque."],
            ["Faire bouillir l'océan", "Rendre le périmètre impossiblement large."],
            ["En résumé", "La version courte après trop de palabres."],
            ["Au final", "Je vais trop simplifier les choses."],
          ],
        },
        { type: "quote", text: "Le jargon survit parce qu'il crée une distance avec les vérités inconfortables. Ce sont de petits airbags professionnels." },
        { type: "paragraph", text: "Utilisez-les avec parcimonie. Quand tout est stratégique, aligné, optimisé et transverse, le vrai message disparaît sous le badge." },
      ],
    },
    "how-to-follow-up-without-sounding-desperate": {
      title: "Relancer Sans Avoir l'Air Désespéré",
      description:
        "Comment écrire des relances qui sonnent calmes, professionnelles et fermes sans supplier pour une réponse ni prétendre ne pas être agacé.",
      category: "Stratégie E-mail",
      readTime: "7 min de lecture",
      visualLabel: "Laboratoire de Relance",
      content: [
        { type: "paragraph", text: "Un e-mail de relance a une seule mission : rendre le silence moins confortable que le fait de répondre. L'astuce est de paraître composé, pas dans le besoin." },
        { type: "heading", text: "La Formule de Relance" },
        {
          type: "list",
          items: [
            "Référencez clairement la demande initiale.",
            "Indiquez la décision ou l'action nécessaire.",
            "Ajoutez une échéance si le timing compte.",
            "Rendez la prochaine étape facile à répondre.",
          ],
        },
        {
          type: "table",
          columns: ["Version faible", "Version plus nette"],
          rows: [
            ["Je relance simplement.", "Je reviens sur la demande d'approbation ci-dessous. Pouvez-vous confirmer d'ici jeudi ?"],
            ["Des nouvelles ?", "Avez-vous une mise à jour sur le calendrier, ou dois-je anticiper un retard ?"],
            ["Désolé de vous déranger à nouveau.", "Je remets ce sujet en avant car il impacte la prochaine étape."],
          ],
        },
        { type: "paragraph", text: "Vous n'avez pas besoin de vous excuser d'avoir besoin d'une réponse. Si le travail dépend d'un retour, la relance n'est pas une nuisance. C'est de l'hygiène de projet." },
      ],
    },
    "email-tone-scale-polite-to-nuclear": {
      title: "Échelle de Ton : du Poli au Nucléaire",
      description:
        "Une analyse pratique des niveaux de ton en e-mail, des rappels doux à la formulation corporate thermonucléaire, avec exemples pour chaque étape.",
      category: "Stratégie de Ton",
      readTime: "7 min de lecture",
      visualLabel: "Jauge de Ton",
      content: [
        { type: "paragraph", text: "Le ton n'est pas seulement ce que vous dites. C'est la quantité de preuves, d'urgence et de déception implicite que vous mettez dans la phrase." },
        {
          type: "table",
          columns: ["Niveau de ton", "Exemple"],
          rows: [
            ["Chaleureux", "J'espère que vous allez bien. Je voulais vérifier si vous aviez eu l'occasion de relire ceci."],
            ["Clair", "Merci d'envoyer le fichier révisé avant 15h pour que nous puissions respecter le calendrier."],
            ["Ferme", "Cela bloque désormais l'étape suivante. Merci de confirmer qui prend la responsabilité aujourd'hui."],
            ["Documenté", "Comme noté dans le fil précédent, ceci était dû vendredi et reste en attente."],
            ["Nucléaire", "J'inclus l'équipe élargie pour visibilité, puisque deux échéances convenues ont désormais été manquées."],
          ],
        },
        { type: "paragraph", text: "La plupart des e-mails devraient rester au milieu : assez directs pour fonctionner, assez calmes pour être transférés." },
      ],
    },
    "what-to-say-instead-of-just-checking-in": {
      title: "Que Dire au Lieu de 'Je Relance'",
      description:
        "De meilleures alternatives à 'je relance' qui rendent les suivis plus clairs, plus utiles et plus difficiles à ignorer.",
      category: "Formules d'E-mail",
      readTime: "6 min de lecture",
      visualLabel: "Clinique des Formules",
      content: [
        { type: "paragraph", text: "'Je relance' semble inoffensif, mais donne rarement au destinataire une raison claire d'agir. Une relance plus forte nomme le sujet, l'impact et la décision nécessaire." },
        {
          type: "table",
          columns: ["Au lieu de", "Essayez"],
          rows: [
            ["Je relance.", "Je reviens sur l'approbation du budget afin de confirmer les prochaines étapes."],
            ["Je voulais voir où ça en est.", "Pouvez-vous confirmer si c'est approuvé, bloqué ou encore en cours d'examen ?"],
            ["Des avis ?", "Préférez-vous l'option A ou l'option B ?"],
            ["Je remonte ce point.", "Je remets ce sujet en avant car l'échéance est maintenant vendredi."],
          ],
        },
        { type: "paragraph", text: "La meilleure alternative est spécifique. Si le destinataire peut répondre en une phrase, votre relance a fait son travail." },
      ],
    },
    "professional-ways-to-say-no-by-email": {
      title: "Dire Non Professionnellement par E-mail",
      description:
        "Comment dire non au travail sans trop expliquer, trop s'excuser ou ouvrir une négociation que vous n'aviez jamais l'intention d'avoir.",
      category: "Communication Professionnelle",
      readTime: "8 min de lecture",
      visualLabel: "Le Non Poli",
      content: [
        { type: "paragraph", text: "Un non professionnel doit être clair, bref et difficile à mal interpréter. Plus vous expliquez, plus vous créez de surface pour la négociation." },
        {
          type: "table",
          columns: ["Situation", "Formulation utile"],
          rows: [
            ["Pas de disponibilité", "Je ne peux pas prendre cela cette semaine sans déplacer une autre priorité."],
            ["Mauvais interlocuteur", "Cela dépasse mon périmètre, mais le bon contact est probablement l'équipe opérations."],
            ["Délai impossible", "Ce délai n'est pas tenable de mon côté. Le plus tôt que je puisse livrer est mardi prochain."],
            ["Demande floue", "Je ne peux pas m'engager tant que le périmètre et les critères de succès ne sont pas plus clairs."],
          ],
        },
        { type: "quote", text: "Un bon non ferme la porte sans la claquer." },
      ],
    },
    "deadline-reminder-emails-that-work": {
      title: "Rappels d'Échéance qui Fonctionnent",
      description:
        "Exemples de rappels d'échéance clairs, calmes et assez fermes pour faire avancer le travail sans paraître frénétique.",
      category: "Délais",
      readTime: "7 min de lecture",
      visualLabel: "Bureau des Délais",
      content: [
        { type: "paragraph", text: "Un rappel d'échéance doit rendre la date visible, pas vous faire paraître paniqué. L'objectif est de réduire l'ambiguïté avant qu'elle ne devienne une excuse." },
        {
          type: "list",
          items: [
            "Nommez le livrable.",
            "Rappelez la date d'échéance.",
            "Expliquez ce qui en dépend.",
            "Demandez une confirmation ou un nouveau calendrier.",
          ],
        },
        {
          type: "table",
          columns: ["Besoin", "Formulation du rappel"],
          rows: [
            ["Rappel doux", "Petit rappel : le brouillon est attendu demain pour que nous puissions relire avant vendredi."],
            ["Rappel ferme", "Le brouillon est attendu aujourd'hui. Merci de confirmer s'il sera envoyé avant 17h."],
            ["Escalade", "Cette échéance est désormais dépassée et affecte le calendrier de lancement. Merci de confirmer le plan de rattrapage."],
          ],
        },
      ],
    },
    "client-scope-creep-email-examples": {
      title: "Exemples d'E-mails sur la Dérive de Périmètre",
      description:
        "Comment répondre quand un client ne cesse d'ajouter des demandes, avec une formulation polie qui protège le périmètre et le budget du projet.",
      category: "E-mails Client",
      readTime: "8 min de lecture",
      visualLabel: "Patrouille du Périmètre",
      content: [
        { type: "paragraph", text: "La dérive de périmètre arrive généralement déguisée en petite demande. L'e-mail doit être assez amical pour préserver la relation et assez clair pour protéger le projet." },
        {
          type: "table",
          columns: ["Le client dit", "Vous pouvez répondre"],
          rows: [
            ["On peut aussi ajouter ce petit truc ?", "Avec plaisir. J'envoie le périmètre et le coût révisés pour validation."],
            ["Ce sera rapide.", "C'est peut-être simple, mais c'est hors du périmètre convenu, donc je souhaite documenter le temps supplémentaire avant de continuer."],
            ["Vous pouvez juste l'inclure ?", "Je peux soit remplacer un des livrables actuels, soit l'ajouter comme une demande de modification séparée."],
          ],
        },
        { type: "paragraph", text: "La formule 'avec plaisir' fait un travail utile ici. Elle maintient le ton coopératif tout en rendant clair que le travail supplémentaire reste du travail supplémentaire." },
      ],
    },
    "meeting-follow-up-emails-that-document-everything": {
      title: "Comptes Rendus de Réunion qui Documentent Tout",
      description:
        "Comment rédiger des suivis de réunion qui confirment les décisions, attribuent la responsabilité et préviennent subtilement la confusion future.",
      category: "Réunions",
      readTime: "7 min de lecture",
      visualLabel: "Compte Rendu Mordant",
      content: [
        { type: "paragraph", text: "Le meilleur suivi de réunion n'est pas un résumé. C'est un reçu. Il confirme ce qui a été décidé, qui est responsable de quoi, et quand tout le monde a convenu que ça serait fait." },
        {
          type: "list",
          items: [
            "Commencez par les décisions, pas par la discussion.",
            "Attribuez les responsables par leur nom.",
            "Incluez des dates autant que possible.",
            "Signalez les questions non résolues avant qu'elles ne deviennent des surprises.",
          ],
        },
        {
          type: "table",
          columns: ["Section", "Exemple de formulation"],
          rows: [
            ["Décision", "Nous avons convenu d'avancer avec l'option B pour la première version."],
            ["Responsable", "Marta enverra la version finale mercredi."],
            ["Risque", "La date de lancement dépend de l'approbation d'ici vendredi."],
            ["Question ouverte", "En attente : confirmation du calendrier de la revue juridique."],
          ],
        },
        { type: "quote", text: "Une réunion sans suivi n'est que du théâtre corporate avec un meilleur éclairage." },
      ],
    },
  },
  "es-es": {
    "ultimate-guide-passive-aggressive-emails": {
      title: "Guía de Emails Pasivo-Agresivos",
      description:
        "Todo lo que necesitas saber para escribir el email laboral pasivo-agresivo perfecto. Tono, timing, estrategia de copia y frases clave descifradas.",
      category: "Comunicación Laboral",
      readTime: "8 min de lectura",
      visualLabel: "Guía Práctica",
      content: [
        { type: "paragraph", text: "Los emails pasivo-agresivos son una forma de arte. Requieren el equilibrio perfecto entre profesionalismo y subtexto: la capacidad de comunicar descontento sin ser nunca técnicamente inapropiado." },
        { type: "paragraph", text: "La base es la negación plausible. Si alguien leyera tu email en voz alta en una reunión, debería sonar perfectamente razonable. La tensión vive entre líneas, en el timing, la elección de palabras y la selección cuidadosa de quién va en copia." },
        { type: "heading", text: "La Anatomía de un Email Pasivo-Agresivo" },
        {
          type: "list",
          items: [
            "Una apertura cálida que suena generosa pero señala agotamiento.",
            "Un recordatorio de contexto que no debería hacer falta.",
            "La petición, repetida como si fuera la primera vez.",
            "Una línea de cierre que puede ser sincera o amenazante, según la conciencia del lector.",
          ],
        },
        { type: "heading", text: "El Timing Lo Es Todo" },
        { type: "paragraph", text: "Un seguimiento enviado a las 8:01 sobre algo que vencía ayer envía un mensaje claro. Una respuesta enviada tres minutos después de recibir una excusa demuestra que estabas, de hecho, prestando atención todo el tiempo." },
        { type: "heading", text: "La Estrategia de la Copia" },
        { type: "paragraph", text: "El uso estratégico de la copia es la opción nuclear de la comunicación pasivo-agresiva. Poner al jefe de alguien en copia dice: 'Necesito un testigo.' Poner a tu propio jefe en copia dice: 'Estoy construyendo un caso.'" },
        { type: "heading", text: "Frases Clave y Sus Significados" },
        {
          type: "table",
          columns: ["Frase", "Lo que realmente significa"],
          rows: [
            ["Según mi email anterior", "Ya expliqué esto y no lo leíste."],
            ["De cara al futuro", "No vuelvas a hacer esto."],
            ["Solo para aclarar", "Claramente no entendiste la primera vez."],
            ["Quería señalar", "Esto es tu culpa y lo estoy documentando."],
            ["Para tu comodidad", "Porque claramente no pudiste encontrarlo tú mismo."],
          ],
        },
        { type: "quote", text: "La precisión supera al volumen. Una frase cuidadosamente elegida puede hacer más daño que un párrafo de hostilidad evidente." },
      ],
    },
    "per-my-last-email-history": {
      title: "La Historia de 'Según Mi Email Anterior'",
      description:
        "Cómo unas pocas palabras se convirtieron en la frase más temida de la comunicación corporativa. Origen, evolución e impacto cultural.",
      category: "Humor Corporativo",
      readTime: "6 min de lectura",
      visualLabel: "Historia de Origen",
      content: [
        { type: "paragraph", text: "'Según mi email anterior.' Unas pocas palabras que pueden hacer sudar frío incluso al profesional más seguro. Pero ¿de dónde vino esta frase y cómo se convirtió en la señal universal de frustración apenas contenida?" },
        { type: "paragraph", text: "La frase es engañosamente simple. Solo hace referencia a una comunicación previa. Pero el contexto lo es todo: el remitente dice que ya abordó el tema, el destinatario no lo leyó, y ahora existe un registro escrito." },
        { type: "heading", text: "La Evolución de la Hostilidad Corporativa" },
        { type: "paragraph", text: "Antes del email, la agresividad pasiva en el trabajo requería creatividad: memorandos con resaltado estratégico, actas de reunión que accidentalmente omitían contribuciones, o impresiones dejadas exactamente donde serían notadas. El email dio a los profesionales un archivo con buscador." },
        { type: "heading", text: "Por Qué Funciona" },
        { type: "paragraph", text: "La genialidad de 'según mi email anterior' es su negación total. Si se le cuestiona, el remitente puede alegar que simplemente estaba siendo servicial señalando contexto previo relevante. El subtexto es inconfundible, pero el texto en sí es inocente." },
        { type: "heading", text: "Variaciones Observadas" },
        {
          type: "table",
          columns: ["Frase", "Señal"],
          rows: [
            ["Como mencioné anteriormente", "La variante formal."],
            ["Retomo este tema", "La variante persistente."],
            ["Solo quería dar seguimiento", "La variante 'sé que me estás ignorando'."],
            ["Lo reenvío para facilidad", "La variante 'lo perdiste, ¿verdad?'."],
          ],
        },
        { type: "paragraph", text: "La frase ha trascendido el email y se ha convertido en un fenómeno cultural porque casi todos los profesionales han experimentado ambos lados: la frustración de ser ignorado y la culpa de ser descubierto." },
      ],
    },
    "corporate-buzzwords-decoded": {
      title: "50 Expresiones Corporativas Decodificadas",
      description:
        "Un diccionario de jerga corporativa y del verdadero subtexto pasivo-agresivo detrás de cada frase. De sinergia a retomar, todo descifrado.",
      category: "Humor Corporativo",
      readTime: "10 min de lectura",
      visualLabel: "Mesa de Traducción",
      content: [
        { type: "paragraph", text: "El lenguaje corporativo es un dialecto diseñado para decir muy poco mientras suena extremadamente ocupado. Detrás de cada expresión hay una verdad más simple que alguien decidió que era demasiado directa para consumo profesional." },
        { type: "paragraph", text: "Aquí va la versión clara: lo que la gente dice en reuniones y lo que todos silenciosamente entienden que significa." },
        {
          type: "table",
          columns: ["Lo que se dice", "Lo que realmente significa"],
          rows: [
            ["Sinergia", "Queremos que una persona, proceso o presupuesto haga el trabajo de dos."],
            ["Retomar el tema", "Estoy terminando esta conversación ahora."],
            ["Fruta madura", "El trabajo fácil que de alguna forma aún no hemos hecho."],
            ["Mover la aguja", "Por favor consigue algo medible por una vez."],
            ["Análisis profundo", "Algo está mal y necesitamos mirar más de cerca."],
            ["De cara al futuro", "No vuelvas a hacer esto."],
            ["Para referencia futura", "Recuerda esto, porque yo lo recordaré."],
            ["Como se discutió", "Tengo testigos."],
            ["Para ser transparente", "Estoy a punto de decir algo incómodo."],
            ["Con todo el respeto", "Estoy en fuerte desacuerdo e intento mantener mi empleo."],
            ["Ancho de banda", "Tiempo, energía o paciencia. Normalmente los tres."],
            ["Apalancar", "Usar."],
            ["Ecosistema", "Un montón de cosas relacionadas que nadie quiere mapear."],
            ["Ideación", "Pensar, pero con invitación de calendario."],
            ["Cambio de paradigma", "Algo cambió y necesitamos que suene caro."],
            ["Tratarlo fuera de la reunión", "Deja de decir esto delante de todos."],
            ["Aparcar el tema", "Tu idea no va a entrar en esta reunión."],
            ["Puntos de acción", "Las cosas que la gente olvidará si no se les persigue."],
            ["Alineamiento de interesados", "Poner a todos de acuerdo, lo cual llevará una eternidad."],
            ["Sincronización rápida", "Una reunión que podría haber sido un mensaje."],
            ["Tocar base", "Necesito una actualización pero quiero sonar informal."],
            ["Incluir en el circuito", "Alguien más es ahora también responsable."],
            ["Visibilidad", "Dirección quiere vigilar esto más de cerca."],
            ["Apropiación", "Este problema ahora es tuyo."],
            ["Responsabilidad", "Alguien está a punto de cargar con la culpa."],
            ["Optimizar procesos", "Eliminar pasos, personas o presupuesto."],
            ["Optimizar", "Hacerlo más barato, más rápido o ambos."],
            ["Redimensionar", "Recortar algo evitando la palabra recortar."],
            ["Asignación de recursos", "Quién recibe personas, dinero o excusas."],
            ["Buena práctica", "La forma en que preferimos hacerlo, al menos hoy."],
            ["Valor añadido", "Por favor justifica por qué esto existe."],
            ["Estrella polar", "El objetivo que mencionamos cuando las prioridades están confusas."],
            ["Hoja de ruta", "Un documento esperanzador que pretende ser una promesa."],
            ["Entregables", "Las cosas concretas por las que se puede pedir cuentas."],
            ["Dependencias", "Razones por las que esto puede no ser nuestra culpa."],
            ["Bloqueantes", "Razones por las que esto definitivamente no avanza."],
            ["Victoria rápida", "Algo lo bastante pequeño para sobrevivir a aprobaciones."],
            ["Estratégico", "Importante, vago o políticamente protegido."],
            ["Táctico", "Útil pero menos glamuroso."],
            ["Holístico", "No hemos decidido dónde están las fronteras."],
            ["Transversal", "Varios equipos estarán confundidos juntos."],
            ["Socializar esto", "Avisar a la gente antes de que aparezca la decisión oficial."],
            ["Alineamiento", "Permiso disfrazado de entusiasmo."],
            ["Gestión del cambio", "Convencer a la gente de que no entre en pánico."],
            ["Aprendizajes", "Errores, pero formateados para una presentación."],
            ["Post-mortem", "Una reunión sobre lo que salió mal, cuidadosamente formulada."],
            ["Escalarlo arriba", "Preguntar a alguien senior antes de arriesgarse."],
            ["Hervir el océano", "Hacer el alcance imposiblemente grande."],
            ["En resumen", "La versión corta después de hablar demasiado."],
            ["Al final del día", "Estoy a punto de simplificar demasiado."],
          ],
        },
        { type: "quote", text: "La jerga sobrevive porque crea distancia con las verdades incómodas. Son pequeños airbags profesionales." },
        { type: "paragraph", text: "Úsalas con moderación. Cuando todo es estratégico, alineado, optimizado y transversal, el mensaje real desaparece bajo la acreditación." },
      ],
    },
    "how-to-follow-up-without-sounding-desperate": {
      title: "Cómo Hacer Seguimiento Sin Parecer Desesperado",
      description:
        "Cómo escribir emails de seguimiento que suenan calmados, profesionales y firmes sin suplicar una respuesta o fingir que no estás molesto.",
      category: "Estrategia de Email",
      readTime: "7 min de lectura",
      visualLabel: "Laboratorio de Seguimiento",
      content: [
        { type: "paragraph", text: "Un email de seguimiento tiene una función: hacer que el silencio sea menos cómodo que responder. El truco es sonar sereno, no necesitado." },
        { type: "heading", text: "La Fórmula del Seguimiento" },
        {
          type: "list",
          items: [
            "Haz referencia clara a la solicitud original.",
            "Indica la decisión o acción que necesitas.",
            "Añade un plazo si el timing importa.",
            "Haz que el siguiente paso sea fácil de responder.",
          ],
        },
        {
          type: "table",
          columns: ["Versión débil", "Versión más clara"],
          rows: [
            ["Solo quería comprobar cómo va esto.", "Retomo la solicitud de aprobación. ¿Puedes confirmar antes del jueves?"],
            ["¿Alguna novedad?", "¿Tienes actualización sobre el plazo, o debo planificar contando con un retraso?"],
            ["Perdona que moleste de nuevo.", "Retomo esto porque afecta al siguiente paso."],
          ],
        },
        { type: "paragraph", text: "No necesitas disculparte por necesitar una respuesta. Si el trabajo depende de un retorno, el seguimiento no es una molestia. Es higiene de proyecto." },
      ],
    },
    "email-tone-scale-polite-to-nuclear": {
      title: "Escala de Tono: de Educado a Nuclear",
      description:
        "Un análisis práctico de los niveles de tono en email, de recordatorios suaves a redacción corporativamente termonuclear, con ejemplos para cada fase.",
      category: "Estrategia de Tono",
      readTime: "7 min de lectura",
      visualLabel: "Medidor de Tono",
      content: [
        { type: "paragraph", text: "El tono no es solo lo que dices. Es cuánta evidencia, urgencia y decepción implícita metes en la frase." },
        {
          type: "table",
          columns: ["Nivel de tono", "Ejemplo"],
          rows: [
            ["Cálido", "Espero que estés bien. Quería confirmar si tuviste oportunidad de revisar esto."],
            ["Claro", "Por favor envía el archivo revisado antes de las 15:00 para mantener el cronograma."],
            ["Firme", "Esto bloquea ahora el siguiente paso. Por favor confirma la responsabilidad hoy."],
            ["Documentado", "Como se indicó en el hilo anterior, esto vencía el viernes y sigue pendiente."],
            ["Nuclear", "Incluyo al equipo ampliado para visibilidad, dado que se han incumplido dos plazos acordados."],
          ],
        },
        { type: "paragraph", text: "La mayoría de emails debería vivir en el medio: directo para funcionar, tranquilo para poder reenviarse." },
      ],
    },
    "what-to-say-instead-of-just-checking-in": {
      title: "Qué Decir en Lugar de 'Solo Quería Comprobar'",
      description:
        "Mejores alternativas a 'solo quería comprobar' que hacen los seguimientos más claros, más útiles y más difíciles de ignorar.",
      category: "Frases de Email",
      readTime: "6 min de lectura",
      visualLabel: "Clínica de Frases",
      content: [
        { type: "paragraph", text: "'Solo quería comprobar' parece inofensivo, pero muchas veces no da al destinatario una razón clara para actuar. Un seguimiento más fuerte nombra el tema, el impacto y la decisión necesaria." },
        {
          type: "table",
          columns: ["En lugar de", "Prueba"],
          rows: [
            ["Solo quería comprobar.", "Retomo la aprobación del presupuesto para confirmar los próximos pasos."],
            ["Quería ver cómo está esto.", "¿Puedes confirmar si está aprobado, bloqueado o aún en revisión?"],
            ["¿Opiniones?", "¿Prefieres la opción A o la opción B?"],
            ["Subo esto de nuevo.", "Retomo esto porque el plazo es ahora viernes."],
          ],
        },
        { type: "paragraph", text: "La mejor sustitución es específica. Si el destinatario puede responder en una frase, tu seguimiento ha cumplido su función." },
      ],
    },
    "professional-ways-to-say-no-by-email": {
      title: "Formas Profesionales de Decir No por Email",
      description:
        "Cómo decir no en el trabajo sin explicar demasiado, disculparte de más o iniciar una negociación que nunca pretendías tener.",
      category: "Comunicación Laboral",
      readTime: "8 min de lectura",
      visualLabel: "El No Educado",
      content: [
        { type: "paragraph", text: "Un no profesional debe ser claro, breve y difícil de malinterpretar. Cuanto más explicas, más superficie creas para la negociación." },
        {
          type: "table",
          columns: ["Situación", "Frase útil"],
          rows: [
            ["Sin disponibilidad", "No puedo asumir esto esta semana sin mover otra prioridad."],
            ["No es mi responsabilidad", "Esto queda fuera de mi ámbito, pero el contacto correcto probablemente sea el equipo de operaciones."],
            ["Plazo inviable", "Ese plazo no es viable desde mi lado. Lo más pronto que puedo entregar es el martes."],
            ["Petición poco clara", "No puedo comprometerme hasta que el alcance y los criterios de éxito estén más claros."],
          ],
        },
        { type: "quote", text: "Un buen no cierra la puerta sin dar un portazo." },
      ],
    },
    "deadline-reminder-emails-that-work": {
      title: "Recordatorios de Plazo que Funcionan",
      description:
        "Ejemplos de recordatorios de plazo claros, tranquilos y firmes para hacer avanzar el trabajo sin sonar frenético.",
      category: "Plazos",
      readTime: "7 min de lectura",
      visualLabel: "Mesa de Plazos",
      content: [
        { type: "paragraph", text: "Un recordatorio de plazo debe hacer visible la fecha, no hacerte parecer en pánico. El objetivo es reducir la ambigüedad antes de que se convierta en excusa." },
        {
          type: "list",
          items: [
            "Nombra el entregable.",
            "Repite la fecha de entrega.",
            "Explica qué depende de ello.",
            "Pide confirmación o un plazo revisado.",
          ],
        },
        {
          type: "table",
          columns: ["Necesidad", "Redacción del recordatorio"],
          rows: [
            ["Recordatorio suave", "Recordatorio rápido: el borrador vence mañana para que podamos revisar antes del viernes."],
            ["Recordatorio firme", "El borrador vence hoy. Confirma si será enviado antes de las 17:00."],
            ["Escalado", "Este plazo ya pasó y está afectando al cronograma de lanzamiento. Confirma el plan de recuperación."],
          ],
        },
      ],
    },
    "client-scope-creep-email-examples": {
      title: "Ejemplos de Emails para Ampliación de Alcance",
      description:
        "Cómo responder cuando un cliente sigue añadiendo peticiones extra, con redacción educada que protege el alcance y el presupuesto del proyecto.",
      category: "Emails para Clientes",
      readTime: "8 min de lectura",
      visualLabel: "Patrulla de Alcance",
      content: [
        { type: "paragraph", text: "La ampliación de alcance suele llegar disfrazada de petición pequeña. El email tiene que ser lo bastante amable para preservar la relación y lo bastante claro para proteger el proyecto." },
        {
          type: "table",
          columns: ["El cliente dice", "Puedes responder"],
          rows: [
            ["¿Podemos también añadir esta cosita?", "Encantado. Envío el alcance y coste revisados para aprobación."],
            ["Será rápido.", "Puede ser sencillo, pero está fuera del alcance acordado, así que quiero documentar el tiempo adicional antes de proceder."],
            ["¿Puedes simplemente incluirlo?", "Puedo sustituir uno de los entregables actuales o añadirlo como una solicitud de cambio separada."],
          ],
        },
        { type: "paragraph", text: "La frase 'encantado de hacerlo' hace un trabajo útil aquí. Mantiene el tono cooperativo mientras deja claro que el trabajo extra sigue siendo trabajo extra." },
      ],
    },
    "meeting-follow-up-emails-that-document-everything": {
      title: "Seguimientos de Reunión que Documentan Todo",
      description:
        "Cómo escribir emails de seguimiento de reunión que confirman decisiones, asignan responsabilidad y previenen discretamente la confusión futura.",
      category: "Reuniones",
      readTime: "7 min de lectura",
      visualLabel: "Actas con Dientes",
      content: [
        { type: "paragraph", text: "El mejor seguimiento de reunión no es un resumen. Es un recibo. Confirma qué se decidió, quién es responsable de qué, y cuándo todos acordaron que se haría." },
        {
          type: "list",
          items: [
            "Empieza por las decisiones, no por la discusión.",
            "Asigna responsables por nombre.",
            "Incluye fechas siempre que sea posible.",
            "Señala preguntas sin resolver antes de que se conviertan en sorpresas.",
          ],
        },
        {
          type: "table",
          columns: ["Sección", "Ejemplo de redacción"],
          rows: [
            ["Decisión", "Acordamos avanzar con la opción B para la primera versión."],
            ["Responsable", "Marta enviará la versión final el miércoles."],
            ["Riesgo", "La fecha de lanzamiento depende de la aprobación antes del viernes."],
            ["Pregunta abierta", "Pendiente: confirmación del timing de la revisión legal."],
          ],
        },
        { type: "quote", text: "Una reunión sin seguimiento es teatro corporativo con mejor iluminación." },
      ],
    },
  },
};

export function getLocalizedBlogPosts(locale: Locale = DEFAULT_LOCALE): BlogPost[] {
  if (locale === DEFAULT_LOCALE) return BLOG_POSTS;

  const translationSet = translations[locale as Exclude<Locale, "en-en">];

  return BLOG_POSTS.map((post) => {
    const translated = translationSet?.[post.slug];
    if (!translated) return post;

    return {
      ...post,
      title: translated.title,
      description: translated.description,
      category: translated.category,
      readTime: translated.readTime,
      visual: {
        ...post.visual,
        label: translated.visualLabel,
      },
      content: translated.content,
    };
  });
}

export function getLocalizedBlogPostMap(locale: Locale = DEFAULT_LOCALE): Record<string, BlogPost> {
  return Object.fromEntries(
    getLocalizedBlogPosts(locale).map((post) => [post.slug, post]),
  ) as Record<string, BlogPost>;
}

export const LOCALIZED_BLOG_SLUGS = BLOG_POSTS.map((post) => post.slug);
