export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Software Engineer · Architect · Consultant
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-8">
          {"Hi, I'm Poulami."}
        </h1>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-4">
          {"Technology, when done right, doesn't just look good — it brings in leads, converts clients, and genuinely pays for itself."}
        </p>
        
        <p className="text-base md:text-lg italic text-muted-foreground mb-10">
          {"Getting there is the hard part. That's what I help with."}
        </p>
        
        <a 
          href="mailto:hello@poulamimukherjee.com" 
          className="inline-block px-6 py-3 border border-foreground/30 text-foreground text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
        >
          {"Let's talk →"}
        </a>
        
        <p className="mt-16 text-xs text-muted-foreground tracking-wide leading-relaxed">
          8+ years experience · 5 years at Amazon · B.Tech in Computer Science Engineering · US · Europe · India · LinkedIn Top Voice 2023
        </p>
      </div>
    </section>
  )
}
