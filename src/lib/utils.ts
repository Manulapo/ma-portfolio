import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// returns the years based on the start and put .5 if the actual month is > 6
export const getYears = (start: number) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const years = currentYear - start;
  return currentYear && currentMonth > 0 ? years + 0.5 : years;
};
