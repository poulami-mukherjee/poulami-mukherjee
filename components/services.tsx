"use client"

import { useState } from "react"

const services = [
  {
    title: "Build your product",
    description: "From idea to launch. I handle the technical decisions so you can focus on your business.",
  },
  {
    title: "Fix what's broken", 
    description: "Systems slowing down? Code that's hard to change? I'll find the problems and fix them.",
  },
  {
    title: "Scale your team",
    description: "Part-time technical leadership. I'll set standards, mentor developers, and keep things on track.",
  },
  {
    title: "Due diligence",
    description: "Investing or acquiring? I'll give you an honest assessment of what the tech is really worth.",
  },
  {
    title: "Cloud & infrastructure",
    description: "AWS, migrations, making things faster and cheaper. 5 years of Amazon experience.",
  },
  {
    title: "Prepare for AI",
    description: "Get your systems ready for AI. Practical steps, no hype.",
  },
  {
    title: "Mentorship",
    description: "1:1 guidance for engineers. I'm active with Women Who Code and Girls in Tech.",
  }
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground tracking-wide uppercase mb-12">How I can help</p>
        
        <div className="space-y-1">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group py-4 border-b border-border/50 cursor-default"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="text-lg md:text-xl font-light">
                {service.title}
              </p>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
