import { Award } from "lucide-react";
import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";
import { certifications } from "@/constants/certifications";

const Certifications = () => {
  return (
    <Section
      title="Certifications text"
      description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
    >
      <GridBlock>
        {certifications.map((certification, index) => (
          <FlexBlock
            className="relative"
            relevance={2}
            key={index}
            downloadLink={certification.link}
          >
            <div className="flex flex-col gap-2 relative">
              <div className="flex gap-4">
                {certification.image ? (
                  <img
                    src={certification.image}
                    alt="certification issued by"
                    className="absolute top-0 right-[-1em] opacity-20 w-20"
                  />
                ) : (
                  <Award
                    size={50}
                    className="absolute top-0 right-0 opacity-10"
                  />
                )}
                <p className="font-semibold text-black leading-4.5">
                  {certification.name}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {certification.issuedBy}
              </p>
            </div>
            <p className="mt-5 text-sm">{certification.description}</p>
            <p className="text-xs text-muted-foreground absolute bottom-6 right-6">
              {certification.date}
            </p>
          </FlexBlock>
        ))}
      </GridBlock>
    </Section>
  );
};

export default Certifications;
