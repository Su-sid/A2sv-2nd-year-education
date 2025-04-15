import {job_postings} from '@/data/jobs.json'; // Adjust the path as necessary
import JobListings from '@/components/jobs/JobListings';


export default async function Home() {

  return (
    <main className="container mx-auto py-8 px-4 max-w-[900px]">
      <JobListings jobs= {job_postings }/>
    </main>
  );
}