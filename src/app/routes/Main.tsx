import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import BigIcon from "../../components/shared/bigIcon";
import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";

const Main = () => {
  return (
    <Section
      title="Welcome Text"
      description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
      isMain={true}
    >
      <GridBlock>
        <FlexBlock
          title="Docs"
          description="Documentation and guides"
          relevance={1}
        />
        <FlexBlock
          title="Blog"
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
          relevance={2}
        />
        <FlexBlock relevance={1}>
          <Link to="/about">
            <BigIcon iconType={ChevronRight} text={"GoTo"} animation={'animate-pulse'} />
          </Link>
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
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={1}
        />
      </GridBlock>
    </Section>
  );
};

export default Main;
