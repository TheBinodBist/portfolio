export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-6">
      <div className="max-w-5xl mx-auto py-16">

        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="text-gray-400 mb-6">
          I'm a passionate full-stack developer who loves building scalable and
          user-friendly applications. I enjoy solving problems and learning new technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• React </li>
              <li>• Next.js </li>
              <li>• Node.js / Express</li>
              <li>• MongoDB</li>
              <li>• Tailwind CSS</li>
              <li>• React Native</li>

            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-gray-300">
              Bachelor in Software Engineering  
              <br />
              Pokhara  University
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}