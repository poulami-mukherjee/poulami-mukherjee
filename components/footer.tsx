export function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-12">
      <div className="max-w-2xl flex items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()}</p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/poulamimukherjee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/poulamimukherjee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
