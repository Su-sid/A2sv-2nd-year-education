"use client";
import React, { useState } from "react";

import CardList from "@/components/ui/CardList";

import type { ApiJobOpportunity } from "@/lib/apiTypes";

interface JobListingsProps {
  jobs: ApiJobOpportunity[];
}

const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
  const [sortBy, setSortBy] = useState("most-relevant");

  // Sort jobs based on selected option
  const sortedJobs = [...jobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
        );
      case "oldest":
        return (
          new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime()
        );
      case "deadline":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      default:
        return 0; // most-relevant (default order)
    }
  });

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Opportunities</h1>
          <p className="text-sm text-slate-500">
            Showing {jobs.length} results
          </p>
        </div>
        {/* SORT BY FIELD */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-gray-700">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="most-relevant">Most Relevant</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="deadline">Deadline</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 max-h-[calc(100vh-150px)] overflow-y-auto">
        <CardList jobPostings={sortedJobs} />
      </div>
    </div>
  );
};

export default JobListings;
