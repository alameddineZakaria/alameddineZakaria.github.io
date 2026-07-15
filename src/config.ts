import alIhsanLogo from './assets/projects/al-ihsan-logo.png'
import iraqicinemaLogo from './assets/projects/iraqi-logo-white.png'
import alEtihadLogo from './assets/projects/al-etihad-logo.svg'
import awqafLogo from './assets/projects/awqaf-logo.svg'
import gridsposLogo from './assets/projects/gridspos-logo.png'
import webmmLogo from './assets/projects/webmm-logo.svg'
import stockStoreLogo from './assets/projects/stock-store-logo.png'

export const siteConfig = {
  name: 'Zakaria Alameddine',
  role: 'Fullstack Developer',
  tagline: 'Building things, one project at a time.',
  bio: "I'm a fullstack developer based in Tripoli, Lebanon, currently a Frontend Web Developer at PowerMeMobile. Since 2016 I've worked across companies like Sword Group, Vbout, and Vianeos, and I've run my own freelance practice since 2021 — building everything from responsive UIs to backend APIs and databases, with hands-on experience setting up AWS Ubuntu servers. I also have hands-on experience building ERP, POS, and stock management systems. I'm currently learning AI development and have built several personal projects exploring RAG, LLMs, vector databases, and AI agents.",
  githubUsername: 'alameddineZakaria',
  // Set to null to hide a link
  email: 'alameddine.zakaria@gmail.com' as string | null,
  phone: '+961 76 653 709' as string | null,
  linkedin: 'https://www.linkedin.com/in/zakaria-alameddine-86b42520a/' as string | null,
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  summary: string
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Frontend Web Developer',
    company: 'PowerMe Mobile',
    period: 'Jan 2024 – Present',
    summary:
      'Building responsive, high-performance interfaces and working closely with backend teams to integrate APIs.',
  },
  {
    role: 'Fullstack Developer',
    company: 'Sword Group',
    period: 'Apr 2022 – Oct 2023',
    summary:
      'Built and maintained scalable front-end and back-end components, including RESTful APIs and database optimization.',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Vianeos',
    period: 'Jan 2021 – Mar 2022',
    summary: 'Improved cross-device accessibility and frontend performance.',
  },
  {
    role: 'Fullstack Web Developer',
    company: 'Freelance',
    period: 'Jan 2021 – Present',
    summary:
      'Delivering end-to-end web applications — UI, database, and CI/CD pipelines — for independent clients.',
  },
  {
    role: 'Software Developer',
    company: 'Lynads',
    period: 'Jul 2016 – Dec 2020',
    summary: 'Built scalable backend services and optimized database performance.',
  },
]

export interface Project {
  name: string
  description: string
  // Set to null while a project isn't live yet — the card will show "Coming soon"
  url: string | null
  tags?: string[]
  // Path to a logo/screenshot image (import it and pass the resolved URL)
  logo?: string
}

export const projects: Project[] = [
  {
    name: 'Al-Ihsan Foundation',
    description:
      'A platform for Al-Ihsan Foundation, a charitable organization. Built end-to-end as fullstack developer — Angular 21, Node.js 24, and a MySQL database — with a self-built CI/CD pipeline that auto-deploys to the AWS Ubuntu server via SSH on every push to production.',
    url: 'https://link.alihsan.org.au/',
    tags: ['Nonprofit', 'CI/CD', 'fullstack', 'angular', 'nodejs', 'mysql'],
    logo: alIhsanLogo,
  },
  {
    name: 'Messaging Manager',
    description:
      'A multi-tenant messaging platform used by major telecom operators — including Ooredoo, Vodafone, Zain KSA, and Zain Kuwait — to launch bulk SMS campaigns in a single click. My role: converting the Figma designs into a fully interactive, data-heavy interface with Angular 21 and PrimeNG — covering everything from campaign setup to reporting dashboards — and integrating it end-to-end with the backend API.',
    url: 'https://zainksa.stg.dev1team.net/webmm2/login',
    tags: ['frontend', 'angular'],
    logo: webmmLogo,
  },
  {
    name: 'Stock Store',
    description:
      'An inventory and stock management application. Built as fullstack developer with React, Node.js, and a MySQL database.',
    url: 'https://cloudposs.app',
    tags: ['E-commerce', 'fullstack', 'reactjs', 'nodejs', 'mysql'],
    logo: stockStoreLogo,
  },
  {
    name: 'GridsPOS',
    description:
      'A business management system built from scratch, combining CRM, point-of-sale, and ERP functionality — React frontend with a Node.js and SQL Server backend.',
    url: 'https://web.gridsweb.com:9006/login',
    tags: ['Business Software', 'fullstack', 'reactjs', 'nodejs', 'sqlserver'],
    logo: gridsposLogo,
  },
  {
    name: 'Iraqi Cinema',
    description:
      'A CRM for managing cinemas across Iraq, built with PHP Laravel and MySQL, deployed to an AWS Ubuntu server with a self-built CI/CD pipeline that auto-deploys via SSH on every push to production.',
    url: 'https://staging.iraqicinema.net/',
    tags: ['CRM', 'CI/CD', 'php laravel','mysql'],
    logo: iraqicinemaLogo
  },
  {
    name: 'Al Etihad',
    description:
      'Converted Figma designs into a fully interactive website. Role: frontend implementation only.',
    url: 'https://www.aletihad.ae/',
    tags: ['Frontend'],
    logo: alEtihadLogo,
  },
  {
    name: 'Awqaf Rashaya',
    description:
      'A platform for Awqaf Rashaya. Role: frontend built with React and OpenAPI-generated clients; backend built by a separate team in Java with PostgreSQL.',
    url: 'https://awqaf-qa.onrender.com/',
    tags: ['Frontend', 'reactjs', 'tailwind'],
    logo: awqafLogo,
  },
]
