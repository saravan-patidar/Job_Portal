import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterCards = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Mumbai", "Indore"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "Graphic Designer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-60k", "80K-1Lakh", "1Lakh to 5Lakh"],
  },
];
const FilterCards = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="text-lg font-bold">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterCards.map((data, index) => (
          <div>
            <h1 className="text-lg font-bold ">{data.filterType}</h1>
            {data.array.map((item, i) => {
              return (
                <div className="flex items-center gap-3 my-2 space-x-2">
                  <RadioGroupItem value={item} id={`${data.filterType+i}`} />
                  <Label htmlFor={`${data.filterType+i}`} className='text-gray-800'>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCards;
