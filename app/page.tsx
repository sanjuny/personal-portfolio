import { AiEngineering } from "@/components/ai/ai-engineering";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { GithubSection } from "@/components/github/github-section";
import { Hero } from "@/components/hero/hero";
import { PersonalProjects } from "@/components/projects/personal-projects";
import { TechStack } from "@/components/projects/tech-stack";
import { About } from "@/components/sections/about";
import { CurrentFocus } from "@/components/sections/current-focus";
import { Education } from "@/components/sections/education";
import { EngineeringLab } from "@/components/sections/engineering-lab";
import { Highlights } from "@/components/sections/highlights";
import { Philosophy } from "@/components/sections/philosophy";

export const revalidate = 3600;

export default function Page() {
  return (
    <main id="content" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
      <Highlights />
      <About />
      <AiEngineering />
      <Experience />
      <PersonalProjects />
      <EngineeringLab />
      <TechStack />
      <Philosophy />
      <CurrentFocus />
      <GithubSection />
      <Education />
      <Contact />
    </main>
  );
}
