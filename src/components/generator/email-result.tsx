"use client";

import { motion } from "framer-motion";
import { Copy, Share2, RefreshCw, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButtons } from "@/components/sharing/share-buttons";
import { copyToClipboard } from "@/lib/sharing";
import { trackCopy } from "@/lib/analytics";

interface EmailResultProps {
  subject: string;
  body: string;
  aggressionScore: number;
  damageAssessment: string;
  corporateTranslation: {
    whatYouMean: string;
    corporateVersion: string;
  };
  toneLabel: string;
  emailId?: string;
  onGenerateAnother: () => void;
}

export function EmailResult({
  subject,
  body,
  aggressionScore,
  damageAssessment,
  corporateTranslation,
  toneLabel,
  emailId,
  onGenerateAnother,
}: EmailResultProps) {
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(`Subject: ${subject}\n\n${body}`);
    setCopied(true);
    if (emailId) trackCopy(emailId);
    setTimeout(() => setCopied(false), 2000);
  };

  const scoreColor =
    aggressionScore >= 80
      ? "text-red-600"
      : aggressionScore >= 60
        ? "text-orange-600"
        : aggressionScore >= 40
          ? "text-yellow-600"
          : "text-green-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
        <div className="bg-muted/50 px-6 py-3 border-b border-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">New Message</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="border-b border-border pb-3">
            <p className="text-sm text-muted-foreground">Subject:</p>
            <p className="font-medium text-foreground">{subject}</p>
          </div>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap leading-relaxed">
            {body}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="border border-border rounded-lg p-4 text-center"
        >
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
            Aggression Score
          </p>
          <p className={`text-3xl font-bold font-heading ${scoreColor}`}>
            {aggressionScore}
            <span className="text-base text-muted-foreground">/100</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="border border-border rounded-lg p-4 text-center"
        >
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
            Tone Level
          </p>
          <Badge variant="secondary" className="text-sm">
            {toneLabel}
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="border border-border rounded-lg p-4 text-center"
        >
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
            Damage Assessment
          </p>
          <p className="text-sm font-medium">{damageAssessment}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border border-border rounded-lg p-6 bg-muted/30"
      >
        <h3 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
          Corporate Translation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">What you mean:</p>
            <p className="text-sm font-medium italic">
              &ldquo;{corporateTranslation.whatYouMean}&rdquo;
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Corporate version:</p>
            <p className="text-sm font-medium">
              &ldquo;{corporateTranslation.corporateVersion}&rdquo;
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <Check className="w-4 h-4 mr-1.5" />
            ) : (
              <Copy className="w-4 h-4 mr-1.5" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowShare(!showShare)}
          >
            <Share2 className="w-4 h-4 mr-1.5" />
            Share
          </Button>
        </div>
        <Button variant="default" size="sm" onClick={onGenerateAnother}>
          <RefreshCw className="w-4 h-4 mr-1.5" />
          Generate Another
        </Button>
      </div>

      {showShare && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border border-border rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Know someone who would send this?
          </p>
          <ShareButtons
            url={emailId ? `https://www.passiveaggressiveemails.com/e/${emailId}` : "https://www.passiveaggressiveemails.com"}
            text={`💀 "${subject}"\n\nAggression score: ${aggressionScore}/100. Tone: ${toneLabel}.\n\nI found a passive-aggressive email generator and I'm scared at how accurate it is. You NEED to try this.`}
            emailId={emailId || ""}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
