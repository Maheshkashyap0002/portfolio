import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  download,
  target,
  rel,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#171717] text-white hover:bg-neutral-800 border border-[#171717] shadow-sm hover:shadow",
    secondary:
      "bg-white text-[#171717] border border-[#E7E7E7] hover:border-[#171717] hover:bg-neutral-50 shadow-xs",
    ghost:
      "bg-transparent text-[#171717] hover:bg-neutral-100/80 border border-transparent",
    accent:
      "bg-[#D9A441] text-white hover:bg-[#c29032] border border-[#D9A441] shadow-sm",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5 shrink-0" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
      )}
    </>
  );

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: disabled ? {} : { y: -1.5 },
        whileTap: disabled ? {} : { y: 0.5 },
      };

  // React Router internal navigation
  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={combinedClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // External anchor / download
  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={combinedClasses}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  // Standard button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
