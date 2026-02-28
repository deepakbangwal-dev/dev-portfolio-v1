import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <div className="about-text">
          <p className="about-greeting">Hi, I'm</p>
          <h1 className="about-name">Deepak Bangwal</h1>
          <h2 className="about-title">Full-Stack Developer</h2>
          <p className="about-bio">
            I'm a passionate software engineer who loves building clean, performant web
            applications. With expertise across the full stack, I craft experiences that
            are both delightful to use and reliable under the hood.
          </p>
          <div className="about-actions">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#projects" className="btn btn-outline">View my work</a>
          </div>
        </div>
        <div className="about-avatar" aria-hidden="true">
          <div className="avatar-ring">
            <span className="avatar-initials">DB</span>
          </div>
        </div>
      </div>
    </section>
  )
}
