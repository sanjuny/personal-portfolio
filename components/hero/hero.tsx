import { profile } from "@/data/profile";

import { SystemDiagram } from "@/components/architecture/system-diagram";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div id="top" className="mx-auto w-full max-w-6xl px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="fade-up max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {profile.role}
          </p>
          <h1 className="mt-4 text-[2.4rem] leading-[1.05] font-medium tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-xs tracking-[0.14em] text-muted uppercase sm:text-[13px]">
            {profile.positioning}
          </p>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-5 font-mono text-xs text-muted sm:text-sm">
            {profile.heroTech.join(" · ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#experience">Explore experience</Button>
            <Button href="#projects" variant="secondary">
              View projects
            </Button>
          </div>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div className="fade-up lg:pl-4" style={{ animationDelay: "120ms" }}>
          <SystemDiagram />
        </div>
      </div>
    </div>
  );
}
