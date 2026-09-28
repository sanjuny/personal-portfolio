import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-foreground/88",
        secondary:
          "border border-border bg-transparent text-foreground hover:bg-foreground/[0.04]",
        ghost: "text-muted hover:text-foreground",
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  href,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
      {...(external ? { target: "_blank", rel: props.rel ?? "noreferrer" } : {})}
    />
  );
}
