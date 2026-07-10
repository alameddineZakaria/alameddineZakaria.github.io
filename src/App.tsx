import { Header } from './components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { ProjectGrid } from './components/ProjectGrid'
import { Footer } from './components/Footer'
import { Background } from './components/Background'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useCursorGlow } from './hooks/useCursorGlow'
import './App.css'

function App() {
  useScrollReveal()
  useCursorGlow()

  return (
    <>
      <Background />
      <div className="page">
        <Header />
        <main>
          <About />
          <Experience />
          <ProjectGrid />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
