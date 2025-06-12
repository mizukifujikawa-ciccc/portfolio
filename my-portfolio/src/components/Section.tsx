export default function Section({ id, title, children, className = '' }: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center items-center px-8 ${className}`}>
      <h2 className="text-4xl font-bold text-pink-600 mb-4">{title}</h2>
      <div className="max-w-2xl text-center text-lg text-gray-700">{children}</div>
    </section>
  );
}
