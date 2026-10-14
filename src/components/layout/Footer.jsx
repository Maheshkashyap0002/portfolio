import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  Download,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { personalInfo } from "../../data/personalInfo";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sitemap = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills & Stack", path: "/skills" },
    { name: "Projects / Work", path: "/projects" },
    { name: "Education & Exp", path: "/experience" },
    { name: "Get in Touch", path: "/contact" },
  ];

  const featuredProjects = [
    { name: "AI Attendance System", path: "/projects" },
    { name: "Bus Geolocation Platform", path: "/projects" },
    { name: "Airbnb Booking Engine", path: "/projects" },
    { name: "Zerodha Trading Terminal", path: "/projects" },
    { name: "Spotify Backend API", path: "/projects" },
    { name: "Banking Ledger Engine", path: "/projects" },
  ];

  return (
    <footer className="border-t border-[#E7E7E7] bg-[#FAFAF9] text-[#171717] mt-auto">
      {/* ================= TOP CTA BANNER ================= */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-[#E7E7E7] bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F6F4] text-[#171717] border border-[#E7E7E7]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Software Engineering Showcase • Full-Stack Roles</span>
              </div>
              <motion.h2
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#171717] leading-[1.1]"
              >
                Let's engineer something extraordinary together.
              </motion.h2>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base text-[#686868] leading-relaxed"
              >
                Demonstrating technical depth, scalable architectures, and disciplined code execution. Open for technical discussions and engineering opportunities.
              </motion.p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#E7E7E7] bg-white text-sm font-semibold text-[#171717] hover:border-black transition-all hover:-translate-y-0.5 cursor-pointer"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#686868]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={personalInfo.resume.url}
                download={personalInfo.resume.filename}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#E7E7E7] bg-white text-sm font-semibold text-[#171717] hover:border-black transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#686868]" />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN FOOTER NAVIGATION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#E7E7E7]">
          {/* Col 1: Identity & Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-xl bg-[#171717] text-white flex items-center justify-center font-extrabold text-sm tracking-tight group-hover:scale-105 transition-transform shadow-xs">
                MK
              </span>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-[#171717] block leading-tight">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono font-medium text-[#686868]">
                  Full Stack Web Developer
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#686868] max-w-sm leading-relaxed">
              B.Tech student at <strong>NIT Raipur</strong> (Class of 2029). Bridging engineering discipline, systematic problem-solving, and MERN full-stack development.
            </p>

            {/* Location & Time Info Pill */}
            <div className="space-y-1.5 pt-2 text-xs text-[#686868]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                <span>Indian Standard Time (UTC+05:30)</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                <span className="font-mono text-[11px]">React 19 • Tailwind CSS • Vite</span>
              </div>
            </div>
          </div>

          {/* Col 2: Sitemap (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#171717]">
              Sitemap
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1.5 text-[#686868] hover:text-[#171717] transition-all hover:translate-x-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-300 group-hover:bg-[#171717] transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Works (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#171717]">
              Featured Projects
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {featuredProjects.map((proj) => (
                <li key={proj.name}>
                  <Link
                    to={proj.path}
                    className="group inline-flex items-center gap-1.5 text-[#686868] hover:text-[#171717] transition-all hover:translate-x-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-300 group-hover:bg-[#171717] transition-colors" />
                    <span>{proj.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Profiles (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#171717]">
              Profiles &amp; Contact
            </h3>
            <div className="space-y-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E7E7E7] hover:border-black transition-all shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#171717]" />
                  <span className="text-xs font-semibold text-[#171717]">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#686868] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E7E7E7] hover:border-black transition-all shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#171717]" />
                  <span className="text-xs font-semibold text-[#171717]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#686868] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E7E7E7] hover:border-black transition-all shadow-2xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#171717] shrink-0" />
                  <span className="text-xs font-semibold text-[#171717] truncate">
                    {personalInfo.socials.email}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#686868] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= PROFESSIONAL BOTTOM BAR ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#686868]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span className="font-medium text-[#171717]">
              © {currentYear} {personalInfo.name}.
            </span>
            <span className="hidden sm:inline">•</span>
            <span>National Institute of Technology Raipur (NITRR)</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono text-[11px] text-[#686868]">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#686868] hidden md:inline">
              Built with precision &amp; care
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7E7E7] bg-white text-xs font-semibold text-[#171717] hover:border-[#171717] hover:shadow-xs transition-all cursor-pointer focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#686868] group-hover:text-[#171717] group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
