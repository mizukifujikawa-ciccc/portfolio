export default function Experience() {
    return (
      <main className="bg-background min-h-screen px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Experience</h1>
  
        <div className="space-y-8">
          {/* CLAS */}
          <div>
            <h2 className="text-xl font-semibold text-text">
              Software Engineer @ CLAS
            </h2>
            <p className="text-sm text-text mb-2">Jun 2023 – Dec 2023 · 7 mos · Tokyo, Japan (Remote)</p>
            <ul className="list-disc pl-5 space-y-2 text-text">
              <li>Developed APIs using reactive programming (RxJava)</li>
              <li>Collaborated with other departments to define requirements and specifications</li>
              <li>Refactored code to optimize processing performance</li>
              <li>Created new web service pages</li>
              <li>Developed unit tests</li>
              <li>Performed code reviews through pull requests</li>
            </ul>
          </div>
  
          {/* Yahoo! JAPAN */}
          <div>
            <h2 className="text-xl font-semibold text-text">
              Software Engineer @ Yahoo! JAPAN
            </h2>
            <p className="text-sm text-text mb-2">Apr 2021 – May 2023 · 2 yrs 2 mos · Tokyo, Japan (Remote)</p>
            <ul className="list-disc pl-5 space-y-2 text-text">
              <li>Replaced legacy PHP screens with Java implementations</li>
              <li>Developed over 15 APIs and batch processes</li>
              <li>Implemented BFF layer using WebFlux</li>
              <li>Created DDL, DML, and stored procedures</li>
              <li>Reviewed and optimized performance-intensive SQL queries</li>
              <li>Obtained and optimized SQL execution plans and indexes</li>
              <li>Developed unit, integration, and functional tests</li>
              <li>Conducted code reviews through pull requests</li>
              <li>Created comprehensive documentation for use during and after the development phase</li>
              <li>Led task allocation and scheduling to ensure efficient team collaboration and timely delivery of features</li>
              <li>Proactively managed overall progress, adjusted priorities, and optimized resource allocation to meet project deadlines</li>
            </ul>
          </div>
  
          {/* NEC Corporation */}
          <div>
            <h2 className="text-xl font-semibold text-text">
              Software Engineer @ NEC Corporation
            </h2>
            <p className="text-sm text-text mb-2">Apr 2019 – Mar 2021 · 2 yrs · Tokyo, Japan (Hybrid)</p>
            <ul className="list-disc pl-5 space-y-2 text-text">
              <li>Collaborated with a research institute to develop a prototype system for real-time video monitoring of remote vehicles (buses)</li>
              <li>Implemented AI algorithms for posture recognition of individuals inside the vehicles</li>
              <li>Developed core functionalities for transmission and reception of video feeds</li>
              <li>Optimized system settings to prioritize real-time performance, balancing latency and processing speed</li>
              <li>Configured network settings across multiple servers required for the project</li>
              <li>Migrated on-premise system to AWS to improve scalability, reliability, and operational efficiency</li>
              <li>Mentored junior colleagues and provided knowledge transfer and support</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
  