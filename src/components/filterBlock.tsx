import { Power } from "lucide-react";
import GridBlock from "./shared/blockgrid";
import FlexBlock from "./shared/flexibleBlock";
import { useState } from "react";
import { Button } from "./ui/button";

const skillsObj: Record<string, string[]> = {
  data_An: ["skill1", "skill2", "skill3"],
  data_Vis: ["skill4", "skill5"],
};

const FilterBlocks = () => {
  const defaultState = [...skillsObj.data_An, ...skillsObj.data_Vis];
  const [skills, setSkills] = useState<string[]>(defaultState);
  const [activeButton, setActiveButton] = useState<string>("all");
  const buttons = ["all", ...Object.keys(skillsObj)];

  const handleClick = (key: string) => {
    setActiveButton(key);
    if (key !== "all") {
      setSkills(skillsObj[key]);
    } else {
      setSkills(defaultState);
    }
  };

  return (
    <div key={activeButton}> 
      <div className="button">
        {buttons.map((b) => (
          <Button
            key={b}
            id={b}
            className={`cursor-pointer ${
              b === activeButton
                ? "underline text-underline-offset-auto"
                : ""
            }`}
            variant={"link"}
            onClick={(e) => handleClick((e.currentTarget as HTMLElement).id)}
          >
            {(b.slice(0, 1).toLocaleUpperCase() + b.slice(1).toLocaleLowerCase()).split('_').join(' ')}
          </Button>
        ))}
      </div>
      <GridBlock>
        {skills.map((skill) => (
          <FlexBlock key={skill} relevance={1} height="half">
            <div className="flex text-nowrap gap-4">
              <Power />
              <p>{skill}</p>
            </div>
          </FlexBlock>
        ))}
      </GridBlock>
    </div>
  );
};

export default FilterBlocks;