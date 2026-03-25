export function About() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border/50">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12">About</p>
        
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            {"I spent five years at Amazon building systems that couldn't afford to break — real-time services handling millions of requests, where a 4-second response time needed to come down to 100 milliseconds, and any failure had a measurable business cost."}
          </p>
          
          <p>
            {"That experience shaped how I think about technology. I don't start with tools. I start with what the business actually needs, then work backwards to the simplest architecture that delivers it reliably."}
          </p>
          
          <p>
            {"I've worked within GDPR, HIPAA, and cross-border data compliance frameworks — from Amazon's EU operations to healthcare patient data across the US, India, UK, and Australia. When I build systems, compliance isn't an afterthought. It's part of the architecture."}
          </p>
          
          <p>
            {"Today I work with startups and growing businesses across the US, Europe, and India — helping them build systems that are ready to scale, ready for AI, and built by someone who's seen what happens when you skip the fundamentals."}
          </p>
          
          <p>
            {"When I'm not building, I mentor early-career engineers and contribute to communities like Women Who Code and Girls in Tech — because the next generation of builders deserves someone in their corner who's been through it."}
          </p>
        </div>
      </div>
    </section>
  )
}
