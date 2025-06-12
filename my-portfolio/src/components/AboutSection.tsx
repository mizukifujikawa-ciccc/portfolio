import Section from './Section';

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" className="bg-gray-50">
      <img
        src="/profile.svg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <p>
        👩‍💻 Java backend engineer with 5 years experience
        <br />
        🍀 Seeking opportunities starting September 2025(potentially available earlier)
        <br />
        📍 Vancouver BC
        <br />
        Specializing in Java and backend system design, with additional frontend knowledge. I focus on thoroughly understanding requirements and designing well-structured, effective specifications. This drives me to write clean, readable, and testable code.
      </p>
    </Section>
  );
}
