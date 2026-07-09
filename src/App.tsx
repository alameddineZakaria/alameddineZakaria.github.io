import { Header } from './components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { ProjectGrid } from './components/ProjectGrid'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <Experience />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
