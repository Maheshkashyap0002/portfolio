export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  dot = false,
  dotColor = "bg-emerald-500",
}) {
  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-xs px-3.5 py-1.5",
  };

  const variantStyles = {
    default: "bg-[#F6F6F4] text-[#171717] border border-[#E7E7E7]",
    outline: "bg-transparent text-[#171717] border border-[#E7E7E7]",
    dark: "bg-[#171717] text-white border border-[#171717]",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    accent: "bg-amber-50 text-[#D9A441] border border-amber-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold select-none ${
        sizeStyles[size] || sizeStyles.md
      } ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />}
      {children}
    </span>
  );
}

export default Badge;
