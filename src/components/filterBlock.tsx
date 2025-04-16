import { useState } from "react";
import { ToolsUsedInterface } from "../../types";
import { skillsObj } from "../constants/icon";
import { cn } from "../lib/utils";
import GridBlock from "./shared/blockgrid";
import FlexBlock from "./shared/flexibleBlock";
import { Button } from "./ui/button";

const FilterBlocks = () => {
  const [skills, setSkills] =
    useState<Record<string, ToolsUsedInterface[]>>(skillsObj);
  const [activeButton, setActiveButton] = useState<string>("all");
  const buttons = ["all", ...Object.keys(skillsObj)];

  const handleClick = (key: string) => {
    setActiveButton(key);
    if (key !== "all") {
      setSkills({ [key]: skillsObj[key] });
    } else {
      setSkills(skillsObj);
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
              "mt-2 px-1 cursor-pointer rounded-full border p-4 w-fit bg-white",
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
        {Object.entries(skills).map(([key, tools]) =>
          tools.map((tool, index) => (
            <FlexBlock
              className="flex items-center p-0"
              key={`${key}-${index}`}
              relevance={1}
              height="quarter"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-6 h-6"
                />
                <p>{tool.name}</p>
              </div>
            </FlexBlock>
          ))
        )}
      </GridBlock>
    </div>
  );
};

export default FilterBlocks;
