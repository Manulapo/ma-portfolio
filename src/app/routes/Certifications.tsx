import { Award } from "lucide-react";
import GridBlock from "../../components/shared/blockgrid";
import FlexBlock from "../../components/shared/flexibleBlock";
import Section from "../../components/shared/section";

const Certifications = () => {
  return (
    <Section
        title="Certifications text"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
      >
        <GridBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
          <FlexBlock relevance={2}>
            <div className="flex text-nowrap gap-4">
              <Award />
              <p className="font-semibold text-black">Certification Name</p>
            </div>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae placeat temporibus minima, maxime inventore.
            </p>
          </FlexBlock>
        </GridBlock>
      </Section>
  );
};

export default Certifications;
