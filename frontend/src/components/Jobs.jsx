import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

export default function Jobs() {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard></FilterCard>
          </div>
          {allJobs.length <= 0 ? (
            <span>Job not available</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job}></Job>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
