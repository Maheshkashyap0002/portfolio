import { useState } from "react";
import { Layout, Server, Database, Wrench, GraduationCap, CheckCircle2, Search, ArrowRight } from "lucide-react";
import { skillsData, skillsCategories } from "../data/skills";
import SectionHeading from "../components/common/SectionHeading";
import SkillCard from "../components/ui/SkillCard";
import Reveal from "../components/ui/Reveal";
import Button from "../components/common/Button";
import usePageTitle from "../hooks/usePageTitle";

export function SkillsPage() {
  usePageTitle("Skills & Technologies");

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryIcons = {
    Frontend: Layout,
    Backend: Server,
    Database: Database,
    "Tools & DevOps": Wrench,
    "Engineering & CAD": GraduationCap,
  };

  // Filter skills by category and search
  const filteredGroups = skillsData
    .map((group) => {
      // Filter category
      if (activeCategory !== "All" && group.category !== activeCategory) {
        return null;
      }

      // Filter skills by query
      const matchingSkills = group.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingSkills.length === 0) return null;

      return {
        ...group,
        skills: matchingSkills,
      };
    })
    .filter(Boolean);

  const totalSkillsCount = skillsData.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Technical Competence"
          title="Skills, Frameworks &amp; Engineering Tooling"
          subtitle="A comprehensive inventory of full-stack web technologies, databases, API standards, and core computing fundamentals I demonstrate in code."
        />

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#F6F6F4] border border-[#E7E7E7] mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {skillsCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#171717] text-white shadow-xs"
                    : "bg-white text-[#686868] hover:text-[#171717] hover:border-black border border-[#E7E7E7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#686868] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, JWT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E7E7E7] bg-white text-xs font-medium text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]"
            />
          </div>
        </div>

        {/* Categories & Skills Display */}
        {filteredGroups.length === 0 ? (
          <div className="p-12 text-center rounded-3xl border border-[#E7E7E7] bg-white">
            <p className="text-base font-bold text-[#171717]">No skills matched your search.</p>
            <p className="text-xs text-[#686868] mt-1">Try clearing the search query or selecting "All".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#171717] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredGroups.map((group) => {
              const Icon = categoryIcons[group.category] || Layout;

              return (
                <div key={group.category} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E7E7E7]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#171717] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                          {group.category}
                        </h3>
                        <p className="text-xs text-[#686868] mt-0.5">{group.tagline}</p>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F6F6F4] text-[#171717] border border-[#E7E7E7] self-start sm:self-center">
                      {group.skills.length} Demonstrated Technologies
                    </span>
                  </div>

                  {/* Skills Grid - Uniform Alignment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {group.skills.map((skill) => (
                      <Reveal key={skill.name} delay={0.05} className="h-full">
                        <SkillCard skill={skill} category={group.category} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Full-Stack Architecture Matrix Banner */}
        <Reveal delay={0.2} className="mt-20">
          <div className="p-8 sm:p-12 rounded-3xl border border-[#E7E7E7] bg-[#FAFAFA] space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                End-to-End Pipeline
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] mt-1">
                How These Technologies Connect in My Applications
              </h3>
              <p className="text-sm text-[#686868] mt-2 leading-relaxed">
                Every project I build adheres to clean architecture: decoupling client interfaces from backend microservices and maintaining transactional integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-[#E7E7E7] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                  1. Presentation Layer
                </div>
                <div className="text-sm font-semibold text-[#171717]">
                  React.js + Tailwind CSS
                </div>
                <p className="text-xs text-[#686868] leading-relaxed">
                  Single page routing, declarative UI components, responsive layout systems, and instant client-side feedback.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7E7E7] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                  2. Application Logic
                </div>
                <div className="text-sm font-semibold text-[#171717]">
                  Node.js + Express + JWT
                </div>
                <p className="text-xs text-[#686868] leading-relaxed">
                  RESTful controllers, middleware authentication, rate limiting, and WebSocket events for real-time channels.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7E7E7] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                  3. Persistence Layer
                </div>
                <div className="text-sm font-semibold text-[#171717]">
                  MongoDB + Mongoose ODM
                </div>
                <p className="text-xs text-[#686868] leading-relaxed">
                  Document modeling, ACID transactions for financial safety, compound indexing, and multi-stage aggregations.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7E7E7]">
              <div className="flex items-center gap-2 text-xs text-[#686868]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>All {totalSkillsCount} technologies backed by working repositories</span>
              </div>

              <Button to="/projects" variant="primary" size="md" icon={ArrowRight}>
                See Skills in Featured Projects
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default SkillsPage;
