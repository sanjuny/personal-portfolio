"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import {
  workflowAfter,
  workflowBefore,
  workflowSteps,
  workflowTools,
  type WorkflowStep,
} from "@/data/ai";
import { cn } from "@/lib/utils";

function StepButton({
  step,
  active,
  onSelect,
  className,
}: {
  step: WorkflowStep;
  active: boolean;
  onSelect: (id: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(step.id)}
      className={cn(
        "max-w-full border px-3 py-2 text-center font-mono text-[11px] tracking-[0.12em] uppercase transition-colors sm:text-xs",
        active
          ? "border-accent bg-accent-soft text-accent"
          : "border-border text-foreground hover:border-foreground/30",
        className,
      )}
    >
      {step.label}
    </button>
  );
}

function Rail() {
  return <div aria-hidden className="draw-y h-5 w-px bg-foreground/25" />;
}

export function WorkflowDiagram() {
  const [active, setActive] = useState("review");
  const selected =
    workflowSteps.find((step) => step.id === active) ?? workflowSteps[0];

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="flex flex-col items-center">
        {workflowBefore.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            {index > 0 ? <Rail /> : null}
            <StepButton step={step} active={active === step.id} onSelect={setActive} />
          </div>
        ))}
        <Rail />
        <div className="w-full">
          <div aria-hidden className="draw-x mx-[16.67%] h-px bg-foreground/25" />
          <div className="grid grid-cols-3 gap-2 px-1 sm:gap-3 sm:px-2">
            {workflowTools.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div aria-hidden className="h-4 w-px bg-foreground/25" />
                <StepButton
                  step={step}
                  active={active === step.id}
                  onSelect={setActive}
                  className="w-full"
                />
                <div aria-hidden className="h-4 w-px bg-foreground/25" />
              </div>
            ))}
          </div>
          <div aria-hidden className="draw-x mx-[16.67%] h-px bg-foreground/25" />
        </div>
        {workflowAfter.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <Rail />
            <StepButton step={step} active={active === step.id} onSelect={setActive} />
          </div>
        ))}
      </div>

      <div className="mt-8 min-h-16 text-center" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={selected.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-sm leading-6 text-muted"
          >
            {selected.note}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="mt-6 text-center font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
        AI-assisted. Human-engineered.
      </p>
    </div>
  );
}
