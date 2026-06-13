import { nanoid } from "nanoid";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.passiveaggressiveemails.com";

export function generateShareId(): string {
  return nanoid(8);
}

export function getShareUrl(id: string): string {
  return `${SITE_URL}/e/${id}`;
}

export function getShareText(params: {
  toneLabel: string;
  aggressionScore: number;
  subject?: string;
}): string {
  const scoreEmoji = params.aggressionScore >= 80 ? "💀" : params.aggressionScore >= 60 ? "🔥" : "😬";
  const subjectLine = params.subject ? `\n\n"${params.subject}"` : "";
  return `${scoreEmoji} Aggression score: ${params.aggressionScore}/100. Tone: ${params.toneLabel}.${subjectLine}\n\nI found a passive-aggressive email generator and it's dangerously accurate. You NEED to try this.`;
}

export function getLinkedInShareUrl(url: string, text: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
}

export function getTwitterShareUrl(url: string, text: string): string {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
}

export function getFacebookShareUrl(url: string): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

export function getWhatsAppShareUrl(text: string, url: string): string {
  return `https://wa.me/?text=${encodeURIComponent(`${text}\n\n${url}`)}`;
}

export function getEmailShareUrl(
  subject: string,
  body: string,
  url: string
): string {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${body}\n\n${url}`)}`;
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return Promise.resolve();
}
