# Mahesh Kumar — Personal Portfolio Website

A premium, white-theme personal portfolio for **Mahesh Kumar**, a B.Tech Civil Engineering student at **NIT Raipur** (expected graduation: 2029) who is focused on Full Stack Web Development.

The visual direction is based on the supplied references:
- A clean white canvas with a large typographic hero headline.
- A centered portrait that overlaps the headline.
- Minimal navigation and pill-shaped links.
- A premium project showcase inspired by editorial portfolio layouts.
- Strong typography, generous whitespace, and subtle motion.

> Replace all placeholder profile images, social URLs, project URLs, and resume files with your real assets before publishing.

---

## 1. Project Goals

- Present a polished and recruiter-friendly developer portfolio.
- Showcase real projects, skills, education, and experience.
- Make it easy to contact Mahesh or view his code.
- Work smoothly on desktop, tablet, and mobile.
- Keep content easy to update without editing every component.

## 2. Design Direction

### Theme: Premium White / Editorial

| Element | Direction |
|---|---|
| Main background | `#FFFFFF` |
| Main text | `#171717` |
| Secondary text | `#686868` |
| Borders | `#E7E7E7` |
| Soft section background | `#F6F6F4` |
| Optional accent | `#D9A441` or muted olive |
| Cards | White with thin borders and subtle shadows |
| Buttons | Black pill buttons with white text; secondary outlined buttons |
| Typography | Large bold sans-serif headlines, readable body text |
| Layout | Spacious, minimal, editorial |
| Animation | Subtle fade/slide reveal and gentle hover transitions |

### Reference-inspired hero

- Top navigation: availability indicator, Work, Services/Skills, Experience, Contact, and a “Let’s Talk” button.
- Large name headline: **MAHESH KUMAR**.
- A centered portrait with a transparent or cleanly removed background, overlapping the headline.
- Left-side introduction: “Full Stack Web Developer”.
- Short description focused on building practical web applications.
- Right-side social links: GitHub, LinkedIn, and email.
- Main actions: “View Projects” and “Let’s Talk”.

Do not copy another designer’s name, identity, portrait, text, or exact portfolio assets. Use the references for layout inspiration only.

## 3. Recommended Tech Stack

- **React + Vite** — frontend application
- **Tailwind CSS** — responsive styling
- **Framer Motion** — subtle animations
- **Lucide React** — icons
- **React Router** — optional, only if multiple pages are required
- **EmailJS or a custom API** — contact form delivery
- **GitHub** — source control
- **Vercel** — deployment

A backend is not required for the first version. Add one only if you need custom contact-form processing, an admin panel, or dynamic project management.

## 4. Website Sections

### Home / Hero
- Availability label, if accurate (for example, “Open to Internships”).
- Name and professional role.
- Brief introduction.
- Portrait or replaceable profile-image placeholder.
- View Projects, Download Resume, and Contact buttons.
- GitHub, LinkedIn, and email links.

### About
Introduce yourself as a Civil Engineering undergraduate at NIT Raipur with a strong interest in software development. Mention learning and building full-stack applications, backend APIs, authentication, and database-driven features. Keep claims accurate.

### Skills
Organize skills into groups:

**Frontend**
- HTML5, CSS3, JavaScript, React.js, Tailwind CSS

**Backend**
- Node.js, Express.js, REST APIs, JWT, cookies, authentication, WebSockets

**Database**
- MongoDB

**Tools**
- Git, GitHub, Postman, VS Code

Only list technologies you can explain and demonstrate.

### Featured Projects
Use image-led cards with a concise description, technology tags, and real links.

1. **AI Attendance System** — MERN application with an AI-assisted attendance workflow.
2. **Bus Tracking Platform** — user, driver, and admin workflows with live-tracking plans.
3. **Airbnb-Style Listing & Booking Platform** — property listings and booking workflow.
4. **Zerodha-Style Trading Platform** — trading dashboard concept and portfolio/order UI.
5. **Spotify Backend** — backend APIs and authentication.
6. **Banking System Backend** — account-related backend workflows.

For each project, show:
- Thumbnail or screenshot
- Project name and summary
- Technology stack
- GitHub repository link, if available
- Live demo link, if deployed
- Status such as “In progress” when appropriate

Do not invent repository URLs, deployment links, metrics, or features.

### Experience & Education
- B.Tech Civil Engineering, NIT Raipur — expected graduation 2029.
- One-month AutoCAD internship; add the organization and dates when ready.
- Web development learning and project-building experience.

### Contact
- Name, email, subject, and message fields.
- Client-side validation.
- Loading, success, and error states.
- GitHub and LinkedIn links.

A contact form must not claim an email was sent unless a real service or backend confirms it. Never expose secret API keys in frontend code.

