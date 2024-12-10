import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function () {
  return (
    <div className="text-center">
      <span className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
        No. 1 Job Hunt Website
      </span>
      <h1 className="text-5xl font-bold my-7">
        Search Apply & get <br />
        Your <span>Dream Job</span>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quam
        tempore assumenda itaque ipsa non!
      </p>
      <div className="flex w-[40%] shadow-lg border border-gray-200  pl-3 items-center my-4 mx-auto">
        <input
          type="text"
          placeholder="Find your dream Job"
          className="outline-none border-none w-full text-center"
        />
        <Button>
          <Search className="h-5 w-5"></Search>
        </Button>
      </div>
    </div>
  );
}
