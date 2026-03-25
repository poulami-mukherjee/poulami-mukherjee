export function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          {"Let's talk about what you're building."}
        </h2>
        
        <p className="text-muted-foreground mb-10">
          {"If I can help, I'll tell you how. If I can't, I'll tell you who can."}
        </p>
        
        <a 
          href="mailto:hello@poulamimukherjee.com" 
          className="text-accent hover:text-foreground transition-colors"
        >
          hello@poulamimukherjee.com
        </a>
      </div>
    </section>
  )
}
