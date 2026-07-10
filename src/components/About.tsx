import { siteConfig } from '../config'
import { skillGroups } from '../skills'

export function About() {
  return (
    <section className="about reveal">
      <h2>About</h2>
      <p>{siteConfig.bio}</p>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h4>{group.category}</h4>
            <ul className="skills-list">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <skill.icon aria-hidden="true" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
