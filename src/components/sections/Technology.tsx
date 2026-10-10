import React from "react";
import { technologyContent } from "@/content/technology";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Layers, Server, Sparkles, Check } from "lucide-react";

export function Technology() {
  return (
    <section id="technology" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden bg-dark-grid">
      {/* Glow orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-avaas-blue/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={technologyContent.sectionBadge}
          badgeVariant="blue"
          title={technologyContent.heading}
          subtitle={technologyContent.subheading}
          dark
        />

        {/* 6 Technology Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologyContent.layers.map((layer) => (
            <div
              key={layer.number}
              className="bg-slate-800/80 backdrop-blur border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-avaas-blue/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-avaas-blue bg-avaas-blue/10 px-2.5 py-1 rounded-md border border-avaas-blue/20">
                    LAYER {layer.number}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {layer.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {layer.title}
                </h3>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {layer.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 space-y-2">
                {layer.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-avaas-blue shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Summary Banner */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-avaas-blue">
              {technologyContent.architectureSummary.badge}
            </span>
            <h4 className="text-lg md:text-xl font-bold text-white">
              {technologyContent.architectureSummary.title}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {technologyContent.architectureSummary.description}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 flex items-center justify-center p-4 bg-slate-900/80 rounded-xl border border-slate-700">
            <div className="text-center">
              <span className="text-xs font-mono text-slate-400 block">End-User Device</span>
              <span className="text-sm font-bold text-white mt-1 block">Zero App Compute</span>
              <span className="text-[11px] text-emerald-400 block mt-0.5">Telephony Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
