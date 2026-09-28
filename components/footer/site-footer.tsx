import { profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} — {profile.discipline}
          </p>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted">
          Built with Next.js, TypeScript & AI-assisted engineering.
        </p>
        <p className="font-mono text-xs text-muted">© {year}</p>
      </div>
    </footer>
  );
}
