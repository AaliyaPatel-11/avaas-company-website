"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface VoiceWaveProps {
  className?: string;
  barCount?: number;
  variant?: "orange" | "navy" | "subtle" | "white";
  size?: "sm" | "md" | "lg";
}

export function VoiceWave({
  className,
  barCount = 16,
  variant = "orange",
  size = "md",
}: VoiceWaveProps) {
  const heights = [
    "h-3",
    "h-5",
    "h-8",
    "h-4",
    "h-9",
    "h-6",
    "h-10",
    "h-7",
    "h-4",
    "h-8",
    "h-5",
    "h-10",
    "h-6",
    "h-4",
    "h-7",
    "h-3",
  ];

  const variantColors = {
    orange: "bg-avaas-orange",
    navy: "bg-avaas-navy",
    subtle: "bg-slate-300",
    white: "bg-white/80",
  };

  const sizeHeights = {
    sm: "h-6",
    md: "h-12",
    lg: "h-20",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1.5",
        sizeHeights[size],
        className
      )}
      aria-hidden="true"
    >
      {Array.from({ length: barCount }).map((_, i) => {
        const heightClass = heights[i % heights.length];
        const animIndex = (i % 8) + 1;
        return (
          <span
            key={i}
            className={cn(
              "w-1 rounded-full origin-center transition-all duration-300",
              heightClass,
              variantColors[variant],
              `animate-wave-${animIndex}`
            )}
            style={{
              animationDelay: `${(i * 0.08).toFixed(2)}s`,
            }}
          />
        );
      })}
    </div>
  );
}
