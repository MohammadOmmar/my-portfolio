export interface Education {
  id: string
  degree: string
  institution: string
  location?: string
  period: string
  focus: string[]
}

export const education: Education[] = [
  {
    id: "bca-gdc",
    degree: "BCA, 4-Year Honours Program",
    institution: "GDC Boys Baramulla",
    location: "Baramulla, J&K",
    period: "2020 – 2024",
    focus: [
      "Advanced Computer Applications",
      "Network Architecture",
      "Information Security",
      "Software Engineering"
    ]
  }
]

export interface Certification {
  id: string
  name: string
  category: string
}

export const certifications: Certification[] = [
  { id: "ai", name: "Artificial Intelligence", category: "AI/ML" },
  { id: "ml-intern", name: "Machine Learning Internship", category: "AI/ML" },
  { id: "dl", name: "Deep Learning Using Artificial Intelligence", category: "AI/ML" },
  { id: "cv", name: "Computer Vision", category: "AI/ML" },
  { id: "nlp", name: "Natural Language Processing", category: "AI/ML" },
  { id: "ds", name: "Data Science", category: "Data" },
  { id: "cns", name: "Computer Network & Internet Security", category: "Networking" },
  { id: "rpa", name: "Robotic Process Automation", category: "Automation" }
]
