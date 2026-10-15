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
    <div className="min-h-[82vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        {/* Lottie Animation Display */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xs sm:max-w-md mx-auto aspect-[16/12] flex items-center justify-center"
        >
          <div
            ref={containerRef}
            className="w-full h-full"
            aria-label="404 Page Not Found Lottie Animation"
          />
        </motion.div>

        {/* Text & Status Pill */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF5F2] text-[#BA3F68] border border-[#F5D5CB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB7753] animate-pulse" />
            <span>404 Error • URL Not Found</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or the link may be outdated.
          </p>
        </motion.div>

        {/* Navigation Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default NotFoundPage;
