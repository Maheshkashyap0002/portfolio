import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Sparkles,
  Code2,
  FolderKanban,
  MessageSquare,
  Workflow,
  Network,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { projectsData } from "../data/projects";
import { GithubIcon } from "../components/ui/Icons";
import Button from "../components/common/Button";
import usePageTitle from "../hooks/usePageTitle";

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [activeTechFilter, setActiveTechFilter] = useState("All");

  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const project = projectsData[currentIndex];

  usePageTitle(project ? `${project.title} • Engineering Deep-Dive` : "Project Not Found");

  if (!project) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-neutral-400">
            <FolderKanban className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-[#111827]">Project Not Found</h1>
          <p className="text-sm text-[#686868] mt-2 mb-6">
            The project you are looking for does not exist or may have been renamed.
          </p>
          <Button to="/projects" variant="primary" icon={ArrowLeft} iconPosition="left">
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];
  const isCompleted = project.status === "Completed";

  // Filter tech breakdown by category if filter applied
  const techCategories = ["All", "Frontend", "Backend", "Database", "Security"];
  const filteredTech = (project.techBreakdown || []).filter((tech) => {
    if (activeTechFilter === "All") return true;
    return tech.category.toLowerCase().includes(activeTechFilter.toLowerCase());
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E7E7E7]"
        >
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#BA3F68] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#686868]">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-black transition-colors">Projects</Link>
            <span>/</span>
            <span className="font-semibold text-[#111827] truncate max-w-[140px] sm:max-w-xs">
              {project.title}
            </span>
          </div>
        </motion.div>

        {/* Project Header Info */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-10"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F6F4] text-[#111827] border border-[#E7E7E7]">
              {project.category}
            </span>

            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
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

            <span className="text-xs font-mono text-[#686868] ml-auto">
              Project 0{currentIndex + 1} of 0{projectsData.length}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#BA3F68]">
              {project.subtitle}
            </p>
          )}

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-3xl pt-1">
            {project.description}
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="primary"
                size="md"
                icon={GithubIcon}
                iconPosition="left"
              >
                GitHub Codebase
              </Button>
            )}

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                variant="secondary"
                size="md"
                icon={ExternalLink}
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}

            <Button
              to="/contact"
              variant="secondary"
              size="md"
              icon={MessageSquare}
              iconPosition="left"
            >
              Discuss Architecture
            </Button>
          </div>
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-[#F6F6F4] border border-[#E7E7E7] shadow-xl mb-14"
        >
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} Interface Preview`}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Main Content Body */}
        <div className="space-y-12">
          {/* Section 1: About & Real-World Problem */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E7E7] shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] flex items-center gap-2.5">
              <Code2 className="w-6 h-6 text-[#EB7753]" />
              <span>About the Project &amp; Real-World Problem</span>
            </h2>
            <div className="text-sm sm:text-base text-[#4B5563] leading-relaxed space-y-3">
              <p>{project.about || project.longDescription}</p>
              {project.longDescription && project.about !== project.longDescription && (
                <p>{project.longDescription}</p>
              )}
            </div>
          </section>

          {/* Section 2: Comprehensive Technology Breakdown (Kon-kon sa technology use hua aur kyu) */}
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] flex items-center gap-2.5">
                  <Cpu className="w-6 h-6 text-[#BA3F68]" />
                  <span>Technologies Used &amp; Implementation Details</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#686868] mt-1">
                  In-depth breakdown of every technology, framework, database, and library used in this project.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
                {techCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveTechFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeTechFilter === cat
                        ? "bg-[#111827] text-white shadow-2xs"
                        : "bg-[#F6F6F4] text-[#686868] hover:text-[#111827] border border-[#E7E7E7]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Technology Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTech.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-2xs hover:border-[#BA3F68] transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-[#111827]">
                      {tech.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FBFBFA] border border-[#E7E7E7] text-[#BA3F68]">
                      {tech.category}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#111827] flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#EB7753]" />
                    <span>Role: {tech.role}</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed pt-1">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quick 4-box summary for high-level architecture */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E7E7E7]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                  <Layers className="w-4 h-4 text-[#EB7753]" />
                  <span>Frontend</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(project.technologies?.frontend || ["React.js", "Tailwind CSS"]).slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-white px-2 py-0.5 rounded border border-[#E7E7E7]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E7E7E7]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                  <Cpu className="w-4 h-4 text-[#BA3F68]" />
                  <span>Backend</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(project.technologies?.backend || ["Node.js", "Express.js"]).slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-white px-2 py-0.5 rounded border border-[#E7E7E7]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E7E7E7]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                  <Database className="w-4 h-4 text-[#10B981]" />
                  <span>Database</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(project.technologies?.database || ["MongoDB"]).map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-white px-2 py-0.5 rounded border border-[#E7E7E7]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E7E7E7]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#6366F1]" />
                  <span>Auth &amp; Tools</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(project.technologies?.toolsAndAuth || ["JWT", "Git"]).slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-white px-2 py-0.5 rounded border border-[#E7E7E7]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: End-to-End System Architecture & Data Flow */}
          {project.dataFlow && project.dataFlow.length > 0 && (
            <section className="space-y-5">
              <div className="flex items-center gap-2.5">
                <Workflow className="w-6 h-6 text-[#EB7753]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  System Architecture &amp; Data Flow Lifecycle
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.dataFlow.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-2xs relative space-y-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-sm font-bold text-[#111827]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Core API Endpoints & Request Flow */}
          {project.coreEndpoints && project.coreEndpoints.length > 0 && (
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E7E7] shadow-xs space-y-5">
              <div className="flex items-center gap-2.5">
                <Network className="w-6 h-6 text-[#2563EB]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  Core API Endpoints &amp; Protocols
                </h2>
              </div>

              <div className="space-y-3">
                {project.coreEndpoints.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E7E7E7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 font-mono">
                      <span
                        className={`px-2 py-1 rounded font-bold text-[10px] ${
                          ep.method === "POST"
                            ? "bg-blue-100 text-blue-800"
                            : ep.method === "GET"
                            ? "bg-emerald-100 text-emerald-800"
                            : ep.method === "DELETE"
                            ? "bg-red-100 text-red-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="font-semibold text-[#111827]">{ep.path}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[#686868]">{ep.desc}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-200 text-neutral-700 shrink-0">
                        {ep.auth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 5: Engineering Challenges Solved & Trade-offs */}
          {project.keyChallenges && project.keyChallenges.length > 0 && (
            <section className="space-y-5">
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="w-6 h-6 text-[#D97706]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  Key Technical Challenges &amp; Solutions
                </h2>
              </div>

              <div className="space-y-4">
                {project.keyChallenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#E7E7E7] shadow-2xs space-y-3"
                  >
                    <div className="text-sm font-bold text-[#B45309]">
                      Challenge: {item.challenge}
                    </div>
                    <div className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                      <span className="font-semibold text-[#111827]">Engineered Solution: </span>
                      {item.solution}
                    </div>
                    <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
                      ✓ Result &amp; Impact: {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: How This Project Improved My Abilities (Technical Interview Edge) */}
          {project.howItHelped && project.howItHelped.length > 0 && (
            <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFF5F2] via-[#FDF8F6] to-[#FAF5F8] border border-[#F5D5CB] space-y-4">
              <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#BA3F68]">
                <Sparkles className="w-5 h-5 text-[#EB7753]" />
                <span>How This Project Improved My Engineering Abilities (Interview Highlights)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                Specific competencies demonstrated when answering technical interview rounds:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[#374151] pt-1">
                {project.howItHelped.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-[#EB7753] shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Section 7: Key Architectural Features & Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827] flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span>Key Architectural Capabilities &amp; Features</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E7E7E7] text-sm text-[#374151] shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 8: Next / Previous Project Navigation */}
          <div className="pt-8 border-t border-[#E7E7E7] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/project/${prevProject.id}`}
              className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#FAFAFA] hover:bg-white hover:border-[#BA3F68] transition-all group"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#686868] mb-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Project</span>
              </div>
              <div className="text-base font-bold text-[#111827] group-hover:text-[#BA3F68] transition-colors">
                {prevProject.title}
              </div>
              <div className="text-xs text-[#686868] truncate mt-0.5">{prevProject.subtitle}</div>
            </Link>

            <Link
              to={`/project/${nextProject.id}`}
              className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#FAFAFA] hover:bg-white hover:border-[#BA3F68] transition-all group text-left sm:text-right"
            >
              <div className="flex items-center justify-start sm:justify-end gap-1.5 text-xs font-semibold text-[#686868] mb-1">
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-base font-bold text-[#111827] group-hover:text-[#BA3F68] transition-colors">
                {nextProject.title}
              </div>
              <div className="text-xs text-[#686868] truncate mt-0.5">{nextProject.subtitle}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
