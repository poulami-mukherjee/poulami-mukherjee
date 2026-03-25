export function About() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground tracking-wide uppercase mb-12">About</p>
        
        <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
          I spent 5 years at Amazon, where I learned that the best technology 
          is the kind you don&apos;t notice — it just works.
        </p>
        
        <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
          Now I help companies build software that scales without drama. 
          Whether you need to ship your first product, fix something broken, 
          or figure out what to build next — I can help.
        </p>
      </div>
    </section>
  )
}
