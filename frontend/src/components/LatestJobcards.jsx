import React from "react";
import { Badge } from "./ui/badge";

const LatestJobcards = () => {
  return (
    <div className="p-5 rounded-md shadow-lg bg-white border border-gray-200  cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-medium text-lg">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          cupiditate animi corrupti!
        </p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Badge variant="ghost" className="text-blue-700">
          12 Position
        </Badge>
        <Badge variant="ghost" className="text-[#f83002]">
          Part Time
        </Badge>
        <Badge variant="ghost" className="text-[#7209b7]">
          24LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobcards;
