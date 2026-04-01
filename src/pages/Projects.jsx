export default function Projects() {
  const projects = [
    {
      title: "Multi tenent E-commerce",
      desc: `Built a multi-tenant eCommerce web app where multiple stores
(tenants) can run independently on a shared platform. Implemented secure authentication and role-based access, tenant-aware
data separation, and admin dashboards to manage products, categories, media uploads, orders, and customer accounts.
Developed a responsive storefront experience with product browsing, search/filtering, cart and checkout flow. Focused on
scalable architecture, clean API design, and maintainable full-stack code.`
    },
    
    {
      title: "Blog Post Platform",
      desc: `Developed a blog post web app built with React that allows users to create, read, and delete blog posts.
Users can write a blog, view existing ones, and remove any post with a single click. It provides a simple and interactive
interface for managing personal blog entries.`,
    },
    {
      title: "Car marketpalce",
      desc: `Built a full-stack car marketplace where users can create, view, and manage car listings with a modern
UI and a database-driven backend. Used Next.js (TypeScript) with PostgreSQL, Prisma ORM for database modeling/queries,
Zod for strong input validation, ImageKit for fast image upload/optimization, and Docker for a consistent dev environment.`,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto py-16">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400">{project.desc}</p>

              <button className="mt-4 text-blue-400 hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}