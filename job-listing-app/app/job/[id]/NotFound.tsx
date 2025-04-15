import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-6">The job posting you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/job" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Browse All Jobs
        </Link>
      </div>
    </div>
  );
}