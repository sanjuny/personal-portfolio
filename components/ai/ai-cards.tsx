"use client";

import { useState } from "react";

import { aiPractices } from "@/data/ai";
import { cn } from "@/lib/utils";

export function AiCards() {
  const [active, setActive] = useState(aiPractices[0]?.id ?? "");

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {aiPractices.map((practice, index) => {
        const selected = active === practice.id;
        return (
          <article
            key={practice.id}
            className={cn(
              "fade-up border p-5 transition-colors sm:p-6",
              selected ? "border-accent bg-accent-soft" : "border-border",
            )}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <h3 className="text-lg font-medium">
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(practice.id)}
                className="w-full text-left"
              >
                <span className="block font-mono text-[11px] tracking-[0.16em] text-accent">
                  {practice.number}
                </span>
                <span className="mt-3 block">{practice.title}</span>
              </button>
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">{practice.summary}</p>
            {selected ? (
              <p className="mt-3 text-sm leading-6 text-foreground">
                {practice.detail}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
