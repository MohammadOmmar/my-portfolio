import { education, certifications } from '../data/education'

export default function Education() {
  return (
    <section className="px-page-padding py-section-spacing">
      <div className="max-width mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs font-mono text-muted tracking-wider uppercase mb-4">
            Education & Certifications
          </h2>
          <div className="w-full h-[1px] bg-border" />
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-muted mb-6">EDUCATION</h3>
          {education.map((edu) => (
            <div key={edu.id} className="grid grid-cols-12 gap-4 border-t border-border py-6">
              <div className="col-span-12 md:col-span-1">
                <span className="text-xs font-mono text-muted">01</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h4 className="text-lg font-medium">{edu.degree}</h4>
                <p className="text-sm text-muted mt-1">{edu.institution}</p>
                {edu.location && (
                  <p className="text-xs text-muted mt-1">{edu.location}</p>
                )}
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((f, i) => (
                    <span key={i} className="text-xs font-mono text-muted border border-border rounded-full px-2 py-0.5">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 md:text-right">
                <span className="text-xs font-mono text-muted">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xs font-mono text-muted mb-6">CERTIFICATIONS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="border border-border rounded-lg p-4 hover:border-accent transition-colors duration-300">
                <span className="text-xs font-mono text-accent block mb-1">{cert.category}</span>
                <p className="text-sm">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
