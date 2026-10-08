import React from "react";
import { roadmapContent } from "@/content/roadmap";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, ArrowRight, Flag } from "lucide-react";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-slate-50 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={roadmapContent.sectionBadge}
          title={roadmapContent.heading}
          subtitle={roadmapContent.subheading}
        />

        {/* 3 Phased Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roadmapContent.phases.map((phase) => (
            <div
              key={phase.phase}
              className={`rounded-2xl p-8 transition-all flex flex-col justify-between ${
                phase.isCurrent
                  ? "bg-white border-2 border-avaas-orange shadow-lg shadow-avaas-orange/5 relative"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {phase.isCurrent && (
                <div className="absolute -top-3 left-8 bg-avaas-orange text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  Active Execution
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      phase.isCurrent
                        ? "bg-avaas-orange-light text-avaas-orange-dark border border-avaas-orange/20"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {phase.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-avaas-navy mb-3">
                  {phase.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {phase.objective}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Milestones
                </span>
                {phase.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        phase.isCurrent ? "text-avaas-orange" : "text-slate-400"
                      }`}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
