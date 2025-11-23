"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const res = await fetch ("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if(res.ok){
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 3000)
    }else{
      alert("Failed to send message")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-accent text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-accent/10 border border-accent rounded-lg text-accent text-center font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out through
                  any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:ranadiandra.0603@gmail.com"
                  className="flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors group"
                >
                  <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="text-foreground font-medium">ranadiandra.0603@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors group"
                >
                  <Linkedin className="text-accent group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-sm text-foreground/60">LinkedIn</p>
                    <p className="text-foreground font-medium">linkedin.com/in/rana</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Ranadiandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-lg hover:border-accent transition-colors group"
                >
                  <Github className="text-accent group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-sm text-foreground/60">GitHub</p>
                    <p className="text-foreground font-medium">github.com/Ranadiandra</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
