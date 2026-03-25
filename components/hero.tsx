export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Software Engineer · Architect · Consultant
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-8">
          Hi, I&apos;m Poulami.
        </h1>
        
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-4">
          Technology, when done right, doesn&apos;t just look good — it brings in leads, converts clients, and genuinely pays for itself.
        </p>
        
        <p className="text-lg md:text-xl italic text-muted-foreground mb-10">
          Most businesses aren&apos;t there yet. That&apos;s exactly where I come in.
        </p>
        
        <a 
          href="#contact" 
          className="inline-block px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
        >
          Let&apos;s talk &rarr;
        </a>
        
        <p className="mt-12 text-xs text-muted-foreground tracking-wide">
          8+ years experience · 5 years at Amazon · B.Tech CSE (ML) · US · Europe · India · LinkedIn Top Voice 2023
        </p>
      </div>
    </section>
  )
}