### Footer
- Name/wordmark
- Quick links
- Social links
- Dynamically generated copyright year
- Back-to-top action

## 5. Suggested Project Structure

```text
mahesh-portfolio/
├── public/
│   ├── images/
│   │   └── profile-placeholder.png
│   ├── Mahesh-Kumar-Resume.pdf
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

Adjust the structure if the implementation tool generates a simpler but maintainable architecture.

## 6. Build Plan

1. **Setup:** Create the Vite project and install the UI dependencies.
2. **Design system:** Define colors, typography, spacing, buttons, and card styles.
3. **Hero:** Build the headline, portrait overlap, navigation, and social links.
4. **Content sections:** Add About, Skills, Projects, Education/Experience, and Contact.
5. **Interactions:** Add smooth scrolling, mobile navigation, hover states, and subtle animations.
6. **Real content:** Add the actual portrait, resume, social URLs, project screenshots, and repository links.
7. **Testing:** Check responsiveness, keyboard navigation, contrast, form behavior, and console errors.
8. **Deployment:** Push to GitHub and deploy on Vercel.

## 7. Setup Commands

Install a recent supported version of Node.js, then run:

```bash
npm create vite@latest mahesh-portfolio -- --template react
cd mahesh-portfolio
npm install
npm install lucide-react framer-motion
```

Set up Tailwind CSS using the current official Tailwind CSS instructions for Vite. Tailwind setup commands vary by major version, so follow the documentation for the version you install.

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## 8. AI Coding Prompt

Copy the prompt below into Cursor, ChatGPT, Claude, or another coding assistant.

---

**Prompt:**

Act as a senior React engineer and premium portfolio UI/UX designer. Build a complete, responsive personal portfolio website for Mahesh Kumar using React.js, Vite, Tailwind CSS, Framer Motion, and Lucide React.

### Personal profile
- Name: Mahesh Kumar
- Education: B.Tech in Civil Engineering, NIT Raipur
- Expected graduation: 2029
- Role: Full Stack Web Developer
- Goal: Showcase my skills, projects, education, experience, and contact details to recruiters and internship providers.

### Visual reference
Use the uploaded portfolio screenshots as layout inspiration. Create a **white-theme editorial portfolio**, not a dark portfolio.

Design requirements:
- Pure white main canvas (`#FFFFFF`)
- Near-black typography (`#171717`)
- Muted grey secondary text (`#686868`)
- Thin light-grey borders (`#E7E7E7`)
- Soft off-white section backgrounds (`#F6F6F4`)
- Large, bold, oversized name typography
- Minimal navigation with pill-shaped links
- Centered portrait overlapping the large hero headline
- Compact introduction on the left and social links on the right
- Premium project showcase with image-led cards
- Spacious composition, excellent alignment, and restrained shadows
- Subtle hover effects and smooth reveal animations
- Responsive layout for mobile, tablet, laptop, and desktop

The design should feel polished, modern, and human-designed. Do not overuse gradients, glassmorphism, glowing effects, or animation. Do not copy the reference designer’s identity, name, portrait, or text.

### Required sections
1. Navbar with Home, Work, Skills, Experience, Contact, and “Let’s Talk”.
2. Hero with “MAHESH KUMAR”, “Full Stack Web Developer”, a short intro, portrait placeholder, project CTA, and contact CTA.
3. About section describing my Civil Engineering background and interest in software development.
4. Skills grouped into frontend, backend, database, and tools.
5. Featured projects:
   - AI Attendance System
   - Bus Tracking Platform
   - Airbnb-style Listing & Booking Platform
   - Zerodha-style Trading Platform
   - Spotify Backend
   - Banking System Backend
6. Education and experience, including B.Tech at NIT Raipur and a one-month AutoCAD internship.
7. Contact form with validation and clear submission states.
8. Footer with social links and current year.

### Functional requirements
- Use reusable React components and keep content in editable data files.
- Make navigation and buttons functional.
- Use actual configured project/social URLs only; never invent URLs.
- Add a resume-download button that uses `/Mahesh-Kumar-Resume.pdf` from the public folder.
- Use a profile-image placeholder that I can replace with my own image.
- Make the mobile navigation work.
- Respect reduced-motion settings.
- Add accessible labels, semantic HTML, keyboard navigation, and appropriate contrast.
- Do not invent awards, employment, testimonials, metrics, certificates, or project outcomes.
- Do not claim the contact form sends messages until EmailJS or a backend endpoint is configured.
- Keep secrets out of frontend code.
- Include page title, meta description, and favicon placeholder.
- Ensure the production build succeeds and fix broken imports and console errors.

### Deliverables
Generate the complete runnable project files, installation commands, local run instructions, and a README.md. Explain where to replace my portrait, resume PDF, project screenshots, social links, and project URLs. Include GitHub and Vercel deployment steps. Build the working website, not just a static mockup.

