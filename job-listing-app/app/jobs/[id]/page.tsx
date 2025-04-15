import JobDetails from "@/components/jobs/JobDetails";
import type { JobPostingTypes } from "@/lib/types";
// 1. Correct the import: Import the entire JSON object
import jsonData from "@/data/jobs.json";
import { notFound } from "next/navigation";

// 2. Access the actual array from the imported object
const allJobPostings: JobPostingTypes[] = jsonData.job_postings;

export default  function JobPage({ params }: { params: { id: string } }) {
  // Validate the raw parameter before parsing
  // const { id } = await params;
  const { id } =  params;
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
    console.error("Job postings data is missing or empty.");
    return notFound();
  }

  // Check if jobId is a valid number and within array bounds
  if (isNaN(jobId) || jobId < 0 || jobId >= allJobPostings.length) {
    console.error(
      `Invalid job ID: ${jobId}. Must be between 0 and ${
        allJobPostings.length - 1
      }`
    );
    return notFound();
  }

  // 3. Access the specific job using the validated index from the correct array
  const job = allJobPostings[jobId];

  // Optional: Check if the job object itself is valid (might be null/undefined in sparse arrays, though unlikely for JSON)
  if (!job) {
    console.error(`Job data not found for index: ${jobId}`);
    return notFound();
  }

  return (
    <main className="container mx-auto py-8 px-4">
      {/* Ensure JobDetails component handles the job prop correctly */}
      <JobDetails job={job} />
    </main>
  );
}
