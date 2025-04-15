import JobDetails from "@/components/jobs/JobDetails";
import type { JobPostingTypes } from "@/lib/types";
import jsonData from "@/data/jobs.json";
import { notFound } from "next/navigation";
import Link from "next/link";

const allJobPostings: JobPostingTypes[] = jsonData.job_postings;

export default  async function JobPage({ params }: { params: { id: string } }) {
  // Validate the raw parameter before parsing
  const { id } = await params;
  if (!id || typeof id !== "string") {
    console.error("Invalid or missing ID parameter");
    return notFound();
  }

  const jobId = parseInt(id, 10); // Always use radix 10

  // Optional: Log for debugging (check server console)
  console.log(`Received ID param: "${id}", Parsed as number: ${jobId}`);

  if (
    !allJobPostings ||
    !Array.isArray(allJobPostings) ||
    allJobPostings.length === 0
  ) {
  
    return notFound();
  }

  // Check  jobId is a valid number and within array bounds
  if (isNaN(jobId) || jobId < 0 || jobId >= allJobPostings.length) {
    console.error(
      `Invalid job ID: ${jobId}. Must be between 0 and ${
        allJobPostings.length - 1
      }`
    );
    return notFound();
  }

  const job = allJobPostings[jobId];

 
  if (!job) {
    console.error(`Job data not found for index: ${jobId}`);
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-6">
    <Link
      href="/"
      // Added margin-bottom (mb-4) for spacing
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mb-4 inline-block"
    >
      &lt; Back to Job Listings
    </Link>
    <JobDetails job={job} />
  </main>
  );
}
