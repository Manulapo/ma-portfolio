import { Power } from "lucide-react";
import GridBlock from "./shared/blockgrid";
import FlexBlock from "./shared/flexibleBlock";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const skillsObj: Record<string, string[]> = {
  Data_Analisys: ["skill1", "skill2", "skill3"],
  Data_Visualization: ["skill4", "skill5"],
};

const FilterBlocks = () => {
  const defaultState = [
    ...skillsObj.Data_Analisys,
    ...skillsObj.Data_Visualization,
  ];
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
      <div className="button gap-2 flex ml-4">
        {buttons.map((b) => (
          <Button
            key={b}
            id={b}
            className={cn(
              "mt-2 px-1 cursor-pointer rounded-full border p-4 w-fit",
              b === activeButton ? "opacity-100" : "opacity-60"
            )}
            variant={"outline"}
            onClick={(e) => handleClick((e.currentTarget as HTMLElement).id)}
          >
            {(
              b.slice(0, 1).toLocaleUpperCase() + b.slice(1).toLocaleLowerCase()
            )
              .split("_")
              .join(" ")}
          </Button>
        ))}
      </div>
      <GridBlock>
        {skills.map((skill) => (
          <FlexBlock
            className="flex items-center p-0"
            key={skill}
            relevance={1}
            height="quarter"
          >
            <div className="flex gap-3">
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
