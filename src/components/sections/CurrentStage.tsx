import React from "react";
import { currentStageContent } from "@/content/currentStage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Target, Activity } from "lucide-react";

export function CurrentStage() {
  const statusColorMap: Record<string, string> = {
    "Active Focus": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In Development": "bg-amber-50 text-amber-700 border-amber-200",
    Planned: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <section id="stage" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={currentStageContent.sectionBadge}
          title={currentStageContent.heading}
          subtitle={currentStageContent.subheading}
        />

        {/* Transparent Statement Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-avaas-orange-light text-avaas-orange flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-avaas-navy mb-2">
                Active MVP Validation & Engineering
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {currentStageContent.statement}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentStageContent.focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      statusColorMap[area.status] || "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {area.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-avaas-navy mb-2">
                  {area.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Grounded Execution Commitment */}
        <div className="bg-avaas-navy text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-avaas-orange shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentStageContent.commitment.title}
              </h4>
              <p className="text-xs text-slate-300">
                {currentStageContent.commitment.description}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-mono text-slate-400">
            Validated Product Evolution
          </div>
        </div>
      </div>
    </section>
  );
}
