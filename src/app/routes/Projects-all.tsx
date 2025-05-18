import { toolsUsedIcon } from "@/constants";
import { Download, Search } from "lucide-react";
import BigIcon from "../../components/shared/bigIcon";
import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Heading from "../../components/shared/heading";
import ProjectDialog from "../../components/shared/projectDialog";
import { project1, project2 } from "../../constants/projects";

const Projects = () => {
  return (
    <div className="mb-20">
      <Heading
        title="My Projects"
        description="A collection of personal and professional projects where I applied data analysis, visualization, and strategic thinking to explore real-world scenarios."
      />

      {/* Project 1 */}
      <GridBlock>
        <FlexBlock title="Office Supplies Analysis" relevance={2}>
          <p className="text-muted-foreground text-sm mt-4">
            A sales and customer deep dive using Tableau (2020–2023)
          </p>
        </FlexBlock>
        <FlexBlock
          title={project1.title}
          backgroundImage={project1.previewImage}
          relevance={4}
        />
        <FlexBlock relevance={1}>
          <ProjectDialog project={project1}>
            <BigIcon iconType={Search} text={"View Project"} />
          </ProjectDialog>
        </FlexBlock>
        <FlexBlock linkTo={project1.relevantLink} relevance={1}>
          <BigIcon
            iconType={toolsUsedIcon.tableau.icon}
            text={"Live Dashboard"}
            iconClass="text-amber-400"
          />
        </FlexBlock>
      </GridBlock>

      {/* Project 2 */}
      <GridBlock>
        <FlexBlock title="LEGO Sets Analysis" relevance={2}>
          <p className="text-muted-foreground text-sm mt-4">
            A detailed time-series analysis of LEGO sets (1970–2022)
          </p>
        </FlexBlock>
        <FlexBlock
          title={project2.title}
          backgroundImage={project2.previewImage}
          relevance={5}
        />
        <FlexBlock relevance={1}>
          <ProjectDialog project={project2}>
            <BigIcon iconType={Search} text={"View Project"} />
          </ProjectDialog>
        </FlexBlock>
        <FlexBlock relevance={1} downloadLink={project2.attachments[1].link}>
          <BigIcon
            iconType={Download}
            text={"Download Presentation"}
            iconClass="text-yellow-500"
          />
        </FlexBlock>
        <FlexBlock linkTo={project2.relevantLink} relevance={1}>
          <BigIcon
            iconType={toolsUsedIcon.tableau.icon}
            text={"Live Dashboard"}
            iconClass="text-amber-400"
          />
        </FlexBlock>
      </GridBlock>
    </div>
  );
};

export default Projects;
