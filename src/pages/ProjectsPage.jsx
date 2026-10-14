import { useState } from "react";
import { Search } from "lucide-react";
import { projectsData } from "../data/projects";
import { personalInfo } from "../data/personalInfo";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import Reveal from "../components/ui/Reveal";
import Button from "../components/common/Button";
import { GithubIcon } from "../components/ui/Icons";
import usePageTitle from "../hooks/usePageTitle";

export function ProjectsPage() {
  usePageTitle("Projects");

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = [
    "All",
    "Full Stack (MERN)",
    "AI & Computer Vision",
    "Frontend & Systems",
  ];

  const filteredProjects = projectsData.filter((project) => {
    let matchesFilter = activeFilter === "All";
    if (activeFilter === "Full Stack (MERN)") {
      matchesFilter = project.category.includes("Full Stack") || project.category.includes("MERN");
    } else if (activeFilter === "AI & Computer Vision") {
      matchesFilter = project.category.includes("AI") || project.category.includes("Vision");
    } else if (activeFilter === "Frontend & Systems") {
      matchesFilter = project.category.includes("Frontend") || project.category.includes("Systems") || project.category.includes("WebSockets");
    }

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Engineering Portfolio"
          title="Featured Full-Stack &amp; Systems Projects"
          subtitle="Explore production-grade MERN web applications, real-time geolocation engines, financial market UIs, and resilient audio/banking backends."
        />

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#F6F6F4] border border-[#E7E7E7] mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === opt
                    ? "bg-[#171717] text-white shadow-xs"
                    : "bg-white text-[#686868] hover:text-[#171717] hover:border-black border border-[#E7E7E7]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#686868] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by tech (e.g. MongoDB, WebSockets)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E7E7E7] bg-white text-xs font-medium text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl border border-[#E7E7E7] bg-white">
            <p className="text-base font-bold text-[#171717]">No projects matched your criteria.</p>
            <p className="text-xs text-[#686868] mt-1">Try resetting the search or category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#171717] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.08} className="h-full">
                <ProjectCard project={project} index={idx} />
              </Reveal>
            ))}
          </div>
        )}

        {/* GitHub Callout Footer */}
        <Reveal delay={0.2} className="mt-20">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E7E7E7] bg-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                Want to examine the code architecture?
              </h3>
              <p className="text-sm text-[#686868] max-w-xl">
                All projects feature clean modular folder architectures, defensive REST controllers, and Git commit histories on GitHub.
              </p>
            </div>

            <Button
              href={personalInfo.socials.github}
              target="_blank"
              variant="primary"
              size="lg"
              icon={GithubIcon}
              iconPosition="left"
            >
              Visit My GitHub
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ProjectsPage;
