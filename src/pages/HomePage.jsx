import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  ArrowDown,
  GraduationCap,
  Briefcase,
  Trophy,
  Landmark,
  Code2,
  Database,
  Server,
} from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import { projectsData } from "../data/projects";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import Reveal from "../components/ui/Reveal";
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  NodeIcon,
  MongoIcon,
} from "../components/ui/Icons";
import usePageTitle from "../hooks/usePageTitle";

export function HomePage() {
  usePageTitle("Home");
  const shouldReduceMotion = useReducedMotion();
  const [imageSrc, setImageSrc] = useState(personalInfo.portrait);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.45, 0.15]);

  const handleImageError = () => {
    if (imageSrc !== personalInfo.portraitFallback) {
      setImageSrc(personalInfo.portraitFallback);
    }
  };

  const featuredProjects = projectsData.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatVariants = {
    animate: shouldReduceMotion
      ? {}
      : {
          y: [-3, 3, -3],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
  };

  const scrollToNextSection = () => {
    const el = document.getElementById("about-preview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* ================= 100VH HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="relative isolate min-h-screen lg:h-screen lg:max-h-[960px] w-full flex flex-col justify-between pt-20 sm:pt-22 pb-4 sm:pb-5 overflow-hidden"
      >
        {/* Public Background Image (bg.jpg) with Parallax Scrolling Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <motion.img
            style={shouldReduceMotion ? { opacity: 0.95 } : { y: bgY, scale: bgScale, opacity: bgOpacity }}
            src="/images/bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.02]"
          />
          {/* Subtle gentle blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col justify-between py-1 sm:py-2 z-10"
          >
          {/* Top Sub-Bar: Right-aligned Location tag per mockup */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-end gap-3 text-xs"
          >
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#4B5563] font-medium bg-white/85 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E7E7E7] shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#BE5A4D]" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* 2-Column Core Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
            {/* ================= LEFT COLUMN ================= */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center space-y-3.5 max-w-xl"
            >
              {/* Role Pill Badge */}
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#B85D4F] border border-[#F3C8BE] shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#EB7753] to-[#BA3F68] text-white flex items-center justify-center font-mono text-[10px]">
                    &lt;/&gt;
                  </span>
                  <span>{personalInfo.role}</span>
                </span>
              </div>

              {/* Massive Name with Warm Floral Bloom Gradient on KUMAR */}
              <div className="space-y-0 select-none">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-black tracking-tight uppercase leading-[0.9] text-[#111827]">
                  MAHESH
                </h1>
                <div className="relative inline-block">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-black tracking-tight uppercase leading-[0.95] bg-gradient-to-r from-[#EB7753] via-[#BA3F68] to-[#6E1E5C] bg-clip-text text-transparent">
                    KUMAR
                  </h1>
                  {/* Hand-Drawn Floral Wave Underline with matching gradient */}
                  <svg
                    className="w-full h-3 mt-1"
                    viewBox="0 0 220 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="kumarWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EB7753" />
                        <stop offset="50%" stopColor="#BA3F68" />
                        <stop offset="100%" stopColor="#6E1E5C" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 2 8 C 45 2, 120 1, 160 5 C 185 8, 205 10, 218 5 C 190 12, 90 11, 2 8 Z"
                      fill="url(#kumarWaveGradient)"
                      opacity="0.9"
                    />
                  </svg>
                </div>
              </div>

              {/* Subtitle with highlighted gradient text */}
              <p className="text-base sm:text-lg font-bold tracking-tight text-[#111827] leading-snug">
                Designing scalable systems with modern{" "}
                <span className="text-[#C84D58] font-extrabold">
                  full-stack engineering.
                </span>
              </p>

              {/* Short Bio */}
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md">
                {personalInfo.heroBio}
              </p>

              {/* Primary Action Buttons & Socials */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D86A53] via-[#D25D53] to-[#C84F59] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#D86A53]/30 hover:shadow-[#D86A53]/45 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>View Projects</span>
                </Link>

                <a
                  href={personalInfo.resume.url}
                  download={personalInfo.resume.filename}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#171717] border border-[#E7E7E7] font-semibold text-xs sm:text-sm shadow-xs hover:border-[#BE5A4D] hover:text-[#BE5A4D] hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4 text-[#686868]" />
                  <span>Download CV</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white text-[#171717] border border-[#E7E7E7] flex items-center justify-center hover:border-[#BE5A4D] hover:scale-105 transition-all shadow-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`https://${personalInfo.socials.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white text-[#171717] border border-[#E7E7E7] flex items-center justify-center hover:border-[#0A66C2] hover:text-[#0A66C2] hover:scale-105 transition-all shadow-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              {/* 3 Bottom Feature Cards in a Row */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-2.5 rounded-2xl border border-[#E7E7E7] bg-white/95 backdrop-blur-xs shadow-2xs hover:border-[#F3C8BE] transition-colors">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-6 h-6 rounded-lg bg-[#FDF0EE] text-[#BE5A4D] flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-[#171717]">9+</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#171717]">Projects</div>
                  <div className="text-[10px] text-[#686868] truncate">MERN &amp; APIs</div>
                </div>

                <div className="p-2.5 rounded-2xl border border-[#E7E7E7] bg-white/95 backdrop-blur-xs shadow-2xs hover:border-[#F3C8BE] transition-colors">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-6 h-6 rounded-lg bg-[#FDF0EE] text-[#BE5A4D] flex items-center justify-center">
                      <Landmark className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-[#171717]">NIT Raipur</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#171717]">B.Tech '29</div>
                  <div className="text-[10px] text-[#686868] truncate">Full Stack</div>
                </div>

                <div className="p-2.5 rounded-2xl border border-[#E7E7E7] bg-white/95 backdrop-blur-xs shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-6 h-6 rounded-lg bg-[#FFF6E9] text-[#D97706] flex items-center justify-center">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-[#171717]">Engineering</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#171717]">Innovator</div>
                  <div className="text-[10px] text-[#686868] truncate">Dream • Build</div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT COLUMN (Circular Portrait & Badges) ================= */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative py-6 lg:py-0"
            >
              {/* Circular Container matching user request */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] xl:w-[340px] xl:h-[340px] aspect-square rounded-full group">
                {/* Orbital Floral Rings */}
                <div className="absolute -inset-6 sm:-inset-8 border-2 border-[#BE5A4D]/35 rounded-full -rotate-12 pointer-events-none scale-105" />
                <div className="absolute -inset-9 sm:-inset-12 border border-[#D77D70]/25 rounded-full rotate-6 pointer-events-none scale-110" />

                {/* Floating Badge 1: React.js (Top Left) */}
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -top-2 -left-3 sm:-left-5 z-20 flex items-center gap-2 p-2 px-3 rounded-2xl bg-white border border-[#E7E7E7] shadow-xl shadow-rose-950/8 hover:scale-105 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center">
                    <ReactIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#111827]">React.js</div>
                    <div className="text-[9px] font-medium text-[#686868]">Frontend</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Node.js (Bottom Left) */}
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 -left-3 sm:-left-5 z-20 flex items-center gap-2 p-2 px-3 rounded-2xl bg-white border border-[#E7E7E7] shadow-xl shadow-emerald-950/8 hover:scale-105 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <NodeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#111827]">Node.js</div>
                    <div className="text-[9px] font-medium text-[#686868]">Backend</div>
                  </div>
                </motion.div>

                {/* Floating Badge 3: MongoDB (Right Center) */}
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                  className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-20 flex items-center gap-2 p-2 px-3 rounded-2xl bg-white border border-[#E7E7E7] shadow-xl shadow-emerald-950/8 hover:scale-105 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <MongoIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#111827]">MongoDB</div>
                    <div className="text-[9px] font-medium text-[#686868]">Database</div>
                  </div>
                </motion.div>

                {/* Main Circular Portrait Card */}
                <div className="h-full w-full p-2.5 rounded-full border-[6px] border-white bg-white shadow-2xl shadow-rose-950/15 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F6F6F4]">
                    <img
                      src={imageSrc}
                      alt={personalInfo.portraitAlt}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-[center_16%] filter contrast-[1.03]"
                    />
                  </div>
                </div>

                {/* Bottom Floating Tag Pill */}
                <div className="absolute -bottom-4 inset-x-6 sm:inset-x-10 z-30 flex items-center justify-between py-1.5 px-3.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E7E7E7] shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <div className="text-xs font-extrabold text-[#111827] leading-tight">
                        Mahesh Kumar
                      </div>
                      <div className="text-[9px] font-mono text-[#686868]">
                        B.Tech • NITRR '29
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/about"
                    className="w-6 h-6 rounded-full bg-[#111827] text-white flex items-center justify-center hover:bg-[#BE5A4D] transition-colors"
                    aria-label="About Mahesh Kumar"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= BOTTOM HERO STRIP (Always visible in 100vh fold) ================= */}
          <motion.div
            variants={itemVariants}
            className="pt-2 border-t border-[#E7E7E7]/80 flex items-center justify-between text-xs text-[#686868]"
          >
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#BE5A4D]" />
              <span className="text-[11px] sm:text-xs font-medium text-[#111827]">
                National Institute of Technology Raipur (NITRR) • Class of '29
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToNextSection}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#111827] hover:text-[#BE5A4D] transition-colors cursor-pointer"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* ================= ABOUT TEASER SECTION ================= */}
      <motion.section
        id="about-preview"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative py-20 border-t border-[#E7E7E7] bg-[#F6F6F4]/40 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-4"
            >
              <SectionHeading
                tag="Engineering & Code"
                title="Engineering Rigor meets Full Stack Architecture."
                subtitle="Studying at NIT Raipur provides me with systematic problem-solving rigor, which I channel into writing resilient web applications and backend systems."
                tagVariant="floral"
                className="mb-6"
              />
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base text-[#686868] leading-relaxed"
              >
                {personalInfo.about.lead}
              </motion.p>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pt-2"
              >
                <Button
                  to="/about"
                  variant="secondary"
                  size="md"
                  icon={ArrowRight}
                  className="hover:border-[#BE5A4D] hover:text-[#BE5A4D]"
                >
                  Read Full Story &amp; Background
                </Button>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {personalInfo.about.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-2xs hover:border-[#F3C8BE] hover:shadow-md transition-all cursor-default"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#686868]">
                    {item.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#171717] mt-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#686868] mt-0.5 truncate">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= FEATURED PROJECTS PREVIEW ================= */}
      <motion.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 border-t border-[#E7E7E7] bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeading
              tag="Featured Work"
              title="Selected Engineering Projects"
              subtitle="End-to-end full stack web platforms, real-time tracking, and secure microservices."
              tagVariant="floral"
              className="mb-0"
            />
            <Button
              to="/projects"
              variant="secondary"
              size="md"
              icon={ArrowRight}
              className="hover:border-[#BE5A4D] hover:text-[#BE5A4D]"
            >
              View All 9 Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.1}>
                <ProjectCard project={project} index={idx} />
              </Reveal>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= SKILLS TEASER GRID ================= */}
      <motion.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 border-t border-[#E7E7E7] bg-[#F6F6F4]/50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeading
              tag="Technical Core"
              title="Technology Stack Overview"
              subtitle="Proficiencies across modern frontend, server architecture, databases, and engineering tools."
              tagVariant="floral"
              className="mb-0"
            />
            <Button
              to="/skills"
              variant="secondary"
              size="md"
              icon={ArrowRight}
              className="hover:border-[#BE5A4D] hover:text-[#BE5A4D]"
            >
              Explore Full Skills Matrix
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-white border border-[#E7E7E7] space-y-3 hover:border-[#F3C8BE] hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] flex items-center justify-center text-[#171717]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717]">Frontend</h3>
              <p className="text-xs text-[#686868] leading-relaxed">
                React.js, JavaScript (ES6+), Tailwind CSS, HTML5, Responsive UX
              </p>
              <div className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                5 Core Tools
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-white border border-[#E7E7E7] space-y-3 hover:border-[#F3C8BE] hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] flex items-center justify-center text-[#171717]">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717]">Backend</h3>
              <p className="text-xs text-[#686868] leading-relaxed">
                Node.js, Express.js, REST APIs, JWT Auth, WebSockets
              </p>
              <div className="text-[11px] font-mono font-semibold text-[#B85D4F] bg-[#FDF2F0] border border-[#F3C8BE]/70 px-2 py-0.5 rounded-full inline-block">
                6 Core Tools
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-white border border-[#E7E7E7] space-y-3 hover:border-[#F3C8BE] hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] flex items-center justify-center text-[#171717]">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717]">Database</h3>
              <p className="text-xs text-[#686868] leading-relaxed">
                MongoDB, Mongoose ODM, Aggregations, Indexing
              </p>
              <div className="text-[11px] font-mono font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full inline-block">
                3 Core Tools
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-white border border-[#E7E7E7] space-y-3 hover:border-[#F3C8BE] hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] flex items-center justify-center text-[#171717]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717]">CS &amp; Engineering</h3>
              <p className="text-xs text-[#686868] leading-relaxed">
                Data Structures, Algorithms, System Design, OOP &amp; Logic
              </p>
              <div className="text-[11px] font-mono font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-full inline-block">
                Core Foundations
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA BANNER ================= */}
      <motion.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 border-t border-[#E7E7E7] bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-12 rounded-3xl bg-[#171717] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
          >
            {/* Ambient floral glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#BE5A4D]/25 via-[#D77D70]/15 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center md:text-left max-w-xl relative z-10">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F0]/15 text-rose-200 border border-rose-300/30"
              >
                <span className="w-2 h-2 rounded-full bg-[#E28C7E] animate-pulse" />
                <span>Software Engineering &amp; Technical Showcase</span>
              </motion.div>
              <motion.h3
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight"
              >
                Let's build something remarkable together.
              </motion.h3>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-neutral-300 leading-relaxed"
              >
                Exploring technical competencies, full-stack architecture, or engineering roles? Reach out and I'll get back to you promptly.
              </motion.p>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 relative z-10"
            >
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="hover:border-[#BE5A4D] hover:text-[#BE5A4D]"
              >
                Send a Message
              </Button>
              <Button
                href={`mailto:${personalInfo.socials.email}`}
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 border border-white/20"
              >
                Direct Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default HomePage;
