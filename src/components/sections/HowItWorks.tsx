import React from "react";
import { howItWorksContent } from "@/content/howItWorks";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhoneCall, Mic, Cpu, Car, Info } from "lucide-react";

export function HowItWorks() {
  const iconMap = {
    PhoneCall,
    Mic,
    Cpu,
    Car,
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={howItWorksContent.sectionBadge}
          title={howItWorksContent.heading}
          subtitle={howItWorksContent.subheading}
        />

        {/* 4-Step Interactive Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {howItWorksContent.steps.map((step, idx) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={idx}
                className="relative bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-avaas-orange/40 hover:bg-white transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-avaas-orange text-white font-bold text-base flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center group-hover:text-avaas-orange transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-avaas-navy mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-avaas-orange mb-3">
                    {step.summary}
                  </p>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Early Validation Notice Box */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 flex items-start gap-4">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs md:text-sm text-amber-900 leading-relaxed">
            <span className="font-semibold block mb-0.5">Product Development & Pilot Transparency</span>
            {howItWorksContent.stageNote}
          </div>
        </div>
      </div>
    </section>
  );
}