---

## 9. Content to Replace Before Publishing

- [ ] Add your real profile portrait.
- [ ] Add your actual resume as `public/Mahesh-Kumar-Resume.pdf`.
- [ ] Add GitHub and LinkedIn profile URLs.
- [ ] Add real project repository links.
- [ ] Add live demo URLs only for deployed projects.
- [ ] Add project screenshots.
- [ ] Confirm internship dates and organization details.
- [ ] Configure the contact form provider/API.
- [ ] Check every button and link.
- [ ] Test mobile and desktop layouts.

## 10. Deployment on Vercel

1. Push the project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. For a standard Vite app, use:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy and test the live URL.
5. If you use a contact API, configure its environment variables in Vercel project settings.

## 11. Quality Checklist

- [ ] White theme is consistent throughout.
- [ ] Hero headline and portrait look balanced on desktop.
- [ ] Portrait does not cover text on mobile.
- [ ] Navigation works with mouse and keyboard.
- [ ] Project cards use real content and links.
- [ ] Resume downloads correctly.
- [ ] Contact form has honest success/error feedback.
- [ ] No horizontal overflow on mobile.
- [ ] No broken images or console errors.
- [ ] Production build completes successfully.
- [ ] Page title and description are set.

## 12. Scroll Animations, Reveal Effects, and Hover Interactions

Add polished, lightweight motion throughout the website. Animations should feel smooth and intentional, not distracting.

### Scroll-based section reveals
- As the visitor scrolls down, each section (About, Skills, Projects, Experience, Contact) should animate into view.
- Use Framer Motion's `whileInView` with a viewport threshold and `once: true` so each section reveals the first time it enters the viewport.
- Use a subtle combination of opacity `0 → 1` and vertical movement `y: 24 → 0`, lasting around `0.5–0.75s` with an ease-out curve.
- Add staggered reveal animations to groups of skill badges and project cards, with a small stagger delay (about `0.06–0.12s`).
- Avoid making users wait for content. Keep movement small and readable.

### Project and content card hover effects
- Project cards should gently lift (`y: -4` to `-8px`) on hover.
- Add a soft shadow and a slight border-color transition.
- Project thumbnails may scale very slightly (`1.02–1.04`) inside an overflow-hidden image container.
- Skill badges and social-link pills should change border/background subtly on hover.
- Buttons should have smooth color transitions and a small arrow/icon movement where appropriate.
- Do not use extreme scaling, spinning, flashing, or strong glow effects.

### Hero and navigation motion
- On initial page load, reveal the navbar, headline, intro, portrait, and CTA buttons with a short staggered entrance.
- The portrait can use a very subtle upward reveal; avoid continuous motion that distracts from the name.
- Add a thin scroll-progress indicator at the top of the page, if it can be implemented cleanly with Framer Motion's `useScroll` and `useSpring`.
- Keep sticky navigation usable and ensure anchor links scroll to the correct section.

### “Scroll all the way down” behavior
- Every section should reveal as the user scrolls all the way down the page; animations must work repeatedly across the whole page, not only in the hero.
- Use reusable components/variants so new sections and cards get the same effect automatically.
- Use `viewport={{ once: true, amount: 0.15 }}` (or a similarly tuned threshold) for section/card reveals. Do not hide important content permanently if JavaScript or motion fails; provide visible fallback styles.
- Do not re-trigger every animation on tiny scroll movements unless there is a clear design reason.

### Accessibility and performance
- Respect `prefers-reduced-motion` and Framer Motion's reduced-motion support.
- Avoid layout shifts; animate `transform` and `opacity` where possible.
- Keep animations performant on mid-range phones.
- Ensure focus-visible styles work independently from hover effects.
- Test the full page from top to bottom on mobile and desktop.

### Example reusable reveal component

```jsx
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

### Example project-card hover animation

```jsx
import { motion, useReducedMotion } from "framer-motion";

export function ProjectCard({ project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt || `${project.title} project preview`}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-neutral-900">{project.title}</h3>
        <p className="mt-2 text-neutral-600">{project.description}</p>
      </div>
    </motion.article>
  );
}
```

### Add this requirement to the AI coding prompt

> **Scroll and interaction animations are required.** Use Framer Motion to animate the navbar and hero on initial load, reveal every section when it enters the viewport during scrolling, stagger project cards and skill badges, and add elegant hover animations to cards, buttons, image thumbnails, and social pills. Use subtle opacity/vertical reveal effects, small card lifts, soft shadows, and restrained image zoom. Make sure the effects work from the top of the page to the very bottom, respect reduced-motion preferences, remain performant on mobile, and never leave important content invisible if animations are unavailable. Add an optional slim scroll-progress bar at the top. Test the full page by scrolling through every section.
