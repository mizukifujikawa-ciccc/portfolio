import { useState } from "react";

export default function Contact({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main
      className={`min-h-screen px-4 py-12 max-w-4xl mx-auto transition-colors duration-300 ${
        darkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-black'
      }`}
    >
      <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-accent' : 'text-primary'}`}>
        Contact
      </h1>
      <p className="text-lg mb-8">Feel free to send me a message!</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
              darkMode ? 'bg-gray-800 border-gray-600 text-gray-200 focus:ring-accent' : 'bg-white border-gray-300 text-black focus:ring-primary'
            }`}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
              darkMode ? 'bg-gray-800 border-gray-600 text-gray-200 focus:ring-accent' : 'bg-white border-gray-300 text-black focus:ring-primary'
            }`}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
              darkMode ? 'bg-gray-800 border-gray-600 text-gray-200 focus:ring-accent' : 'bg-white border-gray-300 text-black focus:ring-primary'
            }`}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
