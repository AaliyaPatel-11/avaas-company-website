"use client";

import React, { useState } from "react";
import { contactContent } from "@/content/contact";
import { companyInfo } from "@/content/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  Building2,
  Check,
  Send,
  ExternalLink,
  Copy,
  CheckCircle2,
  RefreshCw,
  Loader2,
} from "lucide-react";

export function Contact() {
  const [selectedTopic, setSelectedTopic] = useState(
    contactContent.inquiryTypes[0].subject
  );
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const constructMailtoUrl = () => {
    const subjectEncoded = encodeURIComponent(selectedTopic);
    const bodyEncoded = encodeURIComponent(
      `Name: ${senderName || "Not provided"}\nEmail: ${
        senderEmail || "Not provided"
      }\nInquiry: ${selectedTopic}\n\nMessage:\n${senderMessage}`
    );
    return `mailto:${companyInfo.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const constructGmailUrl = () => {
    const subjectEncoded = encodeURIComponent(selectedTopic);
    const bodyEncoded = encodeURIComponent(
      `Name: ${senderName || "Not provided"}\nEmail: ${
        senderEmail || "Not provided"
      }\nInquiry: ${selectedTopic}\n\nMessage:\n${senderMessage}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.contact.email}&su=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const handleCopyFullMessage = () => {
    const fullText = `To: ${companyInfo.contact.email}\nSubject: ${selectedTopic}\nFrom: ${senderName} (${senderEmail})\n\nMessage:\n${senderMessage}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // 1. Submit to internal API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          topic: selectedTopic,
          message: senderMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus("success");

      // 2. Safely trigger email dispatch link
      const mailtoUrl = constructMailtoUrl();
      const tempLink = document.createElement("a");
      tempLink.href = mailtoUrl;
      tempLink.target = "_blank";
      tempLink.rel = "noopener noreferrer";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    } catch (err: unknown) {
      console.error("Message dispatch error:", err);
      // Even if API fails, still give user success/fallback to send email
      setStatus("success");
    }
  };

  const handleResetForm = () => {
    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
    setStatus("idle");
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
                <div className="w-10 h-10 rounded-lg bg-avaas-blue-light text-avaas-blue flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                    Email Us
                  </span>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-sm md:text-base font-bold text-avaas-navy hover:text-avaas-blue transition-colors truncate block"
                  >
                    {companyInfo.contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs text-avaas-blue hover:underline font-medium mt-1 inline-flex items-center gap-1"
                  >
                    {copiedEmail ? (
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
                <div className="w-10 h-10 rounded-lg bg-avaas-blue-light text-avaas-blue flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                    Phone Line
                  </span>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-sm md:text-base font-bold text-avaas-navy hover:text-avaas-blue transition-colors"
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
                <div className="w-10 h-10 rounded-lg bg-avaas-blue-light text-avaas-blue flex items-center justify-center shrink-0">
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
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <h3 className="text-xl font-bold text-avaas-navy mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Select your inquiry type to communicate directly with our corporate team.
            </p>

            {status === "success" ? (
              <div className="bg-white border border-emerald-200 rounded-xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Message Prepared Successfully!
                    </h4>
                    <p className="text-xs text-slate-500">
                      Your message to <span className="font-semibold text-slate-700">{companyInfo.contact.email}</span> is ready.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <p>
                    <span className="font-semibold text-slate-800">Subject:</span> {selectedTopic}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">From:</span> {senderName} ({senderEmail})
                  </p>
                  <p className="line-clamp-2 italic text-slate-500">
                    &ldquo;{senderMessage}&rdquo;
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide block">
                    Choose Dispatch Method:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={constructGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-avaas-blue hover:bg-avaas-blue-hover shadow-sm transition-all text-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in Gmail Web</span>
                    </a>

                    <a
                      href={constructMailtoUrl()}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-avaas-navy bg-white hover:bg-slate-50 border border-slate-300 transition-all text-center"
                    >
                      <Mail className="w-4 h-4 text-avaas-blue" />
                      <span>Open Default Mail App</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyFullMessage}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Message copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Copy message details to clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-avaas-blue transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send another message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-avaas-blue focus:ring-1 focus:ring-avaas-blue focus:outline-none"
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
                      className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-avaas-blue focus:ring-1 focus:ring-avaas-blue focus:outline-none"
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
                    className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-avaas-blue focus:ring-1 focus:ring-avaas-blue focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === "submitting"}
                    className="w-full justify-center shadow-md shadow-avaas-blue/15"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </Button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Dispatches your message directly to {companyInfo.contact.email}.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
