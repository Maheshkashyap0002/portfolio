import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/common/Button";
import { GithubIcon, LinkedinIcon } from "../components/ui/Icons";
import usePageTitle from "../hooks/usePageTitle";

export function ContactPage() {
  usePageTitle("Contact");
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 850);
  };

  const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(
    formData.subject || "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Direct Communication"
          title="Let's Start a Conversation"
          subtitle="Whether you have an engineering opportunity, a technical interview inquiry, or a project proposal, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E7E7E7] shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    Get In Touch
                  </span>
                  <h3 className="text-2xl font-bold text-[#171717] mt-1">
                    Mahesh Kumar
                  </h3>
                  <p className="text-sm text-[#686868] mt-2 leading-relaxed">
                    B.Tech undergraduate at NIT Raipur &amp; Full Stack Web Developer. I typically reply within 24 hours.
                  </p>
                </div>

                {/* Direct Email Card */}
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-4 rounded-2xl bg-[#F6F6F4] border border-[#E7E7E7] flex items-center justify-between gap-3 hover:border-[#171717] hover:bg-white transition-all group"
                  aria-label="Send direct email"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#686868]">
                        Email Address
                      </div>
                      <div className="text-sm font-semibold text-[#171717] truncate group-hover:text-[#BE5A4D] transition-colors">
                        {personalInfo.socials.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors shrink-0" />
                </a>

                {/* Location & Status Details */}
                <div className="space-y-3.5 text-xs sm:text-sm text-[#686868]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F6F6F4] flex items-center justify-center text-[#171717] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#171717]">Campus: </span>
                      <span>NIT Raipur, GE Road, Raipur, CG, India</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F6F6F4] flex items-center justify-center text-emerald-600 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#171717]">Availability: </span>
                      <span>Available for Technical Roles &amp; Engineering Interviews</span>
                    </div>
                  </div>
                </div>

                {/* Social Quick Links */}
                <div className="pt-4 border-t border-[#E7E7E7] flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E7E7E7] bg-white text-xs font-semibold text-[#171717] hover:border-black transition-all shadow-2xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#686868]" />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E7E7E7] bg-white text-xs font-semibold text-[#171717] hover:border-black transition-all shadow-2xs"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#686868]" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E7E7] shadow-xs">
                {status === "success" ? (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#171717]">
                      Message Prepared!
                    </h3>
                    <p className="text-sm text-[#686868] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#171717]">{formData.name}</strong>. Your message details have been validated. You can launch your mail client now:
                    </p>

                    <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E7E7E7] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#686868]">
                      <div><strong className="text-[#171717]">To:</strong> {personalInfo.socials.email}</div>
                      <div><strong className="text-[#171717]">Subject:</strong> {formData.subject}</div>
                      <div className="truncate"><strong className="text-[#171717]">Message:</strong> {formData.message}</div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                      <Button
                        href={mailtoUrl}
                        variant="primary"
                        size="md"
                        icon={Send}
                        iconPosition="right"
                      >
                        Send via Email App
                      </Button>
                      <Button
                        onClick={() => {
                          setStatus("idle");
                          setFormData({ name: "", email: "", subject: "", message: "" });
                        }}
                        variant="secondary"
                        size="md"
                      >
                        Send Another Message
                      </Button>
                    </div>

                    <p className="text-[11px] text-[#686868] pt-2">
                      💡 To integrate EmailJS or custom REST endpoints, configure service credentials in <code className="bg-[#F6F6F4] px-1.5 py-0.5 rounded text-[#171717]">src/data/personalInfo.js</code>.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2"
                        >
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Johnson"
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#171717] ${
                            errors.name ? "border-red-400 bg-red-50/20" : "border-[#E7E7E7]"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#171717] ${
                            errors.email ? "border-red-400 bg-red-50/20" : "border-[#E7E7E7]"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Technical Inquiry / Engineering Opportunity"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#171717] ${
                          errors.subject ? "border-red-400 bg-red-50/20" : "border-[#E7E7E7]"
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Mahesh, I came across your portfolio and would like to discuss..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#171717] resize-y ${
                          errors.message ? "border-red-400 bg-red-50/20" : "border-[#E7E7E7]"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === "sending"}
                        icon={Send}
                        iconPosition="right"
                        className="w-full sm:w-auto"
                      >
                        {status === "sending" ? "Validating & Preparing..." : "Send Message"}
                      </Button>

                      <span className="text-xs text-[#686868] text-center sm:text-right">
                        Direct delivery to {personalInfo.socials.email}
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
