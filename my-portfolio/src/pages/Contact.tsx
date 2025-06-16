import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Contact({ darkMode }: { darkMode: boolean }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <main
      className={`min-h-screen px-4 py-12 max-w-2xl mx-auto transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-gray-300" : "bg-white text-black"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl font-bold mb-6 text-center ${darkMode ? "text-accent" : "text-primary"}`}
      >
        Contact
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </main>
  );
}
