import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with cart, payments, and admin dashboard. Built with React, Node.js, and Stripe integration.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    emoji: '🛒',
    demo: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration features.',
    tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    emoji: '📋',
    demo: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather app with location search, 7-day forecasts, and beautiful data visualizations using Chart.js.',
    tech: ['React', 'Chart.js', 'OpenWeather API'],
    emoji: '🌤️',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Blog CMS',
    description: 'Headless CMS-powered blog with markdown support, SEO optimization, and an intuitive content editor.',
    tech: ['Next.js', 'MDX', 'Contentful', 'Vercel'],
    emoji: '✍️',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Real-Time Chat App',
    description: 'End-to-end encrypted messaging app with rooms, file sharing, and push notifications.',
    tech: ['React', 'Firebase', 'WebRTC', 'PWA'],
    emoji: '💬',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Finance Tracker',
    description: 'Personal finance dashboard with expense categorization, monthly reports, and budget goal tracking.',
    tech: ['Vue.js', 'Express', 'D3.js', 'MySQL'],
    emoji: '💰',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio generator that exports static sites and deploys them to GitHub Pages automatically.',
    tech: ['React', 'TypeScript', 'GitHub API', 'Vite'],
    emoji: '🎨',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'DevOps Dashboard',
    description: 'Centralised monitoring dashboard aggregating CI/CD pipelines, server metrics, and deployment logs.',
    tech: ['React', 'Node.js', 'Prometheus', 'Docker'],
    emoji: '📊',
    demo: '#',
    repo: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">🚀 Portfolio</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">A selection of things I've built</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className={`project-card reveal reveal-delay-${(i % 3) + 1}${project.featured ? ' featured' : ''}`}>
              {project.featured && <span className="featured-badge">⭐ Featured</span>}
              <div className="project-card-top" aria-hidden="true" />
              <div className="project-emoji">{project.emoji}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>
              {!project.featured && (
                <div className="project-links">
                  <a href={project.demo} className="project-link" aria-label={`View ${project.title} demo`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={project.repo} className="project-link project-link-outline" aria-label={`View ${project.title} source code`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
