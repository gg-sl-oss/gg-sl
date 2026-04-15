import { useState } from "react";
import { Link } from "react-router";
import earthicalHomePage from "../../assets/earthicalHomePage.png";
import zeroTraceHomePage from "../../assets/zeroTraceHomePage.png";
import mysteryOMatic from "../../assets/mysteryOmatic.png";
import mtiaReMenu from "../../assets/mtiaReMenu.png";
import { Helmet } from "react-helmet-async";

type Project = {
  id: number;
  title: string;
  category: string[];
  year: string;
  stack: string[];
  image: string;
  slug: string;
  containImages?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Earthical",
    category: ["Web Application"],
    year: "2024",
    stack: [
      "AWS Amplify",
      "Node.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
    ],
    image: earthicalHomePage,
    slug: "earthical",
  },
  {
    id: 2,
    title: "Zero Trace Weddings",
    category: ["Web Application", "AI"],
    year: "2025",
    stack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    image: zeroTraceHomePage,
    slug: "zeroTrace",
  },
  {
    id: 3,
    title: "Mystery-O-Matic",
    category: ["Web Application", "Game Development"],
    year: "2025",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
    image: mysteryOMatic,
    slug: "mysteryOMatic",
  },
  {
    id: 4,
    title: "My Teacher is an Alien",
    category: ["Reverse Engineering"],
    year: "2024–",
    stack: ["C++", "Python", "Ghidra", "MSVC 4.20"],
    image: mtiaReMenu,
    slug: "myTeacherIsAnAlien",
    containImages: true,
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category).flat())),
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="group block">
      <div
        className="
          bg-white border border-slate-200 overflow-hidden
          transition-all duration-300 ease-out
          group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-slate-200
        "
      >
        {/* Image */}
        <div className={`aspect-16/10 overflow-hidden ${project.containImages ? "bg-slate-800" : "bg-slate-50"}`}>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${project.containImages ? "object-contain" : "object-cover"}`}
          />
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs tracking-widest uppercase text-slate-400 mb-1">
                {project.category}
              </p>
              <h3 className="font-serif text-xl font-normal text-slate-900">
                {project.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-300 mt-1">
              {project.year}
            </span>
          </div>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-light px-2.5 py-1 bg-slate-50 text-slate-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 flex items-center gap-2 text-xs tracking-wide text-slate-400 transition-colors duration-200 group-hover:text-slate-700">
          <span>View case study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <>
      <Helmet>
        <title>Projects – GG SL Web Development Studio</title>
        <meta
          name="description"
          content="Explore projects built by GG SL, including AI-powered tools, sustainability platforms, and custom web applications."
        />
      </Helmet>

      <main>
        <section className="max-w-5xl mx-auto py-16 px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-slate-400" />
            <span className="text-xs tracking-widest uppercase text-slate-500">
              Our work
            </span>
            <div className="w-8 h-px bg-slate-400" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-slate-900">
              Selected <em>projects.</em>
            </h1>
            <p className="text-sm font-light text-slate-400 md:text-right max-w-xs">
              Sustainability, AI, game dev, reverse engineering; we
              gravitate toward projects with something to prove.
            </p>
          </div>

          <div className="h-px bg-slate-200 mb-8" />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                text-xs tracking-wide px-4 py-2 border transition-colors duration-150
                ${
                  activeCategory === cat
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"
                }
              `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-slate-300">
                No projects found.
              </p>
            </div>
          )}

          <div className="h-px bg-slate-200 my-14" />

          {/* CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">
                Got a project in mind?
              </h2>
              <p className="text-base font-light text-slate-500">
                Tell us what you're working on, even if it's weird.
              </p>
            </div>
            <Link to="/contact">
              <button className="shrink-0 rounded inline-flex items-center gap-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white text-sm tracking-wide px-6 py-3 transition-colors">
                Start a conversation <span>→</span>
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
