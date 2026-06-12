import { nanoid } from "nanoid";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://passiveaggressiveemails.com";

export function generateShareId(): string {
  return nanoid(8);
}

export function getShareUrl(id: string): string {
  return `${SITE_URL}/e/${id}`;
}

export function getShareText(params: {
  toneLabel: string;
  aggressionScore: number;
}): string {
  return `I just generated a ${params.toneLabel} email. Aggression score: ${params.aggressionScore}/100. 💀`;
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
  return `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
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
