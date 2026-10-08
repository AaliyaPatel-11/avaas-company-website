import React from "react";
import { howItWorksContent } from "@/content/howItWorks";
import { MapPin, Navigation, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function LocationIntelligence() {
  const { locationIntelligence } = howItWorksContent;

  return (
    <section className="py-16 md:py-24 bg-avaas-cream/60 border-t border-b border-amber-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-avaas-orange bg-avaas-orange-light px-3 py-1 rounded-full inline-block mb-3">
            Spatial Resolution
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-avaas-navy">
            {locationIntelligence.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {locationIntelligence.description}
          </p>
        </div>

        {/* Interactive Location Pipeline Visualization */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 text-center">
            Conversational Geocoding Transformation
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {locationIntelligence.demoSteps.map((demo, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {demo.stage}
                    </span>
                    <span className="text-[11px] font-mono text-avaas-orange bg-white px-2 py-0.5 rounded border border-slate-200">
                      {demo.meta}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-avaas-navy mb-2">
                    {demo.label}
                  </h4>
                  <p className="text-sm font-medium text-slate-800 bg-white p-3 rounded-lg border border-slate-200/70">
                    {demo.content}
                  </p>
                </div>

                {idx < locationIntelligence.demoSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-avaas-orange text-white items-center justify-center shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Spatial Intelligence Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locationIntelligence.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 text-avaas-orange">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="text-sm font-bold text-avaas-navy">
                  {cap.title}
                </h4>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
