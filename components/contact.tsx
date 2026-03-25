export function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border/50">
      <div className="max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
          {"Let's talk about what you're building."}
        </h2>
        
        <p className="text-muted-foreground mb-12 text-lg">
          {"If I can help, I'll tell you how. If I can't, I'll tell you who can."}
        </p>
        
        <a 
          href="mailto:hello@poulamimukherjee.com" 
          className="text-xl md:text-2xl text-accent hover:text-foreground transition-colors"
        >
          hello@poulamimukherjee.com
        </a>
      </div>
    </section>
  )
}
