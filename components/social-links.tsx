import { getPublicLinks } from "@/lib/links";
import { isResumeAvailable } from "@/lib/resume";

export function SocialLinks({ includeResume = true }: { includeResume?: boolean }) {
  const links = getPublicLinks(isResumeAvailable()).filter(
    (link) => includeResume || !link.downloadName,
  );
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-muted transition-colors hover:text-foreground"
            {...(link.external
              ? { target: "_blank", rel: "noreferrer me" }
              : { rel: "me" })}
            {...(link.downloadName ? { download: link.downloadName } : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
