import React from "react";

const projects = [
  {
    title: "SmashPlus.ph",
    summary: "Esports hub for Badminton/Pickleball players in the Philippines: match histories, community building, court bookings, all in one place for your convenience.",
    tech: ["HTML/CSS", "Django", "API integrations", "Public-facing", ],
    link: "https://smashplus.ph",
    status: "Featured"
  },
  {
    title: "RxCycle",
    summary: "B2B platform for exchange and management of pharmaceutical products in Canada.",
    tech: ["React", "MongoDB", "API integrations", "Internal systems"],
    link: "#",
    status: "Private"
  },
//   {
//     title: "Dungeon Map Dashboard",
//     summary: "Analytics hub that surfaces KPIs with retro tiles, responsive layouts, and smooth state handling.",
//     tech: ["React", "Charts", "Design Systems", "API-first"],
//     link: "#",
//     status: "Case study available"
//   },
//   {
//     title: "Rescue Team Site",
//     summary: "Marketing site with motion, accessibility-first design, and crisp handoff docs for teams.",
//     tech: ["Motion", "Accessibility", "Docs", "Story-driven"],
//     link: "#",
//     status: "Live preview on request"
//   }
];

const icons = {
  controller: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 6h18v12H3V6zm1 2v8h16V8H4zm3 2h2v2H7v-2zm6-1h2v5h-2V9zm-6 5h2v2H7v-2zm6 0h2v2h-2v-2z" fill="currentColor" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.1c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2.1.9 2.6.7.1-.6.3-.9.5-1.1-2.2-.2-4.5-1.1-4.5-4.8 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5 0-5.6-4.5-10-10-10Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.9 3.5c0 1-.7 1.8-1.9 1.8C1.8 5.3 1 4.5 1 3.5 1 2.5 1.8 1.7 3 1.7c1.2 0 1.9.8 1.9 1.8ZM1.3 22.3h3.3V7.9H1.3v14.4Zm6.2-14.4h3.1v2c.4-.7 1.4-2.2 3.5-2.2 2.6 0 4.6 1.7 4.6 5.2v9.4h-3.3v-8.4c0-1.9-.7-3.1-2.2-3.1-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1v8.8H7.5V7.9Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 5.5c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1H3Zm16.7 2L12 13.2 4.3 7.5h15.4ZM4 9.2l7.6 5.6c.2.2.6.2.8 0L20 9.2V17H4V9.2Z" />
    </svg>
  )
};

function App() {
  return (
    <div className="page">
      <div className="bg-grid" aria-hidden />
      <div className="bg-noise" aria-hidden />

      <header className="panel hero" id="summary">
        <div className="eyebrow">Web Developer · AWS Cloud Practitioner</div>
        <h1>
          Genevive <span className="highlight">Macrayo</span>
        </h1>
        <p className="lede">
          Freelance-ready developer crafting responsive, user-friendly experiences with fresh ideas.
          From ideation to deployment, I handle the technical quests so you can focus on your mission.
        </p>
        <p className="lede alt">
          Welcome to my Mystery Dungeon-inspired portfolio—step into the hub to see featured builds, including SmashPlus.ph.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">
            {icons.controller}
            <span>View quest log</span>
          </a>
          <a className="btn ghost sprite-btn" href="#contact">
            <div className="sprite sprite-cyndaquil" aria-hidden />
            <span>Open a rescue request</span>
          </a>
        </div>
        <div className="chips">
          <span className="chip">React + TypeScript</span>
          <span className="chip">Python + Django</span>
          <span className="chip">Full-stack</span>
          <span className="chip">Documentation</span>
        </div>
      </header>

      <section className="panel stats">
        <div className="section-head">
          <h2>Party Summary</h2>
          <span className="tag">Available for freelance</span>
        </div>
        <div className="stat-grid">
          <div className="stat-card">
            <p className="label">Frontend</p>
            <p className="value">React, Vite, SPA/MPA, responsive</p>
          </div>
          <div className="stat-card">
            <p className="label">Product</p>
            <p className="value">Wireframes, UX flows, documentation</p>
          </div>
          <div className="stat-card">
            <p className="label">Collab</p>
            <p className="value">Async-ready, Git best practices, clear updates</p>
          </div>
          {/* <div className="stat-card">
            <p className="label">Polish</p>
            <p className="value">Accessible, performant, tasteful motion</p>
          </div> */}
        </div>
      </section>

      <section className="panel projects" id="projects">
        <div className="section-head">
          <h2>Quest Log</h2>
          <span className="tag">Highlighted builds</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <p className="status">{project.status}</p>
                <h3>{project.title}</h3>
                <p className="summary">{project.summary}</p>
              </div>
              <div className="meta-row">
                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <a className="link" href={project.link}>
                  Details
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact" id="contact">
        <div className="section-head">
          <h2>Contact</h2>
          <span className="tag">Initiate mission</span>
        </div>
        <p className="lede">
          Ready for new quests: landing pages, dashboards, design systems, and polished product UIs.
          Send the mission, I will respond quickly.
        </p>
        <div className="contact-row">
          <a className="contact-chip" href="https://www.linkedin.com/in/genevivemacrayo/" aria-label="LinkedIn">
            {icons.linkedin}
            <span>LinkedIn</span>
          </a>
          <a className="contact-chip" href="mailto:macrayo.gen@gmail.com" aria-label="Email">
            {icons.mail}
            <span>Gmail</span>
          </a>
          <a className="contact-chip" href="https://github.com/gen-jpg" aria-label="GitHub">
            {icons.github}
            <span>GitHub</span>
          </a>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field-row">
            <label htmlFor="message">Inquiry</label>
            <textarea id="message" name="message" rows={4} placeholder="Tell me about your project" required />
          </div>
          <button className="btn primary" type="submit">Send inquiry</button>
          <p className="form-note">
            Suggestion: connect this form to Formspree, Netlify Forms, or a Supabase table (e.g., table "inquiries" with columns name/email/message) to store submissions.
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
