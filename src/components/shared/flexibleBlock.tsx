import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blockColours } from "../../constants/colours";
import { cn } from "../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
  backgroundColor = getColour(),
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
  className?: string;
  children?: React.ReactNode;
}) => {
  const [dynamicWidth, setDynamicWidth] = useState<string>("");
  const standardHeight = 200;
  const blockHeight =
    height === "full"
      ? standardHeight
      : height === "half"
      ? (standardHeight / 2).toString() + "px"
      : (standardHeight / 3.5).toString() + "px";

  useEffect(() => {
    const calculateWidth = () => {
      const screenWidth = window.innerWidth;
      const formattedRelevance = relevance > 5 ? 5 : relevance;
      const width = ((formattedRelevance + 1.5) / screenWidth) * 10000;
      setDynamicWidth(`${width}%`);
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [relevance]);

  const renderCardContent = useMemo(
    () => (
      <div className="w-full h-fit flex flex-col gap-2 py-2">
        <CardHeader className="h-full flex flex-col justify-end gap-2">
          {title && (
            <CardTitle>
              <div
                className={cn(
                  backgroundImage
                    ? "text-white text-3xl text-shadow-lg"
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
    ),
    [title, description, backgroundImage]
  );
  return (
    <Card
      className={cn(
        `shrink-0 bg-blue-100 min-w-[100px] p-4 py-6 flex flex-col items-start rounded-md flexblock`,
        backgroundImage && "image justify-end",
        className
      )}
      style={{
        width: dynamicWidth,
        height: blockHeight,
        backgroundImage: backgroundImage
          ? `url('${backgroundImage}')`
          : undefined,
        backgroundColor:
          backgroundColor && !backgroundImage ? backgroundColor : undefined,
      }}
    >
      {(title || description) &&
        (linkTo ? (
          <Link to={linkTo}>{renderCardContent}</Link>
        ) : (
          renderCardContent
        ))}
      {children && (
        <CardContent
          className={`${
            !title &&
            !description &&
            "w-full h-full flex flex-col justify-center"
          } `}
        >
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default FlexBlock;
