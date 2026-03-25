"use client"

import { useState } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between">
        <a href="#" className="text-sm text-foreground tracking-wide">
          Poulami Mukherjee
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sm text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col justify-center px-8">
          <button 
            className="absolute top-6 right-8 text-sm text-foreground"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
