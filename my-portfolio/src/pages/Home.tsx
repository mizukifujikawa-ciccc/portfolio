export default function Home() {
    return (
      <main className="bg-background min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-primary mb-6">Hello, I'm Mizuki</h1>
        <p className="text-text text-lg mb-8 max-w-xl">
          A passionate Software Engineer building modern and scalable web applications.
        </p>
        <a href="/contact" className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition">
          Contact Me
        </a>
      </main>
    );
  }
  