import { useState } from 'react'
import './Contact.css'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validateForm(form: { name: string; email: string; subject: string; message: string }): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // Send email via mailto as a reliable fallback
    const mailtoLink = `mailto:deepakbangwal993@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailtoLink, '_blank')
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
                <i className="fas fa-phone" style={{ color: '#22c55e' }} />
              </span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+91 XXXXX XXXXX</p>
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
                <button className="btn btn-primary" onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', email: '', subject: '', message: '' })
                  setErrors({})
                }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    aria-required="true"
                    required
                  />
                  {errors.name && <span className="field-error" role="alert">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    aria-required="true"
                    required
                  />
                  {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project collaboration or just say hi"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'input-error' : ''}
                    aria-required="true"
                    required
                  />
                  {errors.subject && <span className="field-error" role="alert">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span className="required" aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project or just say hi!"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    aria-required="true"
                    required
                  />
                  {errors.message && <span className="field-error" role="alert">{errors.message}</span>}
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
