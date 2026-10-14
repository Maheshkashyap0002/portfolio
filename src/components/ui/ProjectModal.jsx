import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import Button from "../common/Button";

export function ProjectModal({ project, isOpen, onClose }) {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const isCompleted = project.status === "Completed";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200 z-10 flex flex-col my-auto text-[#171717]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-neutral-100 rounded-t-3xl">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F6F4] text-[#171717] border border-[#E7E7E7]">
                  {project.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    isCompleted
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-amber-50 text-amber-800 border-amber-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isCompleted ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Image Preview Banner */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[#F6F6F4] border border-[#E7E7E7] shadow-inner">
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.title} screenshot`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Title & Quick Action CTAs */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                <div>
                  <h2
                    id="modal-project-title"
                    className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight"
                  >
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#BA3F68] mt-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      variant="secondary"
                      size="md"
                      icon={GithubIcon}
                      iconPosition="left"
                    >
                      GitHub Repo
                    </Button>
                  )}
                  {project.liveUrl ? (
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      variant="primary"
                      size="md"
                      icon={ExternalLink}
                      iconPosition="right"
                    >
                      Live Demo
                    </Button>
                  ) : (
                    <span className="text-xs font-medium text-neutral-500 italic bg-neutral-100 px-3 py-2 rounded-xl">
                      Codebase Available
                    </span>
                  )}
                </div>
              </div>

              {/* In-Depth About the Project */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#111827] flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#EB7753]" />
                  <span>About the Project &amp; Problem Statement</span>
                </h3>
                <p className="text-sm sm:text-[15px] text-[#4B5563] leading-relaxed">
                  {project.about || project.longDescription || project.description}
                </p>
                {project.longDescription && project.about !== project.longDescription && (
                  <p className="text-sm sm:text-[15px] text-[#4B5563] leading-relaxed pt-1">
                    {project.longDescription}
                  </p>
                )}
              </div>

              {/* Detailed Technology Stack Architecture (Frontend React, Backend Node/Express) */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#111827] flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#BA3F68]" />
                  <span>Full-Stack Architecture &amp; Technologies</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Frontend Box */}
                  <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-[#E7E7E7] space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827]">
                      <Layers className="w-4 h-4 text-[#EB7753]" />
                      <span>Frontend (React.js UI &amp; State)</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.technologies?.frontend || ["React.js", "Tailwind CSS", "Framer Motion"]).map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#111827] border border-[#E7E7E7] shadow-2xs"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Backend Box */}
                  <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-[#E7E7E7] space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827]">
                      <Cpu className="w-4 h-4 text-[#BA3F68]" />
                      <span>Backend (Node.js &amp; Express APIs)</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.technologies?.backend || ["Node.js", "Express.js", "REST APIs"]).map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#111827] border border-[#E7E7E7] shadow-2xs"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Database Box */}
                  <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-[#E7E7E7] space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827]">
                      <Database className="w-4 h-4 text-[#10B981]" />
                      <span>Database &amp; Data Pipeline</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.technologies?.database || ["MongoDB", "Mongoose"]).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#111827] border border-[#E7E7E7] shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Auth Box */}
                  <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-[#E7E7E7] space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827]">
                      <ShieldCheck className="w-4 h-4 text-[#6366F1]" />
                      <span>Auth, Security &amp; Tooling</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(
                        project.technologies?.toolsAndAuth || [
                          "JWT Authentication",
                          "Postman",
                          "Git",
                          "REST APIs",
                        ]
                      ).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#111827] border border-[#E7E7E7] shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* How This Project Improved My Engineering Abilities (Interview Readiness) */}
              {project.howItHelped && project.howItHelped.length > 0 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FFF5F2] via-[#FDF8F6] to-[#FAF5F8] border border-[#F5D5CB] space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#BA3F68]">
                    <Sparkles className="w-4 h-4 text-[#EB7753]" />
                    <span>How This Project Improved My Abilities (Technical Interview Edge)</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4B5563]">
                    {project.howItHelped.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ArrowRight className="w-4 h-4 text-[#EB7753] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features & Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#111827] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Key Architectural Features &amp; Capabilities</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FBFBFA] border border-[#E7E7E7] text-xs sm:text-sm text-[#374151]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-t border-neutral-100 rounded-b-3xl">
              <span className="text-xs text-neutral-500 font-mono">
                Press ESC or click outside to close
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#111827] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
