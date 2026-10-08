"use client";

import React from "react";
import { heroContent } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { VoiceWave } from "@/components/ui/VoiceWave";
import { ArrowRight, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-subtle-grid border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Company Stage Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-avaas-orange" />
            <span>{heroContent.badge}</span>
          </div>

          {/* Tagline */}
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-avaas-orange mb-3">
            {heroContent.tagline}
          </p>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-avaas-navy leading-[1.1] mb-6">
            Building the future of{" "}
            <span className="text-avaas-orange">voice-first mobility</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            {heroContent.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Button
              href={heroContent.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto group shadow-md shadow-avaas-orange/15"
            >
              <span>{heroContent.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>

            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-slate-500" />
              <span>{heroContent.secondaryCta.label}</span>
            </Button>
          </div>

          {/* Minimal Voice Waveform Concept Preview */}
          <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-16">
            <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-avaas-orange" />
                <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                  Conversational Voice Concept
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Audio • Full Duplex
              </span>
            </div>

            <div className="py-2">
              <VoiceWave variant="orange" size="md" barCount={22} />
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <span className="italic">
                &ldquo;Book an auto from Secunderabad Station to Malkajgiri.&rdquo;
              </span>
              <span className="text-slate-700 font-medium">Conversational Resolution</span>
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
            {heroContent.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-avaas-orange mb-1">
                  {pillar.title}
                </div>
                <div className="text-sm font-semibold text-avaas-navy">
                  {pillar.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
