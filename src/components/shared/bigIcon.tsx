import { LucideProps } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";
import { tailwindAnimations, tailwindCsstextColor } from "../../../types";

const BigIcon = ({
  iconType,
  colour,
  text,
  animation,
}: {
  iconType: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  colour?: tailwindCsstextColor;
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
      {React.createElement(iconType, {
        className: cn("size-20 md:h-full md:w-full mb-3", tailwindAnimation, colour),
      })}
      {text ?? (
        <p className="text-muted-foreground text-center text-sm font-medium">
          {text}
        </p>
      )}
    </div>
  );
};

export default BigIcon;
