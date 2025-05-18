import { PieChartTimeSpentComponent } from "@/components/charts/pieChartTimeSpent";
import BigIcon from "@/components/shared/bigIcon";
import { images, links } from "@/constants/links";
import { Briefcase, FileUser, GraduationCap } from "lucide-react";
import skillProgressionChart from "../../assets/images/skill_progression_chart.png";
import GridBlock from "../../components/shared/blockgrid";
import Counter from "../../components/shared/counter";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";

const About = () => {
  return (
    <Section
      title="About me"
      description="Here's some information about who am I and what I'm passionate about."
    >
      <GridBlock className="overflow-hidden">
        <FlexBlock title="Nice to Meet You!" relevance={2}>
          <p>
            I'm a{" "}
            <b className="text-gray-700 font-semibold">data-driven thinker</b>{" "}
            with a <b className="text-gray-700 font-semibold">creative edge</b>,
            ready to launch my career in{" "}
            <b className="text-gray-700 font-semibold">
              marketing and data analysis
            </b>
          </p>
        </FlexBlock>

        {/* Block */}
        <FlexBlock relevance={1} linkTo={links.linkedin}>
          <BigIcon
            iconType={images.linkedinIcon}
            text={"My LinkedIn"}
            animation={"animate-pulse"}
            iconClass="text-blue-400"
          />
        </FlexBlock>

        {/* block */}
        <FlexBlock backgroundImage={skillProgressionChart} relevance={4} />

        {/* block */}
        <FlexBlock relevance={1}>
          <div className="text-center flex flex-col items-center">
            <GraduationCap className="h-6 w-6 mb-2" />
            <p className="text-muted-foreground text-sm mb-2">
              Bachelor's Degree
            </p>
            <p className="font-semibold text-lg leading-4.5">
              Business Administration
            </p>
          </div>
        </FlexBlock>

        {/* block */}
        <FlexBlock relevance={1}>
          <div className="text-center flex flex-col items-center">
            <GraduationCap className="h-6 w-6 mb-2" />
            <p className="text-muted-foreground text-sm mb-2">
              Master's Degree
            </p>
            <p className="font-semibold text-lg leading-4.5">
              Corporate Governance & Management
            </p>
          </div>
        </FlexBlock>

        {/* block */}
        <FlexBlock relevance={1} iconType={Briefcase}>
          <Counter time={150} limit={2.5} text="Years of Experience" />
        </FlexBlock>

        {/* block */}
        <FlexBlock relevance={4} className="p-0 py-4">
          <PieChartTimeSpentComponent title={"Time spent in my day"} />
        </FlexBlock>

        {/* block */}
        <FlexBlock relevance={1} downloadLink={links.resumeePDF}>
          <BigIcon
            iconType={FileUser}
            iconClass="text-purple-400"
            text={"My Resumee"}
            animation={"animate-pulse"}
          />
        </FlexBlock>

        {/* block */}
        <FlexBlock title="Why Marketing Analytics?" relevance={5}>
          <p>
            After working in{" "}
            <b className="text-gray-700 font-semibold">business consulting</b>,
            I discovered a strong interest in how data shapes decisions. I'm now
            eager to bring my{" "}
            <b className="text-gray-700 font-semibold">curiosity for data</b>,{" "}
            <b className="text-gray-700 font-semibold">storytelling mindset</b>,
            and{" "}
            <b className="text-gray-700 font-semibold">strategic thinking</b>{" "}
            into the world of{" "}
            <b className="text-gray-700 font-semibold">marketing analytics</b>.
          </p>
        </FlexBlock>

        {/* block */}
        {/* <FlexBlock relevance={1} backgroundImage={IExcel} /> */}
      </GridBlock>
    </Section>
  );
};

export default About;
