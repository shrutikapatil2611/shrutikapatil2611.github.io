document.addEventListener("DOMContentLoaded", () => {
  const d = resumeData;

  // ── SVG icons ──────────────────────────────────────────────
  const icons = {
    email:    `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
    phone:    `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.76 5.76l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    location: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    linkedin: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    github:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`
  };

  const divider = `<div class="contact-divider"></div>`;

  // ── Header ─────────────────────────────────────────────────
  document.body.innerHTML = `
    <header class="header">
      <div class="header-inner">
        <h1 class="name">${d.name}</h1>
        <p class="title">${d.title}</p>
        <div class="contact-row">
          <div class="contact-item">${icons.email}<span>${d.contact.email}</span></div>
          ${divider}
          <div class="contact-item">${icons.phone}<span>${d.contact.phone}</span></div>
          ${divider}
          <div class="contact-item">${icons.location}<span>${d.contact.location}</span></div>
          ${divider}
          <div class="social-row">
            <a class="contact-icon-btn" href="${d.contact.linkedin}" target="_blank" title="LinkedIn">${icons.linkedin}</a>
            <a class="contact-icon-btn" href="${d.contact.github}" target="_blank" title="GitHub">${icons.github}</a>
          </div>
        </div>
      </div>
    </header>

    <main class="main">

      <!-- Profile -->
      <section class="section">
        <h2 class="section-label">Profile</h2>
        <ul class="profile-list">
          ${d.profile.map(p => `<li><strong>${p.bold}</strong>${p.text}</li>`).join("")}
        </ul>
      </section>

      <!-- Experience -->
      <section class="section">
        <h2 class="section-label">Professional Experience</h2>
        ${d.experience.map(job => `
          <div class="job">
            <div class="job-header">
              <div class="job-title-line">
                <span class="job-title">${job.title}</span>
                <span class="job-company">${job.company}</span>
              </div>
              <span class="job-meta">${job.period} · ${job.location}</span>
            </div>
            <ul class="job-bullets">
              ${job.bullets.map(b => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </section>

      <!-- Skills -->
      <section class="section">
        <h2 class="section-label">Skills & Tools</h2>
        <div class="skills-grid">
          ${d.skills.map(s => `
            <div class="skill-row">
              <span class="skill-label">${s.label}</span>
              <span class="skill-value">${s.value}</span>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Certifications -->
      <section class="section">
        <h2 class="section-label">Certifications</h2>
        <div class="cert-list">
          ${d.certifications.map(c => `<span class="cert-tag">${c}</span>`).join("")}
        </div>
      </section>

      <!-- Education -->
      <section class="section">
        <h2 class="section-label">Education</h2>
        ${d.education.map(e => `
          <div class="edu-item">
            <div class="edu-degree">${e.degree}</div>
            <div class="edu-school">${e.school}</div>
          </div>
        `).join("")}
      </section>

    </main>

    <footer class="footer">
      ${d.name} &nbsp;·&nbsp; ${d.title} &nbsp;·&nbsp; ${d.contact.location}
    </footer>
  `;
});
