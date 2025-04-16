import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
  height?: "full" | "half";
  className?: string;
  children: React.ReactNode;
}) => {
  const [dynamicWidth, setDynamicWidth] = useState<string>("");
  const standardHeight = 200;
  const blockHeight =
    (height === "full" ? standardHeight : standardHeight / 2).toString() + "px";

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
      className={`${
        className ?? ""
      } shrink-0 bg-blue-200 h-[${blockHeight}] min-w-[100px] text-white p-4 py-6`}
      style={{ width: dynamicWidth }}
    >
      {(title || description) && (
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
      )}
      <CardContent className={`${!title && !description && "w-full h-full"} `}>
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
