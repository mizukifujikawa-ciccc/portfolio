import Section from './Section';

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8 text-left">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Software Engineer</h3>
          <p>CLAS · Contract Full-time</p>
          <p>Jun 2023 - Dec 2023 · 7 mos</p>
          <p>Tokyo, Japan · Remote</p>
          <p>Development of furniture subscription services.</p>
          <ul className="list-disc list-inside">
            <li>API implementation in reactive programming</li>
            <li>Requirement definition and specification study in cooperation with other departments</li>
            <li>Code refactoring for processing optimization</li>
            <li>Created new web service pages</li>
            <li>Made unit test</li>
            <li>Code reviews by pull request</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Software Engineer</h3>
          <p>Yahoo! JAPAN · Contract Full-time</p>
          <p>Apr 2021 - May 2023 · 2 yrs 2 mos</p>
          <p>Tokyo, Japan · Remote</p>
          <p>Development and maintenance operation project for financial web services.</p>
          <ul className="list-disc list-inside">
            <li>On-screen renewal and replacement of PHP with Java</li>
            <li>Developed of more than 15 APIs and batches</li>
            <li>BFF implementation using webflux</li>
            <li>Creation of DDL/DML and stored</li>
            <li>Review of processing-intensive SQL processing</li>
            <li>Obtain and optimize SQL execution plans and set index</li>
            <li>Made unit, integration, functional tests</li>
            <li>Code reviews by pull request</li>
            <li>Made some documents which will be used while/after development phase</li>
            <li>Took initiative in task allocation and scheduling to ensure efficient team collaboration and timely delivery of features</li>
          </ul>
          <p className="mt-2">
            Always aimed to achieve the best results as a team by keeping track of overall progress, flexibly adjust priorities and allocate resources as needed. This approach of mine allowed us to complete the initial goals within the deadlines.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Software Engineer</h3>
          <p>NEC Corporation · Permanent Full-time</p>
          <p>Apr 2019 - Mar 2021 · 2 yrs</p>
          <p>Tokyo, Japan · Hybrid</p>
          <p>Collaborated with a research institute on the development of a prototype system for real-time monitoring and analysis of video feeds from remote vehicles (primarily buses) to a central monitoring center.</p>
          <ul className="list-disc list-inside">
            <li>Implemented AI algorithms for posture recognition of individuals inside the vehicle</li>
            <li>Developed essential functionalities for the transmission and reception of video feeds</li>
            <li>Optimized system settings to prioritize real-time performance, balancing latency and processing speed</li>
            <li>Configured network settings across multiple servers required for the project</li>
            <li>Migrated the on-premise system to AWS, improving scalability, reliability, and operational efficiency</li>
            <li>mentored junior colleagues and provided support and knowledge transfer</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
