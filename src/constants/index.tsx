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
import excelIcon from "@/assets/icons/excel-icon.png";
import powerpointIcon from "@/assets/icons/power-point-icon.png";
import excelIconBW from "@/assets/icons/bw/excel-icon.png";
import tableauIconBW from "@/assets/icons/bw/tableau-icon.png";
import tableauIcon from "@/assets/icons/tableau-icon.png";
import powerBiIcon from "@/assets/icons/power-bi-icon.png";

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
      name: "MySql",
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
