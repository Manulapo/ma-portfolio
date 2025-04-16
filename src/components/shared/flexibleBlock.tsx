import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "../../lib/utils";

const FlexBlock = ({
  title,
  description,
  footer,
  className,
  relevance,
  height = "full",
  children,
}: {
  relevance: number;
  title?: string;
  description?: string;
  footer?: string;
  height?: "full" | "half" | "quarter";
  className?: string;
  children: React.ReactNode;
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
  return (
    <Card
      className={cn(
        `shrink-0 bg-blue-200 min-w-[100px] text-white p-4 py-6 flex flex-col items-start rounded-md`,
        className
      )}
      style={{ width: dynamicWidth, height: blockHeight }} // Use inline styles for height
    >
      {(title || description) && (
        <div className="w-full h-fit flex flex-col gap-2 py-2">
          <CardHeader>
            {title && (
              <CardTitle>
                <div className="h3 h3-bold-text-xl text-black">{title}</div>
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
      <CardContent
        className={`${!title && !description && "w-full h-full flex flex-col justify-center"} `}
      >
        {children}
      </CardContent>
      {footer && (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default FlexBlock;
