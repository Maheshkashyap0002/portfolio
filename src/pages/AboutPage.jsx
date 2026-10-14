import { ArrowRight, Download, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "../components/ui/Icons";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/ui/Reveal";
import usePageTitle from "../hooks/usePageTitle";

export function AboutPage() {
  usePageTitle("About Me");

  const disciplines = [
    {
      num: "01",
      title: "Frontend Engineering",
      desc: "Crafting fluid, accessible, and responsive interfaces with React.js, Tailwind CSS, and Framer Motion micro-interactions. Obsessed with fast load times and clean component composition.",
      tags: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    },
    {
      num: "02",
      title: "Backend & RESTful APIs",
      desc: "Architecting modular, secure server-side services with Node.js and Express. Implementing idempotent REST APIs, stateless JWT auth with refresh safety, and real-time WebSockets.",
      tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "WebSockets"],
    },
    {
      num: "03",
      title: "Database Modeling",
      desc: "Structuring reliable MongoDB schemas with Mongoose. Experienced with complex document nesting, relational references, indexing strategies, and aggregation pipelines.",
      tags: ["MongoDB", "Mongoose", "Schema Design", "Data Aggregation"],
    },
    {
      num: "04",
      title: "Core CS & Engineering Logic",
      desc: "Applying algorithmic thinking, data structures, and object-oriented design patterns to real-world code. Practicing disciplined Git version control and clean code documentation.",
      tags: ["Data Structures", "OOP", "System Design", "Git & GitHub"],
    },
  ];

  const quickMetrics = [
    { label: "Institution", value: "NIT Raipur", sub: "Institute of National Importance" },
    { label: "Degree", value: "B.Tech Undergrad", sub: "Class of 2025 — 2029" },
    { label: "Primary Stack", value: "MERN Stack", sub: "React • Node • Express • Mongo" },
    { label: "Status", value: "Interview Ready", sub: "Technical Roles & Opportunities" },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">
        
        {/* Header */}
        <SectionHeading
          tag="About Me"
          title="Engineering Precision meets Modern Full-Stack Development."
          subtitle="A look into my background, technical philosophy, and the software principles driving my work."
          className="mb-0"
        />

        {/* ================= EDITORIAL SPLIT (Photo + Narrative, NO Boxed Cards) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Portrait & Quick Metadata */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <div className="relative aspect-[3.4/4] max-w-[280px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-neutral-300 shadow-sm bg-neutral-100">
              <img
                src={personalInfo.portrait}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                onError={(e) => {
                  e.currentTarget.src = personalInfo.portraitFallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs font-bold leading-tight">{personalInfo.name}</div>
                <div className="text-[10px] text-neutral-300 font-mono">B.Tech Student @ NIT Raipur</div>
              </div>
            </div>

            {/* Quick Meta List */}
            <div className="space-y-2.5 text-xs text-neutral-600 max-w-[280px] mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-neutral-900">{personalInfo.availability.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Direct Links */}
            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2 max-w-[280px] mx-auto lg:mx-0 text-xs">
              <a
                href={personalInfo.resume.url}
                download={personalInfo.resume.filename}
                className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/Maheshkashyap0002</span>
              </a>
              <a
                href={`https://${personalInfo.socials.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/mahesh-kashyap02</span>
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{personalInfo.socials.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Story */}
          <div className="lg:col-span-8 space-y-6">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#686868]">
                  The Narrative
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight leading-snug">
                  Full-stack engineering grounded in systematic computational problem-solving.
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed">
                  {personalInfo.about.lead}
                </p>

                <p>
                  {personalInfo.about.paragraphs[0]}
                </p>

                <p>
                  {personalInfo.about.paragraphs[1]}
                </p>

                <p>
                  Alongside my academic curriculum at <strong>NIT Raipur</strong>, I build real-world web applications. My work spans AI-powered facial verification systems, real-time geolocation tracking for public transit, and algorithmic stock trading terminals.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold hover:border-black transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ================= BORDERLESS METRICS BAR (NOT Boxes) ================= */}
        <Reveal delay={0.1}>
          <div className="border-y border-neutral-200 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {quickMetrics.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  {item.label}
                </div>
                <div className="text-lg sm:text-xl font-black text-[#171717]">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-500">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ================= DISCIPLINES & FOCUS (Minimalist Row List, NO Cards) ================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#686868]">
                Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                What I Bring to the Table
              </h3>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:text-blue-600 transition-colors"
            >
              <span>View full skills inventory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {disciplines.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start group">
                  <div className="md:col-span-1 text-xs font-mono font-bold text-neutral-400 pt-0.5">
                    {item.num}
                  </div>
                  <div className="md:col-span-4">
                    <h4 className="text-lg sm:text-xl font-bold text-[#171717] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-600 bg-neutral-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM EDITORIAL SIGN-OFF ================= */}
        <Reveal delay={0.2}>
          <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for Full-Stack Roles &amp; Technical Interviews</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold">
                Let's build something remarkable together.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400">
                Reach out for full-stack opportunities, engineering collaborations, or project inquiries.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/experience"
                className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold hover:border-white hover:text-white transition-colors"
              >
                View Experience
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

export default AboutPage;
