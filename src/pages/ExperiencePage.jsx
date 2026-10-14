import { Calendar, MapPin, CheckCircle2, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { educationData, experienceData } from "../data/experience";
import { personalInfo } from "../data/personalInfo";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/ui/Reveal";
import usePageTitle from "../hooks/usePageTitle";

export function ExperiencePage() {
  usePageTitle("Experience & Education");

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">
        
        {/* Header & Quick Resume Download Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <SectionHeading
            tag="Career &amp; Academics"
            title="Experience &amp; Education"
            subtitle="A clean timeline of my software engineering work, technical foundation, and academic background at NIT Raipur."
            className="mb-0"
          />

          <a
            href={personalInfo.resume.url}
            download={personalInfo.resume.filename}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shrink-0 self-start md:self-auto cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* ================= WORK & APPLIED EXPERIENCE (Minimalist Timeline, NO Cards) ================= */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#171717]" />
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#171717]">
              Professional &amp; Applied Engineering
            </h3>
          </div>

          <div className="relative border-l border-neutral-200 ml-3 sm:ml-5 pl-6 sm:pl-10 space-y-14">
            {experienceData.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative group">
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 transition-colors ${
                      idx === 0
                        ? "border-emerald-600 ring-4 ring-emerald-50"
                        : "border-[#171717] group-hover:border-blue-600"
                    }`}
                  />

                  {/* Header Line: Period & Type */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#686868] mb-1.5">
                    <span className="font-mono font-semibold text-[#171717] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="font-medium">{exp.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {exp.location}
                    </span>
                    {idx === 0 && (
                      <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Current Focus
                      </span>
                    )}
                  </div>

                  {/* Role & Organization */}
                  <h4 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-neutral-600 mt-0.5">
                    {exp.organization}
                  </p>

                  {/* Narrative Summary */}
                  <p className="text-sm text-neutral-600 leading-relaxed mt-3 max-w-2xl">
                    {exp.summary}
                  </p>

                  {/* Key Points */}
                  <ul className="mt-4 space-y-2.5 max-w-2xl">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Inline Badges */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-100">
                    <span className="text-[11px] font-mono text-neutral-400 mr-1">Technologies:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= ACADEMIC EDUCATION (Minimalist Timeline, NO Cards) ================= */}
        <div className="space-y-10 pt-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#171717]" />
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#171717]">
              Academic Foundation &amp; University
            </h3>
          </div>

          <div className="relative border-l border-neutral-200 ml-3 sm:ml-5 pl-6 sm:pl-10">
            {educationData.map((edu, idx) => (
              <Reveal key={idx} delay={0.15}>
                <div className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#171717]" />

                  {/* Period & Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#686868] mb-1.5">
                    <span className="font-mono font-semibold text-[#171717] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      {edu.period}
                    </span>
                    <span>•</span>
                    <span className="font-medium">{edu.status}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {edu.location}
                    </span>
                  </div>

                  {/* University & Degree */}
                  <h4 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                    {edu.institution}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <p className="text-sm font-semibold text-blue-600">
                      {edu.degree}
                    </p>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                      Institute of National Importance
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mt-3 max-w-2xl">
                    {edu.description}
                  </p>

                  {/* Coursework List */}
                  <div className="mt-5 pt-4 border-t border-neutral-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-2.5">
                      Core Computer Science &amp; Engineering Coursework:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
                      {edu.coursework.map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM EDITORIAL FOOTNOTE ================= */}
        <Reveal delay={0.2}>
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#171717]">
                Ready to review my project implementations?
              </p>
              <p className="text-xs text-neutral-500">
                Explore 6+ full-stack web applications built with the MERN stack.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#171717] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-neutral-300 text-neutral-800 text-xs font-semibold hover:border-black transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

export default ExperiencePage;
