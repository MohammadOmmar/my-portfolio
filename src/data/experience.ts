export interface Experience {
  id: string
  role: string
  company: string
  location?: string
  period: string
  description: string
  technologies?: string[]
}

export const experience: Experience[] = [
  {
    id: "ml-intern-nit",
    role: "Machine Learning Winter Intern",
    company: "NIT Srinagar",
    location: "Srinagar, J&K",
    period: "Jan 2026 – Feb 2026",
    description: "Worked on machine learning projects during a winter internship at the National Institute of Technology Srinagar.",
    technologies: ["Machine Learning", "Python", "AI"]
  }
]
