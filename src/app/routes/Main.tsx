import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChartComponent } from "../../components/charts/BarChart";
import BigIcon from "../../components/shared/bigIcon";
import GridBlock from "../../components/shared/blockgrid";
import Counter from "../../components/shared/counter";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";
import { PieChartComponent } from "../../components/charts/pieChart";

const Main = () => {
  return (
    <Section
      title="Welcome Text"
      description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
      isMain={true}
    >
      <GridBlock>
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={2}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        <FlexBlock relevance={2}>
          <PieChartComponent />
        </FlexBlock>
        <FlexBlock relevance={2} className="p-0 w-0">
          <div style={{ width: "100%" }}>
            <BarChartComponent />
          </div>
        </FlexBlock>
        <FlexBlock relevance={1}>
          <Counter time={150} limit={4} text="Anni di esperienza" />
        </FlexBlock>
        <FlexBlock
          title="Blog"
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
          relevance={2}
        />
        <FlexBlock relevance={1}>
          <Link to="/about">
            <BigIcon
              iconType={ChevronRight}
              text={"GoTo"}
              animation={"animate-pulse"}
              colour="text-blue-400"
            />
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
