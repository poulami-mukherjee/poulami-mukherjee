export function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-border/50">
      <div className="max-w-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <p>© 2026 Poulami Mukherjee</p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/poulami-mukherjee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/poulami-mukherjee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
