import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: '#6366f1',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#ec4899',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: '#06b6d4',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'Vite', 'Webpack'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">💡 Expertise</div>
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with day to day</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`skill-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ '--card-accent': group.color } as React.CSSProperties}
            >
              <div className="skill-card-top" />
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
