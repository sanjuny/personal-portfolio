import { AiCards } from "@/components/ai/ai-cards";
import { WorkflowDiagram } from "@/components/architecture/workflow-diagram";
import { Section, SectionHeader } from "@/components/ui/section";

export function AiEngineering() {
  return (
    <Section id="ai" labelledBy="ai-heading">
      <SectionHeader
        eyebrow="AI × Engineering"
        title="AI × Software Engineering"
        headingId="ai-heading"
      />
      <blockquote className="mt-6 max-w-2xl border-l border-accent pl-4 text-lg leading-8 text-foreground">
        <p>
          AI doesn&apos;t replace engineering judgment. It expands what I can do.
        </p>
      </blockquote>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
        I use Cursor, ChatGPT, and Claude for codebase analysis, debugging,
        refactoring, and development workflows.
      </p>
      <div className="mt-12">
        <AiCards />
      </div>
      <div className="mt-20">
        <h3 className="text-center font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Workflow
        </h3>
        <div className="mt-8">
          <WorkflowDiagram />
        </div>
      </div>
    </Section>
  );
}
