import {
  CATEGORY_DETAILS,
  CATEGORY_SLUGS,
  type CategoryDetail,
  type CategoryExample,
  type CategoryFaq,
  type CategorySlug,
} from "./category-detail";
import { DEFAULT_LOCALE, HOME_COPY, type Locale } from "./i18n";

type CategoryDetailTranslation = Omit<CategoryDetail, "emoji" | "label">;

export type LocalizedCategoryExample = CategoryExample & {
  toneLabel: string;
};

export type LocalizedCategoryDetail = Omit<CategoryDetail, "examples"> & {
  examples: LocalizedCategoryExample[];
};

const CATEGORY_DETAIL_TRANSLATIONS: Record<
  Exclude<Locale, "en-en">,
  Record<CategorySlug, CategoryDetailTranslation>
> = {
  "pt-pt": {
    clients: {
      description:
        "Modelos de email passivo-agressivos para situações com clientes: pedidos extra não acordados, pagamentos em atraso, briefings confusos e revisões infinitas.",
      longDescription:
        "Domine a arte delicada da comunicação com clientes quando o briefing muda todos os dias, os pagamentos desaparecem e os pedidos extra se tornam desporto radical. Estes modelos ajudam a manter o profissionalismo enquanto lembra subtilmente ao cliente que a sua paciência tem limites.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Como faço seguimento a uma fatura por pagar sem ser grosseiro?",
          answer:
            "Use um email de tom 3-4 que mencione o número da fatura, a data de vencimento original e a sua disponibilidade contínua — referindo subtilmente o tempo que passou.",
        },
        {
          question: "Qual é a melhor forma de lidar com pedidos extra fora do âmbito?",
          answer:
            "O tom «Conforme o Meu Email Anterior» funciona bem. Referencie o briefing original, conte o número de revisões e anexe o formulário de alterações.",
        },
        {
          question: "Como digo a um cliente que o feedback dele não faz sentido?",
          answer:
            "Experimente o tom «Preocupado» (nível 3). Faça perguntas de clarificação que revelem gentilmente as contradições nos pedidos.",
        },
      ],
      examples: [
        {
          subject: "Re: Só Mais Uma Pequena Alteração",
          preview:
            "Fico feliz por acomodar esta revisão adicional. Anexei um cronograma e orçamento atualizados que refletem as 23 «pequenas alterações» incorporadas desde o briefing original.",
          tone: 5,
          score: 78,
        },
        {
          subject: "Fatura #3847 — Lembrete Trimestral Amigável",
          preview:
            "Espero que esteja tudo bem! Escrevo relativamente à fatura acima, que já amadureceu como um bom vinho nos últimos 90 dias.",
          tone: 4,
          score: 72,
        },
        {
          subject: "Re: Pode Dar Mais Impacto?",
          preview:
            "Claro! Para garantir alinhamento, poderia clarificar o que «impacto» significa neste contexto? Anexei 47 interpretações para revisão.",
          tone: 3,
          score: 55,
        },
        {
          subject: "Sobre o Prazo Acordado",
          preview:
            "Conforme o contrato assinado (anexado para conveniência), a data de entrega era 15 de maio. Hoje é 3 de julho. Gostaria de saber se existe algum desfasamento horário que me tenha escapado.",
          tone: 6,
          score: 89,
        },
      ],
    },
    coworkers: {
      description:
        "Modelos de email passivo-agressivos para colegas: abusadores de «responder a todos», ladrões de crédito, ladrões de almoço e conversadores barulhentos.",
      longDescription:
        "Para as indignidades diárias da vida partilhada no escritório: quem responde a todos, quem rouba o almoço, quem se apropria do mérito e quem acha que «sincronização rápida» significa uma conversa de 90 minutos sem estrutura. Estes modelos preservam relações enquanto estabelecem limites.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Como abordo alguém que se apropria do mérito do meu trabalho?",
          answer:
            "O nível «Assassino Corporativo» funciona bem aqui. Coloque as chefias relevantes em CC, anexe metadados do ficheiro original que mostrem a sua autoría e use frases como «com base no trabalho que iniciei».",
        },
        {
          question: "O que digo a um colega que insiste em «responder a todos»?",
          answer:
            "Uma resposta de nível 3-4 que note o tamanho do fio de emails e sugira mensagem direta para assuntos relevantes a pessoas específicas tende a ser eficaz.",
        },
        {
          question: "Como digo a alguém que a música está demasiado alta?",
          answer:
            "Comece com o nível 2 «Ligeiramente Irritado» — mencione como «admiro o gosto musical» enquanto refere o impacto na sua concentração.",
        },
      ],
      examples: [
        {
          subject: "Re: Re: Re: Re: Todos — Planos de Almoço",
          preview:
            "Embora aprecie estar a par das preferências culinárias da equipa, penso que esta discussão beneficiaria de uma lista de distribuição mais reduzida. Talvez uma que não inclua o CEO.",
          tone: 4,
          score: 62,
        },
        {
          subject: "Etiqueta da Cozinha — Lembrete Gentil",
          preview:
            "A quem emprestou o meu iogurte claramente identificado: espero que tenha gostado. Comecei a guardar o almoço num cofre com combinação. O código está disponível mediante pedido.",
          tone: 5,
          score: 81,
        },
        {
          subject: "Re: Excelente Trabalho no Relatório do 3.º Trimestre!",
          preview:
            "Obrigado pelo reconhecimento! Gostaria também de salientar o autor original dessa análise — eu. Anexei o histórico de commits para transparência.",
          tone: 6,
          score: 93,
        },
        {
          subject: "Níveis de Ruído — Considerações em Open Space",
          preview:
            "Não pude deixar de notar que a playlist da tarde atinge volumes típicos de concertos em estádio. Os meus auscultadores com cancelamento de ruído pediram reforma antecipada.",
          tone: 2,
          score: 38,
        },
      ],
    },
    managers: {
      description:
        "Modelos de email passivo-agressivos para chefias: microgestão, prazos irrealistas, reuniões inúteis e feedback vago.",
      longDescription:
        "Quando a sua chefia marca uma reunião para discutir se precisa de uma reunião, envia «pergunta rápida» às 23h ou usa «daqui em diante» como se o passado nunca tivesse existido. Navegue a comunicação ascendente com precisão cirúrgica.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Como contesto uma chefia que micro gere?",
          answer:
            "Use o nível 3-4 com atualizações proactivas de estado que tornem as verificações redundantes. Frases como «conforme detalharei na minha atualização já agendada» funcionam bem.",
        },
        {
          question: "O que digo quando a chefia marca reuniões à hora de almoço?",
          answer:
            "Um tom 3 «Preocupado» funciona. Referencie o bem-estar da equipa, investigação sobre produtividade e o seu «entusiasmo por contribuir devidamente alimentado».",
        },
        {
          question: "Como respondo a prazos irrealistas?",
          answer:
            "Nível 4 «Passivo-Agressivo» — forneça um detalhamento de todas as tarefas actuais, os respetivos prazos, e pergunte quais devem ser despriorizadas para acomodar o novo pedido.",
        },
      ],
      examples: [
        {
          subject: "Re: Sincronização Rápida? (15 min)",
          preview:
            "Com prazer! Reparei que esta «sincronização rápida» tem 2 horas reservadas no calendário. Devo preparar uma dissertação ou bastam tópicos?",
          tone: 4,
          score: 67,
        },
        {
          subject: "Re: Pode Assumir Isto? (Urgente)",
          preview:
            "Agradeço a confiança na minha capacidade. Anexo a carga de trabalho actual em 14 projectos. Indique, por favor, quais 3 devem ser pausados para acomodar este pedido urgente.",
          tone: 5,
          score: 76,
        },
        {
          subject: "Re: Pedido de Atualização de Estado",
          preview:
            "Segue o detalhamento horário solicitado. Incluí também pausas para a casa de banho e frequência de piscadas, caso essas métricas sejam relevantes para a revisão da sprint.",
          tone: 6,
          score: 88,
        },
        {
          subject: "Re: Reunião de Team Building — Sexta às 17h",
          preview:
            "Estou entusiasmado com a oportunidade de team building. Devo referir que vários membros da equipa podem precisar de «construir» o regresso a casa na hora de ponta. Apenas a sinalizar para logística.",
          tone: 3,
          score: 52,
        },
      ],
    },
    suppliers: {
      description:
        "Modelos de email passivo-agressivos para fornecedores: encomendas erradas, entregas atrasadas, problemas de qualidade e desculpas criativas.",
      longDescription:
        "Para quando «entrega expressa» aparentemente significa «quando os astros se alinharem» e «conforme descrito» é uma interpretação flexível. Estes modelos ajudam a manter relações com fornecedores enquanto tornam as suas expectativas cristalinas.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Como abordo encomendas erradas repetidas?",
          answer:
            "Use o nível 4-5 com uma tabela detalhada a comparar artigos encomendados vs. recebidos em várias encomendas. Os dados falam por si.",
        },
        {
          question: "Qual é a melhor abordagem para entregas atrasadas?",
          answer:
            "Referencie a data de entrega original, o número de seguimentos enviados e o impacto nas operações. O nível 4 «Passivo-Agressivo» mantém a relação enquanto expressa urgência.",
        },
        {
          question: "Como escalo um problema com fornecedor profissionalmente?",
          answer:
            "Nível 5 «Conforme o Meu Email Anterior» com CC à gestão deles, anexando todo o histórico de emails como «contexto para revisão».",
        },
      ],
      examples: [
        {
          subject: "Encomenda #4471 — Um Estudo em Cumprimento Criativo",
          preview:
            "Encomendámos componentes azuis. Recebemos engrenagens vermelhas. Embora admire a interpretação criativa, insisto nos artigos que efectivamente comprámos.",
          tone: 4,
          score: 68,
        },
        {
          subject: "Re: Previsão de Entrega (Perguntado 8 Vezes)",
          preview:
            "Dou seguimento ao meu seguimento do meu seguimento sobre previsões de entrega. Neste ponto, escrevi mais emails sobre esta remessa do que ela pesa.",
          tone: 5,
          score: 79,
        },
        {
          subject: "Preocupação de Qualidade — Lote #2847",
          preview:
            "Queria sinalizar que o último lote parece ter sido verificado por alguém que, possivelmente, estava virado na direção errada.",
          tone: 3,
          score: 54,
        },
        {
          subject: "Re: Atualização de Envio «Expresso»",
          preview:
            "Reparei que o tracking mostra a minha remessa «expressa» «em trânsito» há 3 semanas. Creio que até a deriva continental se move mais depressa. Agradeço orientação.",
          tone: 6,
          score: 85,
        },
      ],
    },
    meetings: {
      description:
        "Modelos de email passivo-agressivos sobre reuniões: as que deviam ser emails, reuniões sem agenda e as que nunca terminam a horas.",
      longDescription:
        "Para a reunião que devia ser um email, a reunião sobre a reunião anterior e a reunião «opcional» recorrente que de alguma forma é obrigatória. Modelos para proteger o calendário e a sanidade.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Como declino uma reunião educadamente?",
          answer:
            "Use o nível 2-3 com sugestão de formato alternativo (resumo por email, documento assíncrono) e mencione os seus «compromissos de tempo de foco».",
        },
        {
          question: "O que digo sobre reuniões sem agenda?",
          answer:
            "O nível 4 funciona bem — expresse entusiasmo pela reunião enquanto pede uma agenda «para me poder preparar adequadamente e contribuir de forma significativa».",
        },
        {
          question: "Como abordo reuniões que sempre se prolongam?",
          answer:
            "Envie um email de nível 3 antes, referindo a sua «hora limite» e sugerindo priorização dos pontos da agenda caso «o tempo não permita cobrir tudo».",
        },
      ],
      examples: [
        {
          subject: "Re: Reunião Sobre o Resumo da Reunião",
          preview:
            "Quero confirmar: esta é uma reunião para discutir os resultados da reunião de ontem, que foi marcada para planear a reunião da próxima semana? Só quero garantir que estou no nível meta correcto.",
          tone: 4,
          score: 71,
        },
        {
          subject: "Convite de Calendário: Brainstorm às 7:00 — A Declinar",
          preview:
            "Aprecio a ambição de um brainstorm matinal! Infelizmente, o meu cérebro não chega ao escritório antes das 9:30, independentemente de onde o meu corpo esteja.",
          tone: 5,
          score: 74,
        },
        {
          subject: "Re: Sincronização de Equipa Opcional (Obrigatória)",
          preview:
            "Reparei que esta reunião está marcada como «opcional», mas a minha ausência foi assinalada na revisão de ontem. Poderia clarificar a definição operacional de «opcional» neste contexto?",
          tone: 3,
          score: 58,
        },
        {
          subject: "Pedido de Agenda para a «Conversa Rápida» de 2 Horas de Amanhã",
          preview:
            "Ansioso pela nossa conversa rápida! Dada a duração de 2 horas, poderia partilhar uma agenda? Gostaria de ritmar a minha participação em conformidade.",
          tone: 2,
          score: 42,
        },
      ],
    },
    deadlines: {
      description:
        "Modelos de email passivo-agressivos para gestão de prazos: datas incumpridas, reincidentes e desculpas criativas para atrasos.",
      longDescription:
        "Para quando «fim do dia» é tratado como sugestão, «urgente» significa «quando der» e os cronogramas de projecto são vistos como ficção aspiracional. Responsabilize com estilo.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Como faço seguimento a um prazo incumprido?",
          answer:
            "Referencie a data original acordada, note o impacto do atraso e peça um novo prazo realista — mantendo hostilidade diplomática de nível 4-5.",
        },
        {
          question: "Qual é uma forma eficaz de definir expectativas de prazo?",
          answer:
            "Use o nível 3 «Preocupado» para definir expectativas cedo. Referencie padrões passados sem acusação directa: «Dada a sensibilidade do cronograma, queria confirmar o nosso alinhamento sobre a data de entrega.»",
        },
        {
          question: "Como escalo incumprimentos repetidos de prazos?",
          answer:
            "Nível 5-6 com documentação de todos os prazos incumpridos, acordos originais e impacto no negócio. Coloque stakeholders relevantes em CC «para visibilidade».",
        },
      ],
      examples: [
        {
          subject: "Re: Entregável Devido no Mês Passado — Verificação de Estado",
          preview:
            "Escrevo sobre o entregável devido a 15 de abril. Como estamos confortavelmente em junho, queria verificar se houve alguma avaria no sistema de calendário que deva conhecer.",
          tone: 5,
          score: 79,
        },
        {
          subject: "Cumprimento de Prazos — Uma Perspectiva Histórica",
          preview:
            "Anexei uma folha de cálculo com os últimos 12 prazos de projecto e as datas de entrega reais. Penso que a visualização dos dados poderá ser... esclarecedora.",
          tone: 6,
          score: 91,
        },
        {
          subject: "Re: Preciso de Mais Tempo (3.º Pedido de Extensão)",
          preview:
            "Claro, leve todo o tempo que precisar. Antecipei o adiamento da entrega ao cliente, das minhas férias e, possivelmente, da minha reforma para acomodar.",
          tone: 4,
          score: 73,
        },
        {
          subject: "Fim do Dia Sexta — Uma Clarificação",
          preview:
            "Quando acordámos «fim do dia sexta», queria confirmar que operamos com a mesma definição. Especificamente: esta sexta. No ano calendário actual. No planeta Terra.",
          tone: 3,
          score: 61,
        },
      ],
    },
    invoices: {
      description:
        "Modelos de email passivo-agressivos para faturas em atraso: seguimentos de pagamento desde lembretes educados até à opção nuclear.",
      longDescription:
        "Para a arte delicada de pedir dinheiro que já lhe devem. Desde primeiros lembretes gentis a emails que poderiam servir como prova legal. Receba o pagamento sem queimar pontes (por completo).",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Quantos seguimentos são adequados antes de escalar?",
          answer:
            "Três com níveis de tom crescentes (2, 4, 5) com intervalos de 7 dias. Depois disso, nível 6 com equipa jurídica em CC é justificado.",
        },
        {
          question: "Qual é o seguimento de pagamento passivo-agressivo mais eficaz?",
          answer:
            "Referencie o número da fatura, data de vencimento original, dias de atraso acumulados e mencione casualmente a política de pagamentos em atraso — tudo num tom tecnicamente amigável.",
        },
        {
          question: "Devo colocar contabilidade ou o CEO em CC?",
          answer:
            "Comece com contabilidade. Se não houver resposta após 2 tentativas, coloque em CC o contacto que assinou o contrato. O CC ao CEO é a opção nuclear.",
        },
      ],
      examples: [
        {
          subject: "Fatura #7721 — Dia 60 — Ainda Optimista!",
          preview:
            "Só um lembrete amigável de que a Fatura #7721 está pendente desde aproximadamente a última era glacial. O meu contabilista está preocupado. O meu senhorio está preocupado. Mantenho-me profissionalmente optimista.",
          tone: 4,
          score: 69,
        },
        {
          subject: "Condições de Pagamento: 30 Dias (Não 30 Dias ∞)",
          preview:
            "As nossas condições padrão são pagamento a 30 dias, que converti utilmente em várias unidades: 720 horas, 43.200 minutos, ou aproximadamente um quarto do tempo desde que esta fatura foi emitida.",
          tone: 5,
          score: 83,
        },
        {
          subject: "Re: Processamento de Pagamento — Uma Investigação Arqueológica",
          preview:
            "Escrevo sobre a Fatura #3391, que com 120 dias em aberto já excedeu o período de gestação de várias espécies de mamíferos. Será que a equipa de contabilidade está em hibernação?",
          tone: 6,
          score: 92,
        },
        {
          subject: "Lembrete Amigável de Pagamento #4",
          preview:
            "Olá! Só a retomar este tema. Anexei a fatura original, comprovativo da nossa correspondência anterior e um calendário a realçar os 67 dias desde a data de vencimento. Sem pressa!",
          tone: 3,
          score: 56,
        },
      ],
    },
    "corporate-buzzwords": {
      description:
        "Modelos de email passivo-agressivos carregados de jargão corporativo: sinergias, retomar o assunto, alavancar e máximo de linguagem empresarial.",
      longDescription:
        "Quando quer dizer absolutamente nada enquanto parece dizer algo profundo. Domine o vocabulário corporativo: sinergias, alinhamento, alavancagem, retomar o assunto e outras palavras que fazem as pessoas actualizarem o LinkedIn.",
      examplesHeading: "Emails de Exemplo",
      faqHeading: "Perguntas Frequentes",
      generateCta: "Gerar um Email de {label}",
      faqs: [
        {
          question: "Quais são as frases corporativas mais passivo-agressivas?",
          answer:
            "«Conforme o meu email anterior», «daqui em diante», «só para clarificar», «para referência futura» e «confio que isto seja útil» são as cinco grandes da hostilidade corporativa.",
        },
        {
          question: "Como uso jargão para parecer profissional enquanto sou mordaz?",
          answer:
            "Empilhe jargão para criar uma muralha impenetrável de linguagem corporativa que tecnicamente não pode ser reportada aos RH. «Vamos alavancar esta oportunidade para realinhar os nossos entregáveis sinérgicos daqui em diante.»",
        },
        {
          question: "Qual é a diferença entre passivo-agressivo e linguagem corporativa?",
          answer:
            "A linguagem corporativa é o quadro socialmente aceite através do qual a agressividade passiva é entregue. É a diferença entre «está errado» e «aprecio a sua perspetiva, contudo, após análise mais aprofundada...»",
        },
      ],
      examples: [
        {
          subject: "Re: Vamos Alavancar as Nossas Sinergias Daqui em Diante",
          preview:
            "Adoraria retomar esta oportunidade de alinhar os nossos entregáveis transversais com os imperativos estratégicos descritos no documento de mudança de paradigma. Vamos tratar disto offline e socializar o conceito.",
          tone: 4,
          score: 64,
        },
        {
          subject: "Acções da Nossa Análise Aprofundada",
          preview:
            "Conforme a nossa avaliação de capacidade, sinalizo algumas vitórias fáceis para tração imediata. Vamos ajustar expectativas e tentar fazer tudo de uma vez no 3.º trimestre.",
          tone: 2,
          score: 35,
        },
        {
          subject: "Re: Oportunidade de Liderança de Pensamento",
          preview:
            "Aprecio o convite para «liderar o pensamento» nesta iniciativa. Tenho feito brainstorming aberto e acredito que devemos pivotar a nossa métrica estrela para captar melhor a nossa proposta de valor. Por outras palavras: não.",
          tone: 5,
          score: 77,
        },
        {
          subject: "Sobre o Nosso Alinhamento de Ecossistema",
          preview:
            "Após mergulhar profundamente no nosso ecossistema holístico, identifiquei vários pontos de dor nos pontos de contacto da jornada do cliente que requerem sprints de ideação imediatos. Tradução: está tudo partido.",
          tone: 6,
          score: 86,
        },
      ],
    },
  },
  "fr-fr": {
    clients: {
      description:
        "Modèles d'e-mails passif-agressifs pour les situations clients : demandes hors périmètre, retards de paiement, briefs flous et révisions sans fin.",
      longDescription:
        "Maîtrisez l'art délicat de la communication client lorsque le brief change chaque jour, les paiements disparaissent et les demandes supplémentaires deviennent un sport extrême. Ces modèles vous aident à rester professionnel tout en rappelant subtilement à vos clients que votre patience a des limites.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Comment relancer une facture impayée sans être grossier ?",
          answer:
            "Utilisez un e-mail de ton 3-4 qui mentionne le numéro de facture, la date d'échéance initiale et votre disponibilité — en notant subtilement le temps écoulé.",
        },
        {
          question: "Quelle est la meilleure façon de gérer les demandes hors périmètre ?",
          answer:
            "Le ton « Suite à Mon Précédent E-mail » fonctionne bien. Référez-vous au brief original, comptez le nombre de révisions et joignez le bon de modification.",
        },
        {
          question: "Comment dire à un client que son retour n'a pas de sens ?",
          answer:
            "Essayez le ton « Préoccupé » (niveau 3). Posez des questions de clarification qui révèlent gentiment les contradictions dans ses demandes.",
        },
      ],
      examples: [
        {
          subject: "Re: Encore Un Petit Changement",
          preview:
            "Je serais ravi d'accueillir cette révision supplémentaire. J'ai joint un calendrier et un devis mis à jour reflétant les 23 « petits changements » intégrés depuis le brief original.",
          tone: 5,
          score: 78,
        },
        {
          subject: "Facture #3847 — Rappel Trimestriel Amical",
          preview:
            "J'espère que vous allez bien ! Je vous contacte au sujet de la facture ci-dessus, qui a mûri comme un bon vin depuis 90 jours.",
          tone: 4,
          score: 72,
        },
        {
          subject: "Re: Pouvez-Vous Rendre Ça Plus Percutant ?",
          preview:
            "Absolument ! Pour garantir l'alignement, pourriez-vous préciser ce que « percutant » signifie dans ce contexte ? J'ai joint 47 interprétations pour votre revue.",
          tone: 3,
          score: 55,
        },
        {
          subject: "Concernant Notre Calendrier Convenu",
          preview:
            "Conformément au contrat signé (joint pour votre commodité), la date de livraison était le 15 mai. Nous sommes le 3 juillet. Je voulais vérifier s'il existe un décalage horaire dont je n'aurais pas connaissance.",
          tone: 6,
          score: 89,
        },
      ],
    },
    coworkers: {
      description:
        "Modèles d'e-mails passif-agressifs pour les collègues : abus de « répondre à tous », voleurs de crédit, voleurs de déjeuner et bavards bruyants.",
      longDescription:
        "Pour les indignités quotidiennes de la vie de bureau partagé : les répondeurs à tous, les voleurs de déjeuner, ceux qui s'attribuent le mérite et ceux qui pensent qu'une « synchro rapide » signifie une conversation de 90 minutes sans structure. Ces modèles préservent les relations tout en posant des limites.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Comment aborder quelqu'un qui s'attribue le mérite de mon travail ?",
          answer:
            "Le niveau « Assassin Corporate » fonctionne bien ici. Mettez les managers concernés en copie, joignez les métadonnées du fichier original montrant votre paternité et utilisez des phrases comme « en m'appuyant sur le travail que j'ai initié ».",
        },
        {
          question: "Que dire à un collègue qui répond systématiquement à tous ?",
          answer:
            "Une réponse de niveau 3-4 notant la longueur du fil et suggérant un message direct pour les sujets concernant des personnes spécifiques tend à être efficace.",
        },
        {
          question: "Comment dire à quelqu'un que sa musique est trop forte ?",
          answer:
            "Commencez par le niveau 2 « Un Peu Agacé » — mentionnez que vous « admirez son goût musical » tout en notant l'impact sur votre concentration.",
        },
      ],
      examples: [
        {
          subject: "Re: Re: Re: Re: Tous — Plans Déjeuner",
          preview:
            "Bien que j'apprécie d'être tenu informé des préférences culinaires de l'équipe, je me demande si cette discussion ne bénéficierait pas d'une liste de diffusion plus restreinte. Peut-être une qui n'inclut pas le PDG.",
          tone: 4,
          score: 62,
        },
        {
          subject: "Étiquette Cuisine — Rappel Amical",
          preview:
            "À celui ou celle qui a emprunté mon yaourt clairement étiqueté : j'espère que vous l'avez apprécié. Je stocke désormais mon déjeuner dans un coffre à combinaison. Le code est disponible sur demande.",
          tone: 5,
          score: 81,
        },
        {
          subject: "Re: Excellent Travail sur le Rapport T3 !",
          preview:
            "Merci pour la reconnaissance ! J'aimerais aussi saluer l'auteur original de cette analyse — moi. J'ai joint l'historique des commits pour transparence.",
          tone: 6,
          score: 93,
        },
        {
          subject: "Niveaux Sonores — Considérations Open Space",
          preview:
            "Je n'ai pas pu m'empêcher de remarquer que votre playlist de l'après-midi atteint des volumes typiques des concerts en stade. Mes écouteurs à réduction de bruit ont demandé une retraite anticipée.",
          tone: 2,
          score: 38,
        },
      ],
    },
    managers: {
      description:
        "Modèles d'e-mails passif-agressifs pour les managers : microgestion, délais irréalistes, réunions inutiles et retours vagues.",
      longDescription:
        "Quand votre manager planifie une réunion pour discuter de la nécessité d'une réunion, envoie des « questions rapides » à 23h ou utilise « dorénavant » comme si le passé n'avait jamais existé. Naviguez la communication ascendante avec une précision chirurgicale.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Comment résister à un manager qui microgère ?",
          answer:
            "Utilisez le niveau 3-4 avec des mises à jour proactives qui rendent ses vérifications redondantes. Des phrases comme « comme je détaillerai dans ma mise à jour déjà planifiée » fonctionnent bien.",
        },
        {
          question: "Que dire quand mon manager planifie des réunions pendant le déjeuner ?",
          answer:
            "Un ton 3 « Préoccupé » fonctionne. Référez-vous au bien-être de l'équipe, à la recherche sur la productivité et à votre « enthousiasme à contribuer lorsque dûment nourri ».",
        },
        {
          question: "Comment répondre à des délais irréalistes ?",
          answer:
            "Niveau 4 « Passif-Agressif » — fournissez un détail de toutes les tâches en cours, leurs échéances, et demandez lesquelles doivent être dépriorisées pour accueillir la nouvelle demande.",
        },
      ],
      examples: [
        {
          subject: "Re: Synchro Rapide ? (15 min)",
          preview:
            "Avec plaisir ! J'ai remarqué que cette « synchro rapide » est bloquée 2 heures dans le calendrier. Dois-je préparer une dissertation ou des puces suffiront-elles ?",
          tone: 4,
          score: 67,
        },
        {
          subject: "Re: Pouvez-Vous Prendre Ça ? (Urgent)",
          preview:
            "J'apprécie votre confiance en ma capacité. Ci-joint ma charge de travail actuelle sur 14 projets. Merci d'indiquer lesquels mettre en pause pour accueillir cette demande urgente.",
          tone: 5,
          score: 76,
        },
        {
          subject: "Re: Demande de Mise à Jour de Statut",
          preview:
            "Voici le détail horaire demandé. J'ai aussi inclus les pauses sanitaires et la fréquence des clignements, au cas où ces métriques seraient pertinentes pour la revue de sprint.",
          tone: 6,
          score: 88,
        },
        {
          subject: "Re: Réunion Team Building — Vendredi 17h",
          preview:
            "Je suis ravi de cette opportunité de team building. Je note que plusieurs membres de l'équipe pourraient devoir « construire » leur trajet retour aux heures de pointe. Je signale pour la logistique.",
          tone: 3,
          score: 52,
        },
      ],
    },
    suppliers: {
      description:
        "Modèles d'e-mails passif-agressifs pour les fournisseurs : mauvaises commandes, livraisons tardives, problèmes de qualité et excuses créatives.",
      longDescription:
        "Pour quand « livraison express » signifie apparemment « quand les astres s'alignent » et « conforme à la description » est une interprétation souple. Ces modèles aident à maintenir les relations fournisseurs tout en rendant vos attentes limpides.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Comment aborder des commandes erronées répétées ?",
          answer:
            "Utilisez le niveau 4-5 avec un tableau détaillé comparant les articles commandés et reçus sur plusieurs commandes. Les données parlent d'elles-mêmes.",
        },
        {
          question: "Quelle est la meilleure approche pour les livraisons tardives ?",
          answer:
            "Référez-vous à la date de livraison originale, au nombre de relances envoyées et à l'impact sur vos opérations. Le niveau 4 « Passif-Agressif » maintient la relation tout en exprimant l'urgence.",
        },
        {
          question: "Comment escalader un problème fournisseur professionnellement ?",
          answer:
            "Niveau 5 « Suite à Mon Précédent E-mail » avec copie à leur direction, en joignant tout l'historique d'e-mails comme « contexte pour votre revue ».",
        },
      ],
      examples: [
        {
          subject: "Commande #4471 — Une Étude en Exécution Créative",
          preview:
            "Nous avons commandé des composants bleus. Nous avons reçu des engrenages rouges. Bien que j'admire l'interprétation créative, j'insiste sur les articles que nous avons effectivement achetés.",
          tone: 4,
          score: 68,
        },
        {
          subject: "Re: Date de Livraison (Demandée 8 Fois)",
          preview:
            "Je fais suite à ma relance de ma relance concernant les dates de livraison. À ce stade, j'ai écrit plus d'e-mails sur ce colis qu'il ne pèse.",
          tone: 5,
          score: 79,
        },
        {
          subject: "Problème de Qualité — Lot #2847",
          preview:
            "Je voulais signaler que le dernier lot semble avoir été contrôlé par quelqu'un qui regardait peut-être dans la mauvaise direction au moment de la vérification.",
          tone: 3,
          score: 54,
        },
        {
          subject: "Re: Mise à Jour Expédition « Express »",
          preview:
            "Je remarque que le suivi indique mon envoi « express » « en transit » depuis 3 semaines. Je crois que même la dérive des continents va plus vite. Merci de me conseiller.",
          tone: 6,
          score: 85,
        },
      ],
    },
    meetings: {
      description:
        "Modèles d'e-mails passif-agressifs sur les réunions : celles qui auraient dû être des e-mails, sans ordre du jour et celles qui dépassent toujours l'horaire.",
      longDescription:
        "Pour la réunion qui aurait dû être un e-mail, la réunion sur la réunion précédente et la réunion « optionnelle » récurrente qui est pourtant obligatoire. Des modèles pour protéger votre calendrier et votre santé mentale.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Comment décliner une réunion poliment ?",
          answer:
            "Utilisez le niveau 2-3 avec une suggestion de format alternatif (résumé par e-mail, document asynchrone) et mentionnez vos « créneaux de concentration ».",
        },
        {
          question: "Que dire des réunions sans ordre du jour ?",
          answer:
            "Le niveau 4 fonctionne bien — exprimez votre enthousiasme pour la réunion tout en demandant un ordre du jour « pour pouvoir me préparer adéquatement et contribuer de manière significative ».",
        },
        {
          question: "Comment aborder les réunions qui dépassent toujours l'horaire ?",
          answer:
            "Envoyez un e-mail de niveau 3 au préalable en notant votre « heure limite » et en suggérant de prioriser les points de l'ordre du jour au cas où « le temps ne permettrait pas de tout couvrir ».",
        },
      ],
      examples: [
        {
          subject: "Re: Réunion Sur le Compte Rendu de la Réunion",
          preview:
            "Je veux confirmer : il s'agit d'une réunion pour discuter des résultats de la réunion d'hier, qui avait été planifiée pour organiser la réunion de la semaine prochaine ? Je veux juste m'assurer d'être au bon niveau méta.",
          tone: 4,
          score: 71,
        },
        {
          subject: "Invitation Calendrier : Brainstorm 7h00 — Déclin",
          preview:
            "J'apprécie l'ambition d'un brainstorm matinal ! Malheureusement, mon cerveau n'arrive au bureau qu'aux alentours de 9h30, peu importe où se trouve mon corps.",
          tone: 5,
          score: 74,
        },
        {
          subject: "Re: Synchro Équipe Optionnelle (Obligatoire)",
          preview:
            "J'ai remarqué que cette réunion est marquée « optionnelle » mais mon absence a été signalée lors de la revue d'hier. Pourriez-vous clarifier la définition opérationnelle d'« optionnel » dans ce contexte ?",
          tone: 3,
          score: 58,
        },
        {
          subject: "Demande d'Ordre du Jour pour la « Discussion Rapide » de 2 Heures Demain",
          preview:
            "J'ai hâte à notre discussion rapide ! Compte tenu de la durée de 2 heures, pourriez-vous partager un ordre du jour ? J'aimerais rythmer ma participation en conséquence.",
          tone: 2,
          score: 42,
        },
      ],
    },
    deadlines: {
      description:
        "Modèles d'e-mails passif-agressifs pour la gestion des délais : dates manquées, récidivistes et excuses créatives pour les retards.",
      longDescription:
        "Pour quand « fin de journée » est traité comme une suggestion, « urgent » signifie « quand vous aurez le temps » et les calendriers de projet sont vus comme de la fiction aspirational. Tenez les gens responsables avec style.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Comment relancer un délai manqué ?",
          answer:
            "Référez-vous à la date originale convenue, notez l'impact du retard et demandez un nouveau calendrier réaliste — tout en maintenant une hostilité diplomatique de niveau 4-5.",
        },
        {
          question: "Quelle est une façon efficace de fixer des attentes sur les délais ?",
          answer:
            "Utilisez le niveau 3 « Préoccupé » pour fixer les attentes tôt. Référez-vous aux schémas passés sans accusation directe : « Compte tenu de la sensibilité du calendrier, je voulais confirmer notre alignement sur la date de livraison. »",
        },
        {
          question: "Comment escalader des délais manqués répétés ?",
          answer:
            "Niveau 5-6 avec documentation de tous les délais manqués, accords originaux et impact business. Mettez les parties prenantes pertinentes en copie « pour visibilité ».",
        },
      ],
      examples: [
        {
          subject: "Re: Livrable Dû le Mois Dernier — Vérification de Statut",
          preview:
            "Je vous contacte au sujet du livrable dû le 15 avril. Comme nous sommes confortablement en juin, je voulais vérifier s'il y a eu une panne du système de calendrier dont je devrais être informé.",
          tone: 5,
          score: 79,
        },
        {
          subject: "Respect des Délais — Une Perspective Historique",
          preview:
            "J'ai joint un tableur suivant nos 12 derniers délais de projet aux côtés des dates de livraison réelles. Je pensais que la visualisation des données pourrait être... éclairante.",
          tone: 6,
          score: 91,
        },
        {
          subject: "Re: Besoin de Plus de Temps (3e Demande de Prolongation)",
          preview:
            "Absolument, prenez tout le temps nécessaire. J'ai préventivement repoussé la livraison client, mes vacances et possiblement ma retraite pour m'adapter.",
          tone: 4,
          score: 73,
        },
        {
          subject: "Fin de Journée Vendredi — Une Clarification",
          preview:
            "Quand nous avons convenu « fin de journée vendredi », je voulais confirmer que nous opérons sous la même définition. Spécifiquement : ce vendredi. Dans l'année calendaire en cours. Sur la planète Terre.",
          tone: 3,
          score: 61,
        },
      ],
    },
    invoices: {
      description:
        "Modèles d'e-mails passif-agressifs pour les factures en retard : relances de paiement des rappels polis à l'option nucléaire.",
      longDescription:
        "Pour l'art délicat de demander l'argent qu'on vous doit déjà. Des premiers rappels gentils aux e-mails qui pourraient servir de pièces légales. Faites-vous payer sans brûler les ponts (complètement).",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Combien de relances avant d'escalader ?",
          answer:
            "Trois à des niveaux de ton croissants (2, 4, 5) avec des intervalles de 7 jours. Ensuite, niveau 6 avec l'équipe juridique en copie est justifié.",
        },
        {
          question: "Quelle est la relance de paiement passif-agressive la plus efficace ?",
          answer:
            "Référez-vous au numéro de facture, à la date d'échéance originale, aux jours de retard accumulés et mentionnez casuallement votre politique de retard de paiement — le tout dans un ton techniquement amical.",
        },
        {
          question: "Dois-je mettre la comptabilité ou le PDG en copie ?",
          answer:
            "Commencez par la comptabilité. Sans réponse après 2 tentatives, mettez en copie le contact qui a signé le contrat. La copie au PDG est l'option nucléaire.",
        },
      ],
      examples: [
        {
          subject: "Facture #7721 — Jour 60 — Toujours Optimiste !",
          preview:
            "Juste un rappel amical que la Facture #7721 est en attente depuis approximativement la dernière ère glaciaire. Mon comptable est inquiet. Mon propriétaire est inquiet. Je reste professionnellement optimiste.",
          tone: 4,
          score: 69,
        },
        {
          subject: "Conditions de Paiement : 30 Jours (Pas 30 Jours ∞)",
          preview:
            "Nos conditions standard sont paiement à 30 jours, que j'ai utilement converti en diverses unités : 720 heures, 43 200 minutes, ou environ un quart du temps depuis l'émission de cette facture.",
          tone: 5,
          score: 83,
        },
        {
          subject: "Re: Traitement du Paiement — Une Enquête Archéologique",
          preview:
            "Je vous contacte au sujet de la Facture #3391, qui avec 120 jours d'ancienneté a dépassé la période de gestation de plusieurs espèces de mammifères. Votre équipe comptable serait-elle en hibernation ?",
          tone: 6,
          score: 92,
        },
        {
          subject: "Rappel de Paiement Amical #4",
          preview:
            "Bonjour ! Je reviens vers vous. J'ai joint la facture originale, un reçu de notre correspondance précédente et un calendrier mettant en évidence les 67 jours depuis l'échéance. Pas de pression !",
          tone: 3,
          score: 56,
        },
      ],
    },
    "corporate-buzzwords": {
      description:
        "Modèles d'e-mails passif-agressifs chargés de jargon corporate : synergies, revenir vers vous, tirer parti et maximum de langage d'entreprise.",
      longDescription:
        "Quand vous voulez ne rien dire tout en paraissant profond. Maîtrisez le vocabulaire corporate : synergies, alignement, levier, revenir vers vous et autres mots qui poussent les gens à mettre à jour leur LinkedIn.",
      examplesHeading: "Exemples d'E-mails",
      faqHeading: "Questions Fréquentes",
      generateCta: "Générer un E-mail {label}",
      faqs: [
        {
          question: "Quelles sont les phrases corporate les plus passif-agressives ?",
          answer:
            "« Suite à mon précédent e-mail », « dorénavant », « juste pour clarifier », « pour référence future » et « j'espère que cela vous sera utile » sont les cinq grandes de l'hostilité corporate.",
        },
        {
          question: "Comment utiliser le jargon pour paraître professionnel tout en étant mordant ?",
          answer:
            "Empilez le jargon pour créer un mur impénétrable de langage d'entreprise qui techniquement ne peut pas être signalé aux RH. « Tirons parti de cette opportunité pour réaligner nos livrables synergiques dorénavant. »",
        },
        {
          question: "Quelle est la différence entre passif-agressif et langage corporate ?",
          answer:
            "Le langage corporate est le cadre socialement acceptable par lequel l'agressivité passive est délivrée. C'est la différence entre « vous avez tort » et « j'apprécie votre perspective, cependant après analyse approfondie... »",
        },
      ],
      examples: [
        {
          subject: "Re: Tirons Parti de Nos Synergies Dorénavant",
          preview:
            "J'aimerais revenir vers vous sur cette opportunité d'aligner nos livrables transverses avec les impératifs stratégiques décrits dans le document de changement de paradigme. Prenons cela offline et socialisons le concept.",
          tone: 4,
          score: 64,
        },
        {
          subject: "Actions de Notre Analyse Approfondie",
          preview:
            "Suite à notre évaluation de bande passante, je signale des gains faciles pour une traction immédiate. Ajustons nos attentes et tentons de tout faire d'un coup au T3.",
          tone: 2,
          score: 35,
        },
        {
          subject: "Re: Opportunité de Leadership de Pensée",
          preview:
            "J'apprécie l'invitation à « thought leader » sur cette initiative. J'ai fait du brainstorming ouvert et je crois que nous devons pivoter notre métrique étoile pour mieux capturer notre proposition de valeur. En d'autres termes : non.",
          tone: 5,
          score: 77,
        },
        {
          subject: "Concernant Notre Alignement d'Écosystème",
          preview:
            "Après un deep dive dans notre écosystème holistique, j'ai identifié plusieurs points de friction dans les points de contact du parcours client nécessitant des sprints d'idéation immédiats. Traduction : tout est cassé.",
          tone: 6,
          score: 86,
        },
      ],
    },
  },
  "es-es": {
    clients: {
      description:
        "Plantillas de email pasivo-agresivas para situaciones con clientes: ampliaciones no acordadas, pagos tardíos, briefings confusos y revisiones interminables.",
      longDescription:
        "Domina el arte delicado de la comunicación con clientes cuando el briefing cambia a diario, los pagos desaparecen y los pedidos extra se convierten en deporte extremo. Estas plantillas te ayudan a mantener el profesionalismo mientras recuerdas sutilmente a tus clientes que tu paciencia tiene límites.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cómo hago seguimiento de una factura impagada sin ser grosero?",
          answer:
            "Usa un email de tono 3-4 que mencione el número de factura, la fecha de vencimiento original y tu disponibilidad continua — señalando sutilmente el tiempo transcurrido.",
        },
        {
          question: "¿Cuál es la mejor forma de gestionar ampliaciones no acordadas?",
          answer:
            "El tono «Según Mi Email Anterior» funciona bien. Referencia el briefing original, cuenta el número de revisiones y adjunta el formulario de cambios.",
        },
        {
          question: "¿Cómo digo a un cliente que su feedback no tiene sentido?",
          answer:
            "Prueba el tono «Preocupado» (nivel 3). Haz preguntas aclaratorias que revelen gentilmente las contradicciones en sus peticiones.",
        },
      ],
      examples: [
        {
          subject: "Re: Solo Un Cambio Más Pequeño",
          preview:
            "Estaré encantado de acomodar esta revisión adicional. He adjuntado un cronograma y presupuesto actualizados que reflejan los 23 «pequeños cambios» incorporados desde el briefing original.",
          tone: 5,
          score: 78,
        },
        {
          subject: "Factura #3847 — Recordatorio Trimestral Amistoso",
          preview:
            "¡Espero que estés bien! Te escribo respecto a la factura anterior, que ha madurado como un buen vino durante los últimos 90 días.",
          tone: 4,
          score: 72,
        },
        {
          subject: "Re: ¿Puedes Darle Más Impacto?",
          preview:
            "¡Por supuesto! Para garantizar alineación, ¿podrías aclarar qué significa «impacto» en este contexto? He adjuntado 47 interpretaciones para tu revisión.",
          tone: 3,
          score: 55,
        },
        {
          subject: "Respecto a Nuestro Plazo Acordado",
          preview:
            "Según el contrato firmado (adjunto para tu comodidad), la fecha de entrega era el 15 de mayo. Hoy es 3 de julio. Quería comprobar si existe algún desfase horario del que no tenga conocimiento.",
          tone: 6,
          score: 89,
        },
      ],
    },
    coworkers: {
      description:
        "Plantillas de email pasivo-agresivas para compañeros: abusadores de «responder a todos», ladrones de crédito, ladrones de comida y charlatanes ruidosos.",
      longDescription:
        "Para las indignidades diarias de la vida compartida en la oficina: quien responde a todos, quien roba el almuerzo, quien se atribuye el mérito y quien cree que «sincronización rápida» significa una conversación de 90 minutos sin estructura. Estas plantillas preservan relaciones mientras establecen límites.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cómo abordo a alguien que se atribuye el mérito de mi trabajo?",
          answer:
            "El nivel «Asesino Corporativo» funciona bien aquí. Pon en copia a los jefes relevantes, adjunta metadatos del archivo original que muestren tu autoría y usa frases como «basándome en el trabajo que inicié».",
        },
        {
          question: "¿Qué digo a un compañero que insiste en «responder a todos»?",
          answer:
            "Una respuesta de nivel 3-4 que señale la longitud del hilo y sugiera mensaje directo para asuntos relevantes a personas específicas suele ser eficaz.",
        },
        {
          question: "¿Cómo digo a alguien que su música está demasiado alta?",
          answer:
            "Empieza con el nivel 2 «Algo Molesto» — menciona cómo «admiras su gusto musical» mientras señalas el impacto en tu concentración.",
        },
      ],
      examples: [
        {
          subject: "Re: Re: Re: Re: Todos — Planes de Comida",
          preview:
            "Aunque aprecio estar al tanto de las preferencias culinarias del equipo, creo que esta discusión se beneficiaría de una lista de distribución más reducida. Quizá una que no incluya al CEO.",
          tone: 4,
          score: 62,
        },
        {
          subject: "Etiqueta de Cocina — Recordatorio Amable",
          preview:
            "A quien tomó prestado mi yogur claramente etiquetado: espero que lo hayas disfrutado. Ahora guardo mi almuerzo en una caja fuerte con combinación. El código está disponible bajo petición.",
          tone: 5,
          score: 81,
        },
        {
          subject: "Re: ¡Excelente Trabajo en el Informe del T3!",
          preview:
            "¡Gracias por el reconocimiento! También me gustaría reconocer al autor original de ese análisis — yo. He adjuntado el historial de commits para transparencia.",
          tone: 6,
          score: 93,
        },
        {
          subject: "Niveles de Ruido — Consideraciones en Open Space",
          preview:
            "No pude evitar notar que tu playlist de la tarde alcanza volúmenes típicos de conciertos en estadio. Mis auriculares con cancelación de ruido han solicitado jubilación anticipada.",
          tone: 2,
          score: 38,
        },
      ],
    },
    managers: {
      description:
        "Plantillas de email pasivo-agresivas para jefes: microgestión, plazos irreales, reuniones inútiles y feedback vago.",
      longDescription:
        "Cuando tu jefe programa una reunión para discutir si necesitas una reunión, envía «pregunta rápida» a las 23h o usa «de ahora en adelante» como si el pasado nunca hubiera existido. Navega la comunicación ascendente con precisión quirúrgica.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cómo rechazo a un jefe que micro gestiona?",
          answer:
            "Usa el nivel 3-4 con actualizaciones proactivas de estado que hagan redundantes sus comprobaciones. Frases como «como detallaré en mi actualización ya programada» funcionan bien.",
        },
        {
          question: "¿Qué digo cuando mi jefe programa reuniones durante la comida?",
          answer:
            "Un tono 3 «Preocupado» funciona. Referencia el bienestar del equipo, investigación sobre productividad y tu «entusiasmo por contribuir debidamente alimentado».",
        },
        {
          question: "¿Cómo respondo a plazos irreales?",
          answer:
            "Nivel 4 «Pasivo-Agresivo» — proporciona un desglose de todas las tareas actuales, sus plazos, y pregunta cuáles deben despriorizarse para acomodar la nueva petición.",
        },
      ],
      examples: [
        {
          subject: "Re: ¿Sincronización Rápida? (15 min)",
          preview:
            "¡Encantado de conectar! He notado que esta «sincronización rápida» tiene 2 horas reservadas en el calendario. ¿Debo preparar una disertación o bastarán viñetas?",
          tone: 4,
          score: 67,
        },
        {
          subject: "Re: ¿Puedes Hacerte Cargo? (Urgente)",
          preview:
            "Aprecio tu confianza en mi capacidad. Adjunto mi carga de trabajo actual en 14 proyectos. Indica, por favor, cuáles 3 deben pausarse para acomodar esta petición urgente.",
          tone: 5,
          score: 76,
        },
        {
          subject: "Re: Solicitud de Actualización de Estado",
          preview:
            "Aquí está el desglose horario solicitado. También he incluido pausas para el baño y frecuencia de parpadeos, por si esas métricas resultan relevantes para la revisión del sprint.",
          tone: 6,
          score: 88,
        },
        {
          subject: "Re: Reunión de Team Building — Viernes 17h",
          preview:
            "Estoy emocionado con la oportunidad de team building. Debo señalar que varios miembros del equipo pueden necesitar «construir» su regreso a casa en hora punta. Solo señalo para logística.",
          tone: 3,
          score: 52,
        },
      ],
    },
    suppliers: {
      description:
        "Plantillas de email pasivo-agresivas para proveedores: pedidos erróneos, entregas tardías, problemas de calidad y excusas creativas.",
      longDescription:
        "Para cuando «entrega express» aparentemente significa «cuando los astros se alineen» y «conforme a lo descrito» es una interpretación flexible. Estas plantillas ayudan a mantener relaciones con proveedores mientras haces cristalinas tus expectativas.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cómo abordo pedidos erróneos repetidos?",
          answer:
            "Usa el nivel 4-5 con una tabla detallada comparando artículos pedidos vs. recibidos en varios pedidos. Los datos hablan por sí solos.",
        },
        {
          question: "¿Cuál es el mejor enfoque para entregas tardías?",
          answer:
            "Referencia la fecha de entrega original, el número de seguimientos enviados y el impacto en tus operaciones. El nivel 4 «Pasivo-Agresivo» mantiene la relación mientras expresa urgencia.",
        },
        {
          question: "¿Cómo escalo un problema con proveedor profesionalmente?",
          answer:
            "Nivel 5 «Según Mi Email Anterior» con copia a su dirección, adjuntando todo el historial de emails como «contexto para tu revisión».",
        },
      ],
      examples: [
        {
          subject: "Pedido #4471 — Un Estudio en Cumplimiento Creativo",
          preview:
            "Pedimos componentes azules. Recibimos engranajes rojos. Aunque admiro la interpretación creativa, insisto en los artículos que efectivamente compramos.",
          tone: 4,
          score: 68,
        },
        {
          subject: "Re: Fecha de Entrega (Preguntada 8 Veces)",
          preview:
            "Doy seguimiento a mi seguimiento de mi seguimiento sobre fechas de entrega. En este punto, he escrito más emails sobre este envío de lo que pesa el paquete.",
          tone: 5,
          score: 79,
        },
        {
          subject: "Preocupación de Calidad — Lote #2847",
          preview:
            "Quería señalar que el último lote parece haber sido verificado por alguien que, posiblemente, estaba mirando en la dirección equivocada.",
          tone: 3,
          score: 54,
        },
        {
          subject: "Re: Actualización de Envío «Express»",
          preview:
            "Noto que el seguimiento muestra mi envío «express» «en tránsito» desde hace 3 semanas. Creo que hasta la deriva continental se mueve más rápido. Agradezco orientación.",
          tone: 6,
          score: 85,
        },
      ],
    },
    meetings: {
      description:
        "Plantillas de email pasivo-agresivas sobre reuniones: las que debían ser emails, reuniones sin agenda y las que siempre se alargan.",
      longDescription:
        "Para la reunión que debía ser un email, la reunión sobre la reunión anterior y la reunión «opcional» recurrente que de alguna forma es obligatoria. Plantillas para proteger tu calendario y tu cordura.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cómo declino una reunión educadamente?",
          answer:
            "Usa el nivel 2-3 con sugerencia de formato alternativo (resumen por email, documento asíncrono) y menciona tus «compromisos de tiempo de concentración».",
        },
        {
          question: "¿Qué digo sobre reuniones sin agenda?",
          answer:
            "El nivel 4 funciona bien — expresa entusiasmo por la reunión mientras pides una agenda «para poder prepararme adecuadamente y contribuir de forma significativa».",
        },
        {
          question: "¿Cómo abordo reuniones que siempre se alargan?",
          answer:
            "Envía un email de nivel 3 antes, señalando tu «hora límite» y sugiriendo priorización de los puntos de agenda por si «el tiempo no permite cubrir todo».",
        },
      ],
      examples: [
        {
          subject: "Re: Reunión Sobre el Resumen de la Reunión",
          preview:
            "Quiero confirmar: ¿esta es una reunión para discutir los resultados de la reunión de ayer, que fue programada para planificar la reunión de la próxima semana? Solo quiero asegurarme de estar en el nivel meta correcto.",
          tone: 4,
          score: 71,
        },
        {
          subject: "Invitación de Calendario: Brainstorm 7:00 — Declinando",
          preview:
            "¡Aprecio la ambición de un brainstorm matutino! Desafortunadamente, mi cerebro no llega a la oficina hasta aproximadamente las 9:30, independientemente de dónde esté mi cuerpo.",
          tone: 5,
          score: 74,
        },
        {
          subject: "Re: Sincronización de Equipo Opcional (Obligatoria)",
          preview:
            "He notado que esta reunión está marcada como «opcional» pero mi ausencia fue señalada en la revisión de ayer. ¿Podrías aclarar la definición operativa de «opcional» en este contexto?",
          tone: 3,
          score: 58,
        },
        {
          subject: "Solicitud de Agenda para la «Charla Rápida» de 2 Horas de Mañana",
          preview:
            "¡Con ganas de nuestra charla rápida! Dada la duración de 2 horas, ¿podrías compartir una agenda? Me gustaría ritmar mi participación en consecuencia.",
          tone: 2,
          score: 42,
        },
      ],
    },
    deadlines: {
      description:
        "Plantillas de email pasivo-agresivas para gestión de plazos: fechas incumplidas, reincidentes y excusas creativas para retrasos.",
      longDescription:
        "Para cuando «fin del día» se trata como sugerencia, «urgente» significa «cuando puedas» y los cronogramas de proyecto se ven como ficción aspiracional. Responsabiliza con estilo.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cómo hago seguimiento de un plazo incumplido?",
          answer:
            "Referencia la fecha original acordada, señala el impacto del retraso y pide un nuevo plazo realista — manteniendo hostilidad diplomática de nivel 4-5.",
        },
        {
          question: "¿Cuál es una forma eficaz de fijar expectativas de plazo?",
          answer:
            "Usa el nivel 3 «Preocupado» para fijar expectativas pronto. Referencia patrones pasados sin acusación directa: «Dada la sensibilidad del cronograma, quería confirmar nuestra alineación sobre la fecha de entrega.»",
        },
        {
          question: "¿Cómo escalo incumplimientos repetidos de plazos?",
          answer:
            "Nivel 5-6 con documentación de todos los plazos incumplidos, acuerdos originales e impacto en el negocio. Pon stakeholders relevantes en copia «para visibilidad».",
        },
      ],
      examples: [
        {
          subject: "Re: Entregable Debido el Mes Pasado — Verificación de Estado",
          preview:
            "Te escribo sobre el entregable debido el 15 de abril. Como estamos cómodamente en junio, quería comprobar si ha habido algún fallo en el sistema de calendario del que deba estar al tanto.",
          tone: 5,
          score: 79,
        },
        {
          subject: "Cumplimiento de Plazos — Una Perspectiva Histórica",
          preview:
            "He adjuntado una hoja de cálculo con los últimos 12 plazos de proyecto y las fechas de entrega reales. Pensé que la visualización de datos podría ser... esclarecedora.",
          tone: 6,
          score: 91,
        },
        {
          subject: "Re: Necesito Más Tiempo (3.ª Solicitud de Extensión)",
          preview:
            "Por supuesto, tómate todo el tiempo que necesites. He adelantado el aplazamiento de la entrega al cliente, de mis vacaciones y, posiblemente, de mi jubilación para acomodar.",
          tone: 4,
          score: 73,
        },
        {
          subject: "Fin del Día Viernes — Una Aclaración",
          preview:
            "Cuando acordamos «fin del día viernes», quería confirmar que operamos con la misma definición. Específicamente: este viernes. En el año calendario actual. En el planeta Tierra.",
          tone: 3,
          score: 61,
        },
      ],
    },
    invoices: {
      description:
        "Plantillas de email pasivo-agresivas para facturas vencidas: seguimientos de pago desde recordatorios educados hasta la opción nuclear.",
      longDescription:
        "Para el arte delicado de pedir dinero que ya te deben. Desde primeros recordatorios amables hasta emails que podrían servir como prueba legal. Cobra sin quemar puentes (del todo).",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cuántos seguimientos son adecuados antes de escalar?",
          answer:
            "Tres con niveles de tono crecientes (2, 4, 5) con intervalos de 7 días. Después, nivel 6 con equipo legal en copia está justificado.",
        },
        {
          question: "¿Cuál es el seguimiento de pago pasivo-agresivo más eficaz?",
          answer:
            "Referencia el número de factura, fecha de vencimiento original, días de retraso acumulados y menciona casualmente tu política de pagos tardíos — todo en un tono técnicamente amigable.",
        },
        {
          question: "¿Debo poner contabilidad o al CEO en copia?",
          answer:
            "Empieza con contabilidad. Si no hay respuesta tras 2 intentos, pon en copia al contacto que firmó el contrato. La copia al CEO es la opción nuclear.",
        },
      ],
      examples: [
        {
          subject: "Factura #7721 — Día 60 — ¡Sigo Optimista!",
          preview:
            "Solo un recordatorio amigable de que la Factura #7721 está pendiente desde aproximadamente la última era glacial. Mi contable está preocupado. Mi casero está preocupado. Sigo profesionalmente optimista.",
          tone: 4,
          score: 69,
        },
        {
          subject: "Condiciones de Pago: 30 Días (No 30 Días ∞)",
          preview:
            "Nuestras condiciones estándar son pago a 30 días, que he convertido útilmente en varias unidades: 720 horas, 43.200 minutos, o aproximadamente un cuarto del tiempo desde que se emitió esta factura.",
          tone: 5,
          score: 83,
        },
        {
          subject: "Re: Procesamiento de Pago — Una Investigación Arqueológica",
          preview:
            "Te escribo sobre la Factura #3391, que con 120 días pendientes ya ha superado el periodo de gestación de varias especies de mamíferos. ¿Estará el equipo de cuentas a pagar en hibernación?",
          tone: 6,
          score: 92,
        },
        {
          subject: "Recordatorio Amigable de Pago #4",
          preview:
            "¡Hola! Solo retomando este tema. He adjuntado la factura original, comprobante de nuestra correspondencia anterior y un calendario resaltando los 67 días desde la fecha de vencimiento. ¡Sin prisa!",
          tone: 3,
          score: 56,
        },
      ],
    },
    "corporate-buzzwords": {
      description:
        "Plantillas de email pasivo-agresivas cargadas de jerga corporativa: sinergias, retomar el tema, aprovechar y máximo de lenguaje empresarial.",
      longDescription:
        "Cuando quieres no decir absolutamente nada mientras pareces decir algo profundo. Domina el vocabulario corporativo: sinergias, alineación, palanca, retomar el tema y otras palabras que hacen que la gente actualice su LinkedIn.",
      examplesHeading: "Emails de Ejemplo",
      faqHeading: "Preguntas Frecuentes",
      generateCta: "Generar un Email de {label}",
      faqs: [
        {
          question: "¿Cuáles son las frases corporativas más pasivo-agresivas?",
          answer:
            "«Según mi email anterior», «de ahora en adelante», «solo para aclarar», «para referencia futura» y «confío en que esto sea útil» son las cinco grandes de la hostilidad corporativa.",
        },
        {
          question: "¿Cómo uso jerga para parecer profesional mientras soy mordaz?",
          answer:
            "Apila jerga para crear un muro impenetrable de lenguaje corporativo que técnicamente no puede reportarse a RRHH. «Aprovechemos esta oportunidad para realinear nuestros entregables sinérgicos de ahora en adelante.»",
        },
        {
          question: "¿Cuál es la diferencia entre pasivo-agresivo y lenguaje corporativo?",
          answer:
            "El lenguaje corporativo es el marco socialmente aceptable a través del cual se entrega la agresividad pasiva. Es la diferencia entre «estás equivocado» y «aprecio tu perspectiva, sin embargo, tras un análisis más profundo...»",
        },
      ],
      examples: [
        {
          subject: "Re: Aprovechemos Nuestras Sinergias de Ahora en Adelante",
          preview:
            "Me encantaría retomar esta oportunidad de alinear nuestros entregables transversales con los imperativos estratégicos descritos en el documento de cambio de paradigma. Tratemos esto offline y socialicemos el concepto.",
          tone: 4,
          score: 64,
        },
        {
          subject: "Acciones de Nuestro Análisis Profundo",
          preview:
            "Según nuestra evaluación de capacidad, señalo algunas victorias fáciles para tracción inmediata. Ajustemos expectativas e intentemos hacerlo todo de una vez en el T3.",
          tone: 2,
          score: 35,
        },
        {
          subject: "Re: Oportunidad de Liderazgo de Pensamiento",
          preview:
            "Aprecio la invitación a «liderar el pensamiento» en esta iniciativa. He hecho brainstorming abierto y creo que debemos pivotar nuestra métrica estrella para captar mejor nuestra propuesta de valor. En otras palabras: no.",
          tone: 5,
          score: 77,
        },
        {
          subject: "Respecto a Nuestra Alineación de Ecosistema",
          preview:
            "Tras profundizar en nuestro ecosistema holístico, he identificado varios puntos de dolor en los puntos de contacto del customer journey que requieren sprints de ideación inmediatos. Traducción: todo está roto.",
          tone: 6,
          score: 86,
        },
      ],
    },
  },
};

