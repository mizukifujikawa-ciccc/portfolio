function Section({ id, title, children, className = '' }: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center items-center px-4 ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="max-w-2xl text-center text-lg text-gray-700">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Section id="about" title="About Me" className="bg-gray-50">
        <p>Hello! I'm an engineer passionate about building applications.</p>
      </Section>
      <Section id="experience" title="Experience">
        <p>I have worked on several projects using modern web technologies.</p>
      </Section>
      <Section id="skill" title="Skill" className="bg-gray-50">
        <p>JavaScript, TypeScript, React, and more.</p>
      </Section>
      <Section id="contact" title="Contact">
        <p>Feel free to reach me at <a href="mailto:example@example.com" className="text-blue-600 underline">example@example.com</a>.</p>
      </Section>
    </div>
  );
}
