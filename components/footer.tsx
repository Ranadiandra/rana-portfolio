export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">© {currentYear} Rana Diandra Zahra | Fullstack Developer</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Ranadiandra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ranadiandra.0603@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/diarana.z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