const METADATA_TITLE: Record<Locale, string> = {
  "en-en": "{label} Email Templates",
  "pt-pt": "Modelos de Email — {label}",
  "fr-fr": "Modèles d'E-mails — {label}",
  "es-es": "Plantillas de Email — {label}",
};

function getCategoryLabel(locale: Locale, slug: CategorySlug): string {
  const fromHome = HOME_COPY[locale].categories.find((c) => c.slug === slug);
  return fromHome?.label ?? CATEGORY_DETAILS[slug].label;
}

function getToneLabel(locale: Locale, tone: number): string {
  return HOME_COPY[locale].tones[tone - 1]?.label ?? String(tone);
}

function mapExamplesWithToneLabels(
  locale: Locale,
  examples: CategoryExample[],
): LocalizedCategoryExample[] {
  return examples.map((example) => ({
    ...example,
    toneLabel: getToneLabel(locale, example.tone),
  }));
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return CATEGORY_SLUGS.includes(slug as CategorySlug);
}

export function getLocalizedCategoryDetail(
  locale: Locale,
  slug: CategorySlug,
): LocalizedCategoryDetail {
  const emoji = CATEGORY_DETAILS[slug].emoji;
  const label = getCategoryLabel(locale, slug);

  if (locale === DEFAULT_LOCALE) {
    const detail = CATEGORY_DETAILS[slug];
    return {
      emoji,
      label,
      description: detail.description,
      longDescription: detail.longDescription,
      examplesHeading: detail.examplesHeading,
      faqHeading: detail.faqHeading,
      generateCta: detail.generateCta,
      faqs: detail.faqs,
      examples: mapExamplesWithToneLabels(locale, detail.examples),
    };
  }

  const translated =
    CATEGORY_DETAIL_TRANSLATIONS[locale as Exclude<Locale, "en-en">][slug];
  return {
    emoji,
    label,
    description: translated.description,
    longDescription: translated.longDescription,
    examplesHeading: translated.examplesHeading,
    faqHeading: translated.faqHeading,
    generateCta: translated.generateCta,
    faqs: translated.faqs,
    examples: mapExamplesWithToneLabels(locale, translated.examples),
  };
}

export function getCategoryDetailMetadata(
  locale: Locale,
  slug: CategorySlug,
): { title: string; description: string } {
  const label = getCategoryLabel(locale, slug);
  const detail = getLocalizedCategoryDetail(locale, slug);
  return {
    title: METADATA_TITLE[locale].replace("{label}", label),
    description: detail.description,
  };
}
