import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'Vite', 'Webpack'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.category} className="skill-card">
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
