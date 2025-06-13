export default function Home() {
    return (
      <main className="bg-background min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Hi, I'm Mizuki Fujikawa
        </h1>
        <p className="text-text text-lg mb-8 max-w-xl">
          Software Engineer in Vancouver specializing in Java backend systems with Spring Boot, RxJava, Vue.js, and MySQL.
        </p>
        <a href="/contact" className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition">
          Let's Connect
        </a>
      </main>
    );
  }
  