import project1Preview from "@/assets/images/p1/Project1_preview.jpg";
import project2Preview from "@/assets/images/p2/Project2_preview.jpg";
import { attachmentSIcon, toolsUsedIcon } from ".";
import { ProjectHeaderInterface } from "../../types";
import Project1 from "../components/projects/project-1";
import Project2 from "../components/projects/project-2";

const { excel, tableau, mySql, powePoint } = toolsUsedIcon;
const { pdf, tableauDS } = attachmentSIcon;

const legoProjectPdf = `${window.location.origin}/files/PDF/LEGOTrendANALYSIS.pdf`;
const legoProjectSQL = `${window.location.origin}/files/sql/Lego_set_analysis.sql`;

export const project1: ProjectHeaderInterface = {
  contentComponent: Project1,
  title: "Office Supplies Analysis",
  description:
    "Analyzed 2020–2023 sales and customer transactions in Tableau to uncover weekly/monthly trends, product‐category performance, and customer segments. Key findings include consistent year‐end sales peaks, Technology (especially Phones and Copiers) driving the most profit, a 20.4 % year-over-year sales increase, and low repeat‐purchase rates—insights that inform optimal promotion timing and retention strategies.",
  triggerLabel: "Office Supplies Analysis",
  previewImage: project1Preview,
  tools: [excel, tableau],
  relevantLink:
    "https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes",
  attachments: [
    {
      type: tableauDS,
      link: "https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes",
    },
  ],
};

export const project2: ProjectHeaderInterface = {
  contentComponent: Project2,
  title: "LEGO Sets Analysis",
  description:
    "Explored the evolution of LEGO® sets (1970–2022) leveraging SQL, Excel, Tableau Public, and PowerPoint to deliver a full-cycle analytics project. Key findings include a near doubling in release volume over 20 years; a strong positive correlation between price and piece count; licensed themes (Star Wars, Marvel) featuring higher minifigure density and average prices; a notable price dip in 2003 tied to corporate restructuring; shifts in popular themes across decades; and a downward trend in price-per-piece, reflecting strategic pricing and value improvements.",
  triggerLabel: "LEGO® Analytics",
  previewImage: project2Preview,
  tools: [excel, powePoint, mySql, tableau],
  relevantLink:
    "https://public.tableau.com/views/LegoProject_17472965432290/LEGOSetsOverview?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  attachments: [
    {
      type: tableauDS,
      link: "https://public.tableau.com/views/LegoProject_17472965432290/LEGOSetsOverview?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    {
      type: {...pdf,name: "Download Deck"},
      link: legoProjectPdf,
    },
    {
      type: {...mySql,name: "mySQL queryies"},
      link: legoProjectSQL
    }
  ],
};

export const projects: ProjectHeaderInterface[] = [project1, project2];
