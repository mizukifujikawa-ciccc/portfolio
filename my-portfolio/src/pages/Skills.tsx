export default function Skills({ darkMode }: { darkMode: boolean }) {
    return (
      <main
        className={`min-h-screen px-4 py-12 max-w-4xl mx-auto transition-colors duration-300 ${
          darkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-black'
        }`}
      >
        <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-accent' : 'text-primary'}`}>
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`rounded shadow p-4 flex items-center space-x-3 transition hover:shadow-lg cursor-pointer ${
                darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain rounded"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </main>
    );
  }
  
  const skills = [
    { name: "Java", icon: "/images/skills/java.png" },
    { name: "Spring Boot", icon: "/images/skills/springboot.png" },
    { name: "PHP", icon: "/images/skills/php.png" },
    { name: "Node.js", icon: "/images/skills/nodejs.png" },
    { name: "PostgreSQL", icon: "/images/skills/postgresql.png" },
    { name: "MySQL", icon: "/images/skills/mysql.png" },
    { name: "React.js", icon: "/images/skills/react.png" },
    { name: "AWS", icon: "/images/skills/aws.png" },
    { name: "TypeScript", icon: "/images/skills/typescript.png" },
    { name: "Git", icon: "/images/skills/git.png" },
  ];
  