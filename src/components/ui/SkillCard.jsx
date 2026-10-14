import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FolderGit2 } from "lucide-react";

export function SkillCard({ skill }) {
  const shouldReduceMotion = useReducedMotion();

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Proficient":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Academic":
        return "bg-amber-50 text-amber-800 border-amber-200";
      default:
        return "bg-neutral-100 text-neutral-800 border-neutral-200";
    }
  };

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-[#E7E7E7] bg-white hover:border-[#171717] hover:shadow-lg hover:shadow-neutral-900/5 transition-all duration-300 h-full"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#171717] group-hover:scale-125 transition-transform" />
            <h4 className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-black transition-colors">
              {skill.name}
            </h4>
          </div>

          <span
            className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${getLevelColor(
              skill.level
            )}`}
          >
            {skill.level}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] mb-1">
            <span>Proficiency</span>
            <span className="font-semibold text-[#171717]">{skill.percentage}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#F6F6F4] overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? { width: `${skill.percentage}%` } : { width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="h-full bg-[#171717] rounded-full group-hover:bg-[#D9A441] transition-colors"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-4">
          {skill.desc}
        </p>
      </div>

      {/* Bottom Projects Connection */}
      <div className="pt-3 border-t border-[#E7E7E7]/80">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#171717] mb-2">
          <FolderGit2 className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Applied In Projects:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {skill.projects &&
            skill.projects.map((proj, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#F6F6F4] text-[#686868] border border-[#E7E7E7]"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                <span>{proj}</span>
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
