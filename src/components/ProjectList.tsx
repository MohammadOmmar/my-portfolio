import { useRef } from 'react'
import { projects, Project } from '../data/projects'

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={itemRef}
      className="group relative border-t border-border py-8 md:py-10 cursor-none"
      data-cursor-hover
    >
      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <span className="text-xs font-mono text-muted">{project.number}</span>
        </div>

        {/* Content */}
        <div className="col-span-10 md:col-span-7">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm md:text-base text-muted max-w-lg leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span 
                key={i}
                className="text-xs font-mono text-muted border border-border rounded-full px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs font-mono text-muted">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Meta */}
        <div className="col-span-12 md:col-span-4 md:text-right">
          <span className="text-xs font-mono text-muted block">{project.category}</span>
          <span className="text-xs font-mono text-muted block mt-1">{project.year}</span>
          <div className="flex md:justify-end gap-3 mt-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-accent transition-colors duration-300"
              >
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-accent transition-colors duration-300"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-expo" />
    </div>
  )
}

export default function ProjectList() {
  return (
    <section id="work" className="px-page-padding py-section-spacing">
      <div className="max-width mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs font-mono text-muted tracking-wider uppercase mb-4">
            Selected Work
          </h2>
          <div className="w-full h-[1px] bg-border" />
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
