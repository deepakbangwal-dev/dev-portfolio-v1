import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with cart, payments, and admin dashboard. Built with React, Node.js, and Stripe integration.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    emoji: '🛒',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration features.',
    tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    emoji: '📋',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather app with location search, 7-day forecasts, and beautiful data visualizations using Chart.js.',
    tech: ['React', 'Chart.js', 'OpenWeather API'],
    emoji: '🌤️',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Blog CMS',
    description: 'Headless CMS-powered blog with markdown support, SEO optimization, and an intuitive content editor.',
    tech: ['Next.js', 'MDX', 'Contentful', 'Vercel'],
    emoji: '✍️',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Real-Time Chat App',
    description: 'End-to-end encrypted messaging app with rooms, file sharing, and push notifications.',
    tech: ['React', 'Firebase', 'WebRTC', 'PWA'],
    emoji: '💬',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Finance Tracker',
    description: 'Personal finance dashboard with expense categorisation, monthly reports, and budget goal tracking.',
    tech: ['Vue.js', 'Express', 'D3.js', 'MySQL'],
    emoji: '💰',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio generator that exports static sites and deploys them to GitHub Pages automatically.',
    tech: ['React', 'TypeScript', 'GitHub API', 'Vite'],
    emoji: '🎨',
    demo: '#',
    repo: '#',
  },
  {
    title: 'DevOps Dashboard',
    description: 'Centralised monitoring dashboard aggregating CI/CD pipelines, server metrics, and deployment logs.',
    tech: ['React', 'Node.js', 'Prometheus', 'Docker'],
    emoji: '📊',
    demo: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">A selection of things I've built</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-emoji">{project.emoji}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} className="project-link" aria-label={`View ${project.title} demo`}>
                  Live Demo ↗
                </a>
                <a href={project.repo} className="project-link project-link-outline" aria-label={`View ${project.title} source code`}>
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
