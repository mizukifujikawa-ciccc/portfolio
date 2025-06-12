import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <Navbar />
      <main className="max-w-4xl mx-auto pt-16 space-y-24 p-4">
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">This is a short bio about me.</p>
        </section>
        <section id="experience" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-lg">My work history goes here.</p>
        </section>
        <section id="skills" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-lg">React, Next.js, TailwindCSS, and more.</p>
        </section>
        <section id="contact" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">Feel free to reach out via email.</p>
        </section>
      </main>
    </div>
  )
}
