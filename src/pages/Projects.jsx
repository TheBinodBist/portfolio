```tsx
export default function Projects() {
  const projects = [
    {
      title: "Full-Stack Deployment Platform",
      desc: "Built a deployment platform inspired by Vercel that deploys React applications directly from GitHub repositories. Developed a Django REST API to automate repository cloning, dependency installation, builds, and deployments using Python subprocesses and GitPython. Integrated Redis for background build queues and status tracking, Cloudflare R2 for production build storage, and a React dashboard for managing deployments.",
      tech: [
        "React",
        "Django REST Framework",
        "Python",
        "Redis",
        "PostgreSQL",
        "Cloudflare R2",
      ],
    },
    {
      title: "E-Commerce Platform",
      desc: "Developed a full-stack e-commerce application featuring role-based access control, a responsive storefront, product search and filtering, shopping cart, and checkout functionality. Built REST APIs with Django REST Framework and containerized the backend using Docker for deployment.",
      tech: [
        "React",
        "Django REST Framework",
        "Python",
        "Docker",
      ],
      demo: "https://ecommerce-nine-sigma-82.vercel.app/",
    },
    {
      title: "Car Marketplace",
      desc: "Built a full-stack car marketplace where users can create, browse, and manage car listings through a modern interface. Used PostgreSQL and Prisma ORM for database modeling and queries, Zod for input validation, ImageKit for image uploads and optimization, and Docker for a consistent development environment.",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Zod",
        "ImageKit",
        "Docker",
      ],
    },
    {
      title: "X (Twitter) Clone",
      desc: "Built a full-stack social media application with user authentication, post creation, and RESTful APIs. Connected the React frontend to an Express.js backend and MongoDB database to support user interactions and post management.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
    },
    {
      title: "Food Delivery App",
      desc: "Developed a full-stack food delivery application with menu browsing, shopping cart functionality, and order management. Implemented backend APIs using Node.js and Express.js with MongoDB for storing application data.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 px-6 pt-20 text-white">
      <div className="mx-auto max-w-6xl py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            What I've Built
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Projects
          </h1>

          <p className="mx-auto max-w-2xl text-gray-400">
            A collection of full-stack web applications built with
            modern frontend technologies, backend APIs, databases,
            and deployment tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-gray-700 bg-gray-800 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h2 className="mb-4 text-xl font-semibold transition group-hover:text-blue-400">
                {project.title}
              </h2>

              <p className="mb-6 flex-grow text-sm leading-7 text-gray-400">
                {project.desc}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```
