import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-800 mb-4">OPPS!!!</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
      <p className="text-gray-600 mb-6">
        We couldn&apos;t find the job posting you&apos;re looking for.
      </p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Job Listings
      </Link>
    </div>
  );
}