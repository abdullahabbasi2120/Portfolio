"use client"

import { useEffect, useState, useRef } from "react"
import type { JSX } from "react/jsx-runtime"

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    palette: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 3.75A4 4 0 0010 21"
        />
      </svg>
    ),
    smartphone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    package: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m0 0L4 7m8 4v10l8-4v-10"
        />
      </svg>
    ),
    film: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 4v16a1 1 0 001 1h8a1 1 0 001-1V4m0 0L7 4m8 0l4-3m-4 3v0"
        />
      </svg>
    ),
    message: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    zap: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }
  return icons[type] || null
}

const services = [
  {
    icon: "palette",
    title: "Brand Design",
    description: "Complete brand identity including logo, colors, and guidelines",
  },
  {
    icon: "smartphone",
    title: "Social Media",
    description: "Eye-catching content and graphics for all social platforms",
  },
  { icon: "package", title: "Packaging", description: "Product packaging design that stands out on shelves" },
  {
    icon: "film",
    title: "Video Editing",
    description: "Professional video production and editing with smooth transitions",
  },
  {
    icon: "message",
    title: "Marketing Materials",
    description: "Promotional graphics, banners, and campaign materials",
  },
  { icon: "zap", title: "Digital Design", description: "Web design, UI/UX, and digital marketing assets" },
]

export default function Services() {
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
    <section id="services" className="py-24 px-4 bg-muted/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">What I Offer</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <div className="text-accent">
                  <ServiceIcon type={service.icon} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
