import { getContactCopy } from "@/lib/company-localized";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export function ContactContent({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = getContactCopy(locale);

  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
        </div>

        <div className="space-y-8">
          <section className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-heading font-bold mb-4">{copy.getInTouchTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{copy.getInTouchParagraph}</p>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium">{copy.emailLabel}</span>
                <span className="text-muted-foreground">hi@PassiveAggressiveEmails.com</span>
              </div>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-heading font-bold mb-4">{copy.scenarioTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.scenarioParagraph}</p>
          </section>

          <section className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-heading font-bold mb-4">{copy.responseTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.responseParagraph}</p>
            <p className="text-sm text-muted-foreground italic mt-2">{copy.responseNote}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
