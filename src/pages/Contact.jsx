import { FaGithub ,FaInstagram,  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto py-16 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get In Touch
        </h1>

        <p className="text-gray-400 mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:thebinodbist@gmail.com"
            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition group"
          >
            <MdEmail className="mx-auto mb-4 group-hover:text-blue-400" size={32} />
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-gray-400 text-sm mt-2">
              thebinodbist@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/thebinodbist"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition group"
          >
            <FaGithub className="mx-auto mb-4 group-hover:text-blue-400" size={32} />
            <h2 className="text-lg font-semibold">GitHub</h2>
            <p className="text-gray-400 text-sm mt-2">
              github.com/thebinodbist
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/thebinodbist"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition group"
          >
            <FaInstagram className="mx-auto mb-4 group-hover:text-blue-400" size={32} />
            <h2 className="text-lg font-semibold">Instagram</h2>
            <p className="text-gray-400 text-sm mt-2">
              @thebinodbist
            </p>
          </a>

        </div>

        {/* Extra CTA */}
        <div className="mt-16">
          <p className="text-gray-500">
            Prefer email? I usually respond within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}