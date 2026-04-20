"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./portfolio.css";

// ─────────────────────────── DATA ───────────────────────────
const PROFILE = {
  name: "Akhil Vinnakota",
  title: "Product Developer & MBA Candidate",
  location: "Bengaluru, India",
  email: "akhilvinnakota123@gmail.com",
  phone: "+91-8143363736",
  linkedin: "https://www.linkedin.com/in/akhilvinnakota60/",
  github: "https://github.com/akhilvinnakota123-sketch",
  bio: "MBA candidate, Software Engineer and Solo Founder who built and shipped Promptune, a Google-approved Chrome extension used by AI power users across India. Experienced in taking products from zero to live, defining KPIs, driving AI-led automation at Amadeus, and building with a deep user-centric mindset.",
  avatar: "AV",
  photo: "/profile.jpeg",
};

const ACHIEVEMENTS = [
  {
    icon: "🚀",
    metric: "40%+",
    label: "Engagement Boost",
    description:
      "Increased travel agent engagement by launching an AI productivity copilot, resulting in rapid user adoption.",
    color: "#3b82f6",
  },
  {
    icon: "⚡",
    metric: "3d → 1h",
    label: "QA Time Slashed",
    description:
      "Reduced QA validation time from 3 days to 1 hour by delivering a self-service XML validation tool adopted across teams.",
    color: "#60a5fa",
  },
  {
    icon: "🏆",
    metric: "Innovation Award",
    label: "Industry Recognition",
    description:
      "Won the Innovation Award for building a self-service XML validation platform for nested XSDs.",
    color: "#93c5fd",
  },
  {
    icon: "📊",
    metric: "KPIs",
    label: "Metrics Defined",
    description:
      "Defined success metrics, KPIs, and prioritization criteria for automation and GenAI-led product initiatives.",
    color: "#bfdbfe",
  },
];

