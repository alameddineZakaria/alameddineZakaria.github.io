import { experience } from '../config'

export function Experience() {
  return (
    <section className="experience reveal">
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.period}`}>
            <div className="timeline-heading">
              <h3>
                {entry.role} <span className="at">@ {entry.company}</span>
              </h3>
              <span className="period">{entry.period}</span>
            </div>
            <p>{entry.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
