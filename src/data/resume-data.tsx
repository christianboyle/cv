import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Christian Boyle",
  initials: "CB",
  location: "Fairway, Kansas, CST",
  locationLink: "https://www.google.com/maps/place/Fairway,+KS",
  about:
    "Frontend Engineer focused on building products with extra attention to detail",
  summary:
    "As a Frontend Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Angular, and Bootstrap. I have over 13 years of experience working remotely with teammates all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1605754",
  personalWebsiteUrl: "https://christianboyle.com",
  contact: {
    email: "mail@christianboyle.com",
    tel: "9137231337",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/christianboyle",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/boylechristian/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Kansas State University",
      degree: "Bachelor of Science Electronic Media",
      start: "2000",
      end: "2006",
    },
  ],
  work: [
    {
      company: "Symplicity",
      link: "https://symplicity.com",
      badges: ["Remote"],
      title: "Software Engineer → Software Engineer III",
      start: "2011",
      end: "Current",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, led creation and implementation of Janus design system. Technologies: Angular, TypeScript, StorybookJS",
    },
    {
      company: "Mayer Media Design",
      link: "https://web.archive.org/web/20090625082932/http://www.mayermediadesign.com/our-team.html",
      badges: [],
      title: "Web Developer",
      start: "2007",
      end: "2010",
      description:
        "Standards-compliant frontend development on over 100 marketing sites. Led transition from table-based to CSS-based architecture. Technologies: jQuery, CSS",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Linux",
    "Docker",
    "Storybook",
  ],
  projects: [
    {
      title: "Advocate Flex",
      techStack: [
        "Angular",
        "TypeScript",
        "PHP",
      ],
      description: "Greenfield project to convert our existing SaaS to a modern codebase and architecture",
      link: {
        label: "advocateflex",
        href: "https://www.symplicity.com/introduction-advocate-flex",
      },
    },
    {
      title: "Advocate",
      techStack: ["jQuery", "Angular", "TypeScript", "Bootstrap", "SaaS"],
      description:
        "SaaS that manages student conduct and behavioral intervention",
      link: {
        label: "advocate",
        href: "https://www.symplicity.com/higher-ed/solutions/advocate/",
      },
    },
    {
      title: "ParetoPal",
      techStack: ["Side Project", "LangChain", "OpenAI"],
      description: "Enter a topic and ParetoPal gives you a way to apply the 80/20 rule to it",
      link: {
        label: "paretopal",
        href: "https://pareto-pal.streamlit.app/",
      },
    },
    {
      title: "Voice 2",
      techStack: ["AngularJS", "PHP"],
      description:
        "Greenfield project to convert existing SaaS MPA to AngularJS SPA",
    },
    {
      title: "christianboyle.com",
      techStack: ["Side Project", "RWD", "Houdini"],
      description:
        "My personal website and dev experiment playground",
      link: {
        label: "christianboyle.com",
        href: "https://christianboyle.com/",
      },
    },
  ],
} as const;
