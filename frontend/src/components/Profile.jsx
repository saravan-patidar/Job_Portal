import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, ContactIcon, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobs from "./AppliedJobs";

const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-10 bg-white border border-gray-200 p-8 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="w-20 h-20 ">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Shrvn Patidar</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                beatae animi voluptas.
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="flex items-center gap-2 my-2">
          <Mail />
          <p>shrvnpatidar@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <ContactIcon />
          <p>9867364828</p>
        </div>
        <div className="my-5">
          <h1 className="font-medium text-lg mt-2">Skills</h1>
          <div className="flex items-center gap-2">
            {["React", "Javascript", "Nodejs", "Tailwindcss"].map((item, i) => {
              return <Badge key={i}>{item}</Badge>;
            })}
          </div>
        </div>
        <div>
          <Label className="font-bold text-lg ">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com/"
              className="cursor-pointer text-blue-500 w-full hover:underline"
            >
              Download
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto my-10">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobs/>
      </div>
    </div>
  );
};

export default Profile;
