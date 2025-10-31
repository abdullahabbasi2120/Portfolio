"use client"

import { useState, useEffect } from "react"

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-background via-background to-muted/30 flex-row bg-background text-background">
      <div
        className={`text-center max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider">
            Welcome to My Portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Creative Design
          <br />
          That Stands Out
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting visually stunning graphics and designs that elevate brands. From social media to packaging, I bring
          creative vision to life with precision and artistry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
            <ArrowRightIcon />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted/80 transition-colors border border-border"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
