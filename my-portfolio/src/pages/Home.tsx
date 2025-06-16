import { motion } from "framer-motion";

export default function Home({ darkMode }: { darkMode: boolean }) {
  return (
    <main
      className={`min-h-screen px-4 flex flex-col justify-center items-center text-center transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-gray-300" : "bg-white text-black"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-5xl font-bold mb-6 ${
          darkMode ? "text-accent" : "text-primary"
        }`}
      >
        Hi, I'm Mizuki Fujikawa
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg mb-8 max-w-xl"
      >
        Software Engineer in Vancouver specializing in Java backend systems.
      </motion.p>

      <motion.a
        href="/contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
      >
        Let's Connect
      </motion.a>
    </main>
  );
}
