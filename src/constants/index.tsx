import {
  ChartArea,
  File,
  Github,
  Home,
  Linkedin,
  Mail,
  Navigation,
  Phone,
  Target,
  User,
} from "lucide-react";
import { SidebarIconType, ToolsUsedInterface } from "../../types";

export const attachmentSIcon = {
  pdf: {
    name: "PDF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  github: {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  powerBi: {
    name: "Go to Dashboard",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
};

export const toolsUsedIcon = {
  react: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Router",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
    },
  ],
  redux: [
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
  ],
  typescript: [
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ],
};

export const sidebarIcon: Record<string, SidebarIconType> = {
  linkedin: {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/your-profile",
  },
  github: {
    name: "GitHub",
    icon: Github,
    link: "https://www.github.com/your-profile",
  },
  email: {
    name: "Email",
    icon: Mail,
    link: "mailto:test@gmail.com",
  },
  telephone: {
    name: "Telephone",
    icon: Phone,
    link: "tel:+1234567890",
  },
  location: {
    name: "Location",
    icon: Navigation,
    link: "https://www.google.com/maps/place/your-location",
  },
  resume: {
    name: "Resume",
    icon: File,
    link: "/path/to/your/resume.pdf",
  },
};

export const skillsObj: Record<string, ToolsUsedInterface[]> = {
  Data_Analisys: [
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "ReactJs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ],
  Data_Visualization: [
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "MySql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
};

export const navbarLinks = {
  home: {
    icon: Home,
    name: "Home",
    link: "/",
  },
  about: {
    icon: User,
    name: "About",
    link: "/about",
  },
  projects: {
    icon: Target,
    name: "Projects",
    link: "/projects",
  },
  skills: {
    icon: ChartArea,
    name: "Skills & Certifications",
    link: "/skills",
  },
};

export const blockColours = [
  // "#FFB3BA", // Light Pink
  // "#FFDFBA", // Light Peach
  // "#FFFFBA", // Light Yellow
  // "#BAFFC9", // Light Green
  // "#BAE1FF", // Light Blue
  // "#D5BAFF", // Light Purple
  // "#FFC3A0", // Light Coral
  "#fff",
];