const EXPERIENCE = [
  {
    role: "Product Developer",
    company: "Amadeus",
    location: "Bengaluru, India",
    period: "Jul 2024 – Present",
    type: "Full-time",
    isCurrent: true,
    color: "#3b82f6",
    points: [
      "Launched an AI-driven copilot chatbot for airline agents, increasing efficiency and driving higher user engagement.",
      "Translated business objectives into scalable engineering solutions aligned with KPIs and product goals.",
      "Developed data-driven automation workflows using GenAI, NLP, and RAG for operational intelligence.",
      "Migrated microservices to Azure, improving reliability, scalability, and security.",
      "Collaborated with engineering, product, and analytics teams to define performance metrics and track impact.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Amadeus",
    location: "Bengaluru, India",
    period: "Jan 2024 – Jul 2024",
    type: "Internship",
    isCurrent: false,
    color: "#60a5fa",
    points: [
      "Developed tools and microservices using Java, Quarkus, Python, and MongoDB.",
      "Built a self-service XML validation platform for nested XSDs, improving efficiency and winning the Innovation Award.",
      "Defined success metrics, functional requirements, and delivery plans with product teams.",
      "Improved API reliability and optimized validation logic across services.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "MBA",
    institution: "Manipal Academy of Higher Education (MAHE)",
    period: "Feb 2025 – Apr 2027",
    gpa: "9.6 / 10",
    icon: "🎓",
    color: "#3b82f6",
  },
  {
    degree: "B.Tech (Honours)",
    institution: "Raghu Engineering College",
    period: "Jan 2020 – Apr 2024",
    gpa: "8.6 / 10",
    icon: "⚙️",
    color: "#60a5fa",
  },
];

const SKILLS = {
  "Product & Entrepreneurship": ["Chrome Extension Dev", "Solo Founding", "User Research", "PRD Writing", "Roadmapping", "A/B Thinking", "Go-to-Market", "Chrome Web Store", "Compliance & Policy"],
  "Programming Languages": ["Java", "Python", "C", "JavaScript", "SQL", "HTML"],
  "Frameworks": ["Spring Boot", "Quarkus", "Angular", "Next.js"],
  "Cloud & DevOps": ["Azure", "Docker", "Kubernetes", "Jenkins (CI/CD)"],
  "Databases & Integration": ["MongoDB", "SQL", "REST APIs", "JSON / XML / XSD", "Kafka"],
  "AI & Automation": ["GenAI", "NLP Chatbots", "RAG Pipelines", "Productivity Copilots", "Prompt Engineering"],
  "Tools": ["Git", "Postman", "JIRA", "Figma", "Excel Analytics"],
};

const SOFT_SKILLS = [
  "Product Thinking", "Analytical Reasoning", "Problem Solving",
  "Strategic Planning", "Leadership", "Collaboration",
  "Stakeholder Management", "Communication", "Data-Driven Decision Making",
];

const CERTIFICATIONS = [
  {
    name: "AWS Cloud Virtual Internship",
    issuer: "AICTE",
    icon: "☁️",
    logoUrl: "/logo-aicte.jpeg",
    logoBg: "#ffffff",
  },
  {
    name: "Responsive Website Development",
    issuer: "University of London",
    icon: "🌐",
    logoUrl: "/logo-ulon.jpeg",
    logoBg: "#ffffff",
  },
  {
    name: "Java FullStack",
    issuer: "Wipro",
    icon: "💼",
    logoUrl: "/logo-wipro.png",
    logoBg: "#ffffff",
  },
  {
    name: "Python Programming",
    issuer: "University of Michigan",
    icon: "🐍",
    logoUrl: "/logo-umich.png",
    logoBg: "#00274c",
  },
  {
    // Kubernetes: SimpleIcons blue helm wheel
    name: "Kubernetes",
    issuer: "CNCF / Coursera",
    icon: "⚙️",
    logoUrl: "https://cdn.simpleicons.org/kubernetes/ffffff",
    logoBg: "#326ce5",
  },
  {
    // Coursera: SimpleIcons white C-mark on Coursera blue
    name: "Product Management Fundamentals",
    issuer: "Coursera",
    icon: "📋",
    logoUrl: "https://cdn.simpleicons.org/coursera/ffffff",
    logoBg: "#0056d2",
  },
  {
    name: "Advanced Computer Networks",
    issuer: "NPTEL",
    icon: "🔗",
    logoUrl: "/logo-nptel.png",
    logoBg: "#ffffff",
  },
  {
    // Coursera: same white C-mark on Coursera blue (different cert)
    name: "Business Analytics with Excel",
    issuer: "Coursera",
    icon: "📊",
    logoUrl: "https://cdn.simpleicons.org/coursera/ffffff",
    logoBg: "#0056d2",
  },
  {
    name: "Developer Virtual Experience",
    issuer: "Accenture",
    icon: "💡",
    logoUrl: "/logo-accenture.png",
    logoBg: "#ffffff",
  },
];

const LANGUAGES = [
  { name: "English", level: 100 },
  { name: "Telugu", level: 95 },
  { name: "Hindi", level: 90 },
  { name: "Spanish", level: 60 },
];

// ─────────────────────────── NAVBAR ───────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Impact", href: "#achievements" },
    { label: "Promptune", href: "#promptune" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">
        <span className="nav-logo-av">AV</span>
      </div>

      {/* Desktop links */}
      <ul className="nav-links desktop-only">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="nav-link">{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <a href={`mailto:${PROFILE.email}`} className="nav-cta desktop-only">
          Hire Me
        </a>
        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`ham-line${menuOpen ? " open" : ""}`} />
          <span className={`ham-line${menuOpen ? " open" : ""}`} />
          <span className={`ham-line${menuOpen ? " open" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="mobile-nav-link" onClick={handleNavClick}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${PROFILE.email}`} className="mobile-nav-cta" onClick={handleNavClick}>
            Hire Me ✉️
          </a>
        </div>
      )}
    </nav>
  );
}

