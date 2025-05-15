import { Atom, Download, FileText } from "lucide-react";
import BigIcon from "../../components/shared/bigIcon";
import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Heading from "../../components/shared/heading";
import ProjectDialog from "../../components/shared/projectDialog";
import { project1, project2 } from "../../constants/projects";
import { toolsUsedIcon } from "@/constants";

const legoProjectPdf = `/PDF/LEGOTrendANALYSIS.pdf`;

const Projects = () => {
  return (
    <div className="mb-20">
      <Heading
        title="Project text"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
      />
      {/* Project 1 */}
      <GridBlock>
        <FlexBlock
          title={project1.title}
          backgroundImage={project1.previewImage}
          relevance={5}
        />
        <FlexBlock relevance={1}>
          <ProjectDialog project={project1}>
            <BigIcon iconType={FileText} text={"Go to Project"} />
          </ProjectDialog>
        </FlexBlock>
        <FlexBlock linkTo={project1.relevantLink} relevance={1}>
          <BigIcon
            iconType={toolsUsedIcon.tableau.icon}
            text={"Live Dashboard"}
            colour="text-amber-400"
          />
        </FlexBlock>
      </GridBlock>
      {/* Project 2 */}
      <GridBlock>
        <FlexBlock
          title="Docs"
          description="Documentation and guides"
          relevance={2}
        >
          <p>Explore the documentation to get started.</p>
        </FlexBlock>
        <FlexBlock
          title={project2.title}
          backgroundImage={project2.previewImage}
          relevance={5}
        />
        <FlexBlock relevance={1}>
          <ProjectDialog project={project2}>
            <BigIcon iconType={Atom} text={"Go to Project"} />
          </ProjectDialog>
        </FlexBlock>
        <FlexBlock relevance={1} downloadLink={legoProjectPdf}>
          <BigIcon
            iconType={Download}
            text={"Download Pdf"}
            colour="text-emerald-400"
          />
        </FlexBlock>
        <FlexBlock linkTo={project2.relevantLink} relevance={1}>
          <BigIcon
            iconType={toolsUsedIcon.tableau.icon}
            text={"Live Dashboard"}
            colour="text-amber-400"
          />
        </FlexBlock>
      </GridBlock>
    </div>
  );
};

export default Projects;
