import React from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Fullstack Developer",
  "Graphic Designer",
];

const CategroyCarousal = () => {
  const demoType = [];
  return (
    <div className="my-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outlined" className="p-1 px-5 border-2 hover:bg-gray-100 cursor-pointer rounded-full">{category}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default CategroyCarousal;
