import { File } from "lucide-react";
import GridBlock from "../../components/shared/blockgrid";
import Counter from "../../components/shared/counter";
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
        />
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={4}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        <FlexBlock relevance={1} iconType={File}>
          <Counter
            time={100}
            limit={26}
            text="Case Studies"
            className="text-red-500"
          />
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
