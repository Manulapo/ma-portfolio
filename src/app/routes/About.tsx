import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";

const About = () => {
  return (
    <Section
      title="About me text"
      description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
    >
      <GridBlock>
        <FlexBlock
          title="Docs"
          description="Documentation and guides"
          relevance={1}
        >
          <p>Explore the documentation to get started.</p>
        </FlexBlock>
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={4}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={4}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
      </GridBlock>
    </Section>
  );
};

export default About;
