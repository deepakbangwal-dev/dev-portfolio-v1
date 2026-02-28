import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div className="reveal">
          <div className="section-label">✉️ Contact</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="contact-layout">
          {/* Info cards */}
          <div className="contact-info slide-in-left">
            <a
              href="mailto:deepakbangwal993@gmail.com"
              className="contact-card"
              aria-label="Send email to Deepak Bangwal"
            >
              <span className="contact-icon">
                <i className="fas fa-envelope" style={{ color: '#ec4899' }} />
              </span>
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
              <span className="contact-icon">
                <i className="fab fa-linkedin-in" style={{ color: '#0077b5' }} />
              </span>
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
              <span className="contact-icon">
                <i className="fab fa-github" />
              </span>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">deepakbangwal-dev</p>
              </div>
            </a>
            <div className="contact-card contact-card-static">
              <span className="contact-icon">
                <i className="fas fa-map-marker-alt" style={{ color: '#06b6d4' }} />
              </span>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">India</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-wrapper slide-in-right">
            {submitted ? (
              <div className="form-success">
                <span className="form-success-icon">🎉</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project collaboration or just say hi"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project or just say hi!"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                  <i className="fas fa-paper-plane" style={{ fontSize: '0.9rem' }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
