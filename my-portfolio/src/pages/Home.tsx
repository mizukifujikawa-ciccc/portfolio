export default function Home({ darkMode }: { darkMode: boolean }) {
    return (
      <main className={`min-h-screen px-4 flex flex-col justify-center items-center text-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-black'
      }`}>
        <h1 className={`${darkMode ? 'text-accent' : 'text-primary'} text-5xl font-bold mb-6`}>
          Hi, I'm Mizuki Fujikawa
        </h1>
        <p className="text-lg mb-8 max-w-xl">
          Software Engineer in Vancouver specializing in Java backend systems.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Let's Connect
        </a>
      </main>
    );
  }
  