import type { BlogVisual } from "@/lib/blog";

type BlogIllustrationProps = {
  visual: BlogVisual;
  title: string;
  compact?: boolean;
};

const motifPaths: Record<BlogVisual["motif"], string[]> = {
  memo: [
    "M62 52h124v124H62z",
    "M82 78h84M82 104h68M82 130h74M82 154h42",
  ],
  dictionary: [
    "M58 54h70a22 22 0 0 1 22 22v100H80a22 22 0 0 1-22-22zM150 76a22 22 0 0 1 22-22h34v122h-56",
    "M82 86h40M82 112h52M82 138h34M166 88h24M166 116h24",
  ],
  timeline: [
    "M80 62v116M80 76h88M80 122h112M80 166h70",
    "M70 76a10 10 0 1 0 20 0 10 10 0 0 0-20 0zM70 122a10 10 0 1 0 20 0 10 10 0 0 0-20 0zM70 166a10 10 0 1 0 20 0 10 10 0 0 0-20 0z",
  ],
  "follow-up": [
    "M56 74h116v76H56zM56 74l58 44 58-44",
    "M174 138l28 28M202 166h-42M202 166v-42",
  ],
  scale: [
    "M68 152a64 64 0 0 1 128 0M132 152l40-58",
    "M78 154h108M102 118l-18-18M162 118l18-18",
  ],
  "checking-in": [
    "M62 78h102v74H62zM80 98h66M80 122h46",
    "M174 72a34 34 0 1 1-18 62M174 72v30h30",
  ],
  no: [
    "M128 56a72 72 0 1 0 0 144 72 72 0 0 0 0-144zM82 174L174 82",
    "M92 104h72M92 128h44",
  ],
  deadline: [
    "M128 54a72 72 0 1 0 0 144 72 72 0 0 0 0-144zM128 88v44l30 20",
    "M96 44h64M92 212h72",
  ],
  scope: [
    "M60 80h82v82H60zM114 52h82v82h-54V80h-28z",
    "M80 104h42M80 128h30M142 76h34M142 104h22",
  ],
  meeting: [
    "M56 66h144v94H56zM80 184h96M128 160v24",
    "M84 96h88M84 122h64M178 88l16-16M194 72v30h-30",
  ],
};

export function BlogIllustration({ visual, title, compact = false }: BlogIllustrationProps) {
  const paths = motifPaths[visual.motif];
  const heightClass = compact ? "h-36" : "h-64";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-card ${heightClass}`}
      aria-label={`Illustration for ${title}`}
      role="img"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(circle at 24% 18%, ${visual.accent}, transparent 34%), radial-gradient(circle at 82% 78%, ${visual.accent}, transparent 30%)`,
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="24" y="24" width="208" height="208" rx="28" fill={`${visual.accent}12`} />
        <circle cx="210" cy="48" r="18" fill={`${visual.accent}24`} />
        <circle cx="42" cy="206" r="24" fill={`${visual.accent}18`} />
        <path
          d={paths[0]}
          stroke={visual.accent}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`${visual.accent}10`}
        />
        <path
          d={paths[1]}
          stroke="currentColor"
          className="text-foreground/70"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute left-4 top-4 rounded-full border border-border bg-background/85 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
        {visual.label}
      </div>
    </div>
  );
}
