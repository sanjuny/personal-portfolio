"use client";

import { useEffect, useId, useRef, useState } from "react";

import { navItems } from "@/data/profile";
import type { PublicLink } from "@/lib/links";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./theme-toggle";

function ExternalLink({
  link,
  className,
}: {
  link: PublicLink;
  className?: string;
}) {
  return (
    <a
      href={link.href}
      className={className}
      {...(link.external
        ? { target: "_blank", rel: "noreferrer me" }
        : { rel: "me" })}
      {...(link.downloadName ? { download: link.downloadName } : {})}
    >
      {link.label}
    </a>
  );
}

export function SiteNavClient({ links }: { links: PublicLink[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const main = document.getElementById("content");
    const footer = document.getElementById("site-footer");
    if (!open) {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const panel = panelRef.current;
    const getItems = () => {
      const panelItems = panel
        ? [...panel.querySelectorAll<HTMLElement>("a, button")].filter(
            (element) => !element.hasAttribute("disabled"),
          )
        : [];
      const button = menuButtonRef.current;
      return button ? [button, ...panelItems] : panelItems;
    };

    const items = getItems();
    (items[1] ?? items[0])?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = getItems();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass =
    "text-sm text-muted transition-colors hover:text-foreground";

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-sm"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-8">
          <a
            href="#top"
            className="text-[13px] font-medium tracking-[0.16em] uppercase"
          >
            Sanjay M.
          </a>

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "border-b pb-0.5 text-sm transition-colors",
                      active === item.id
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          {links.length > 0 ? (
            <ul className="hidden items-center gap-4 lg:flex">
              {links.map((link) => (
                <li key={link.label}>
                  <ExternalLink link={link} className={linkClass} />
                </li>
              ))}
            </ul>
          ) : null}
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-9 items-center rounded-md px-2 text-sm text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-border">
                  <a
                    href={item.href}
                    className="block py-4 text-2xl tracking-tight"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {links.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <ExternalLink
                      link={link}
                      className="text-sm text-muted hover:text-foreground"
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
        </div>
      ) : null}
    </>
  );
}
