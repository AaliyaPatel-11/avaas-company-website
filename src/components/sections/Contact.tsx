"use client";

import React, { useState } from "react";
import { contactContent } from "@/content/contact";
import { companyInfo } from "@/content/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Check } from "lucide-react";

export function Contact() {
  const [selectedTopic, setSelectedTopic] = useState(
    contactContent.inquiryTypes[0].subject
  );
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(selectedTopic);
    const bodyEncoded = encodeURIComponent(
      `Name: ${senderName || "Not provided"}\nEmail: ${
        senderEmail || "Not provided"
      }\n\nMessage:\n${senderMessage}`
    );
    window.location.href = `mailto:${companyInfo.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={contactContent.sectionBadge}
          title={contactContent.heading}
          subtitle={contactContent.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-avaas-navy">
              Direct Communication
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {contactContent.description}
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-avaas-orange-light text-avaas-orange flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                    Email Us
                  </span>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-sm md:text-base font-bold text-avaas-navy hover:text-avaas-orange transition-colors truncate block"
                  >
                    {companyInfo.contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs text-avaas-orange hover:underline font-medium mt-1 inline-flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">
                          Copied to clipboard
                        </span>
                      </>
                    ) : (
                      "Copy email address"
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-avaas-orange-light text-avaas-orange flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                    Phone Line
                  </span>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-sm md:text-base font-bold text-avaas-navy hover:text-avaas-orange transition-colors"
                  >
                    {companyInfo.contact.displayPhone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Corporate Office Hours (IST)
                  </p>
                </div>
              </div>

              {/* Registered Office Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-avaas-orange-light text-avaas-orange flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                    Registered Office
                  </span>
                  <p className="text-sm font-semibold text-slate-800">
                    {companyInfo.legalName}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {companyInfo.registeredOffice.fullFormatted}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    CIN: {companyInfo.cin}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Dispatch Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-avaas-navy mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Select your inquiry type to compose directly to our corporate inbox.
            </p>

            <form onSubmit={handleDirectEmail} className="space-y-4">
              {/* Topic Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Inquiry Nature
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {contactContent.inquiryTypes.map((type) => (
                    <button
                      key={type.subject}
                      type="button"
                      onClick={() => setSelectedTopic(type.subject)}
                      className={`text-xs text-left p-2.5 rounded-lg border font-medium transition-all ${
                        selectedTopic === type.subject
                          ? "bg-avaas-navy text-white border-avaas-navy shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-avaas-orange focus:ring-1 focus:ring-avaas-orange focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-avaas-orange focus:ring-1 focus:ring-avaas-orange focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Message / Context
                </label>
                <textarea
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Tell us about your organization or inquiry..."
                  className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-avaas-orange focus:ring-1 focus:ring-avaas-orange focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full justify-center shadow-md shadow-avaas-orange/15"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Email & Send</span>
                </Button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Opens your default email client with your message pre-filled.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
