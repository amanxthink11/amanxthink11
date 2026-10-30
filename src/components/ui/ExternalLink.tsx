import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel"> & {
  showArrow?: boolean;
};

export default function ExternalLink({ children, className = "", showArrow = true, ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-[1em] shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
