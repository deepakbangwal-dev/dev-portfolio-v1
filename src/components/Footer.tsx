import './Footer.css'

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#about" className="footer-logo">
            <span className="footer-logo-text">Deepak</span>{' '}
            <span className="footer-logo-accent">Bangwal</span>
          </a>
          <p className="footer-tagline">Building the web, one component at a time.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="footer-nav-link">{link}</a>
          ))}
        </nav>

        <div className="footer-social-links">
          <a href="https://github.com/deepakbangwal-dev" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/deepak-bangwal" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:deepakbangwal993@gmail.com" aria-label="Email" className="footer-social">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Deepak Bangwal. Built with <span className="heart">♥</span> using React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}
