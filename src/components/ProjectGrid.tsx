import { projects } from '../config'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
  return (
    <section className="projects reveal">
      <h2>Selected Work</h2>
      {projects.length === 0 ? (
        <p className="status-message">No projects to show yet.</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
