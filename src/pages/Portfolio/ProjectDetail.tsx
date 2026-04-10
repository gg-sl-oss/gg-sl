import { useParams, Link } from "react-router";
import earthicalHomePage from "../../assets/earthicalHomePage.png";
import zeroTraceHomePage from "../../assets/zeroTraceHomePage.png";
import earthicalImpactCalculator from "../../assets/earthicalImpactCalculator.png";
import earthicalInitiatives from "../../assets/earthicalInitiatives.png";
import earthicalStripe from "../../assets/earthicalStripe.png";
import zeroTraceAIPlanner from "../../assets/zeroTraceAIPlanner.png";
import zeroTraceMembersManagement from "../../assets/zeroTraceMembersManagement.png";
import zeroTraceVendorDetails from "../../assets/zeroTraceVendorDetails.png";
import zeroTracePVP from "../../assets/zeroTracePVP.png";
import mysteryOMatic from "../../assets/mysteryOmatic.png";
import mysteryOMaticGame from "../../assets/mysteryOmatic2.png";
import { useEffect, useState, type JSX } from "react";

type ProjectSection = {
  title?: string;
  description?: string | JSX.Element;
  image?: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  stack: string[];
  image: string;
  slug: string;
  description: string;
  sections: ProjectSection[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Earthical",
    category: "Web Application",
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
    description:
      "A platform for companies and individuals to participate in sustainable actions. Including planting trees and corals, delivering menstrual kits and health check ups and distributing meals.",
    sections: [
      {
        title: "Gifts",
        description:
          "Users could browse and donate to ongoing initiatives, or suggest new initiatives for a personal celebration, conference or other event.",
        image: earthicalInitiatives,
      },
      {
        title: "Impact Calculator",
        description:
          "An impact calculator was also created for users to see the ethical impact of their wedding, including CO2 and waste impact.",
        image: earthicalImpactCalculator,
      },
      {
        title: "Payment Processing",
        description:
          "Payment processing was handled through Stripe, with a custom checkout experience for users to donate to initiatives.",
        image: earthicalStripe,
      },
    ],
  },
  {
    id: 2,
    title: "Zero Trace Weddings",
    category: "Web Application",
    year: "2025",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "AWS",
    ],
    image: zeroTraceHomePage,
    slug: "zeroTrace",
    description:
      "A platform designed to help couples match with like-minded vendors and reduce wedding waste through curated vendors, planning tools, and sustainability insights.",
    sections: [
      {
        description:
          "The site included a vendor directory and vendor profile pages where vendors could showcase thier services and sustainability commitments.",
        image: zeroTraceVendorDetails,
      },
      {
        description:
          "A conversational AI wedding planner, matching couples with vendors which aligned with their preferred style and needs.",
        image: zeroTraceAIPlanner,
      },
      {
        description:
          "For vendors such as planners and venues, a dedicated page where they can manage and showcase the other vendors they recommend and choose to work with.",
        image: zeroTracePVP,
      },
      {
        description:
          "Also, for vendors who belong to specific groups together, a platform to onboard, and manage their members. With dedicated onboarding surveys and responses from potential members.",
        image: zeroTraceMembersManagement,
      },
    ],
  },
  {
    id: 3,
    title: "Mystery-O-Matic",
    category: "Web Application",
    year: "2025",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
    image: mysteryOMatic,
    slug: "mysteryOMatic",
    description:
      "A web game where players can solve daily murder mystery in just 5 minutes and slowly uncover how to defeat the evil timeloop. It supports English, Spanish and Russian.",
    sections: [
      {
        description: (
          <>
            The site is a Python program used to produce a random murder mystery
            to solve using fuzzing testing. Once a mystery is generated, it
            produces a static html file that contains all the clues (and the
            solution to verify it). It uses{" "}
            <Link
              to="https://github.com/crytic/echidna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Echidna
            </Link>{" "}
            to generate the murder mystery and its solution.            
          </>
        ),
        image: mysteryOMaticGame,
      },
    ],
  },
];

export default function ProjectDetail() {
  const { projectName } = useParams();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const project = projects.find((p) => p.slug === projectName);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h1 className="font-serif text-3xl text-neutral-400">
          Project not found.
        </h1>
        <Link to="/portfolio" className="text-sm text-neutral-500 mt-4 block">
          ← Back to portfolio
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="max-w-5xl mx-auto py-16 px-6">
        {/* Back link */}
        <Link
          to="/portfolio"
          className="text-xs tracking-wide text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          ← Back to portfolio
        </Link>

        {/* Header */}
        <div className="mt-8 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-neutral-400" />
            <span className="text-xs tracking-widest uppercase text-neutral-500">
              {project.category}
            </span>
            <div className="w-8 h-px bg-neutral-400" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-neutral-900">
              {project.title}
            </h1>

            <span className="text-sm font-mono text-neutral-400">
              {project.year}
            </span>
          </div>
        </div>

        <div className="h-px bg-neutral-200 mb-10" />

        {/* Hero Image */}
        <div
          className="aspect-16/10 overflow-hidden bg-neutral-100 mb-12"
          onClick={() => setActiveImage(project.image)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Overview + Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-neutral-900 mb-4">
              Overview
            </h2>
            <p className="text-base font-light text-neutral-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 md:sticky md:top-24 h-fit">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-neutral-400 mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-light px-2.5 py-1 bg-neutral-100 text-neutral-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-20 space-y-24">
          {project.sections.map((section, index) => (
            <div key={index}>
              <div
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                {section.image && (
                  <div
                    className="aspect-16/10 overflow-hidden bg-neutral-100"
                    onClick={() => setActiveImage(section.image || null)}
                  >
                    <img
                      src={section.image}
                      alt={section.title || `Project image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}

                {/* Text */}
                <div>
                  {section.title && (
                    <h2 className="font-serif text-2xl text-neutral-900 mb-4">
                      {section.title}
                    </h2>
                  )}
                  {section.description && (
                    <p className="text-base font-light text-neutral-600 leading-relaxed">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 my-16" />

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link
            to="/portfolio"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            ← Back to portfolio
          </Link>

          <Link to="/contact">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-neutral-400 mb-3">
                Interested?
              </h3>
              <Link to="/contact">
                <button className="w-full inline-flex rounded items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-700 text-white text-sm tracking-wide px-5 py-3 transition-colors">
                  Start a conversation <span>→</span>
                </button>
              </Link>
            </div>
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white text-sm tracking-wide"
            >
              Close ✕
            </button>

            <img
              src={activeImage}
              alt="Expanded view"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
