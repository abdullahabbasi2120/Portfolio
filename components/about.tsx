"use client"

import { useEffect, useState, useRef } from "react"

export default function About() {
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
    <section id="about" className="py-24 px-4 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <div className="mb-8">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">ABDULLAH ABBASI</h2>
            </div>

            <p className="text-lg mb-6 leading-relaxed text-foreground">
              I’m a 21-year-old CA Inter student and a passionate graphic designer with over five years of creative experience. Designing isn’t just a skill for me—it’s my way of expressing ideas with uniqueness and meaning. From logo animations to social media artwork, I craft visuals that tell a story. Every design I create is built to stand out and inspire. Take a look through my work—you’ll definitely want to click and connect.

            </p>

            <p className="text-lg leading-relaxed text-foreground">
              My approach combines strategic thinking with artistic vision, ensuring every design element serves a
              purpose while maintaining visual excellence. I believe great design is the intersection of creativity and
              clarity.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent/30 mb-4">5+</div>
                  <p className="text-foreground font-medium">Years of Design Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
