import { siteConfig } from '../config'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {siteConfig.name} ·{' '}
        <a
          href={`https://github.com/${siteConfig.githubUsername}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  )
}
