import type { CSSProperties, RefObject } from 'react'
import type { Project } from '../config'
import { useTilt } from '../hooks/useTilt'

function initials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tilt = useTilt<HTMLAnchorElement | HTMLDivElement>()
  const direction = index % 2 === 0 ? 'reveal-left' : 'reveal-right'
  const revealStyle: CSSProperties = { transitionDelay: `${(index % 3) * 90}ms` }

  const content = (
    <>
      <div className="project-card-media">
        {project.logo ? (
          <img src={project.logo} alt={`${project.name} logo`} />
        ) : (
          <span className="project-card-initials">{initials(project.name)}</span>
        )}
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <h3>{project.name}</h3>
          {!project.url && <span className="badge">Coming soon</span>}
        </div>
        <p className="description">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="project-card-footer">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )

  if (!project.url) {
    return (
      <div
        className={`project-card disabled reveal ${direction}`}
        style={revealStyle}
        ref={tilt.ref as RefObject<HTMLDivElement>}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        {content}
      </div>
    )
  }

  return (
    <a
      className={`project-card reveal ${direction}`}
      style={revealStyle}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      ref={tilt.ref as RefObject<HTMLAnchorElement>}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      {content}
    </a>
  )
}
