import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const Counter = ({
  time = 100,
  limit,
  text,
  className,
}: {
  time: number;
  limit: number;
  text?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= limit) return;

    const interval = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 1, limit));
    }, time);

    return () => clearInterval(interval);
  }, [count, time, limit]);

  return (
    <div className="p-3 flex flex-col items-center justify-center h-full w-full">
      <div className={cn("text-7xl h-20 flex items-end", className)}>
        {count}
      </div>
      <div className="mt-4 text-nowrap">{text}</div>
    </div>
  );
};

export default Counter;
