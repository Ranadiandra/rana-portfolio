"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">I'm </span>
            <span className="text-accent">Rana</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80 mb-6">
            Fullstack Developer
          </h2>

          <p className="text-lg sm:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications from front to back. Passionate about creating efficient, reliable, and user-centered digital experiences. 
            Explore my work and professional journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              See My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
