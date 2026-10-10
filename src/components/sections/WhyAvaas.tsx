import React from "react";
import { whyAvaasContent } from "@/content/whyAvaas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Smartphone, PhoneCall, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function WhyAvaas() {
  return (
    <section id="why-avaas" className="py-20 md:py-32 bg-slate-50 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={whyAvaasContent.sectionBadge}
          title={whyAvaasContent.heading}
          subtitle={whyAvaasContent.subheading}
        />

        {/* Elevated Interface Paradigm Comparison Matrix */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          {/* Header Banner */}
          <div className="p-6 md:p-10 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-avaas-blue/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-avaas-blue bg-avaas-blue/20 border border-avaas-blue/30 px-3 py-1 rounded-full inline-block mb-3">
                Direct Comparison
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {whyAvaasContent.comparison.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300 leading-relaxed">
                {whyAvaasContent.comparison.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop & Tablet Comparison Matrix */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 w-1/4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {whyAvaasContent.comparison.headers[0]}
                  </th>
                  <th className="py-5 px-6 w-3/8">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-slate-200 text-slate-600 flex items-center justify-center">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {whyAvaasContent.comparison.headers[1]}
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-3/8 bg-avaas-blue-light/50 border-l border-avaas-blue/15">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-avaas-blue text-white flex items-center justify-center">
                        <PhoneCall className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-avaas-blue-dark">
                        {whyAvaasContent.comparison.headers[2]}
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-sm">
                {whyAvaasContent.comparison.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="py-5 px-6 font-semibold text-avaas-navy align-top text-sm">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-slate-600 leading-relaxed align-top">
                      {row.traditional}
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-900 bg-avaas-blue-light/30 border-l border-avaas-blue/15 align-top group-hover:bg-avaas-blue-light/40 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-avaas-blue shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.avaas}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="md:hidden divide-y divide-slate-200">
            {whyAvaasContent.comparison.rows.map((row, idx) => (
              <div key={idx} className="p-5 space-y-4">
                <div className="font-bold text-base text-avaas-navy">
                  {row.feature}
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Traditional Apps</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                <div className="bg-avaas-blue-light/40 rounded-xl p-3.5 border border-avaas-blue/20 text-xs">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-avaas-blue-dark mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-avaas-blue" />
                    <span>AVAAS Voice Mobility</span>
                  </div>
                  <p className="font-medium text-slate-900 leading-relaxed">
                    {row.avaas}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
