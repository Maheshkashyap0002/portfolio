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
    <div className="min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-16 px-4">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md sm:max-w-lg mx-auto text-center flex flex-col items-center justify-center -translate-y-[10px]"
      >
        {/* Lottie Animation Display (Optimized for Mobile & Desktop) */}
        <div className="w-full max-w-[270px] xs:max-w-[320px] sm:max-w-[400px] aspect-[16/10] sm:aspect-[16/9] mx-auto flex items-center justify-center mb-1">
          <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center"
            aria-label="404 Page Not Found Lottie Animation"
          />
        </div>

        {/* Text Details & Heading */}
        <div className="space-y-2 sm:space-y-2.5 w-full max-w-xs sm:max-w-md mx-auto px-2 sm:px-0">
          <h1 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-base text-[#4B5563] leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or the link may be outdated.
          </p>
        </div>

        {/* Navigation Action Buttons (Stacked on Mobile, Horizontal Row on Desktop) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-5 sm:pt-6 w-full max-w-xs sm:max-w-none mx-auto">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>

          <Button
            to="/projects"
            variant="secondary"
            size="md"
            icon={FolderKanban}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore Projects
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            size="md"
            icon={MessageSquare}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Contact
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
