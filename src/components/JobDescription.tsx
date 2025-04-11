import React from 'react';
import { formatDate } from "../utils/formatter";

interface Job {
  id: string;
  body: string;
  data: {
    img: string;
    startDate: Date;
    finishDate: Date | null; // Permitir null
    position: string;
    title: string;
    technologies: string[];
  };
}

interface JobExperienceProps {
  jobs: Job[];
}

const JobExperience: React.FC<JobExperienceProps> = ({ jobs }) => {
  return (
    <div className="flex flex-col">
      {jobs.map((job) => (
        <div className="jobCard py-10 gap-10 flex flex-col">
          <h2 className='prose-2xl'>{job.data.title}</h2>
          <div className='flex flex-col md:flex-row gap-20'>
            <div className='flex-[0.5]'>
              <h3 className="prose text-gray-600 dark:text-neutral-400">
                {formatDate(job.data.startDate)}
                {job.data.finishDate ? `- ${formatDate(job.data.finishDate)}` : ""}
              </h3>
            </div>
            <div className='flex-[0.8] flex flex-col gap-10'>
              <div className="flex flex-row justify-between">
                <p className='prose text-gray-600 dark:text-neutral-400'>Position</p>
                <p>{job.data.position}</p>
              </div>

              {/* andreymitko inspo for experience */}
              <div className="flex flex-row justify-between">
                <p className='prose text-gray-600 dark:text-neutral-400'>Technologies</p>
                <div className='flex gap-4'>
                  {job.data.technologies &&
                    job.data.technologies.map((tech: string) => (
                      <div className="flex flex-row filter grayscale hover:filter-none justify-center items-center size-8 rounded-lg border focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 border-neutral-700 hover:bg-neutral-700 focus:bg-neutral-700">
                        <img
                          className="size-5"
                          src={`/assets/images/${tech}.svg`}
                          alt={tech}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='flex-[2]'>
              <p className='prose-sm lg:prose-base text-gray-600 dark:text-neutral-400'>{job.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobExperience;
