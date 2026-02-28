import './Experience.css'

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Ltd.',
    period: 'Jan 2023 – Present',
    description:
      'Led development of microservices-based web platform serving 50k+ users. Architected React frontends, Node.js APIs, and PostgreSQL data models. Improved page load performance by 40% through code-splitting and caching strategies.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Solutions Inc.',
    period: 'Jun 2021 – Dec 2022',
    description:
      'Built and maintained multiple client-facing web applications from scratch. Collaborated in an agile team of 8 engineers. Integrated third-party payment gateways and authentication systems.',
    tech: ['Vue.js', 'Express', 'MongoDB', 'AWS'],
  },
  {
    role: 'Frontend Developer',
    company: 'StartUp Studio',
    period: 'Mar 2020 – May 2021',
    description:
      'Developed responsive UIs and component libraries. Worked closely with designers to translate Figma prototypes into production-ready code. Wrote unit and integration tests using Jest and React Testing Library.',
    tech: ['React', 'TypeScript', 'CSS Modules', 'Jest'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <p className="section-subtitle">My professional journey so far</p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
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
