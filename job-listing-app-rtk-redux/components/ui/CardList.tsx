import { ReactNode } from "react";
import Card from "./Card";
import type { CardProps } from "./Card";
// import type {JobPostingTypes} from "@/lib/types";

export interface CardListProps {
  jobPostings: CardProps[];
  renderItem?: (item: CardProps, id: string) => ReactNode;
  className?: string;
}

export default function CardList({ 
  jobPostings, 
  renderItem, 
  className = "" 
}: CardListProps) {
  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {jobPostings.map((job, id) => (
        
        <div key={id} className="w-full">
          {renderItem ? (
            renderItem(job, id)
          ) : (
            <Card
              id = {job.id}
              title={job.title}
              description={job.description}
              logoUrl={job.logoUrl}
              orgName={job.orgName}
              location={job.location}
              categories={job.categories}
            />
          )}
        </div>
      ))}
    </div>
  );
}