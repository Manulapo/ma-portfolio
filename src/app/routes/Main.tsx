import { Award, ChartArea, Lightbulb, ChevronRight } from "lucide-react";
import BigIcon from "../../components/shared/bigIcon";
import GridBlock from "../../components/shared/blockgrid";
import Counter from "../../components/shared/counter";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";

import { certifications } from "@/constants/certifications";
import { projects } from "@/constants/projects";
import conftime_chart from "../../assets/images/conftime_chart.png";
import significantMeme from "../../assets/images/significantMeme.jpg";
import { images, links } from "@/constants/links";

const Main = () => {
  return (
    <Section
      title="Home"
      description="Welcome to my portfolio! Here, you'll find a collection of my projects, skills, and experiences."
      isMain={true}
    >
      <GridBlock>
        {/* block */}
        <FlexBlock
          backgroundImage={links.avatar}
          relevance={1}
          noHover
        />

        {/* block */}
        <FlexBlock title="I'm Chiara" relevance={2}>
          <p>
            <b className="text-gray-700 font-semibold">
              Junior Marketing Analyst
            </b>{" "}
            with a Background in{" "}
            <b className="text-gray-700 font-semibold">Business Consulting</b>{" "}
            and a Passion for
            <b className="text-gray-700 font-semibold"> Data-Driven Strategy</b>
          </p>
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
        <FlexBlock relevance={1} linkTo="/projects">
            <BigIcon
              iconType={ChevronRight}
              text={"Go To Projects"}
              animation={"animate-pulse"}
              iconClass="text-blue-400"
            />
        </FlexBlock>

        {/* block */}
        {/* <FlexBlock relevance={3}>
          <ExpectationsDAtaAnalysisChart title="Typical Data Analysis Process" />
        </FlexBlock> */}

        {/* block */}
        <FlexBlock backgroundImage={conftime_chart} relevance={4} />

        {/* block */}
        <FlexBlock
          title="How to Read This Portfolio"
          description="Think like an analyst!"
          relevance={5}
        >
          <p>
            Each block presents a different insight or highlight, offering a
            clear view of my profile.{" "}
            <b className="text-gray-700 font-semibold">
              Not all data points are equally meaningful
            </b>
            , but when viewed together, they help you understand the full
            picture.
          </p>
        </FlexBlock>

        {/* block */}
        <FlexBlock backgroundImage={significantMeme} relevance={1} />

        {/* block */}
        <FlexBlock relevance={1} linkTo="/skills">
            <BigIcon
              iconType={Lightbulb}
              text={"Skills"}
              animation={"animate-pulse"}
              iconClass="text-orange-400"
            />
        </FlexBlock>

        {/* block */}
        <FlexBlock relevance={1} iconType={Award}>
          <Counter
            time={150}
            limit={certifications.length}
            text="Certifications obtained"
          />
        </FlexBlock>

            {/* Block */}
        <FlexBlock relevance={1} >
          <BigIcon
            iconType={images.denmarkFlag}
            text={"Based in Denmark"}
            animation={"animate-pulse"}
          />
        </FlexBlock>
      </GridBlock>
    </Section>
  );
};

export default Main;
