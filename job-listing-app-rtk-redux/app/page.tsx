"use client";

import JobListings from "@/components/jobs/JobListings";
import { useGetOpportunitiesQuery } from "@/redux/services/jobsApi";

export default function Home() {
  const { data, error, isLoading } = useGetOpportunitiesQuery({});

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-200 h-40 rounded-xl">
              <h1 className="text-3xl font-bold mb-6">
                Loading job opportunities...
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Oops! Something went wrong</h1>
        <p className="text-red-500">
          {error instanceof Error
            ? error.message
            : "Failed to load job opportunities"}
        </p>
      </div>
    );
  }

  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">No job opportunities found</h1>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4 max-w-[900px]">
      <JobListings jobs={data.data} />
    </main>
  );
}
