import React from "react";
// import Image from "next/image";
import type { ApiJobOpportunity } from "@/lib/apiTypes";
import formatDate from "@/lib/getFormatedDate";
import { responsibilitiesArray } from "@/lib/getResponsibilities";
interface JobDetailsProps {
  job: ApiJobOpportunity;
}

export default function JobDetails({ job }: JobDetailsProps) {
  const responsibilities: string[] = responsibilitiesArray(
    job.responsibilities
  );

  return (
    <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Main content */}
        <div className="md:col-span-2 space-y-8">
          {/* Description section */}
          <section>
            <h2 className="text-xl font-black text-gray-800 mb-4">
              Description
            </h2>
            <p className="text-gray-700">{job.description}</p>
          </section>
          {/* Responsibilities section */}
          <section>
            <h2 className="text-xl font-black text-gray-800 mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 mr-2">
                    <div className="h-full w-full rounded-full border-2 border-green-400 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Ideal Candidate section */}
          <section>
            <h2 className="text-xl font-black text-gray-800 mb-4">
              Ideal Candidate we want
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700">
              
                {job.idealCandidate}
              </p>
           
            </div>
          </section>

          {/* When & Where section */}
          <section>
            <h2 className="text-xl font-black text-gray-800 mb-4">
              When & Where
            </h2>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">{job.whenAndWhere}</p>
            </div>
          </section>
        </div>

        {/* Right column - About info */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-black text-gray-800 mb-4">About</h2>

            <div className="space-y-6">
              {/* Posted On */}
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Posted On</p>
                  <p className="text-gray-700 font-bold">
                    {formatDate(job.datePosted)}
                  </p>
                </div>
              </div>

              {/* Deadline */}
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Deadline</p>
                  <p className="text-gray-700 font-bold">
                    {formatDate(job.deadline)}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-700 font-bold">{job.location}</p>
                </div>
              </div>

              {/* Start Date */}
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Start Date</p>
                  <p className="text-gray-700 font-bold">
                    {formatDate(job.startDate)}
                  </p>
                </div>
              </div>

              {/* End Date */}
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">End Date</p>
                  <p className="text-gray-700 font-bold">
                    {formatDate(job.endDate)}
                  </p>
                </div>
              </div>
           
              <div>
                <h3 className="text-xl font-black text-gray-800 mb-2">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index % 4 === 0
                          ? "bg-yellow-100 text-yellow-800"
                          : index % 4 === 1
                          ? "bg-green-100 text-green-800"
                          : index % 4 === 2
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Required Skills */}
              <div>
                <h3
                  className="text-xl font-black
 text-gray-800 mb-2"
                >
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.requiredSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
