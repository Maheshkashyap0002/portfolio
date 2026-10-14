import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Code-split pages for production performance
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const SkillsPage = lazy(() => import("../pages/SkillsPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("../pages/ExperiencePage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#E7E7E7] border-t-[#171717] animate-spin" />
        <span className="text-xs font-mono text-[#686868]">Loading page...</span>
      </div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        {/* Route alias for /work */}
        <Route path="/work" element={<Navigate to="/projects" replace />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
