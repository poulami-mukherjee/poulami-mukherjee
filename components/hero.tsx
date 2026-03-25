"use client"

import { useState, useEffect } from "react"

const phrases = [
  "help startups ship faster",
  "make systems reliable", 
  "lead engineering teams",
  "solve hard problems",
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const phrase = phrases[currentIndex]
    const speed = isDeleting ? 25 : 50
    
    if (!isDeleting && displayText === phrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500)
      return () => clearTimeout(timeout)
    }
    
    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
      return
    }
    
    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting 
          ? phrase.substring(0, displayText.length - 1)
          : phrase.substring(0, displayText.length + 1)
      )
    }, speed)
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight">
          Hi, I&apos;m Poulami.
          <br />
          <span className="text-muted-foreground">I {displayText}</span>
          <span className="text-accent animate-pulse">|</span>
        </h1>
      </div>
    </section>
  )
}
