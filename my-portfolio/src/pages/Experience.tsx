export default function Experience() {
    return (
      <main className="bg-background min-h-screen px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Experience</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-text">Software Engineer @ XYZ Corp</h2>
            <p className="text-sm text-text mb-2">2023 - Present</p>
            <p className="text-text">
              Developed scalable backend services and REST APIs using Java and Spring Boot. 
              Led migration projects and optimized database performance.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text">Backend Developer @ ABC Inc</h2>
            <p className="text-sm text-text mb-2">2021 - 2023</p>
            <p className="text-text">
              Built and maintained microservices architecture, implemented CI/CD pipelines, and improved system reliability.
            </p>
          </div>
        </div>
      </main>
    );
  }
  