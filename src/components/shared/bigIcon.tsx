import { LucideProps } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";
import { tailwindAnimations, tailwindCsstextColor } from "../../../types";

const BigIcon = ({
  iconType,
  iconClass,
  text,
  animation,
}: {
  iconType:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | string;
  iconClass?: tailwindCsstextColor | string;
  text?: string;
  animation?: tailwindAnimations;
}) => {
  const tailwindAnimation = "hover:" + animation;
  return (
    <div
      className={cn(
        "p-3 flex flex-col items-center justify-center h-full w-full cursor-pointer"
      )}
    >
      <div className="h-25 p-4 mb-1" >
        {typeof iconType !== "string" ? (
          React.createElement(iconType, {
            className: cn("size-15 h-full mb-3", tailwindAnimation, iconClass),
          })
        ) : (
          <img
            src={iconType}
            alt="Icon"
            className={cn("mb-3", tailwindAnimation, iconClass)}
          />
        )}
      </div>
      {text && <p className="text-center text-nowrap">{text}</p>}
    </div>
  );
};

export default BigIcon;
