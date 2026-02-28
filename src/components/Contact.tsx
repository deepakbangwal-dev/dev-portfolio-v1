import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">
          I'm open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="contact-cards">
          <a
            href="mailto:deepakbangwal993@gmail.com"
            className="contact-card"
            aria-label="Send email to Deepak Bangwal"
          >
            <span className="contact-icon">📧</span>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">deepakbangwal993@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-bangwal"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="Visit Deepak Bangwal's LinkedIn profile"
          >
            <span className="contact-icon">💼</span>
            <div>
              <p className="contact-label">LinkedIn</p>
              <p className="contact-value">in/deepak-bangwal</p>
            </div>
          </a>
          <a
            href="https://github.com/deepakbangwal-dev"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="Visit Deepak Bangwal's GitHub profile"
          >
            <span className="contact-icon">🐙</span>
            <div>
              <p className="contact-label">GitHub</p>
              <p className="contact-value">deepakbangwal-dev</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
