export function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="#00D8FF" {...props}>
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NodeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#22C55E" strokeWidth="2" {...props}>
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <path d="M12 22V15.5" />
      <path d="M22 8.5L12 15.5 2 8.5" />
    </svg>
  );
}

export function MongoIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#10B981" {...props}>
      <path d="M12 2C12 2 5 8 5 14C5 18 8 22 12 22C16 22 19 18 19 14C19 8 12 2 12 2ZM12 20.5C10.5 20.5 9 19.5 8.5 18C10 16 11.5 13 12 10C12.5 13 14 16 15.5 18C15 19.5 13.5 20.5 12 20.5Z" />
    </svg>
  );
}
