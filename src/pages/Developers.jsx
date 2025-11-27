import { Github, Linkedin } from "lucide-react";

const developers = [
  {
    name: "Bana Dawit",
    role: "Full-Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=32",
    responsibilities: [
      "Frontend development using React & Tailwind",
      "Backend API integration with Django REST Framework",
      "Authentication system & route protection",
      "Responsive UI & component architecture",
    ],
    tech: ["React", "Tailwind", "Django", "PostgreSQL"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Developer Two",
    role: "Backend Engineer",
    avatar: "https://i.pravatar.cc/150?img=12",
    responsibilities: [
      "Backend API design and security",
      "Database schema & optimization",
      "Booking and notification system",
    ],
    tech: ["Python", "DRF", "PostgreSQL"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Developer Three",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=45",
    responsibilities: [
      "Dashboard wireframes & prototypes",
      "Figma design system",
      "Branding and accessibility guidelines",
    ],
    tech: ["Figma", "Illustrator"],
    github: "#",
    linkedin: "#",
  },
];

export default function Developers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Meet the Developers</h1>
        <p className="text-gray-600 mt-3">
          The SkillForge Project Management System was created by a talented team
          dedicated to building scalable and user-friendly solutions.
        </p>
      </div>

      {/* Developers Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src={dev.avatar}
                alt={dev.name}
                className="w-24 h-24 rounded-full object-cover shadow"
              />
            </div>

            {/* Info */}
            <h2 className="text-xl font-semibold text-center mt-4">
              {dev.name}
            </h2>
            <p className="text-center text-indigo-600 font-medium">
              {dev.role}
            </p>

            {/* Responsibilities */}
            <h3 className="mt-4 font-semibold text-gray-800">Responsibilities:</h3>
            <ul className="text-gray-600 text-sm mt-2 space-y-1">
              {dev.responsibilities.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            {/* Tech stack */}
            <h3 className="mt-4 font-semibold text-gray-800">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {dev.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 text-indigo-600 px-3 py-1 text-xs rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-6">
              <a
                href={dev.github}
                className="text-gray-700 hover:text-black"
                target="_blank"
              >
                <Github size={22} />
              </a>
              <a
                href={dev.linkedin}
                className="text-gray-700 hover:text-blue-700"
                target="_blank"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        © 2025 SkillForge Team — Developed for Internship Project
      </div>
    </div>
  );
}
