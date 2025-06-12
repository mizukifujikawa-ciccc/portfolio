import Section from './Section';

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact" className="bg-green-100">
      <p>
        Feel free to reach me at{' '}
        <a href="mailto:example@example.com" className="text-blue-600 underline">
          example@example.com
        </a>
        .
      </p>
    </Section>
  );
}
