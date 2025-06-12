export default function Skills() {
    return (
      <main className="bg-background min-h-screen px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded shadow p-4">Java</div>
          <div className="bg-white rounded shadow p-4">Spring Boot</div>
          <div className="bg-white rounded shadow p-4">Node.js</div>
          <div className="bg-white rounded shadow p-4">PostgreSQL</div>
          <div className="bg-white rounded shadow p-4">React</div>
          <div className="bg-white rounded shadow p-4">AWS</div>
        </div>
      </main>
    );
  }
  