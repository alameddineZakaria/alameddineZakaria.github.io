import { siteConfig } from '../config'

export function About() {
  return (
    <section className="about reveal">
      <h2>About</h2>
      <p>{siteConfig.bio}</p>
      {siteConfig.skills.length > 0 && (
        <ul className="skills-list">
          {siteConfig.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
