import './AboutMe.css'

const highlights = [
  { icon: 'fas fa-briefcase', value: '10+', label: 'Years Experience' },
  { icon: 'fas fa-code', value: '8+', label: 'Projects Delivered' },
  { icon: 'fas fa-tools', value: '34+', label: 'Tools & Technologies' },
]

const techStack = [
  'Java', 'Python', 'Spring Boot', 'Hibernate', 'JPA',
  'Apache Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL',
  'Docker', 'Kubernetes', 'OpenShift', 'Microservices',
  'Git', 'Jenkins', 'JUnit', 'Design Patterns',
]

export default function AboutMe() {
  return (
    <section id="about" className="aboutme-section">
      <div className="container aboutme-inner">
        {/* Left: Circular portrait with profile info */}
        <div className="aboutme-portrait slide-in-left">
          <div className="portrait-frame">
            <div className="portrait-canvas-effect">
              <img
                src="https://github.com/user-attachments/assets/577c1075-b973-480b-80bb-6134f6579831"
                alt="Deepak Bangwal"
                className="portrait-img"
              />
              <div className="canvas-overlay" aria-hidden="true" />
            </div>
          </div>

          <h3 className="portrait-name">Deepak Bangwal</h3>
          <p className="portrait-title">Backend Systems Engineer | Distributed Systems | End-to-End Product Builder</p>

          <div className="portrait-social-links">
            <a href="https://github.com/deepakbangwal-dev" target="_blank" rel="noreferrer" aria-label="GitHub" className="portrait-social-icon">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/deepak-bangwal" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="portrait-social-icon">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/deepakbangwal-dev/dev-portfolio-v1/blob/main/Deepak_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Download Resume" className="portrait-social-icon portrait-resume-icon">
              <i className="fas fa-file-download" />
            </a>
          </div>
        </div>

        {/* Right: About content */}
        <div className="aboutme-content slide-in-right">
          <span className="section-label">
            <i className="fas fa-user" /> About Me
          </span>
          <h2 className="section-title">
            A Decade of Building <span>Robust Systems</span>
          </h2>
          <p className="aboutme-bio">
            With over <strong>10 years of professional experience</strong>, I specialize in
            designing and building scalable backend architectures and AI-powered solutions.
            From high-traffic APIs to intelligent automation, I bring deep expertise in
            modern tools and technologies to deliver impactful software.
          </p>
          <p className="aboutme-bio">
            I thrive at the intersection of backend engineering and artificial intelligence —
            building systems that are not only reliable and performant but also intelligent
            and adaptive.
          </p>

          {/* Highlight cards */}
          <div className="aboutme-highlights">
            {highlights.map(h => (
              <div key={h.label} className="highlight-card glass-card">
                <div className="highlight-icon">
                  <i className={h.icon} />
                </div>
                <span className="highlight-value">{h.value}</span>
                <span className="highlight-label">{h.label}</span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="aboutme-tech">
            <h4 className="tech-heading">Tools & Technologies</h4>
            <div className="tech-tags">
              {techStack.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