// ─────────────────────────── HERO ───────────────────────────
function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Product &amp; Engineering Roles
        </div>

        {/* Profile photo */}
        <div className="hero-avatar">
          <div className="avatar-ring">
            {!imgError ? (
              <img
                src={PROFILE.photo}
                alt="Akhil Vinnakota"
                className="avatar-photo"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="avatar-fallback">{PROFILE.avatar}</div>
            )}
          </div>
        </div>

        <h1 className="hero-name">{PROFILE.name}</h1>
        <p className="hero-title">{PROFILE.title}</p>
        <p className="hero-location">📍 {PROFILE.location}</p>
        <p className="hero-bio">{PROFILE.bio}</p>

        <div className="hero-cta">
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
            ✉️ Get In Touch
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
            🔗 LinkedIn
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn-outline">
            💻 GitHub
          </a>
        </div>

        <div className="hero-contact-chips">
          <span className="chip">📧 {PROFILE.email}</span>
          <span className="chip">📞 {PROFILE.phone}</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}

// ─────────────────────────── PROMPTUNE FEATURED PRODUCT ───────────────────────────
function PromptuneSection() {
  const [logoError, setLogoError] = useState(false);
  const [mockupError, setMockupError] = useState(false);

  const features = [
    { icon: "✨", label: "Inline Enhancement", desc: "One-click prompt rewrite right inside ChatGPT, Claude & Gemini" },
    { icon: "🇮🇳", label: "Indian Language AI", desc: "Auto-detects Hindi, Telugu, Tamil, Kannad, Hinglish — zero clicks" },
    { icon: "🔁", label: "Rewrite Anywhere", desc: "Select any text on any page, right-click → Promptune Rewrite" },
  ];

  const stats = [
    { value: "9+", label: "Tones" },
    { value: "4", label: "AI Platforms" },
    { value: "10+", label: "Languages" },
    { value: "Live", label: "Google Approved" },
  ];

  const testimonials = [
    { quote: "Saves me an hour a day — I just type 'reply yes' and click Professional.", tag: "Product Builder" },
    { quote: "I write in Telugu-English and Promptune converts it into perfect system prompts for Claude.", tag: "Developer" },
    { quote: "It hovers right inside the chat box. Totally frictionless.", tag: "Power User" },
  ];

  return (
    <section className="section promptune-section" id="promptune">
      {/* Header */}
      <div className="section-header">
        <span className="section-label">Solo Founder · Live Product</span>
        <h2 className="section-title">Featured Project</h2>
      </div>

      {/* Hero card */}
      <div className="pt-hero-card">
        {/* Ambient glow orbs */}
        <div className="pt-glow-1" />
        <div className="pt-glow-2" />

        {/* Top row: branding + live badges */}
        <div className="pt-brand-row">
          <div className="pt-logo-wrap">
            {!logoError ? (
              <img
                src="/promptune-logo.png"
                alt="Promptune Logo"
                className="pt-logo-img"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="pt-logo-fallback">P</div>
            )}
          </div>
          <div className="pt-brand-info">
            <h3 className="pt-product-name">Promptune</h3>
            <p className="pt-product-tagline">Type Naturally, Prompt Perfectly</p>
          </div>
          <div className="pt-badges">
            <span className="pt-badge pt-badge-live">🟢 Live on Chrome Web Store</span>
            <span className="pt-badge pt-badge-founder">Solo Founder</span>
          </div>
        </div>

        {/* Description */}
        <p className="pt-description">
          Promptune is a <strong>Google-approved Chrome extension</strong> that lives natively inside ChatGPT, Claude, Gemini & Perplexity.
          It transforms raw, messy thoughts into expert-level prompts in 1 second — with unique support for 10+ Indian languages.
          Built, shipped, and grown entirely as a solo founder.
        </p>

        {/* Stats strip */}
        <div className="pt-stats-strip">
          {stats.map((s, i) => (
            <div key={i} className="pt-stat">
              <div className="pt-stat-value">{s.value}</div>
              <div className="pt-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two-col: features + mockup */}
        <div className="pt-main-cols">
          {/* Features */}
          <div className="pt-features-col">
            <div className="pt-features-title">Core Differentiators</div>
            {features.map((f, i) => (
              <div key={i} className="pt-feature-item">
                <div className="pt-feature-icon">{f.icon}</div>
                <div>
                  <div className="pt-feature-label">{f.label}</div>
                  <div className="pt-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}

            {/* PM context */}
            <div className="pt-pm-box">
              <div className="pt-pm-box-title">Product Manager Lens</div>
              <ul className="pt-pm-list">
                <li>Identified prompt-quality as the #1 friction in AI adoption</li>
                <li>Shipped v1 solo in 4 weeks; iterated from real user feedback</li>
                <li>Prioritised Indian language support as a zero-competition moat</li>
                <li>Navigated Chrome Web Store policy & compliance end-to-end</li>
              </ul>
            </div>
          </div>

          {/* Mockup */}
          <div className="pt-mockup-col">
            <div className="pt-mockup-frame">
              <div className="pt-mockup-bar">
                <span className="pt-dot red" />
                <span className="pt-dot yellow" />
                <span className="pt-dot green" />
                <span className="pt-url-pill">promptune.in</span>
              </div>
              {!mockupError ? (
                <img
                  src="/promptune-mockup.png"
                  alt="Promptune Extension UI"
                  className="pt-mockup-img"
                  onError={() => setMockupError(true)}
                />
              ) : (
                <div className="pt-mockup-placeholder">
                  <div style={{ fontSize: "3rem" }}>✨</div>
                  <div style={{ color: "var(--blue-300)", fontWeight: 700, marginTop: "0.5rem" }}>Promptune</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Chrome Extension</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="pt-testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="pt-testimonial">
              <p className="pt-testimonial-quote">"{t.quote}"</p>
              <span className="pt-testimonial-tag">{t.tag}</span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="pt-cta-row">
          <a
            href="https://chromewebstore.google.com/detail/kkganmnbkpcdkgkkgpobdlnlkanbldld"
            target="_blank"
            rel="noreferrer"
            className="pt-cta-primary"
          >
            <img src="https://cdn.simpleicons.org/googlechrome/ffffff" alt="Chrome" className="pt-cta-chrome-icon" />
            Add to Chrome — Free
          </a>
          <a
            href="https://www.promptune.in"
            target="_blank"
            rel="noreferrer"
            className="pt-cta-secondary"
          >
            🌐 Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── ACHIEVEMENTS ───────────────────────────
function AchievementsRow() {
  return (
    <section className="section" id="achievements">
      <div className="section-header">
        <span className="section-label">Product Impact</span>
        <h2 className="section-title">Key Achievements</h2>
      </div>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="achievement-card" style={{ "--card-color": a.color }}>
            <div className="achievement-icon">{a.icon}</div>
            <div className="achievement-metric">{a.metric}</div>
            <div className="achievement-label">{a.label}</div>
            <p className="achievement-desc">{a.description}</p>
            <div className="achievement-bg-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────── EXPERIENCE (Timeline) ───────────────────────────
function ExperienceRow() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="timeline-item">
            {/* Left: dot + line */}
            <div className="timeline-aside">
              <div className="timeline-dot" style={{ "--dot-color": e.color }}>
                {e.isCurrent && <div className="dot-pulse" style={{ "--dot-color": e.color }} />}
              </div>
              {i < EXPERIENCE.length - 1 && <div className="timeline-line" />}
            </div>

            {/* Right: card */}
            <div className="timeline-card" style={{ "--card-color": e.color }}>
              {e.isCurrent && <div className="current-label">Current Role</div>}

              <div className="exp-card-header">
                <div className="exp-header-left">
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-company-line">
                    <span className="exp-company-name">{e.company}</span>
                    <span className="exp-type-pill">{e.type}</span>
                  </p>
                </div>
                <div className="exp-header-right">
                  <span className="exp-period">{e.period}</span>
                  <span className="exp-location">📍 {e.location}</span>
                </div>
              </div>

              <ul className="exp-points">
                {e.points.map((pt, j) => (
                  <li key={j} className="exp-point">
                    <span className="point-dot" style={{ background: e.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────── SKILLS ───────────────────────────
function SkillsRow() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(SKILLS)[0]);

  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-label">Technical Arsenal</span>
        <h2 className="section-title">Skills & Expertise</h2>
      </div>

      <div className="skills-layout">
        <div className="skills-categories">
          {Object.keys(SKILLS).map((cat) => (
            <button
              key={cat}
              className={`skill-category-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skills-tags-container">
          <h4 className="skills-category-title">{activeCategory}</h4>
          <div className="skills-tags">
            {SKILLS[activeCategory].map((s, i) => (
              <span key={i} className="skill-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="soft-skills-section">
        <h4 className="soft-skills-title">Soft Skills</h4>
        <div className="soft-skills-tags">
          {SOFT_SKILLS.map((s, i) => (
            <span key={i} className="soft-skill-tag">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── EDUCATION ───────────────────────────
function EducationRow() {
  return (
    <section className="section" id="education">
      <div className="section-header">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title">Education</h2>
      </div>
      <div className="education-grid">
        {EDUCATION.map((e, i) => (
          <div key={i} className="edu-card" style={{ "--card-color": e.color }}>
            <div className="edu-icon">{e.icon}</div>
            <div>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-institution">{e.institution}</p>
              <div className="edu-meta">
                <span className="edu-period">🗓 {e.period}</span>
                <span className="edu-gpa">⭐ GPA: {e.gpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────── CERTIFICATIONS ───────────────────────────
function CertLogo({ cert }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return <span className="cert-icon-fallback">{cert.icon}</span>;
  }
  return (
    <div
      className="cert-logo-wrap"
      style={{ background: cert.logoBg }}
    >
      <img
        src={cert.logoUrl}
        alt={cert.issuer}
        className="cert-logo-img"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

function CertificationsRow() {
  return (
    <section className="section" id="certifications">
      <div className="section-header">
        <span className="section-label">Continuous Learning</span>
        <h2 className="section-title">Certifications</h2>
      </div>
      <div className="certs-grid">
        {CERTIFICATIONS.map((c, i) => (
          <div key={i} className="cert-card">
            <CertLogo cert={c} />
            <div className="cert-text">
              <p className="cert-name">{c.name}</p>
              <p className="cert-issuer">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────── LANGUAGES ───────────────────────────
function LanguagesRow() {
  return (
    <section className="section" id="languages">
      <div className="section-header">
        <span className="section-label">Communication</span>
        <h2 className="section-title">Languages</h2>
      </div>
      <div className="languages-grid">
        {LANGUAGES.map((l, i) => (
          <div key={i} className="lang-card">
            <div className="lang-name">{l.name}</div>
            <div className="lang-bar-track">
              <div
                className="lang-bar-fill"
                style={{ "--bar-width": `${l.level}%`, animationDelay: `${i * 0.15}s` }}
              />
            </div>
            <span className="lang-pct">{l.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────── FOOTER ───────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-avatar">
          <img src={PROFILE.photo} alt="Akhil" className="footer-photo" onError={(e) => { e.target.style.display = "none"; }} />
        </div>
        <p className="footer-name">{PROFILE.name}</p>
        <p className="footer-tagline">
          Building intelligent products at the intersection of AI &amp; engineering.
        </p>
        <div className="footer-links">
          <a href={`mailto:${PROFILE.email}`} className="footer-link">✉️ Email</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="footer-link">🔗 LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="footer-link">💻 GitHub</a>
          <a href={`tel:${PROFILE.phone}`} className="footer-link">📞 Call</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {PROFILE.name} · Bengaluru, India
        </p>
      </div>
    </footer>
  );
}

// ─────────────────────────── PAGE ───────────────────────────
export default function Portfolio() {
  return (
    <main className="portfolio-main">
      <Navbar />
      <HeroSection />
      <AchievementsRow />
      <PromptuneSection />
      <ExperienceRow />
      <SkillsRow />
      <EducationRow />
      <CertificationsRow />
      <LanguagesRow />
      <Footer />
    </main>
  );
}
