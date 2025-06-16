import { useState } from "react";
import { motion } from "framer-motion";

export default function Experience({ darkMode }: { darkMode: boolean }) {
  return (
    <main
      className={`min-h-screen px-4 py-12 max-w-4xl mx-auto transition-colors duration-300 ${
        darkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-black'
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl font-bold mb-6 ${darkMode ? 'text-accent' : 'text-primary'}`}
      >
        Experience
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} darkMode={darkMode} />
        ))}
      </motion.div>
    </main>
  );
}

function ExperienceCard({
  exp,
  darkMode,
}: {
  exp: ExperienceType;
  darkMode: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedTasks = isExpanded ? exp.tasks : exp.tasks.slice(0, 3);

  return (
    <div
      className={`rounded shadow p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-xl font-semibold">{exp.title} @ {exp.company}</h2>
      <p className="text-sm mb-2">{exp.period} · {exp.location}</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        {displayedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      {exp.tasks.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`font-medium hover:underline focus:outline-none ${
            darkMode ? 'text-accent' : 'text-primary'
          }`}
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
