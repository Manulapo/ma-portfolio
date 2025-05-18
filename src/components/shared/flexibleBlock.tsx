import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blockColours } from "../../constants/index";
import { cn } from "../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { LucideProps } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

let lastColor: string | null = null;

const getColour = () => {
  let newColor;
  if (blockColours.length === 1) {
    return blockColours[0];
  } else {
    do {
      newColor = blockColours[Math.floor(Math.random() * blockColours.length)];
    } while (newColor === lastColor);
    lastColor = newColor;
    return newColor;
  }
};

const FlexBlock = ({
  title,
  description,
  className,
  relevance,
  height = "full",
  backgroundImage,
  linkTo,
  downloadLink,
  backgroundColor = getColour(),
  noHover,
  iconType,
  children,
}: {
  relevance: number;
  title?: string;
  description?: string;
  footer?: string;
  height?: "full" | "half" | "quarter";
  backgroundImage?: string;
  backgroundColor?: string;
  linkTo?: string;
  noHover?:boolean,
  downloadLink?: string;
  iconType?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
  children?: React.ReactNode;
}) => {
  const isMobile = useIsMobile();
  const [dynamicWidth, setDynamicWidth] = useState<string>("");
  const standardHeight = isMobile ? 220 : 220;
  const blockHeight =
    height === "full"
      ? standardHeight
      : height === "half"
      ? (standardHeight / 2).toString() + "px"
      : (standardHeight / 3.5).toString() + "px";

  const renderContent = useMemo(() => {
    return (
      <>
        {iconType && (
          <div className="h-6 w-6 absolute top-4 left-4">
            {React.createElement(iconType, {
              className: cn("h-full w-full", className),
            })}
          </div>
        )}
        {(title || description) && (
          <div className="w-full h-fit flex flex-col gap-2">
            <CardHeader className="h-full flex flex-col justify-end gap-2">
              {title && (
                <CardTitle>
                  <div
                    className={cn(
                      backgroundImage
                        ? "text-white text-3xl text-shadow-lg bg-black rounded-sm px-2 py-1"
                        : "text-black text-xl",
                      "font-bold text-nowrap"
                    )}
                  >
                    {title}
                  </div>
                </CardTitle>
              )}
              {description && (
                <CardDescription>
                  <p className="text-muted-foreground">{description}</p>
                </CardDescription>
              )}
            </CardHeader>
          </div>
        )}
        {children && (
          <CardContent
            className={`${
              !title &&
              !description &&
              "w-full h-full flex flex-col justify-center overflow-visible"
            } `}
          >
            {children}
          </CardContent>
        )}
      </>
    );
  }, [title, description, children, backgroundImage, className, iconType]);

  const getBaseWidth = (
    screenWidth: number,
    relevance: number,
    isMobile: boolean
  ) => {
    const standardizedRelevance = Math.min(relevance, 5); // Cap relevance at 5
    const adjustedRelevance =
      isMobile && relevance === 5
        ? standardizedRelevance - 2.5
        : standardizedRelevance;
    const baseWidth = ((adjustedRelevance + 1.5) / screenWidth) * 10000;

    return baseWidth;
  };

  useEffect(() => {
    const calculateWidth = () => {
      const screenWidth = window.innerWidth;
      const width = getBaseWidth(screenWidth, relevance, isMobile);
      setDynamicWidth(`${width}%`);
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [relevance, isMobile]);

  return (
    <Card
      key={dynamicWidth}
      className={cn(
        `p-4 py-6 px-4 gap-2 flex flex-col items-start rounded-md flexblock shadow relative`,
        noHover ? 'noHover' : '',
        backgroundImage && "image justify-end",
        iconType && "p-4 gap-0 relative",
        className
      )}
      style={{
        height: blockHeight,
        width: height === "full" ? dynamicWidth || "100%" : "",
        minWidth: isMobile && height === "full" ? dynamicWidth || "100%" : "",
        backgroundImage: backgroundImage
          ? `url('${backgroundImage}')`
          : undefined,
        backgroundSize: backgroundImage ? "cover" : undefined,
        backgroundColor: backgroundImage
          ? undefined
          : backgroundColor || undefined,
      }}
    >
      {linkTo ? (
        <Link
          to={linkTo}
          className="w-full h-full flex flex-col justify-end"
          style={{ textDecoration: "none" }}
        >
          {renderContent}
        </Link>
      ) : downloadLink ? (
        <a href={downloadLink} className="w-full h-full flex flex-col justify-end" target="_blank" rel="noopener noreferrer">
          {renderContent}
        </a>
      ) : (
        renderContent
      )}
    </Card>
  );
};

export default FlexBlock;
