import { siteConfig } from '../config'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        
        <a
          href={`https://github.com/${siteConfig.githubUsername}`}
          target="_blank"
          rel="noreferrer"
        >
         © {new Date().getFullYear()} {siteConfig.name} ·{' '}
        </a>
      </p>
    </footer>
  )
}
