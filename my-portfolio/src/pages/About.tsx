export default function About({ darkMode }: { darkMode: boolean }) {
    return (
      <main
        className={`min-h-screen px-4 py-12 max-w-4xl mx-auto transition-colors duration-300 ${
          darkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-black'
        }`}
      >
        <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-accent' : 'text-primary'}`}>
          About Me
        </h1>
        <p className="text-lg leading-relaxed space-y-4">
          I'm a Software Engineer based in Vancouver, Canada, with 5+ years of experience designing backend systems.
          <br /><br />
          My expertise includes building REST APIs and microservices using Java, Spring Boot, and RxJava, as well as frontend skills with Vue.js and database management in MySQL/PostgreSQL.
          <br /><br />
          I enjoy writing clean, maintainable code and applying thoughtful design patterns. I also mentor junior engineers and guide teams toward best practices.
        </p>
      </main>
    );
  }
  