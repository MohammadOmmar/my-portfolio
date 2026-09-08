import { profile } from '../data/profile'

export default function Introduction() {
  return (
    <section className="px-page-padding py-section-spacing">
      <div className="max-width mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-xs font-mono text-muted tracking-wider uppercase">
              About
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-5">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.3] mb-8">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.positioning.map((tag, i) => (
                <span 
                  key={i}
                  className="text-sm font-mono text-foreground border border-border rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
