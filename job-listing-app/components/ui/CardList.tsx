import { ReactNode } from "react";
import Card from "./Card";
import type { CardProps } from "./Card";

export interface CardListProps {
  jobPostings: CardProps[];
  renderItem?: (item: CardProps, index: number) => ReactNode;
  className?: string;
}

export default function CardList({ 
  jobPostings, 
  renderItem, 
  className = "" 
}: CardListProps) {
  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {jobPostings.map((job, index) => (
        
        <div key={index} className="w-full">
          {renderItem ? (
            renderItem(job, index)
          ) : (
            <Card
              id = {index}
              title={job.title}
              description={job.description}
              image={job.image}
              company={job.company}
              about={job.about}
            />
          )}
        </div>
      ))}
    </div>
  );
}