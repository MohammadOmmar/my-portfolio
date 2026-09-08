import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="px-page-padding py-8 border-t border-border">
      <div className="max-width mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-muted">
              {profile.name}©2026
            </span>
            <span className="text-xs font-mono text-muted">
              {profile.location}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-300"
              data-cursor-hover
            >
              GitHub
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-300"
              data-cursor-hover
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-300"
              data-cursor-hover
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
