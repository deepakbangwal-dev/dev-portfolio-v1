import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: '#6366f1',
    skills: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'TypeScript', icon: 'fab fa-js' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express', icon: 'fas fa-server' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'REST APIs', icon: 'fas fa-plug' },
      { name: 'GraphQL', icon: 'fas fa-project-diagram' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#ec4899',
    skills: [
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'Redis', icon: 'fas fa-memory' },
      { name: 'MySQL', icon: 'fas fa-database' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: '#06b6d4',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'GitHub Actions', icon: 'fab fa-github' },
      { name: 'Linux', icon: 'fab fa-linux' },
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Vite', icon: 'fas fa-bolt' },
    ],
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
                  <span key={skill.name} className="skill-tag">
                    <i className={skill.icon} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
