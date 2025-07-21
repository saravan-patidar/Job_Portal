import React from "react";
import LatestJobcards from "./LatestJobcards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h1 className="font-bold text-4xl ">
        <span className="text-[#6a38c2]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.map((item, index) => (
          <LatestJobcards className=" "/>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
