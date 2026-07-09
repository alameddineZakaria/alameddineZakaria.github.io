import type { Project } from '../config'

function initials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function ProjectCard({ project }: { project: Project }) {
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
    return <div className="project-card disabled">{content}</div>
  }

  return (
    <a className="project-card" href={project.url} target="_blank" rel="noreferrer">
      {content}
    </a>
  )
}
