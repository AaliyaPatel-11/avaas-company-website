import React from "react";
import type { Metadata } from "next";
import { termsOfServiceContent } from "@/content/legal";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for AVAAS SPEECH SYSTEMS PRIVATE LIMITED",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-avaas-blue transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-avaas-blue-light text-avaas-blue flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-avaas-navy">
              {termsOfServiceContent.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last Updated: {termsOfServiceContent.lastUpdated} • {termsOfServiceContent.companyName}
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-avaas-blue-light/50 border border-avaas-blue/20 text-xs text-slate-800 leading-relaxed mb-10">
          <span className="font-semibold block mb-0.5 text-avaas-navy">Corporate Notice</span>
          These Terms of Use govern the public informational web portal for AVAAS SPEECH SYSTEMS PRIVATE LIMITED (CIN: {termsOfServiceContent.cin}).
          For legal inquiries, contact {termsOfServiceContent.contactEmail}.
        </div>

        <div className="space-y-8 text-slate-700 text-sm leading-relaxed border-t border-slate-200 pt-8">
          {termsOfServiceContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-lg font-bold text-avaas-navy">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
