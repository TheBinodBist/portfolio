import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#e8e8e8] text-black m-0 p-0">

      {/* DESKTOP / TABLET */}
      <section className="hidden md:block w-full m-0 p-0">

        {/* Hero */}
        <section className="relative w-full h-[620px] overflow-hidden m-0 p-0">

          {/* Left Gray Background */}
          <div className="absolute inset-0 bg-[#d8d8d8]" />

          {/* Black Right Side */}
          <div
            className="
              absolute
              top-0
              right-0
              h-full
              w-[59%]
              bg-black
              overflow-hidden
            "
            style={{
              clipPath: "polygon(13% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            {/* Portrait */}
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src="/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EfTgsu4TbJtLpWvvRUs4jiopw6vYhbW4pVRDe_BpNDXT_VGXJvbFbKQ&s=10"
                alt="Binod Bist"
                className="
                  h-[92%]
                  w-auto
                  max-w-none
                  object-contain
                  object-bottom
                "
              />
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-[14%] top-8 z-20">
            <Link
              to="/"
              className="text-2xl font-black italic"
            >
              B
            </Link>
          </div>

          {/* Left Content */}
          <div className="absolute left-[14%] top-[145px] z-20">
            <p className="text-[17px] font-semibold mb-4">
              Hi, I am
            </p>

            <h1 className="text-[42px] leading-none font-bold tracking-tight">
              Binod Bist
            </h1>

            <p className="text-[13px] text-gray-500 font-semibold mt-1">
              Full-stack Developer
            </p>

            <div className="flex items-center gap-3 mt-14">

              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="
                  w-7 h-7
                  bg-[#c8c8c8]
                  flex items-center justify-center
                  shadow-sm
                  hover:bg-white
                  transition
                "
              >
                <Mail size={15} />
              </a>

              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-7 h-7
                  bg-[#c8c8c8]
                  flex items-center justify-center
                  shadow-sm
                  hover:bg-white
                  transition
                "
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-7 h-7
                  bg-[#c8c8c8]
                  flex items-center justify-center
                  shadow-sm
                  hover:bg-white
                  transition
                "
              >
                <LinkedinIcon />
              </a>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="relative w-full bg-[#202020] text-white min-h-[125px] px-10 py-5 overflow-hidden m-0">

          <div className="relative z-10 max-w-[650px]">
            <h2 className="text-[13px] font-bold tracking-[4px] mb-3">
              IT BEIRRIES
            </h2>

            <p className="text-[7px] leading-[1.7] text-gray-300">
              I’m a full-stack developer building web and mobile
              applications with React, React Native, TypeScript,
              Node.js and MongoDB. I enjoy creating clean interfaces,
              scalable applications and practical digital products.
            </p>

            <Link
              to="/about"
              className="
                inline-flex
                items-center
                mt-3
                text-[7px]
                tracking-wide
                border-l border-r
                px-3 py-1
                hover:bg-white
                hover:text-black
                transition
              "
            >
              READ MORE
            </Link>
          </div>

          <div
            className="
              absolute
              -right-5
              -bottom-24
              text-[190px]
              font-black
              text-black/70
              rotate-[20deg]
              leading-none
            "
          >
            BB
          </div>
        </section>
      </section>


      {/* MOBILE */}
      <section className="md:hidden block w-full min-h-screen m-0 p-0">

        <div
          className="
            relative
            w-full
            min-h-screen
            overflow-hidden
            bg-black
            m-0
            p-0
          "
        >

          {/* Portrait */}
          <img
            src="/images/vector-portrait.png"
            alt="Binod Bist"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-contain
              object-bottom
            "
          />

          {/* Bottom Dark Diagonal */}
          <div
            className="
              absolute
              left-0
              right-0
              bottom-0
              h-[210px]
              bg-black/60
            "
            style={{
              clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
            }}
          />

          {/* Logo */}
          <div className="absolute top-5 left-6 z-20">
            <Link
              to="/"
              className="text-white text-3xl font-black italic"
            >
              B
            </Link>
          </div>

          {/* Content */}
          <div className="absolute bottom-7 left-6 right-6 z-20">

            <p className="text-white text-sm mb-1">
              Hi, I am
            </p>

            <h1 className="text-white text-[25px] leading-none font-bold">
              Binod Bist
            </h1>

            <p className="text-white/80 text-[9px] font-medium mt-1">
              Full-stack Developer / UI Designer
            </p>

          </div>

          {/* Social Icons */}
          <div
            className="
              absolute
              right-6
              bottom-8
              z-20
              flex
              flex-col
              items-center
              gap-4
              text-white
            "
          >
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="hover:text-gray-300 transition"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-300 transition"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition"
            >
              <LinkedinIcon size={17} />
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}


/* =========================================================
   GITHUB ICON
========================================================= */

function GithubIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
    </svg>
  );
}


/* =========================================================
   LINKEDIN ICON
========================================================= */

function LinkedinIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}