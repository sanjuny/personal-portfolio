"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const columns = [
  { id: "frontend", label: "Frontend", items: ["Next.js", "React"] },
  { id: "backend", label: "Backend", items: ["NestJS", "Node.js"] },
  { id: "ai", label: "AI", items: ["Cursor", "ChatGPT", "Claude"] },
] as const;

function VLine({ delay = 0 }: { delay?: number }) {
  return (
    <div
      aria-hidden
      className="draw-y h-6 w-px bg-foreground/25"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function HRule({ delay = 0 }: { delay?: number }) {
  return (
    <div
      aria-hidden
      className="draw-x mx-[16.67%] h-px bg-foreground/25"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function Endpoint({ label }: { label: string }) {
  return (
    <div className="border border-border px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-foreground uppercase sm:text-[11px]">
      {label}
    </div>
  );
}

export function SystemDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <figure className="w-full" aria-labelledby="system-diagram-caption">
      <div className="flex flex-col items-center">
        <Endpoint label="Sanjay" />
        <VLine />
        <div className="w-full">
          <HRule delay={80} />
          <div className="grid grid-cols-3">
            {columns.map((column) => {
              const selected = active === column.id;
              return (
                <div
                  key={column.id}
                  className="flex h-full min-w-0 flex-col items-center px-1 sm:px-2"
                >
                  <VLine delay={140} />
                  <motion.div
                    className={cn(
                      "w-full flex-1 border px-2 py-3 text-center sm:px-3 sm:py-5",
                      selected ? "border-accent bg-accent-soft" : "border-border",
                    )}
                    onHoverStart={() => setActive(column.id)}
                    onHoverEnd={() => setActive(null)}
                    whileHover={reduce ? undefined : { y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p
                      className={cn(
                        "font-mono text-[10px] tracking-[0.16em] uppercase sm:text-[11px]",
                        selected ? "text-accent" : "text-foreground",
                      )}
                    >
                      {column.label}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {column.items.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[11px] text-muted sm:text-xs"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <VLine delay={220} />
                </div>
              );
            })}
          </div>
          <HRule delay={260} />
        </div>
        <VLine delay={300} />
        <Endpoint label="Production" />
      </div>
      <figcaption id="system-diagram-caption" className="sr-only">
        Sanjay connects frontend, backend, and AI-assisted tools into production
        software. Frontend uses Next.js and React. Backend uses NestJS and
        Node.js. AI-assisted tools are Cursor, ChatGPT, and Claude.
      </figcaption>
    </figure>
  );
}
