import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Home, FolderKanban, MessageSquare } from "lucide-react";
import lottie from "lottie-web/build/player/lottie_light";
import Button from "../components/common/Button";
import usePageTitle from "../hooks/usePageTitle";

export function NotFoundPage() {
  usePageTitle("404 • Page Not Found");
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let anim;
    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: !shouldReduceMotion,
        autoplay: !shouldReduceMotion,
        path: "/animation/404-error.json",
      });
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-lg w-full mx-auto text-center flex flex-col items-center justify-center"
      >
        {/* Lottie Animation Display (Cropped & Tightly Balanced) */}
        <div className="w-full max-w-[320px] sm:max-w-[400px] aspect-[16/9] mx-auto flex items-center justify-center mb-1">
          <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center"
            aria-label="404 Page Not Found Lottie Animation"
          />
        </div>

        {/* Text Details & Status Pill */}
        <div className="space-y-2.5 max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF5F2] text-[#BA3F68] border border-[#F5D5CB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB7753] animate-pulse" />
            <span>404 Error • Page Not Found</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or the link may be outdated.
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Back to Home
          </Button>

          <Button
            to="/projects"
            variant="secondary"
            size="md"
            icon={FolderKanban}
            iconPosition="left"
          >
            Explore Projects
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            size="md"
            icon={MessageSquare}
            iconPosition="left"
          >
            Contact
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
