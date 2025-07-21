import { Bookmark, BookMarked } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 shadow-xl rounded-md bg-white border border-gray-100">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" size="icon" className="rounded">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDxGmA596-b4RHHw24fP5UtONGEilzMI0Ow&s" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus impedit autem sed!
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
      <div className="flex items-center mt-4 gap-2">
        <Button variant='outline'>Details</Button>
        <Button className='bg-[#7209b7]'> Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
