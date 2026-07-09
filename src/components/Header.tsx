import { siteConfig } from '../config'
import profilePhoto from '../assets/profile.jpg'

export function Header() {
  return (
    <header className="site-header">
      <img className="avatar" src={profilePhoto} alt={siteConfig.name} />
      <span className="eyebrow">{siteConfig.role}</span>
      <h1>{siteConfig.name}</h1>
      <p className="tagline">{siteConfig.tagline}</p>
      <nav className="header-links">
        <a
          href={`https://github.com/${siteConfig.githubUsername}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {siteConfig.linkedin && (
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>Email</a>}
        {siteConfig.phone && (
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
            {siteConfig.phone}
          </a>
        )}
      </nav>
    </header>
  )
}
