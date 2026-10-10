import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "blue" | "navy" | "outline" | "neutral";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  badge,
  badgeVariant = "blue",
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4 flex", align === "center" ? "justify-center" : "justify-start")}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight md:leading-tight",
          dark ? "text-white" : "text-avaas-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
