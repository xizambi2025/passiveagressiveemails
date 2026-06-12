"use client";

import { cn } from "@/lib/utils";

const TONES = [
  { level: 1, label: "Professional", emoji: "😊", color: "bg-green-500" },
  { level: 2, label: "Slightly Annoyed", emoji: "🙂", color: "bg-lime-500" },
  { level: 3, label: "Concerned", emoji: "😐", color: "bg-yellow-500" },
  { level: 4, label: "Passive Aggressive", emoji: "🙃", color: "bg-orange-500" },
  { level: 5, label: "Per My Previous Email", emoji: "😤", color: "bg-red-500" },
  { level: 6, label: "Corporate Assassin", emoji: "💀", color: "bg-red-700" },
];

interface ToneSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function ToneSlider({ value, onChange }: ToneSliderProps) {
  const currentTone = TONES[value - 1];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">Tone</label>
        <span className="text-sm font-medium flex items-center gap-1.5">
          <span>{currentTone.emoji}</span>
          <span>{currentTone.label}</span>
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
          {TONES.map((tone) => (
            <button
              key={tone.level}
              onClick={() => onChange(tone.level)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                tone.color,
                value >= tone.level ? "opacity-100 scale-110" : "opacity-30"
              )}
              aria-label={tone.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
