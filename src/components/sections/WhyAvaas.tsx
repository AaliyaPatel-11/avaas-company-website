import React from "react";
import { whyAvaasContent } from "@/content/whyAvaas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mic, Accessibility, MessageSquare, Languages } from "lucide-react";

export function WhyAvaas() {
  const iconMap = {
    Mic,
    Accessibility,
    MessageSquare,
    Languages,
  };

  return (
    <section id="why-avaas" className="py-20 md:py-32 bg-slate-50 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={whyAvaasContent.sectionBadge}
          title={whyAvaasContent.heading}
          subtitle={whyAvaasContent.subheading}
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyAvaasContent.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon];
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-avaas-orange bg-avaas-orange-light px-2.5 py-0.5 rounded-full">
                      {pillar.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-avaas-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 bg-slate-900 text-white border-b border-slate-800">
            <h3 className="text-xl md:text-2xl font-bold">
              {whyAvaasContent.comparison.title}
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              {whyAvaasContent.comparison.subtitle}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6 w-1/4">
                    {whyAvaasContent.comparison.headers[0]}
                  </th>
                  <th className="py-4 px-6 w-3/8 text-slate-500">
                    {whyAvaasContent.comparison.headers[1]}
                  </th>
                  <th className="py-4 px-6 w-3/8 text-avaas-orange-dark bg-avaas-orange-light/40">
                    {whyAvaasContent.comparison.headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {whyAvaasContent.comparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 align-top">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-900 bg-avaas-orange-light/20 align-top">
                      {row.avaas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
