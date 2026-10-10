import React from "react";
import { visionContent } from "@/content/vision";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Car, ShoppingBag, HeartPulse, CalendarCheck, HelpCircle, ArrowRight } from "lucide-react";

export function Vision() {
  const iconMap = {
    Car,
    ShoppingBag,
    HeartPulse,
    CalendarCheck,
    HelpCircle,
  };

  return (
    <section id="vision" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={visionContent.sectionBadge}
          title={visionContent.heading}
          subtitle={visionContent.subheading}
        />

        {/* Today vs Tomorrow Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Today */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-200/70 px-3 py-1 rounded-full inline-block mb-4">
                {visionContent.distinction.today.tag}
              </span>
              <h3 className="text-2xl font-bold text-avaas-navy mb-3">
                {visionContent.distinction.today.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {visionContent.distinction.today.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
              Active Focus: Urban Mobility Access
            </div>
          </div>

          {/* Long Term */}
          <div className="bg-gradient-to-br from-avaas-navy to-slate-900 text-white border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-avaas-blue bg-avaas-blue/20 px-3 py-1 rounded-full inline-block mb-4">
                {visionContent.distinction.tomorrow.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                {visionContent.distinction.tomorrow.title}
              </h3>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-6">
                {visionContent.distinction.tomorrow.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700 text-xs font-mono text-avaas-blue">
              Horizon: Everyday Vernacular Voice Interface
            </div>
          </div>
        </div>

        {/* Future Expansion Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionContent.categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon];
            const isCore = cat.status.includes("Active");
            return (
              <div
                key={idx}
                className={`rounded-xl p-6 border transition-all ${
                  isCore
                    ? "bg-white border-avaas-blue shadow-md shadow-avaas-blue/5"
                    : "bg-slate-50/60 border-slate-200/80"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    isCore
                      ? "bg-avaas-blue text-white"
                      : "bg-slate-200/80 text-slate-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-avaas-navy">
                    {cat.title}
                  </h4>
                </div>

                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block mb-3 ${
                    isCore
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {cat.status}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
