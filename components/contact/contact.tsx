import { profile } from "@/data/profile";
import { social } from "@/data/social";
import { mailtoHref } from "@/lib/links";
import { isResumeAvailable } from "@/lib/resume";

import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Contact() {
  const resumeAvailable = isResumeAvailable();

  return (
    <Section id="contact" labelledBy="contact-heading">
      <h2
        id="contact-heading"
        className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-6xl"
      >
        Let&apos;s build something.
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
        Interested in software engineering, AI-assisted development, or building
        products?
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href={mailtoHref()}>Email me</Button>
        {resumeAvailable ? (
          <Button
            href={social.resumePath}
            variant="secondary"
            download={social.resumeFileName}
          >
            Download resume
          </Button>
        ) : null}
      </div>
      <p className="mt-4 font-mono text-sm text-muted">
        <a className="hover:text-foreground" href={mailtoHref()}>
          {profile.email}
        </a>
      </p>
      <div className="mt-6">
        <SocialLinks includeResume={false} />
      </div>
    </Section>
  );
}
