"use client"

import { useState } from "react"

const services = [
  {
    number: "01",
    title: "Software Design, Delivery & Build",
    description: "End-to-end product development for startups and growing businesses — from scoping and architecture to deployment and handover. Every decision gets senior engineering judgment, so what you end up with actually scales rather than something that needs rebuilding in 18 months.",
    goodFor: "MVPs, platform rebuilds, internal tools, founding teams.",
  },
  {
    number: "02",
    title: "Architecture Review & Advisory",
    description: "You've built something. Now you're not sure if it'll hold — or you're about to make a decision that's hard to undo. I review your existing system and give you a clear, honest picture of what's working, what's fragile, and what to fix first.",
    goodFor: "Pre-scale audits, inherited codebases, major technical decisions.",
  },
  {
    number: "03",
    title: "Cloud & Infrastructure Consulting",
    description: "Whether you're migrating off legacy infrastructure, designing for scale, or rebuilding something that was never meant to grow this far — I help you make the right decisions for your load, your team, and your budget. AWS is where I spent five years building systems that couldn't afford to fail.",
    goodFor: "Cloud migration, AWS architecture, serverless, cost optimisation.",
  },
  {
    number: "04",
    title: "Fractional Engineering Leadership",
    description: "Senior technical presence without the full-time cost. I show up as the most experienced engineer in the room — setting standards, making architecture calls, unblocking teams, and giving founders the technical clarity they need to move quickly and confidently.",
    goodFor: "Scaling startups, teams between CTOs, non-technical founders.",
  },
  {
    number: "05",
    title: "Engineering Due Diligence",
    description: "An independent technical assessment of a company's codebase, architecture, and engineering practices — before you invest, acquire, or sign. Includes GDPR and regulatory compliance assessment.",
    goodFor: "Investors, acquirers, founders preparing for funding rounds.",
  },
  {
    number: "06",
    title: "Digital Transformation Roadmap",
    description: "Before AI can work for your business, your systems have to be ready for it. I assess where you are — your data, your infrastructure, your team — and build a practical, phased, GDPR-compliant roadmap. No vendor lock-in, no unnecessary complexity.",
    goodFor: "Traditional businesses exploring AI, companies with legacy systems.",
  },
  {
    number: "07",
    title: "Engineering Mentorship",
    description: "Structured 1:1 mentorship for early-career engineers. I've mentored interns at Amazon who went on to full-time roles and been active with Women Who Code and Girls in Tech.",
    goodFor: "Junior to mid-level engineers, career changers, underrepresented people in tech.",
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border/50">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">Services</p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-16">
          {"I work with businesses at different stages of technical maturity. Some need to build. Some need to fix. Some need someone to tell them what to do next. Here's where that usually leads."}
        </p>
        
        <div className="space-y-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border-t border-border/50 last:border-b"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between text-left group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-accent text-sm font-medium">{service.number}</span>
                  <span className="font-serif text-lg md:text-xl font-medium group-hover:text-accent transition-colors">
                    {service.title}
                  </span>
                </div>
                <span className="text-muted-foreground text-xl ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-12 md:pl-14 pr-8">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-accent">Good for:</span> {service.goodFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
