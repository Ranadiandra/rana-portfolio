"use client";

import { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: "90%" },
      { name: "CSS", icon: <FaCss3Alt />, level: "85%" },
      { name: "JavaScript", icon: <FaJs />, level: "80%" },
      { name: "React", icon: <FaReact />, level: "85%" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "75%" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "50%" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: "80%" },
      { name: "Express.js", icon: <SiExpress />, level: "75%" },
      { name: "SQL", icon: <SiPostgresql />, level: "70%" },
      { name: "MongoDB", icon: <SiMongodb />, level: "60%" },
      { name: "REST API", icon: null, level: "85%" },
      { name: "Authentication", icon: null, level: "80%" },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-accent">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`transition-all duration-1000 delay-${idx * 200} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center mb-2">
                        {skill.icon && (
                          <span className="text-2xl text-accent mr-4">
                            {skill.icon}
                          </span>
                        )}
                        <span className="text-foreground/80 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-accent/50"
                          style={{
                            width: isVisible ? skill.level : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
