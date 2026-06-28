"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ToneSlider } from "./tone-slider";
import { EmailResult } from "./email-result";
import { trackGeneration } from "@/lib/analytics";
import { generateLocalEmail } from "@/lib/generator";
import { DEFAULT_LOCALE, GENERATOR_COPY, HOME_COPY, type Locale } from "@/lib/i18n";

function ManagerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21v-2a5.5 5.5 0 0 1 11 0v2" />
      <circle cx="12" cy="7" r="1.5" fill="#2563eb" stroke="none" />
    </svg>
  );
}

function ClientIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-1.5-1.5-6-5-6-9a4 4 0 0 1 6-3.46A4 4 0 0 1 18 12c0 4-4.5 7.5-6 9z" fill="#0d948833" />
      <path d="M8 12.5l2.5 2L16 9" stroke="#0d9488" strokeWidth="1.5" />
    </svg>
  );
}

function SupplierIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8h14l-1.5 10H6.5L5 8z" fill="#7c3aed22" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M12 12v4M10 14h4" />
    </svg>
  );
}

function CoworkerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" fill="#ea580c22" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12v3" />
      <path d="M3 12h18" />
    </svg>
  );
}

function EmployeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#0d948822" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8 17c0-2 1.8-3 4-3s4 1 4 3" />
      <line x1="14" y1="5" x2="18" y2="5" />
    </svg>
  );
}

function FreelancerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="8" fill="#db277722" />
      <circle cx="9" cy="12" r="1.2" fill="#ef4444" stroke="none" />
      <circle cx="14" cy="11" r="1.2" fill="#3b82f6" stroke="none" />
      <circle cx="11" cy="16" r="1.2" fill="#eab308" stroke="none" />
      <circle cx="15" cy="15" r="1.2" fill="#22c55e" stroke="none" />
      <path d="M12 6V3M12 3l-2 2M12 3l2 2" />
    </svg>
  );
}

const RECIPIENTS = [
  { id: "manager", label: "Manager", icon: ManagerIcon },
  { id: "client", label: "Client", icon: ClientIcon },
  { id: "supplier", label: "Supplier", icon: SupplierIcon },
  { id: "coworker", label: "Coworker", icon: CoworkerIcon },
  { id: "employee", label: "Employee", icon: EmployeeIcon },
  { id: "freelancer", label: "Freelancer", icon: FreelancerIcon },
];


interface GeneratedResult {
  subject: string;
  body: string;
  aggressionScore: number;
  damageAssessment: string;
  corporateTranslation: {
    whatYouMean: string;
    corporateVersion: string;
  };
}

export function EmailGenerator({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = GENERATOR_COPY[locale];
  const [recipient, setRecipient] = useState("");
  const [situation, setSituation] = useState("");
  const [customSituation, setCustomSituation] = useState("");
  const [tone, setTone] = useState(4);
  const [length, setLength] = useState<"short" | "medium" | "long">("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedResult | null>(null);

  const isCustom = situation === "custom";
  const effectiveSituation = isCustom ? customSituation : situation;

  const handleGenerate = async () => {
    if (!recipient || !effectiveSituation) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient,
          situation: effectiveSituation,
          tone,
          length,
          locale,
        }),
      });

      if (response.status === 429) {
        setError(copy.rateLimitError);
        return;
      }

      if (!response.ok) throw new Error("Generation failed");

      const data = await response.json();
      setResult(data);

      trackGeneration({
        recipient,
        tone,
        length,
        isAI: isCustom,
        category: isCustom ? undefined : "preset",
      });
    } catch {
      setResult(generateLocalEmail({
        recipient,
        situation: effectiveSituation,
        tone,
        length,
        locale,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!result ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="recipient">{copy.recipientLabel}</Label>
            <Select value={recipient} onValueChange={(v) => setRecipient(v ?? "")}>
              <SelectTrigger id="recipient">
                {recipient ? (
                  <span>{copy.recipients[recipient] || recipient}</span>
                ) : (
                  <span className="text-muted-foreground">{copy.recipientPlaceholder}</span>
                )}
              </SelectTrigger>
              <SelectContent>
                {RECIPIENTS.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    <span className="inline-flex items-center gap-2">
                      <r.icon className="w-5 h-5 inline-block flex-shrink-0" />
                      {copy.recipients[r.id] || r.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="situation">{copy.situationLabel}</Label>
            <Select value={situation} onValueChange={(v) => setSituation(v ?? "")}>
              <SelectTrigger id="situation">
                {situation ? (
                  <span className="truncate">
                    {situation === "custom" ? `✍️ ${copy.customSituation}` : situation}
                  </span>
                ) : (
                  <span className="text-muted-foreground">{copy.situationPlaceholder}</span>
                )}
              </SelectTrigger>
              <SelectContent className="w-[var(--radix-select-trigger-width)]">
                {copy.situations.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
                <SelectItem value="custom">✍️ {copy.customSituation}</SelectItem>
              </SelectContent>
            </Select>
            {isCustom && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <Textarea
                  placeholder={copy.customPlaceholder}
                  value={customSituation}
                  onChange={(e) => setCustomSituation(e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </motion.div>
            )}
          </div>

          <ToneSlider
            value={tone}
            onChange={setTone}
            label={copy.toneLabel}
            toneLabels={HOME_COPY[locale].tones.map((t) => t.label)}
          />

          <div className="space-y-2">
            <Label>{copy.lengthLabel}</Label>
            <div className="flex gap-2">
              {(["short", "medium", "long"] as const).map((l) => (
                <Button
                  key={l}
                  variant={length === l ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLength(l)}
                  className="capitalize"
                >
                  {copy.lengths[l]}
                </Button>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive text-center" role="alert">
              {error}
            </p>
          )}

          <Button
            onClick={handleGenerate}
            disabled={loading || !recipient || !effectiveSituation}
            className="w-full h-12 text-base font-medium"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {copy.loading}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {copy.generate}
              </>
            )}
          </Button>
        </motion.div>
      ) : (
        <EmailResult
          subject={result.subject}
          body={result.body}
          aggressionScore={result.aggressionScore}
          damageAssessment={result.damageAssessment}
          corporateTranslation={result.corporateTranslation}
          toneLabel={HOME_COPY[locale].tones[tone - 1]?.label ?? ""}
          onGenerateAnother={handleReset}
        />
      )}
    </div>
  );
}
