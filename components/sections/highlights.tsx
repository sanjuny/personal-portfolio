import { highlights } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Highlights() {
  return (
    <section aria-labelledby="highlights-heading" className="border-y border-border">
      <h2 id="highlights-heading" className="sr-only">
        Engineering highlights
      </h2>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 md:grid-cols-4">
        {highlights.map((item, index) => (
          <div
            key={item.secondary}
            className={cn(
              "border-border px-5 py-8 sm:px-8",
              index % 2 === 1 && "border-l",
              index >= 2 && "border-t",
              "md:border-t-0",
              index > 0 && "md:border-l",
            )}
          >
            <p className="text-2xl font-medium tracking-tight sm:text-3xl">
              {item.primary}
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              {item.secondary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
