import { scenarios } from '@/data/scenarios';
import type { Scenario } from '@/data/scenarios/types';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

export type { Scenario };

export interface GenerateLocalEmailParams {
  recipient: string;
  situation: string;
  tone: number;
  length: 'short' | 'medium' | 'long';
  locale?: Locale;
}

export interface LocalGeneratedEmail {
  subject: string;
  body: string;
  aggressionScore: number;
  damageAssessment: string;
  corporateTranslation: {
    whatYouMean: string;
    corporateVersion: string;
  };
}

export function getLocalEmail(
  recipient?: string,
  situation?: string,
  tone?: number,
  length?: 'short' | 'medium' | 'long'
): Scenario | null {
  let candidates = [...scenarios];

  if (recipient) {
    candidates = candidates.filter((s) => s.recipient === recipient);
  }

  if (tone) {
    candidates = candidates.filter((s) => s.tone === tone);
  }

  if (length) {
    candidates = candidates.filter((s) => s.length === length);
  }

  if (situation) {
    const query = situation.toLowerCase();
    candidates = candidates
      .map((s) => ({
        scenario: s,
        score: getRelevanceScore(s, query),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.scenario);
  }

  if (candidates.length === 0) return null;
  return candidates[0];
}

export function getRandomScenario(): Scenario {
  const index = Math.floor(Math.random() * scenarios.length);
  return scenarios[index];
}

export function getScenariosByCategory(category: string): Scenario[] {
  return scenarios.filter((s) => s.category === category);
}

export function getScenariosByRecipient(recipient: string): Scenario[] {
  return scenarios.filter((s) => s.recipient === recipient);
}

export function getScenariosByTone(tone: number): Scenario[] {
  return scenarios.filter((s) => s.tone === tone);
}

export function searchScenarios(query: string): Scenario[] {
  if (!query || query.trim().length === 0) return [];

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return scenarios
    .map((s) => ({
      scenario: s,
      score: getRelevanceScore(s, query.toLowerCase()),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.scenario);
}

function getRelevanceScore(scenario: Scenario, query: string): number {
  const terms = query.split(/\s+/).filter(Boolean);
  let score = 0;

  const searchableText = [
    scenario.situation,
    scenario.subject,
    scenario.body,
    scenario.damageAssessment,
    scenario.corporateTranslation.whatYouMean,
    scenario.corporateTranslation.corporateVersion,
    ...scenario.tags,
  ]
    .join(' ')
    .toLowerCase();

  for (const term of terms) {
    if (scenario.subject.toLowerCase().includes(term)) score += 5;
    if (scenario.situation.toLowerCase().includes(term)) score += 4;
    if (scenario.tags.some((tag) => tag.includes(term))) score += 3;
    if (scenario.body.toLowerCase().includes(term)) score += 2;
    if (searchableText.includes(term)) score += 1;
  }

  return score;
}

export function getTopScenarios(limit: number = 10): Scenario[] {
  return [...scenarios]
    .sort((a, b) => b.aggressionScore - a.aggressionScore)
    .slice(0, limit);
}

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}

export function getRelatedScenarios(scenario: Scenario, limit: number = 5): Scenario[] {
  return scenarios
    .filter((s) => s.id !== scenario.id)
    .map((s) => {
      let relatedness = 0;
      if (s.recipient === scenario.recipient) relatedness += 3;
      if (s.category === scenario.category) relatedness += 3;
      if (s.tone === scenario.tone) relatedness += 2;
      if (s.length === scenario.length) relatedness += 1;
      const sharedTags = s.tags.filter((tag) => scenario.tags.includes(tag));
      relatedness += sharedTags.length * 2;
      return { scenario: s, relatedness };
    })
    .sort((a, b) => b.relatedness - a.relatedness)
    .slice(0, limit)
    .map((item) => item.scenario);
}

export function generateLocalEmail(params: GenerateLocalEmailParams): LocalGeneratedEmail {
  return createParametricEmail(params);
}

function createParametricEmail({
  recipient,
  situation,
  tone,
  length,
  locale,
}: GenerateLocalEmailParams): LocalGeneratedEmail {
  const resolvedLocale = locale || DEFAULT_LOCALE;
  const context = situation.trim();
  const greeting = getGreeting(recipient);
  const subject = getSubject(context, tone, resolvedLocale);
  const middle = getMiddleLine(context, tone, resolvedLocale);
  const closing = getClosingLine(tone, resolvedLocale);
  const longAddOn = getLongAddOn(resolvedLocale);

  const bodyParts = [
    greeting,
    getOpeningLine(context, tone, resolvedLocale),
    middle,
    ...(length === 'long' ? [longAddOn, getNextStepLine(context, tone, resolvedLocale)] : []),
    ...(length === 'medium' ? [getNextStepLine(context, tone, resolvedLocale)] : []),
    closing,
  ];

  return {
    subject,
    body: bodyParts.join("\n\n"),
    aggressionScore: calculateAggressionScore(tone, length, context),
    damageAssessment: getDamageAssessment(tone, resolvedLocale),
    corporateTranslation: {
      whatYouMean: getPlainMeaning(recipient, context, tone, resolvedLocale),
      corporateVersion: getCorporateVersion(context, tone, resolvedLocale),
    },
  };
}

function calculateAggressionScore(
  tone: number,
  length: 'short' | 'medium' | 'long',
  situation: string
): number {
  const toneBase: Record<number, number> = {
    1: 16,
    2: 30,
    3: 45,
    4: 62,
    5: 78,
    6: 91,
  };
  const lengthAdjustment = length === 'short' ? -3 : length === 'long' ? 4 : 0;
  const severityTerms = ["missed", "late", "ignored", "stealing", "credit", "payment", "deadline"];
  const severityAdjustment = severityTerms.some((term) => situation.toLowerCase().includes(term)) ? 4 : 0;

  return Math.min(98, Math.max(5, (toneBase[tone] ?? 45) + lengthAdjustment + severityAdjustment));
}

function getGreeting(recipient: string): string {
  const labels: Record<string, string> = {
    manager: "Hi,",
    client: "Hi there,",
    supplier: "Hello,",
    coworker: "Hi,",
    employee: "Hi,",
    freelancer: "Hello,",
  };

  return labels[recipient] ?? "Hi,";
}

function getLongAddOn(locale: Locale): string {
  if (locale === "pt-pt") {
    return "Estou a documentar isto agora para evitar futuras confusões sobre responsabilidade, prazos ou quantas vezes o tema já foi levantado.";
  }
  if (locale === "fr-fr") {
    return "Je documente désormais ce point afin d'éviter toute confusion future sur la responsabilité, les délais ou le nombre de relances déjà effectuées.";
  }
  if (locale === "es-es") {
    return "Estoy documentando esto ahora para evitar futuras confusiones sobre responsabilidad, plazos o cuántas veces se ha planteado ya el asunto.";
  }
  return "I am documenting this now so we can avoid any future confusion about ownership, timing, or the number of times this has been raised.";
}

function getSubject(situation: string, tone: number, locale: Locale): string {
  if (locale === "pt-pt") {
    if (tone <= 2) return `Nota rápida sobre ${situation}`;
    if (tone === 3) return `Seguimento sobre ${situation}`;
    if (tone === 4) return `A retomar ${situation}`;
    if (tone === 5) return `Re: ${situation}`;
    return `Aviso de escalamento: ${situation}`;
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return `Note rapide concernant ${situation}`;
    if (tone === 3) return `Suivi concernant ${situation}`;
    if (tone === 4) return `Point à reprendre : ${situation}`;
    if (tone === 5) return `Re : ${situation}`;
    return `Avis d'escalade : ${situation}`;
  }
  if (locale === "es-es") {
    if (tone <= 2) return `Nota rápida sobre ${situation}`;
    if (tone === 3) return `Seguimiento sobre ${situation}`;
    if (tone === 4) return `Retomando ${situation}`;
    if (tone === 5) return `Re: ${situation}`;
    return `Aviso de escalado: ${situation}`;
  }
  if (tone <= 2) return `Quick note on ${situation}`;
  if (tone === 3) return `Following up on ${situation}`;
  if (tone === 4) return `Revisiting ${situation}`;
  if (tone === 5) return `Re: ${situation}`;
  return `Escalation notice: ${situation}`;
}

function getOpeningLine(situation: string, tone: number, locale: Locale): string {
  const lower = situation.toLowerCase();
  if (locale === "pt-pt") {
    if (tone <= 2) return `Queria fazer um breve seguimento sobre ${lower} e garantir que estamos alinhados no próximo passo.`;
    if (tone === 3) return `Queria sinalizar ${lower}, porque começa a afetar os próximos passos.`;
    if (tone === 4) return `Volto a este tema, ${lower}, uma vez que ainda parece precisar de atenção.`;
    if (tone === 5) return `Conforme a minha nota anterior, ${lower} continua por resolver.`;
    return `Para visibilidade e registo, ${lower} já deixou de ser um simples seguimento e exige responsabilidade imediata.`;
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return `Je voulais faire un bref suivi concernant ${lower} afin de confirmer la prochaine étape.`;
    if (tone === 3) return `Je souhaitais signaler ${lower}, car cela commence à affecter la suite.`;
    if (tone === 4) return `Je reviens sur ${lower}, puisque ce point semble encore nécessiter de l'attention.`;
    if (tone === 5) return `Suite à mon précédent message, ${lower} reste sans résolution.`;
    return `Pour visibilité et documentation, ${lower} dépasse désormais le simple suivi et nécessite une prise en charge immédiate.`;
  }
  if (locale === "es-es") {
    if (tone <= 2) return `Quería hacer un breve seguimiento sobre ${lower} y confirmar que estamos alineados en el siguiente paso.`;
    if (tone === 3) return `Quería señalar ${lower}, ya que empieza a afectar los próximos pasos.`;
    if (tone === 4) return `Retomo ${lower}, porque parece que sigue necesitando atención.`;
    if (tone === 5) return `Según mi nota anterior, ${lower} sigue sin resolverse.`;
    return `Para visibilidad y documentación, ${lower} ya ha superado un simple seguimiento y requiere responsabilidad inmediata.`;
  }
  if (tone <= 2) {
    return `I wanted to quickly follow up on ${lower} and make sure we are aligned on the next step.`;
  }
  if (tone === 3) {
    return `I wanted to flag ${lower}, as it is starting to affect the next steps.`;
  }
  if (tone === 4) {
    return `Circling back on ${lower}, since this appears to still need attention.`;
  }
  if (tone === 5) {
    return `Per my previous note, ${lower} remains unresolved.`;
  }
  return `For visibility and documentation, ${lower} has now moved beyond a routine follow-up and requires immediate ownership.`;
}

function getMiddleLine(situation: string, tone: number, locale: Locale): string {
  if (locale === "pt-pt") {
    if (tone <= 2) return "Pode confirmar em que ponto está assim que possível?";
    if (tone === 3) return "Agradeço que confirme o estado atual para evitarmos mais atrasos.";
    if (tone === 4) return "Compreendo que todos estejam ocupados, embora isto já esteja pendente há tempo suficiente para exigir uma atualização clara.";
    if (tone === 5) return "Como isto já foi levantado, agradeço uma confirmação direta em vez de mais ambiguidade.";
    return `Estou a documentar isto porque "${situation}" já criou atrito suficiente para que silêncio ou ambiguidade sejam difíceis de interpretar como outra coisa que não uma decisão.`;
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return "Pouvez-vous confirmer où cela en est dès que possible ?";
    if (tone === 3) return "Merci de confirmer l'état actuel afin d'éviter tout retard supplémentaire.";
    if (tone === 4) return "Je comprends que tout le monde soit occupé, mais ce sujet est en attente depuis assez longtemps pour nécessiter une mise à jour claire.";
    if (tone === 5) return "Comme ce point a déjà été soulevé, j'apprécierais une confirmation directe plutôt qu'une nouvelle ambiguïté.";
    return `Je documente ceci parce que "${situation}" a désormais créé suffisamment de friction pour que le silence ou l'ambiguïté soient difficiles à interpréter autrement que comme une décision.`;
  }
  if (locale === "es-es") {
    if (tone <= 2) return "¿Puedes confirmar en qué punto está esto cuando tengas ocasión?";
    if (tone === 3) return "Por favor, confirma el estado actual para evitar más retrasos.";
    if (tone === 4) return "Entiendo que todos estamos ocupados, pero esto lleva pendiente el tiempo suficiente como para requerir una actualización clara.";
    if (tone === 5) return "Como esto ya se ha planteado, agradecería una confirmación directa en lugar de otra ronda de ambigüedad.";
    return `Estoy documentando esto porque "${situation}" ya ha generado suficiente fricción como para que el silencio o la ambigüedad sean difíciles de interpretar como algo que no sea una decisión.`;
  }
  if (tone <= 2) {
    return "Could you please confirm where this stands when you have a chance?";
  }
  if (tone === 3) {
    return "Please confirm the current status so we can avoid any further delay.";
  }
  if (tone === 4) {
    return "I appreciate that everyone is busy, though this has now been pending long enough to require a clear update.";
  }
  if (tone === 5) {
    return "As this has already been raised, I would appreciate a direct confirmation rather than another round of ambiguity.";
  }
  return `I am documenting this because "${situation}" has now created enough avoidable friction that silence or ambiguity would be difficult to interpret as anything other than a decision.`;
}

function getNextStepLine(situation: string, tone: number, locale: Locale): string {
  if (locale === "pt-pt") {
    if (tone <= 3) return "Indique, por favor, o prazo esperado ou se há algo a bloquear o progresso.";
    if (tone <= 5) return "Confirme hoje como isto será resolvido e quem assume o próximo passo.";
    return "Responda hoje com o plano de resolução, responsável e prazo para eu avaliar se é necessária visibilidade mais ampla.";
  }
  if (locale === "fr-fr") {
    if (tone <= 3) return "Merci d'indiquer le délai prévu ou ce qui bloque l'avancement.";
    if (tone <= 5) return "Merci de confirmer aujourd'hui comment cela sera résolu et qui porte la prochaine étape.";
    return "Merci de répondre aujourd'hui avec le plan de résolution, le responsable et le délai afin que je détermine si une visibilité plus large est nécessaire.";
  }
  if (locale === "es-es") {
    if (tone <= 3) return "Por favor, indica el plazo previsto o si hay algo bloqueando el avance.";
    if (tone <= 5) return "Confirma hoy cómo se resolverá esto y quién asumirá el siguiente paso.";
    return "Responde hoy con el plan de resolución, responsable y plazo para poder decidir si hace falta dar mayor visibilidad.";
  }
  if (tone <= 3) {
    return "Please let me know the expected timing or whether anything is blocking progress.";
  }
  if (tone <= 5) {
    return "Please confirm today how this will be resolved and who owns the next step.";
  }
  return "Please reply today with the resolution plan, owner, and timing so I can determine whether broader visibility is required.";
}

function getClosingLine(tone: number, locale: Locale): string {
  if (locale === "pt-pt") {
    if (tone <= 2) return "Obrigado desde já.";
    if (tone === 3) return "Obrigado por ajudar a manter isto em andamento.";
    if (tone === 4) return "Fico a aguardar para finalmente fecharmos este tema.";
    if (tone === 5) return "Agradeço a sua atenção célere, nesta fase.";
    return "Cumprimentos, e obrigado desde já por tratar isto com a urgência que agora exige.";
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return "Merci d'avance.";
    if (tone === 3) return "Merci de contribuer à faire avancer ce point.";
    if (tone === 4) return "Dans l'attente de pouvoir enfin clôturer ce sujet.";
    if (tone === 5) return "Merci de votre attention rapide à ce stade.";
    return "Cordialement, et merci d'avance de traiter ce sujet avec l'urgence qu'il exige désormais.";
  }
  if (locale === "es-es") {
    if (tone <= 2) return "Gracias de antemano.";
    if (tone === 3) return "Gracias por ayudar a que esto avance.";
    if (tone === 4) return "Quedo a la espera de poder cerrar finalmente este asunto.";
    if (tone === 5) return "Agradezco tu pronta atención a estas alturas.";
    return "Saludos, y gracias de antemano por tratar esto con la urgencia que ahora requiere.";
  }
  if (tone <= 2) return "Thanks in advance.";
  if (tone === 3) return "Thanks for helping keep this moving.";
  if (tone === 4) return "Looking forward to finally closing the loop.";
  if (tone === 5) return "I appreciate your prompt attention to this, at this stage.";
  return "Regards, and thank you in advance for treating this with the urgency it now requires.";
}

function getDamageAssessment(tone: number, locale: Locale): string {
  if (locale === "pt-pt") {
    if (tone <= 2) return "Baixo risco: educado, claro e pouco provável que cause drama.";
    if (tone === 3) return "Risco moderado: profissional, mas a impaciência é visível.";
    if (tone === 4) return "Impacto notório: o destinatário vai perceber o subtexto.";
    if (tone === 5) return "Impacto elevado: parece um registo documental com boas maneiras.";
    return "Dano corporativo máximo: tecnicamente profissional, socialmente devastador.";
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return "Risque faible : poli, clair et peu susceptible de créer un drame.";
    if (tone === 3) return "Risque modéré : professionnel, mais l'impatience est visible.";
    if (tone === 4) return "Impact sensible : le destinataire comprendra le sous-texte.";
    if (tone === 5) return "Impact élevé : cela ressemble à une trace écrite polie.";
    return "Dégât corporate maximal : techniquement professionnel, socialement dévastateur.";
  }
  if (locale === "es-es") {
    if (tone <= 2) return "Riesgo bajo: educado, claro y poco propenso a causar drama.";
    if (tone === 3) return "Riesgo moderado: profesional, pero la impaciencia se nota.";
    if (tone === 4) return "Impacto claro: el destinatario entenderá el subtexto.";
    if (tone === 5) return "Alto impacto: parece una prueba documental con modales.";
    return "Daño corporativo máximo: técnicamente profesional, socialmente devastador.";
  }
  if (tone <= 2) return "Low risk: polite, clear, and unlikely to cause drama.";
  if (tone === 3) return "Moderate risk: professional, but the impatience is visible.";
  if (tone === 4) return "Noticeable sting: the recipient will understand the subtext.";
  if (tone === 5) return "High impact: this reads like a paper trail with manners.";
  return "Maximum corporate damage: technically professional, socially devastating.";
}

function getPlainMeaning(recipient: string, situation: string, tone: number, locale: Locale): string {
  const target = recipient ? `this ${recipient}` : "this";
  if (locale === "pt-pt") {
    if (tone <= 2) return `Trate de ${situation.toLowerCase()} em breve, por favor.`;
    if (tone <= 4) return `Preciso que isto deixe de se arrastar: ${situation.toLowerCase()}.`;
    return `Resolva ${situation.toLowerCase()} agora, porque já não vou fingir que está tudo bem.`;
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return `Merci de traiter ${situation.toLowerCase()} prochainement.`;
    if (tone <= 4) return `J'ai besoin que ce sujet cesse de traîner : ${situation.toLowerCase()}.`;
    return `Réglez ${situation.toLowerCase()} maintenant, car je ne vais plus faire comme si tout allait bien.`;
  }
  if (locale === "es-es") {
    if (tone <= 2) return `Por favor, atiende ${situation.toLowerCase()} pronto.`;
    if (tone <= 4) return `Necesito que esto deje de alargarse: ${situation.toLowerCase()}.`;
    return `Resuelve ${situation.toLowerCase()} ahora, porque ya no voy a fingir que está bien.`;
  }
  if (tone <= 2) return `Please deal with ${situation.toLowerCase()} soon.`;
  if (tone <= 4) return `I need ${target} to stop letting ${situation.toLowerCase()} drag on.`;
  return `Fix ${situation.toLowerCase()} now, because I am done pretending this is fine.`;
}

function getCorporateVersion(situation: string, tone: number, locale: Locale): string {
  if (locale === "pt-pt") {
    if (tone <= 2) return `Queria fazer seguimento sobre ${situation.toLowerCase()} e confirmar os próximos passos.`;
    if (tone <= 4) return `Estou a sinalizar ${situation.toLowerCase()} para garantir alinhamento e resolução atempada.`;
    return `Estou a documentar ${situation.toLowerCase()} para visibilidade e a solicitar confirmação imediata do plano de resolução.`;
  }
  if (locale === "fr-fr") {
    if (tone <= 2) return `Je souhaitais faire un suivi concernant ${situation.toLowerCase()} et confirmer les prochaines étapes.`;
    if (tone <= 4) return `Je signale ${situation.toLowerCase()} afin d'assurer l'alignement et une résolution rapide.`;
    return `Je documente ${situation.toLowerCase()} pour visibilité et demande une confirmation immédiate du plan de résolution.`;
  }
  if (locale === "es-es") {
    if (tone <= 2) return `Quería hacer seguimiento sobre ${situation.toLowerCase()} y confirmar los próximos pasos.`;
    if (tone <= 4) return `Estoy señalando ${situation.toLowerCase()} para asegurar alineación y resolución a tiempo.`;
    return `Estoy documentando ${situation.toLowerCase()} para visibilidad y solicito confirmación inmediata del plan de resolución.`;
  }
  if (tone <= 2) return `I wanted to follow up on ${situation.toLowerCase()} and confirm next steps.`;
  if (tone <= 4) return `I am flagging ${situation.toLowerCase()} to ensure alignment and timely resolution.`;
  return `I am documenting ${situation.toLowerCase()} for visibility and requesting immediate confirmation of the resolution plan.`;
}
