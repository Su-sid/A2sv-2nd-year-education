import {job_listings} from "@/data/job_listings";
import React from "react";
import Image from "next/image";


export default async function JobPage({ params }: { params: { id: number } }) {
  // Simulate a delay to mimic data fetching
//   await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Job Page</h1>
      <p>This is the job page content for job ID: {params.id}</p>
    </div>
  );
}