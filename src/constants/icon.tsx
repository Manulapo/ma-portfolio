import { File, Github, Linkedin, Mail, Navigation, Phone } from "lucide-react";
import { SidebarIconType } from "../../types";

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
