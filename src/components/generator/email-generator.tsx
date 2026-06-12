"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToneSlider } from "./tone-slider";
import { EmailResult } from "./email-result";
import { trackGeneration } from "@/lib/analytics";

const RECIPIENTS = [
  { id: "manager", label: "Manager", emoji: "👔" },
  { id: "client", label: "Client", emoji: "🤝" },
  { id: "supplier", label: "Supplier", emoji: "📦" },
  { id: "coworker", label: "Coworker", emoji: "💼" },
  { id: "employee", label: "Employee", emoji: "📋" },
  { id: "freelancer", label: "Freelancer", emoji: "🎨" },
];

const SITUATIONS = [
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
];

const TONE_LABELS: Record<number, string> = {
  1: "Professional",
  2: "Slightly Annoyed",
  3: "Concerned",
  4: "Passive Aggressive",
  5: "Per My Previous Email",
  6: "Corporate Assassin",
};

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

export function EmailGenerator() {
  const [recipient, setRecipient] = useState("");
  const [situation, setSituation] = useState("");
  const [customSituation, setCustomSituation] = useState("");
  const [tone, setTone] = useState(4);
  const [length, setLength] = useState<"short" | "medium" | "long">("medium");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedResult | null>(null);

  const isCustom = situation === "custom";
  const effectiveSituation = isCustom ? customSituation : situation;

  const handleGenerate = async () => {
    if (!recipient || !effectiveSituation) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient,
          situation: effectiveSituation,
          tone,
          length,
        }),
      });

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
      setResult({
        subject: "Re: Following Up (Again)",
        body: "Hi,\n\nI hope this email finds you well, though I suspect it will find you the same way my last three emails did — unread.\n\nI wanted to circle back on this matter, which I first raised approximately one geological era ago. I understand everyone is busy, but I'm beginning to wonder if my emails are being delivered to an alternate dimension.\n\nPlease let me know if there's a better way to reach you. Perhaps carrier pigeon?\n\nBest regards",
        aggressionScore: 72,
        damageAssessment: "Relationship will survive, but they'll feel the sting",
        corporateTranslation: {
          whatYouMean: "Answer my emails or I'll escalate this.",
          corporateVersion:
            "I wanted to follow up regarding my previous communication to ensure alignment.",
        },
      });
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
            <Label htmlFor="recipient">Who are you emailing?</Label>
            <Select value={recipient} onValueChange={(v) => setRecipient(v ?? "")}>
              <SelectTrigger id="recipient">
                <SelectValue placeholder="Select recipient" />
              </SelectTrigger>
              <SelectContent>
                {RECIPIENTS.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.emoji} {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="situation">What happened?</Label>
            <Select value={situation} onValueChange={(v) => setSituation(v ?? "")}>
              <SelectTrigger id="situation">
                <SelectValue placeholder="Select situation" />
              </SelectTrigger>
              <SelectContent>
                {SITUATIONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
                <SelectItem value="custom">✍️ Custom situation...</SelectItem>
              </SelectContent>
            </Select>
            {isCustom && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <Textarea
                  placeholder="Describe your workplace situation..."
                  value={customSituation}
                  onChange={(e) => setCustomSituation(e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </motion.div>
            )}
          </div>

          <ToneSlider value={tone} onChange={setTone} />

          <div className="space-y-2">
            <Label>Length</Label>
            <div className="flex gap-2">
              {(["short", "medium", "long"] as const).map((l) => (
                <Button
                  key={l}
                  variant={length === l ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLength(l)}
                  className="capitalize"
                >
                  {l}
                </Button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading || !recipient || !effectiveSituation}
            className="w-full h-12 text-base font-medium"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Crafting passive aggression...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Email
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
          toneLabel={TONE_LABELS[tone]}
          onGenerateAnother={handleReset}
        />
      )}
    </div>
  );
}
