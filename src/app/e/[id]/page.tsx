import { createMetadata } from "@/lib/seo";
import { ShareButtons } from "@/components/sharing/share-buttons";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    return createMetadata({
      title: "Shared Passive Aggressive Email",
      description: "Check out this passive-aggressive workplace email generated on PassiveAggressiveEmails.com",
      path: `/e/${id}`,
      ogImage: `https://passiveaggressiveemails.com/api/og?title=Passive+Aggressive+Email&score=72&tone=Per+My+Previous+Email`,
    });
  });
}

export default async function SharedEmailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Shared Passive Aggressive Email",
          url: `https://passiveaggressiveemails.com/e/${id}`,
          creator: {
            "@type": "Organization",
            name: "PassiveAggressiveEmails.com",
          },
        }}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              Shared Email
            </p>
            <h1 className="text-2xl md:text-3xl font-heading font-bold">
              Someone thought you needed to see this.
            </h1>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm mb-8">
            <div className="bg-muted/50 px-6 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                Shared Email
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground text-center py-8">
                This email was generated on PassiveAggressiveEmails.com.
                <br />
                Generate your own below.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-3">
              Know someone who would send this?
            </p>
            <ShareButtons
              url={`https://passiveaggressiveemails.com/e/${id}`}
              text="Check out this passive-aggressive email I found 💀"
              emailId={id}
            />
          </div>

          <div className="text-center">
            <Link
              href="/#generator"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
            >
              Generate Your Own
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
