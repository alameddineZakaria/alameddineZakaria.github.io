import alIhsanLogo from './assets/projects/al-ihsan-logo.png'
import iraqicinemaLogo from './assets/projects/iraqi-logo-white.png'
import alEtihadLogo from './assets/projects/al-etihad-logo.svg'

export const siteConfig = {
  name: 'Zakaria Alameddine',
  role: 'Fullstack Developer',
  tagline: 'Building things, one project at a time.',
  bio: "I'm a fullstack developer based in Tripoli, Lebanon, currently a Frontend Web Developer at PowerMeMobile. Since 2016 I've worked across companies like Sword Group, Vbout, and Vianeos, and I've run my own freelance practice since 2021 — building everything from responsive UIs to backend APIs and databases, with hands-on experience setting up AWS Ubuntu servers.",
  skills: [
    'React',
    'React Native',
    'Angular',
    'Ionic',
    'Node.js',
    'PHP',
    'Laravel',
    'C# / ASP.NET MVC',
    'SQL Server',
    'MySQL',
    'PL/SQL',
    'Bootstrap',
    'Tailwind CSS',
    'AWS (Ubuntu)',
  ],
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
    company: 'Vbout',
    period: 'Aug 2021 – Mar 2022',
    summary:
      'Developed responsive interfaces and integrated APIs across a range of devices and browsers.',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Vianeos',
    period: 'Jan 2021 – Aug 2021',
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
      'A platform for Al-Ihsan Foundation, a charitable organization. Built with Angular 21, Node.js 24, and a MySQL database.',
    url: 'https://link.alihsan.org.au/',
    tags: ['Nonprofit'],
    logo: alIhsanLogo,
  },
  {
    name: 'Stock Store',
    description: 'An inventory and stock management application.',
    url: null,
    tags: ['E-commerce'],
  },
  {
    name: 'GridsPOS',
    description:
      'A business management system built from scratch, combining CRM, point-of-sale, and ERP functionality — React frontend with a Node.js and SQL Server backend.',
    url: null,
    tags: ['Business Software'],
  },
  {
    name: 'Iraqi Cinema',
    description:
      'A CRM for managing cinemas across Iraq, built with PHP Laravel and MySQL.',
    url: 'https://staging.iraqicinema.net/',
    tags: ['CRM'],
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
    tags: ['Frontend'],
  },
]
