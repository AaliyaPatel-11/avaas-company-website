import React from "react";
import { aboutContent } from "@/content/about";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  UserCheck,
  Briefcase,
  Compass,
  HeartHandshake,
  Smartphone,
  Phone,
  CheckCircle2,
  XCircle,
  Quote,
} from "lucide-react";

export function About() {
  const iconMap = {
    UserCheck,
    Briefcase,
    Compass,
    HeartHandshake,
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={aboutContent.sectionBadge}
          title={aboutContent.heading}
          subtitle={aboutContent.subheading}
        />

        {/* The Friction Comparison Matrix (Apps vs Voice) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Legacy App Friction */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-100/80 text-red-600 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  The App Barrier
                </h3>
                <p className="text-xs text-slate-500">
                  Assumes high digital literacy & complex workflows
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {aboutContent.appFrictionList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Voice-First Simplicity */}
          <div className="bg-gradient-to-br from-avaas-navy to-slate-900 text-white border border-slate-800 rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-avaas-orange/20 text-avaas-orange flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {aboutContent.voiceAlternative.heading}
                </h3>
                <p className="text-xs text-slate-300">
                  Universal accessibility through standard voice calls
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-6">
              {aboutContent.voiceAlternative.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-700/60">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-avaas-orange shrink-0" />
                <span>Zero app installations or sign-up friction</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-avaas-orange shrink-0" />
                <span>Natural landmark speech resolution</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-avaas-orange shrink-0" />
                <span>Works on any mobile phone or landline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Origin Story */}
        <div className="bg-avaas-cream border border-amber-200/50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
              Origin & Insight
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-avaas-navy mb-6">
              {aboutContent.originStory.title}
            </h3>
            <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
              {aboutContent.originStory.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white rounded-xl border border-amber-200/80 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-avaas-orange/10 text-avaas-orange flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-avaas-orange block mb-1">
                  The Core Realization
                </span>
                <p className="text-sm md:text-base font-medium text-slate-900">
                  {aboutContent.originStory.keyInsight}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Demographics */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-avaas-navy">
              Who AVAAS is built for
            </h3>
            <p className="mt-2 text-sm md:text-base text-slate-600">
              Designed for demographic segments systematically overlooked by digital-only mobility apps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.targetAudience.map((audience, idx) => {
              const Icon = iconMap[audience.iconName];
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm hover:border-avaas-orange/50 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-avaas-orange-light text-avaas-orange flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-avaas-navy mb-2">
                    {audience.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy Quote Banner */}
        <div className="relative rounded-2xl bg-avaas-navy p-8 md:p-12 text-white overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote className="w-32 h-32" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-4 text-slate-100">
              &ldquo;{aboutContent.quote.text}&rdquo;
            </p>
            <span className="text-xs uppercase tracking-widest text-avaas-orange font-bold">
              — {aboutContent.quote.attribution}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
