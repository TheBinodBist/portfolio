export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-6">
      <div className="max-w-5xl mx-auto py-16">
        
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        {/* Intro */}
        <p className="text-gray-400 mb-10 leading-relaxed max-w-3xl">
          I'm a passionate full-stack developer focused on building scalable,
          high-performance, and user-friendly applications. I enjoy turning
          complex problems into simple, elegant solutions while constantly
          learning new technologies and improving my craft.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Experience</h3>
            <p className="text-gray-400 text-sm">
              Worked on real-world web apps with authentication, dashboards,
              and scalable backend systems.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Projects</h3>
            <p className="text-gray-400 text-sm">
              Built multi-tenant systems, modern UI apps, and full-stack
              solutions using MERN stack.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Focus</h3>
            <p className="text-gray-400 text-sm">
              Clean code, performance optimization, and building impactful
              digital products.
            </p>
          </div>
        </div>

        {/* Skills + Education */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "React Native",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="bg-gray-800 p-5 rounded-xl">
              <p className="text-gray-300 font-medium">
                Bachelor in Software Engineering 
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Pokhara University
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}