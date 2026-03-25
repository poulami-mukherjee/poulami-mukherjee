import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
