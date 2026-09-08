import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section className="px-page-padding py-section-spacing">
      <div className="max-width mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs font-mono text-muted tracking-wider uppercase mb-4">
            Experience
          </h2>
          <div className="w-full h-[1px] bg-border" />
        </div>

        <div className="grid grid-cols-12 gap-4">
          {experience.map((exp) => (
            <div key={exp.id} className="col-span-12 border-t border-border py-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-1">
                  <span className="text-xs font-mono text-muted">01</span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <p className="text-sm text-muted mt-1">{exp.company}</p>
                  {exp.location && (
                    <p className="text-xs text-muted mt-1">{exp.location}</p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <span className="text-xs font-mono text-muted block">{exp.period}</span>
                  {exp.technologies && (
                    <div className="flex flex-wrap md:justify-end gap-2 mt-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-muted border border-border rounded-full px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
