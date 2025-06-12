export default function Contact() {
    return (
      <main className="bg-background min-h-screen px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact</h1>
        <p className="text-text text-lg mb-8">
          Feel free to reach out via email or LinkedIn.
        </p>
        <div className="space-y-4">
          <p className="text-text">📧 Email: mizuki@example.com</p>
          <p className="text-text">💼 LinkedIn: <a href="#" className="text-primary hover:underline">linkedin.com/in/mizuki-fujikawa</a></p>
        </div>
      </main>
    );
  }
  