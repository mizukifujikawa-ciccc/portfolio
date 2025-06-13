import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    // ここに API 呼び出しなどを追加予定
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-background min-h-screen px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact</h1>
      <p className="text-text text-lg mb-8">
        Feel free to send me a message!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-text font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-text font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-text font-medium" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            Send Message
        </button>
      </form>
    </main>
  );
}
