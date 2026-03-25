export function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground tracking-wide uppercase mb-12">Get in touch</p>
        
        <p className="text-xl md:text-2xl font-light mb-8">
          Want to work together?
        </p>
        
        <a 
          href="mailto:hello@poulamimukherjee.com" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          hello@poulamimukherjee.com
        </a>
      </div>
    </section>
  )
}
