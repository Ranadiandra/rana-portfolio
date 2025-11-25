"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Smart Traffic Quiz",
    description: "An educational traffic safety game built with React, designed to teach players the importance of following road rules through interactive challenges and quizzes.",
    tech: ["React", "Javascript", "HTML5", "CSS"],
    demo: "https://smart-traffic-zeta.vercel.app",
    github: "https://github.com/Ranadiandra/smart-traffic.git",
    image: "/smart-traffic.png"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    tech: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind CSS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization capabilities.",
    tech: ["React", "Express.js", "D3.js", "SQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media API",
    description: "RESTful API for a social media platform with authentication, posts, and user interactions.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    demo: "#",
    github: "#",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-accent">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
                }}
              >
                <div className="h-48  w-full relative">
                  <Image
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      GitHub
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
