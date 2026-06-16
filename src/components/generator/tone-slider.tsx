"use client";

import { cn } from "@/lib/utils";

const TONE_COLORS = [
  "bg-green-500",
  "bg-lime-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-red-500",
  "bg-red-700",
];

const TONE_EMOJIS = ["😊", "🙂", "😐", "🙃", "😤", "💀"];

interface ToneSliderProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  toneLabels?: string[];
}

export function ToneSlider({ value, onChange, label = "Tone", toneLabels }: ToneSliderProps) {
  const currentLabel = toneLabels?.[value - 1] ?? "";
  const currentEmoji = TONE_EMOJIS[value - 1];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-medium flex items-center gap-1.5">
          <span>{currentEmoji}</span>
          <span>{currentLabel}</span>
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={1}
          max={6}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-foreground bg-muted"
        />
        <div className="flex justify-between mt-2">
          {TONE_COLORS.map((color, i) => (
            <button
              key={i}
              onClick={() => onChange(i + 1)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                color,
                value >= i + 1 ? "opacity-100 scale-110" : "opacity-30"
              )}
              aria-label={toneLabels?.[i] ?? `Level ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
