import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Heading from "../../components/shared/heading";
import ProjectDialog from "../../components/shared/projectDialog";
import { project1, project2 } from "../../constants/projects";

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
          title="Docs"
          description="Documentation and guides"
          relevance={5}
        >
          <p>Explore the documentation to get started.</p>
        </FlexBlock>
        <FlexBlock relevance={1}>
          <ProjectDialog
            project={project1}
          >
            <p>Discover projects built with our tools.</p>
          </ProjectDialog>
        </FlexBlock>
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={1}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
      </GridBlock>
      {/* Project 2 */}
      <GridBlock>
        <FlexBlock
          title="Docs"
          description="Documentation and guides"
          relevance={5}
        >
          <p>Explore the documentation to get started.</p>
        </FlexBlock>
        <FlexBlock
          title="Docs"
          description="Documentation and guides"
          relevance={4}
        >
          <p>Explore the documentation to get started.</p>
        </FlexBlock>
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={1}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        <FlexBlock relevance={1}>
          <ProjectDialog
            project={project2}
          >
            <p>Discover projects built with our tools.</p>
          </ProjectDialog>
        </FlexBlock>
      </GridBlock>
    </div>
  );
};

export default Projects;
