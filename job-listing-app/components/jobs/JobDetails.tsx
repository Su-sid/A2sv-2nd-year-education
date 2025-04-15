import Card from "@/ui/Card";
import CardList from "@/ui/CardList";

interface JobDetailsProps {
  jobPostings: JobPostingTypes[];
}

export default function JobDetails({ jobPostings }: JobDetailsProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
      <CardList 
        jobPostings={jobPostings.map((job, index) => ({
          id: index.toString(),
          title: job.title,
          description: job.description,
          image: job.image,
          company: job.company,
          about: {
            location: job.about.location
          }
        }))}
        renderItem={(job) => (
          <Link href={`/job/${job.id}`}>
            <Card
              title={job.title}
              description={job.description}
              image={job.image}
              company={job.company}
              about={job.about}
            />
          </Link>
        )}
      />
    </div>
  );
}