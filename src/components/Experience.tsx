import './Experience.css'

const experiences = [
  {
    role: 'Associate Staff Engineer',
    company: 'Nagarro, Gurugram',
    period: 'Apr 2022 – Present',
    description:
      'Worked on optimizing the load of grid and EMI calculator modules. Contributed as an individual contributor on high-impact features, improving application performance and user experience across the platform.',
    tech: ['Angular', 'Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Velocis Systems Pvt. Ltd, A-25, Sector-67, Noida (UP)',
    period: 'Oct 2016 – Mar 2022',
    description:
      'Worked on projects from scratch while understanding design, query optimization, and security. Served as an individual contributor for complicated projects involving reading and processing building plans, delivering end-to-end solutions.',
    tech: ['Java', 'J2EE', 'Spring MVC', 'Hibernate', 'PostgreSQL', 'jQuery', 'Jenkins'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">💼 Career</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">My professional journey so far</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="timeline-marker">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-tech">
                  {exp.tech.map(t => (
                    <span key={t} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
