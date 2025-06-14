import excelIconBW from "@/assets/icons/bw/excel-icon.png";
import tableauIconBW from "@/assets/icons/bw/tableau-icon.png";
import excelIcon from "@/assets/icons/excel-icon.png";
import powerBiIcon from "@/assets/icons/power-bi-icon.png";
import powerpointIcon from "@/assets/icons/power-point-icon.png";
import tableauIcon from "@/assets/icons/tableau-icon.png";
import vizzy from "@/assets/icons/vizzy-icon.png";
import {
  ChartArea,
  File,
  Home,
  Linkedin,
  Mail,
  Navigation,
  Phone,
  Target,
  User
} from "lucide-react";
import { SidebarIconType, ToolsUsedInterface } from "../../types";
import { links } from "./links";



export const attachmentSIcon = {
  pdf: {
    name: "PDF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/readthedocs/readthedocs-original.svg",
  },
  github: {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  powerBiDS: {
    name: "Go to Dashboard",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  tableauDS: {
    name: "Go to Dashboard",
    icon: tableauIconBW,
  },
  excel: {
    name: "Excel",
    icon: excelIconBW,
  },
  mySql: {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
};

export const toolsUsedIcon = {
  powerBi: {
    name: "Power BI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
  },
  tableau: {
    name: "Tableau",
    icon: tableauIcon,
  },
  excel: {
    name: "Excel",
    icon: excelIcon,
  },
  python: {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  mySql: {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  powePoint: {
    name: "PowerPoint",
    icon: powerpointIcon,
  },
};

export const sidebarIcon: Record<string, SidebarIconType> = {
  linkedin: {
    name: "LinkedIn",
    icon: Linkedin,
    link: links.linkedin,
  },
  // github: {
  //   name: "GitHub",
  //   icon: Github,
  //   link: links.github ?? '',
  // },
  email: {
    name: "Email",
    icon: Mail,
    link: "mailto:coletta.chiara24@gmail.com",
  },
  telephone: {
    name: "Telephone",
    icon: Phone,
    link: "tel:+45 91 10 88 69",
  },
  location: {
    name: "Copenhagen, Denmark",
    icon: Navigation,
    link: "https://maps.app.goo.gl/fGzJmgChqhHbZqrH7",
  },
  vizzy: {
    name: "Vizzy Profile",
    icon: vizzy,
    link: links.vizzy,
  },
  resume: {
    name: "Resume",
    icon: File,
    link: links.resumePDF,
  },
};

export const skillsObj: Record<string, ToolsUsedInterface[]> = {
  Data_Analysis: [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    { name: "Excel", icon: excelIcon },
  ],
  Data_Visualization: [
    {
      name: "Tableau",
      icon: tableauIcon,
    },
    {
      name: "Power BI",
      icon: powerBiIcon,
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
