import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-6">
      
      {/* Hero Section */}
      <section className="max-w-6xl h-[90vh] mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-blue-400">Binod Bist</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Full Stack Developer passionate about building modern web apps.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Experience
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">
              Web Development Intern
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Sriyog • Nov 2025 - Mar 2026
            </p>

            <p className="mt-3 text-gray-300 leading-relaxed">
              Worked on building scalable web applications using React and Next.js,
              focusing on performance optimization and clean UI design.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}