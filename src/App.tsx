import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import ProjectList from './components/ProjectList'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import BackgroundScene from './components/BackgroundScene'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-background text-foreground transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background */}
      <BackgroundScene />
      
      {/* Cursor */}
      <Cursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Introduction />
        <ProjectList />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
