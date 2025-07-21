import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" bg-gray-100 px-4 py-1 rounded-full font-medium text-[#f83002] ">
          No. 1 Job Hunt Website
        </span>
        <h1 className="font-bold text-5xl leading-tight">
          Search, Apply
          <br /> & Get Your<span className="text-[#6a38c2]"> Dream Jobs</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptates. Explicabo minus iusto illum assumenda.</p>
        <div className="flex w-[40%] border border-gray-200 pl-3 items-center shadow-lg mx-auto rounded-full">
            <input type="text" placeholder="Find your dream Jobs" className=" outline-none border-none w-full" />
            <Button className="rounded-r-full bg-[#6a38c2] w-16 hover:bg-[#6a3af2] cursor-pointer"><Search className="w-5 h-5 "/></Button>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
