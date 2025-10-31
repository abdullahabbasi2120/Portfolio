"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 text-lg">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <div className="text-accent">
                    <MailIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:hello@designportfolio.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@designportfolio.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <div className="text-accent">
                    <MessageIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Social Media</h3>
                  <div className="space-y-1">
                    <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                      Instagram
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
