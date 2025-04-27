/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
const CarouselLayout = ({
  slidesArray,
  title,
  toLink,
}: {
  slidesArray: any[];
  title: string;
  toLink?: string;
}) => {
  const itemBasis = slidesArray.length > 1 ? "basis-2/3" : "basis-full";

  return (
    <div className="px-5">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[98%] mx-auto my-4 ml-4"
      >
        <CarouselContent className="w-full md:w-[70%]">
          {slidesArray.map((slide, index) => (
            <CarouselItem
              key={title + index}
              className={cn(itemBasis, "ml-4 bg-white rounded-lg p-3")}
            >
              {toLink ? (
                <a href={toLink} target="_blank">
                  <img src={slide} alt={title + index} />
                </a>
              ) : (
                <img src={slide} alt={title + index} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselLayout;
