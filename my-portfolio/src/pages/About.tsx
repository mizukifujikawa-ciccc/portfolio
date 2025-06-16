import { motion } from "framer-motion";

export default function About({ darkMode }: { darkMode: boolean }) {
    return (
      <main
      className={`min-h-screen px-4 py-12 max-w-4xl mx-auto transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-gray-300" : "bg-white text-black"
      }`}
      >
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold mb-6 ${darkMode ? 'text-accent' : 'text-primary'}`}>
          About Me
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg leading-relaxed space-y-4">
          I'm a Software Engineer based in Vancouver, Canada, with 5+ years of experience designing backend systems.
          <br /><br />
          My expertise includes building REST APIs and microservices using Java, Spring Boot, and RxJava, as well as frontend skills with Vue.js and database management in MySQL/PostgreSQL.
          <br /><br />
          I enjoy writing clean, maintainable code and applying thoughtful design patterns. I also mentor junior engineers and guide teams toward best practices.
        </motion.p>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-4 mt-12">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project) => (
                <div
                    key={project.title}
                    className={`rounded shadow overflow-hidden transition ${
                    darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                >
                    <img
                    src="https://placehold.co/400"
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </motion.div>
      </main>
    );
  }
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a scalable backend using Java Spring Boot and PostgreSQL. Integrated Stripe for payments.",
      image: "/images/projects/ecommerce.png",
    },
    {
      title: "AI Posture Recognition",
      description: "Developed real-time posture detection using Python and integrated video streaming over WebRTC.",
      image: "/images/projects/ai-posture.png",
    },
  ];