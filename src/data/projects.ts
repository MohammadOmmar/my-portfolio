export interface Project {
  id: string
  number: string
  name: string
  category: string
  year: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  type: "coding" | "tools" | "event"
}

export const projects: Project[] = [
  {
    id: "enterprise-network",
    number: "01",
    name: "Enterprise Networking Model",
    category: "Networking & Infrastructure",
    year: "2024",
    description: "A three-tier enterprise network topology with VLAN segmentation, security ACLs, and full Cisco IOS configurations. Includes an interactive web-based topology viewer for exploring device configurations.",
    technologies: ["Cisco IOS", "Cisco Packet Tracer", "GNS3", "EVE-NG", "VLANs", "ACLs", "NAT", "SSH", "Port Security", "DHCP Snooping", "STP", "BPDU Guard"],
    github: "https://github.com/MohammadOmmar/Enterprise-Network",
    type: "coding"
  },
  {
    id: "safe-school-bus",
    number: "02",
    name: "Safe School Bus Kashmir",
    category: "Full-Stack Web Application",
    year: "2024",
    description: "Real-time school transport safety platform for Jammu & Kashmir. Tracks buses live, flags overspeeding and route deviations, and gives parents, drivers, schools, and RTO authorities a shared safety dashboard.",
    technologies: ["Node.js", "Express 5", "Socket.IO", "React 19", "TypeScript", "Vite", "Tailwind CSS", "JWT", "bcryptjs", "Leaflet"],
    github: "https://github.com/MohammadOmmar/DevsReach",
    type: "coding"
  },
  {
    id: "clayvio-cafe",
    number: "03",
    name: "Clayvio Cafe Website",
    category: "Freelance Web Development",
    year: "2024",
    description: "A warm, inviting web presence for Clayvio Cafe in Sopore — showcasing their menu of chai, coffee, and food with an emphasis on atmosphere and community.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://clayvio-cafe.vercel.app",
    type: "coding"
  },
  {
    id: "hand-tracker",
    number: "04",
    name: "Hand Tracker",
    category: "Browser-Based Machine Learning",
    year: "2024",
    description: "A lightweight hand-tracking demo that uses the webcam to detect and track hand landmarks in real time. Features a drawing mode activated by holding the SHIFT key.",
    technologies: ["HTML", "JavaScript", "Browser-based machine learning"],
    github: "https://github.com/MohammadOmmar/Hand-Tracker",
    type: "coding"
  },
  {
    id: "weather-forecasting",
    number: "05",
    name: "Weather Forecasting System",
    category: "Undergraduate Project",
    year: "2023",
    description: "A predictive modeling system for weather forecasting using data processing and predictive algorithms.",
    technologies: ["Data Processing", "Predictive Algorithms", "Predictive Modelling"],
    type: "coding"
  },
  {
    id: "world-alarm-clock",
    number: "06",
    name: "World & Alarm Clock",
    category: "JavaScript",
    year: "2023",
    description: "A world clock with alarm functionality built with vanilla web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MohammadOmmar/Clock",
    type: "coding"
  }
]
