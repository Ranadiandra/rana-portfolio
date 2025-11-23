"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-accent">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-accent to-primary rounded-lg overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <img src="/pasfoto.jpg" alt="My Avatar" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate fullstack developer with a deep love for building end-to-end web applications. With
                expertise spanning both frontend and backend technologies, I create seamless digital experiences that
                solve real-world problems.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in web development has equipped me with a comprehensive understanding of modern development
                practices, from responsive UI design to robust server architecture. I'm committed to writing clean,
                maintainable code and staying current with industry best practices.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
