import { Award, Briefcase, ChartArea, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import BigIcon from "../../components/shared/bigIcon";
import GridBlock from "../../components/shared/blockgrid";
import Counter from "../../components/shared/counter";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";

import { ExpectationsDAtaAnalysisChart } from "@/components/charts/expectationsChart";
import { PieChartTimeSpentComponent } from "@/components/charts/pieChartTimeSpent";
import { certifications } from "@/constants/certifications";
import { projects } from "@/constants/projects";
import conftime_chart from "../../assets/images/conftime_chart.png";
import significantMeme from "../../assets/images/significantMeme.jpg";
import skillProgressionChart from "../../assets/images/skill_progression_chart.png";

const Main = () => {
  return (
    <Section
      title="Welcome Text"
      description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
      isMain={true}
    >
      <GridBlock>
        {/* block */}
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={2}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        
        {/* block */}
        <FlexBlock relevance={4} className="p-0 py-4">
          <PieChartTimeSpentComponent title={"Time spent in my day"} />
        </FlexBlock>
        
        {/* block */}
        <FlexBlock relevance={3}>
          <ExpectationsDAtaAnalysisChart title="Expectations in Data Analysis" />
        </FlexBlock>
        
        {/* block */}
        <FlexBlock relevance={1} iconType={Briefcase}>
          <Counter time={150} limit={2.5} text="Years of Experience" />
        </FlexBlock>
        
        {/* block */}
        <FlexBlock relevance={1} iconType={ChartArea}>
          <Counter
            time={150}
            limit={projects.length}
            text="Portoflio projetcs"
          />
        </FlexBlock>
        
        {/* block */}
        <FlexBlock relevance={1} iconType={Award}>
          <Counter
            className="text-blue-500"
            time={150}
            limit={certifications.length}
            text="Certifications obtained"
          />
        </FlexBlock>
        
        {/* block */}
        <FlexBlock
          title="Blog"
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
          relevance={2}
        />
        
        {/* block */}
        <FlexBlock backgroundImage={significantMeme} relevance={1} />
        
        {/* block */}
        <FlexBlock backgroundImage={conftime_chart} relevance={4} />
        
        {/* block */}
        <FlexBlock backgroundImage={skillProgressionChart} relevance={4} />
        
        {/* block */}
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
        
        {/* block */}
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={4}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        
        {/* block */}
        <FlexBlock
          title="Showcase"
          description="Examples and inspiration"
          relevance={4}
        >
          <p>Discover projects built with our tools.</p>
        </FlexBlock>
        
        {/* block */}
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
