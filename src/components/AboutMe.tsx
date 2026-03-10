import './AboutMe.css'

const highlights = [
  { icon: 'fas fa-briefcase', value: '10+', label: 'Years Experience' },
  { icon: 'fas fa-code', value: '50+', label: 'Projects Delivered' },
  { icon: 'fas fa-tools', value: '30+', label: 'Tools & Technologies' },
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
        {/* Left: Canvas-style portrait */}
        <div className="aboutme-portrait slide-in-left">
          <div className="portrait-frame">
            <div className="portrait-canvas-effect">
              {/* To use a local image, save your photo to the public/ folder and update the src below */}
              <img
                src="https://github.com/user-attachments/assets/577c1075-b973-480b-80bb-6134f6579831"
                alt="Deepak Bangwal"
                className="portrait-img"
              />
              <div className="canvas-overlay" aria-hidden="true" />
            </div>
            {/* Decorative corner accents */}
            <div className="frame-accent frame-accent-tl" aria-hidden="true" />
            <div className="frame-accent frame-accent-br" aria-hidden="true" />
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
