import Project1 from "../components/projects/project-1";
import { attachmentSIcon, toolsUsedIcon } from "./icon";
import { ProjectHeaderInterface } from "../../types";
import Project2 from "../components/projects/project-2";
const { react, redux, typescript } = toolsUsedIcon;
const { pdf, github, powerBi } = attachmentSIcon;

export const project1: ProjectHeaderInterface = {
  contentComponent: Project1,
  title: "Project 1",
  description: "This is a description of project 1",
  triggerLabel: "Cliccami per il project 1",
  previewImage:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tools: [react, redux, typescript],
  attachments: [
    {
      type: pdf,
      link: "https://www.test.com",
    },
    {
      type: github,
      link: "https://www.test.com",
    },
    {
      type: powerBi,
      link: "https://www.test.com",
    },
  ],
};

export const project2: ProjectHeaderInterface = {
  contentComponent: Project2,
  title: "Project 2",
  description: "This is a description of project 2",
  triggerLabel: "Cliccami per il project 2",
  previewImage:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  tools: [react, redux, typescript],
  attachments: [
    {
      type: pdf,
      link: "https://www.test.com",
    },
    {
      type: { ...powerBi, name: "Power BI" },
      link: "https://www.test.com",
    },
  ],
};
