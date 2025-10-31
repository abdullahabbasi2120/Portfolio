"use client"

import { useState, useEffect, useRef } from "react"

const projects = [
  { id: 1, title: "Brand Identity", category: "Branding", image: "/modern-brand-identity.png" },
  { id: 2, title: "Social Campaign", category: "Social Media", image: "/creative-social-media-campaign.jpg" },
  { id: 3, title: "Packaging Design", category: "Packaging", image: "/product-packaging-design.png" },
  { id: 4, title: "Digital Marketing", category: "Digital", image: "/digital-marketing-materials.png" },
  { id: 5, title: "Video Production", category: "Video", image: "/professional-video-production-thumbnail.jpg" },
  { id: 6, title: "Mockup Design", category: "Mockup", image: "/professional-mockup-design.jpg" },
]

const categories = ["All", "Branding", "Social Media", "Packaging", "Digital", "Video", "Mockup"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="work" className="py-24 px-4 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Selected Work</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-card aspect-square transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-primary-foreground font-bold text-lg">{project.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
