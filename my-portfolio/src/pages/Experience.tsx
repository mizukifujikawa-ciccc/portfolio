import { useState } from "react";

export default function Experience() {
  return (
    <main className="bg-background min-h-screen px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </main>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceType }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedTasks = isExpanded ? exp.tasks : exp.tasks.slice(0, 3);

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold text-text">{exp.title} @ {exp.company}</h2>
      <p className="text-sm text-text mb-2">{exp.period} · {exp.location}</p>
      <ul className="list-disc pl-5 space-y-2 text-text mb-4">
        {displayedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      {exp.tasks.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary font-medium hover:underline focus:outline-none"
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

type ExperienceType = {
  company: string;
  title: string;
  period: string;
  location: string;
  tasks: string[];
};

const experiences: ExperienceType[] = [
  {
    company: "CLAS",
    title: "Software Engineer",
    period: "Jun 2023 – Dec 2023 · 7 mos",
    location: "Tokyo, Japan (Remote)",
    tasks: [
      "Developed APIs using reactive programming (RxJava)",
      "Collaborated with other departments to define requirements and specifications",
      "Refactored code to optimize processing performance",
      "Created new web service pages",
      "Developed unit tests",
      "Performed code reviews through pull requests",
    ],
  },
  {
    company: "Yahoo! JAPAN",
    title: "Software Engineer",
    period: "Apr 2021 – May 2023 · 2 yrs 2 mos",
    location: "Tokyo, Japan (Remote)",
    tasks: [
      "Replaced legacy PHP screens with Java implementations",
      "Developed over 15 APIs and batch processes",
      "Implemented BFF layer using WebFlux",
      "Created DDL, DML, and stored procedures",
      "Reviewed and optimized performance-intensive SQL queries",
      "Obtained and optimized SQL execution plans and indexes",
      "Developed unit, integration, and functional tests",
      "Conducted code reviews through pull requests",
      "Created comprehensive documentation for use during and after the development phase",
      "Led task allocation and scheduling to ensure efficient team collaboration and timely delivery of features",
      "Proactively managed overall progress, adjusted priorities, and optimized resource allocation to meet project deadlines",
    ],
  },
  {
    company: "NEC Corporation",
    title: "Software Engineer",
    period: "Apr 2019 – Mar 2021 · 2 yrs",
    location: "Tokyo, Japan (Hybrid)",
    tasks: [
      "Collaborated with a research institute to develop a prototype system for real-time video monitoring of remote vehicles (buses)",
      "Implemented AI algorithms for posture recognition of individuals inside the vehicles",
      "Developed core functionalities for transmission and reception of video feeds",
      "Optimized system settings to prioritize real-time performance, balancing latency and processing speed",
      "Configured network settings across multiple servers required for the project",
      "Migrated on-premise system to AWS to improve scalability, reliability, and operational efficiency",
      "Mentored junior colleagues and provided knowledge transfer and support",
    ],
  },
];
