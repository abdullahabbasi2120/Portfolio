"use client"

import { useEffect, useState, useRef } from "react"
import type { JSX } from "react/jsx-runtime"

const SkillIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    palette: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 3.75A4 4 0 0010 21"
        />
      </svg>
    ),
    smartphone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    package: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m0 0L4 7m8 4v10l8-4v-10"
        />
      </svg>
    ),
    film: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 4v16a1 1 0 001 1h8a1 1 0 001-1V4m0 0L7 4m8 0l4-3m-4 3v0"
        />
      </svg>
    ),
    pentool: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747 10-4.747 10-10.747c0-5.002-4.5-10.747-10-10.747z"
        />
      </svg>
    ),
    share: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
  }
  return icons[type] || null
}

const skills = [
  { icon: "palette", name: "GloboDesign", level: 95 },
  { icon: "smartphone", name: "Social Media Design", level: 90 },
  { icon: "share", name: "Creative Business Cards", level: 92 },
  { icon: "pentool", name: "Digital Design", level: 88 },
  { icon: "film", name: "Video Editing & Transitions", level: 85 },
  { icon: "package", name: "Product Packaging", level: 87 },
]

export default function Skills() {
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

  return (
    <section id="skills" className="py-24 px-4 bg-muted/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Design Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <div className="text-accent">
                    <SkillIcon type={skill.icon} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
                <span className="text-accent font-bold">{skill.level}%</span>
              </div>

              <div className="w-full bg-border rounded-full h-2">
                <div
                  className={`bg-gradient-to-r from-accent to-secondary h-full rounded-full transition-all duration-1000 ${isVisible ? "w-full" : "w-0"}`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
