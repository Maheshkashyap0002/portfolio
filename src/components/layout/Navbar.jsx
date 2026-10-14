import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Home } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import Button from "../common/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Work", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="absolute top-0 left-0 right-0 z-40 py-4 sm:py-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Monogram & Availability Pill */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group cursor-pointer focus:outline-none inline-block"
              aria-label="Mahesh Kumar - Home"
            >
              <span className="inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border-[1.5px] border-[#111827] text-[#111827] shadow-xs hover:bg-[#111827] hover:text-white hover:scale-105 hover:shadow-md transition-all duration-300 ease-out cursor-pointer">
                <span className="font-bold text-xs sm:text-sm tracking-tight transition-colors duration-300">
                  Mahesh Kumar
                </span>
              </span>
            </Link>

          </div>

          {/* Center Navigation Links: Pill Container */}
          <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E7E7E7] shadow-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[#171717] text-white shadow-xs"
                        : "text-[#686868] hover:text-[#171717] hover:bg-neutral-100/70"
                    }`
                  }
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Resume & Let's Talk */}
          <div className="hidden sm:flex flex-col items-end gap-1">
            <div className="flex items-center gap-2.5">
              <Button
                href={personalInfo.resume.url}
                download={personalInfo.resume.filename}
                variant="secondary"
                size="sm"
                icon={FileText}
                iconPosition="left"
                aria-label="Download Mahesh Kumar's Resume"
                className="bg-white/90 backdrop-blur-xs shadow-xs"
              >
                Resume
              </Button>

              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                iconPosition="right"
                className="shadow-xs"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-[#E7E7E7] bg-white text-[#171717] hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#171717]"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-[#E7E7E7] bg-white/95 backdrop-blur-xl px-4 pt-4 pb-6 shadow-xl"
          >
            <nav className="flex flex-col space-y-1 mb-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#171717] text-white"
                        : "text-[#686868] hover:text-[#171717] hover:bg-neutral-100"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-[#E7E7E7]">
              <Button
                href={personalInfo.resume.url}
                download={personalInfo.resume.filename}
                variant="secondary"
                size="md"
                icon={FileText}
                iconPosition="left"
                className="w-full justify-center"
              >
                Download Resume
              </Button>
              <Button
                to="/contact"
                onClick={() => setIsOpen(false)}
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                iconPosition="right"
                className="w-full justify-center"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
