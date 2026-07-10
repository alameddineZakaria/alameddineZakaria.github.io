import type { IconType } from 'react-icons'
import {
  SiReact,
  SiAngular,
  SiIonic,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiSharp,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiUbuntu,
  SiGithub,
  SiGitlab,
  SiBitbucket,
} from 'react-icons/si'
import { TbSql, TbDatabase, TbBrain, TbNetwork, TbVector, TbRobot } from 'react-icons/tb'

export interface Skill {
  name: string
  icon: IconType
}

export interface SkillGroup {
  category: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'Angular', icon: SiAngular },
      { name: 'Ionic', icon: SiIonic },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'C# / ASP.NET MVC', icon: SiSharp },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL Server', icon: TbSql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PL/SQL', icon: TbDatabase },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (Ubuntu)', icon: SiUbuntu },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'Bitbucket', icon: SiBitbucket },
    ],
  },
  {
    category: 'AI',
    items: [
      { name: 'LLMs', icon: TbBrain },
      { name: 'RAG', icon: TbNetwork },
      { name: 'Vector Databases', icon: TbVector },
      { name: 'AI Agents', icon: TbRobot },
    ],
  },
]
