import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="px-page-padding py-section-spacing min-h-[60vh] flex flex-col justify-center">
      <div className="max-width mx-auto w-full">
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs font-mono text-muted tracking-wider uppercase mb-4">
            Get In Touch
          </h2>
          <div className="w-full h-[1px] bg-border" />
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 lg:col-span-8 md:col-start-5 lg:col-start-5">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight mb-8">
              Interested in working together? Let's create something extraordinary.
            </p>
            
            <a 
              href={`mailto:${profile.email}`}
              className="inline-block text-lg md:text-xl text-accent hover:underline underline-offset-4 transition-colors duration-300"
              data-cursor-hover
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
