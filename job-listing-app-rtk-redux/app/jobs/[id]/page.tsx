"use client";
import { use } from "react";
import JobDetails from "@/components/jobs/JobDetails";
import { useGetOpportunityByIdQuery } from "@/redux/services/jobsApi";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = use(params).id; // Extract ID from params
  const { data, error, isLoading, isError, isFetching } =
    useGetOpportunityByIdQuery(
      id,
      { skip: !id } // Skip the query if no ID is provided
    );

 
  if (isLoading || isFetching) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="bg-gray-200 h-40 rounded-xl">
            <h1 className="text-3xl font-bold mb-6">Loading job Details...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (isError || error) {
    return notFound();
  }

  // Handle no ID case
  if (!id)
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">No job data found</h1>
      </div>
    );

  // Handle null data
  if (!data) return <div>No job data found</div>;

  return (
    <main className="container mx-auto px-4 py-6">
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mb-4 inline-block"
      >
        &lt; Back to Job Listings
      </Link>
      <JobDetails job={data} />
    </main>
  );
}
