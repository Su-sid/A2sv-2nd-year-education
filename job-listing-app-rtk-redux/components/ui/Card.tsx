import Image from "next/image";
import Link from "next/link";
import type { ApiJobOpportunity } from "@/lib/apiTypes";

export type CardProps = ApiJobOpportunity;

export default function Card(props: CardProps) {
  const { title, description, logoUrl, orgName, location, categories, id } =
    props;


  // Use a default image if logoUrl is empty
  const imageUrl = logoUrl || "/vercel.svg";

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm max-w-3xl">
      <Link href={`/jobs/${id}`} className="block">
        <div className="flex">
          <div className="mr-4">
            <div className="bg-yellow-300 rounded-lg p-2 w-16 h-16 flex items-center justify-center">
              <Image
                src={imageUrl}
                alt={orgName}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full">
            {/* job title */}
            <h3 className="text-blue-800 font-semibold text-lg">{title}</h3>
            {/* job orgName . job location */}
            <div className="flex text-sm text-gray-500 my-1">
              <span>{orgName}</span>
              <span className="mx-1">•</span>
              <span>{location}</span>
            </div>
            {/* job description */}
            <p className="text-sm my-2">
              {description.length > 150
                ? `${description.substring(0, 150)}...`
                : description}
            </p>
            {/* // job categories */}
            <div className="flex flex-wrap mt-4 mb-2">
              {/* job categories in person category constant */}
              <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mr-2">
                In Person
              </span>
              {categories.map((category, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs rounded-full mr-2 mb-2 ${
                    index % 3 === 0
                      ? "bg-blue-100 text-blue-800"
                      : index % 3 === 1
                      ? "bg-orange-100 text-orange-500"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
