import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, ChevronDown, CheckCircle2, Eye, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import Button from "../common/Button";

export function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [showDetails, setShowDetails] = useState(false);

  const isCompleted = project.status === "Completed";

  const handleCardClick = (e) => {
    // If the click originated from an external link or quick button, prevent card navigation
    if (e.target.closest("a") || e.target.closest("button.prevent-nav")) {
      return;
    }
    navigate(`/project/${project.id}`);
  };

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleCardClick}
      className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E7E7E7] bg-white transition-all duration-300 hover:border-neutral-400 hover:shadow-xl hover:shadow-neutral-900/5 h-full cursor-pointer relative"
    >
      <div>
        {/* Thumbnail Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F6F6F4] border-b border-[#E7E7E7]">
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-neutral-900/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white/95 text-[#111827] shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              <span>View Project Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#BA3F68]" />
            </span>
          </div>

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-[#171717] border border-[#E7E7E7] shadow-xs">
              {project.category}
            </span>

            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-xs shadow-xs border ${
                isCompleted
                  ? "bg-emerald-50/95 text-emerald-800 border-emerald-200"
                  : "bg-amber-50/95 text-amber-800 border-amber-200"
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
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#171717] group-hover:text-[#BA3F68] transition-colors">
              {project.title}
            </h3>
          </div>

          {project.subtitle && (
            <p className="text-xs font-semibold uppercase tracking-wider text-[#BA3F68] mb-3">
              {project.subtitle}
            </p>
          )}

          <p className="text-sm sm:text-[15px] text-[#686868] leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Key Highlights Toggle */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(!showDetails);
                }}
                className="prevent-nav inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#BA3F68] transition-colors py-1 cursor-pointer"
                aria-expanded={showDetails}
              >
                <span>{showDetails ? "Hide Quick Highlights" : "Quick Highlights"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    showDetails ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showDetails && (
                <motion.ul
                  initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 space-y-2 text-xs text-[#686868] border-l-2 border-[#E7E7E7] pl-3 py-1"
                >
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E7E7E7]/60">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F6F6F4] text-[#171717] border border-[#E7E7E7]/80 hover:border-neutral-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 pb-6 pt-3 sm:px-7 sm:pb-7 flex items-center justify-between gap-3 border-t border-neutral-100 bg-[#FAFAFA]/70 rounded-b-3xl">
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#111827] text-white hover:bg-[#BA3F68] transition-colors shadow-2xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </Link>

          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              variant="secondary"
              size="sm"
              icon={GithubIcon}
              iconPosition="left"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              Code
            </Button>
          )}

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="primary"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
              aria-label={`View live demo of ${project.title}`}
            >
              Demo
            </Button>
          )}
        </div>

        <span className="text-[11px] font-mono text-[#686868]">
          0{index + 1}
        </span>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
