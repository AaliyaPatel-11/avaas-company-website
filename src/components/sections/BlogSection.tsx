import React from "react";
import { blogContent } from "@/content/blog";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ExternalLink, BookOpen, ArrowUpRight } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={blogContent.sectionBadge}
          title={blogContent.heading}
          subtitle={blogContent.subheading}
        />

        {/* Featured Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogContent.featuredArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-avaas-orange/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-avaas-orange uppercase tracking-wider bg-avaas-orange-light px-2.5 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-avaas-navy mb-3 group-hover:text-avaas-orange transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-avaas-orange transition-colors">
                <span>Read on AVAAS Blog</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Blog Action Button */}
        <div className="text-center">
          <Button
            href={blogContent.blogUrl}
            isExternal
            variant="dark"
            size="lg"
            className="shadow-sm hover:shadow-md"
          >
            <BookOpen className="w-4 h-4 text-avaas-orange" />
            <span>{blogContent.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Button>
        </div>
      </div>
    </section>
  );
}
