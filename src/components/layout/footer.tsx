import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Generator", href: "/" },
      { label: "Examples", href: "/examples" },
      { label: "Hall of Fame", href: "/hall-of-fame" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Clients", href: "/categories/clients" },
      { label: "Coworkers", href: "/categories/coworkers" },
      { label: "Managers", href: "/categories/managers" },
      { label: "Deadlines", href: "/categories/deadlines" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Methodology", href: "/methodology" },
      { label: "Editorial Standards", href: "/editorial-standards" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Column grid */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:py-16 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-2 border-t border-border/40 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} PassiveAggressiveEmails. All rights reserved.</p>
          <p className="italic">Made with barely concealed frustration</p>
        </div>
      </div>
    </footer>
  );
}
