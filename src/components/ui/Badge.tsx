import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "orange" | "navy" | "outline" | "success" | "neutral";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "orange",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    orange:
      "bg-avaas-orange-light text-avaas-orange-dark border-avaas-orange/20",
    navy:
      "bg-avaas-navy/5 text-avaas-navy border-avaas-navy/15",
    outline:
      "bg-transparent text-slate-700 border-slate-200",
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    neutral:
      "bg-slate-100 text-slate-700 border-slate-200",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs md:text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
