import './Skills.css'

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    color: '#6366f1',
    skills: [
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Python', icon: 'fab fa-python' },
    ],
  },
  {
    category: 'Frameworks & Messaging',
    icon: '⚙️',
    color: '#8b5cf6',
    skills: [
      { name: 'Spring Boot', icon: 'fas fa-leaf' },
      { name: 'Hibernate', icon: 'fas fa-database' },
      { name: 'JPA', icon: 'fas fa-layer-group' },
      { name: 'Apache Kafka', icon: 'fas fa-stream' },
      { name: 'RabbitMQ', icon: 'fas fa-envelope' },
      { name: 'Redis', icon: 'fas fa-memory' },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    icon: '🛠️',
    color: '#06b6d4',
    skills: [
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
      { name: 'OpenShift', icon: 'fab fa-redhat' },
      { name: 'GitLab CI', icon: 'fab fa-gitlab' },
      { name: 'Jenkins', icon: 'fas fa-cogs' },
      { name: 'SonarQube', icon: 'fas fa-shield-alt' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'SVN', icon: 'fas fa-code-branch' },
    ],
  },
  {
    category: 'Architecture & Concepts',
    icon: '🏗️',
    color: '#f59e0b',
    skills: [
      { name: 'Design Patterns', icon: 'fas fa-cubes' },
      { name: 'Microservices', icon: 'fas fa-project-diagram' },
      { name: 'SOLID Principles', icon: 'fas fa-check-double' },
      { name: 'TDD', icon: 'fas fa-vial' },
      { name: 'Exception Handling', icon: 'fas fa-exclamation-triangle' },
      { name: 'Multithreading', icon: 'fas fa-random' },
    ],
  },
  {
    category: 'Testing & Database',
    icon: '🧪',
    color: '#10b981',
    skills: [
      { name: 'JUnit', icon: 'fas fa-flask' },
      { name: 'Mockito', icon: 'fas fa-vial' },
      { name: 'JaCoCo', icon: 'fas fa-chart-bar' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🔧',
    color: '#ec4899',
    skills: [
      { name: 'IntelliJ', icon: 'fas fa-laptop-code' },
      { name: 'Eclipse', icon: 'fas fa-code' },
      { name: 'STS', icon: 'fas fa-terminal' },
      { name: 'Postman', icon: 'fas fa-paper-plane' },
      { name: 'BIRT', icon: 'fas fa-file-alt' },
      { name: 'JIRA', icon: 'fab fa-jira' },
      { name: 'Slack', icon: 'fab fa-slack' },
      { name: 'Maven', icon: 'fas fa-box' },
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
