import Link from 'next/link'

const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-10">
      <div className="max-w-4xl mx-auto flex space-x-4 p-4">
        {sections.map((sec) => (
          <Link key={sec.id} href={`#${sec.id}`} className="hover:underline">
            {sec.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
