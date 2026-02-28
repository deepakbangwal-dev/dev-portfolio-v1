import { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Shipped' },
  { value: '20+', label: 'Technologies' },
]

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    const COUNT = 80

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`
        ctx.fill()
      })
      // draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <HeroCanvas />
      {/* Decorative blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />

      <div className="container about-inner">
        <div className="about-text">
          <div className="about-badge">👋 Available for Work</div>
          <h1 className="about-name">
            Hi, I'm <span>Deepak</span><br />Bangwal
          </h1>
          <h2 className="about-title">
            <span className="typed-role">Full-Stack Developer</span>
          </h2>
          <p className="about-bio">
            I'm a passionate software engineer who loves building clean, performant web
            applications. With expertise across the full stack, I craft experiences that
            are both delightful to use and reliable under the hood.
          </p>

          <div className="about-actions">
            <a href="#contact" className="btn btn-primary">
              <span>Get in touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#projects" className="btn btn-outline">View my work</a>
            <a href="#" className="btn btn-ghost">
              <i className="fas fa-download" style={{ fontSize: '0.9rem' }} />
              Resume
            </a>
          </div>

          <div className="about-socials">
            <a href="https://github.com/deepakbangwal-dev" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <i className="fab fa-github" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/deepak-bangwal" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
              LinkedIn
            </a>
            <a href="mailto:deepakbangwal993@gmail.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope" />
              Email
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="about-avatar" aria-hidden="true">
            <div className="avatar-ring">
              <div className="avatar-inner">
                {/* Replace the src below with your real photo path, e.g. "/your-photo.jpg" placed in the public/ folder */}
                <img
                  src="https://ui-avatars.com/api/?name=Deepak+Bangwal&size=240&background=6366f1&color=fff&bold=true&font-size=0.4"
                  alt="Deepak Bangwal"
                  className="avatar-img"
                />
              </div>
            </div>
            <div className="avatar-float avatar-float-1">⚛️</div>
            <div className="avatar-float avatar-float-2">🚀</div>
            <div className="avatar-float avatar-float-3">💻</div>
          </div>

          <div className="about-stats">
            {stats.map(stat => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
