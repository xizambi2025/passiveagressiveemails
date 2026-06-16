import {
  getMethodologyCopy,
  getMethodologyLevelLabel,
  getMethodologyTones,
} from "@/lib/company-localized";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export function MethodologyContent({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = getMethodologyCopy(locale);
  const tones = getMethodologyTones(locale);
  const levelLabel = getMethodologyLevelLabel(locale);

  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.toneScaleTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{copy.toneScaleIntro}</p>
            <div className="space-y-4">
              {tones.map((tone) => (
                <div key={tone.level} className={`border-l-4 ${tone.color} pl-4 py-2`}>
                  <h3 className="font-medium">
                    {levelLabel} {tone.level}: {tone.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tone.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.aggressionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{copy.aggressionIntro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {copy.aggressionFactors.map((item) => (
                <div key={item.factor} className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm font-medium">{item.factor}</h3>
                    <span className="text-xs text-muted-foreground">{item.weight}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.damageTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.damageParagraph}</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.translationTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.translationParagraph}</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.qualityTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{copy.qualityIntro}</p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {copy.qualityBullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
