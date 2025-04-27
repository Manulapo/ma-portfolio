import project1Preview from "@/assets/images/p1/Project1_preview.jpg";
import { attachmentSIcon, toolsUsedIcon } from ".";
import { ProjectHeaderInterface } from "../../types";
import Project1 from "../components/projects/project-1";
import Project2 from "../components/projects/project-2";
const { excel, tableau } = toolsUsedIcon;
const { pdf, powerBiDS,tableauDS } = attachmentSIcon;

export const project1: ProjectHeaderInterface = {
  contentComponent: Project1,
  title: "Office Supplies Analysis",
  description: "Analyzed 2020–2023 sales and customer transactions in Tableau to uncover weekly/monthly trends, product‐category performance, and customer segments. Key findings include consistent year‐end sales peaks, Technology (especially Phones and Copiers) driving the most profit, a 20.4 % year-over-year sales increase, and low repeat‐purchase rates—insights that inform optimal promotion timing and retention strategies.",
  triggerLabel: "Office Supplies Analysis",
  previewImage: project1Preview,
  tools: [excel, tableau],
  relevantLink: "https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes",
  attachments: [
    {
      type: tableauDS,
      link: "https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes",
    },
  ],
};

export const project2: ProjectHeaderInterface = {
  contentComponent: Project2,
  title: "Project 2",
  description: "This is a description of project 2",
  triggerLabel: "Cliccami per il project 2",
  previewImage:
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  tools: [excel, tableau],
  attachments: [
    {
      type: pdf,
      link: "https://www.test.com",
    },
    {
      type: { ...powerBiDS, name: "Power BI" },
      link: "https://www.test.com",
    },
  ],
};
