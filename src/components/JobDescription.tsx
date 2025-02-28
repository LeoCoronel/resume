// import { useState } from "react";
// import { motion } from "framer-motion";
// import { formatDate } from "../utils/formatter";
// // Sample job data
// interface Job {
//   id: string,
//   body: string,
//   data: {
//     img: string,
//     startDate: Date,
//     finishDate: Date,
//     position: string,
//     title: string,
//     technologies: [string],
//     company: string,
//   }
// }

// interface JobDescriptionProps {
//   jobs: Job[];
// }

// export default function JobDescription({ jobs }: JobDescriptionProps) {
//   const [selectedJob, setSelectedJob] = useState<string | null>(null);

//   return (
//     <div className="flex">
//       {/* Timeline section */}
//       <motion.div
//         className="flex-1 flex flex-col justify-center"
//         initial={{ width: '100%' }}
//         animate={{ width: selectedJob ? '50%' : '100%' }}
//         transition={{ duration: 0.3 }}
//       >
//         {jobs.map((job) => {
//           return (
//             <div
//               key={job.id}
//               style={{ width: "300px" }}
//               className="group relative flex mx-auto gap-x-5 cursor-pointer hover:animate-pulsing"
//               onClick={() => {
//                 setSelectedJob(job.id);
//               }}
//             >
//               <div
//                 className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
//               >
//                 <div className="relative z-10 size-10 flex justify-center items-center">
//                   <img
//                     src={`/assets/images/${job.data.img}`}
//                     alt=""
//                   />
//                 </div>
//               </div>

//               <div className="pb-8 group-last:pb-0">
//                 <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
//                   {formatDate(job.data.startDate)}
//                   {job.data.finishDate ? `- ${formatDate(job.data.finishDate)}` : ""}
//                 </h3>

//                 <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
//                   {job.data.position} at <span>{job.data.title}</span>
//                 </p>

//                 <div className="flex gap-5 mt-2">
//                   {
//                     job.data.technologies &&
//                     job.data.technologies.map((tech: string) => {
//                       return (
//                         <div className="filter grayscale hover:filter-none inline-flex justify-center items-center size-8 rounded-lg border focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 border-neutral-700 hover:bg-neutral-700 focus:bg-neutral-700">
//                           <img
//                             className="size-5"
//                             src={`/assets/images/${tech}.svg`}
//                             alt={tech}
//                           />
//                         </div>
//                       );
//                     })
//                   }
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </motion.div>

//       {/* Details section */}
//       <motion.div
//         className="flex items-center justify-center"
//         initial={{ x: '100%' }}
//         animate={{ x: selectedJob ? 0 : '100%' }}
//         style={{ width: selectedJob ? '50%' : '0%' }}
//         transition={{ duration: 0.3 }}
//         exit={{ x: '100%' }}
//       >
//         {selectedJob && (
//           <div style={{ width: "90%" }}>
//             {/* Back Button */}
//             <button
//               className="flex items-center mb-4 text-blue-500 hover:underline"
//               onClick={() => setSelectedJob(null)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="mr-2 h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//               Back to Timeline
//             </button>

//             {/* Job Details */}
//             <h2 className="text-2xl font-bold mb-2">
//               {jobs.find((job) => job.id === selectedJob)?.data.title}
//             </h2>
//             <h3 className="text-xl mb-4">
//               {jobs.find((job) => job.id === selectedJob)?.data.company}
//             </h3>
//             <p>{jobs.find((job) => job.id === selectedJob)?.body}</p>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

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
        <div className="jobCard p-10 gap-10 flex flex-col">
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
              <p className='prose-sm lg:prose-base text-gray-600 dark:text-neutral-400 lg:px-20'>{job.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobExperience;
