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
import mtiaReMenu from "../../assets/mtiaReMenu.png";
import mtiaReGameplay from "../../assets/mtiaReGameplay.png";
import { useEffect, useState, type JSX } from "react";
import { Helmet } from "react-helmet-async";

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
  containImages?: boolean;
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
      "Earthical lets people turn celebrations into impact. Instead of generic gifts, guests donate to plant trees, restore coral reefs, fund menstrual health kits, or distribute meals. We built the full platform from scratch: browsing initiatives, calculating real-world impact, and processing donations through Stripe.",
    sections: [
      {
        title: "Initiatives & Gifting",
        description:
          "The core experience: browse active sustainability initiatives, pick one that resonates, and donate in someone's name. Hosts could also propose custom initiatives for weddings, conferences, or birthdays, turning any event into a fundraiser.",
        image: earthicalInitiatives,
      },
      {
        title: "Impact Calculator",
        description:
          "We built a calculator that translates donations into tangible numbers: kilograms of CO2 offset, meals distributed, trees planted. It gave users a concrete sense of what their money actually does, which made a measurable difference in conversion.",
        image: earthicalImpactCalculator,
      },
      {
        title: "Stripe Checkout",
        description:
          "A custom Stripe integration handled one-time and recurring donations with minimal friction. We designed the checkout flow to feel native to the platform rather than a redirect to a third-party page.",
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
      "Zero Trace is a marketplace that connects couples with sustainable wedding vendors. But it's more than a directory; we built an AI planner that interviews couples about their style and values, then matches them with the right vendors. Plus a full vendor management platform for onboarding, partnerships, and member networks.",
    sections: [
      {
        title: "Vendor Profiles",
        description:
          "Each vendor gets a rich profile page to showcase their services, pricing, and sustainability commitments. Couples can browse, compare, and shortlist, all without leaving the platform.",
        image: zeroTraceVendorDetails,
      },
      {
        title: "AI Wedding Planner",
        description:
          "A conversational AI that asks couples about their budget, style, and priorities, then recommends a curated shortlist of vendors. It feels like chatting with a knowledgeable friend, not filling out a form.",
        image: zeroTraceAIPlanner,
      },
      {
        title: "Partner Vendor Pages",
        description:
          "Planners and venues often have preferred vendors they regularly work with. We built dedicated pages where they can curate and showcase these partnerships, a trust signal for couples and a referral channel for vendors.",
        image: zeroTracePVP,
      },
      {
        title: "Members Management",
        description:
          "For vendor collectives and associations: a back-office platform to onboard new members, manage applications, send surveys, and track responses. Built to replace the spreadsheets and email chains they were drowning in.",
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
      "A daily murder mystery game you can solve in five minutes. Each day a new case is generated; new suspects, new clues, new solution. Players piece together evidence to crack the case and slowly uncover a meta-narrative about breaking a time loop. Available in English, Spanish, and Russian.",
    sections: [
      {
        title: "Fuzzing Meets Fiction",
        description: (
          <>
            Here's the unusual part: each mystery is generated using{" "}
            <Link
              to="https://github.com/crytic/echidna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Echidna
            </Link>
            , a smart contract fuzzing tool repurposed for game design. A Python
            backend defines the rules of a valid mystery (motive, opportunity,
            evidence) and Echidna explores the possibility space to find
            combinations that are solvable but not obvious. The output is a
            static HTML file with all clues baked in, so there's no server
            needed at runtime.
          </>
        ),
        image: mysteryOMaticGame,
      },
    ],
  },
  {
    id: 4,
    title: "My Teacher is an Alien",
    category: "Reverse Engineering",
    year: "2024–",
    stack: ["C++", "Python", "Ghidra", "MSVC 4.20", "Makefile"],
    image: mtiaReMenu,
    slug: "myTeacherIsAnAlien",
    containImages: true,
    description:
      "An ongoing source code reconstruction of the 1997 Windows 95 point-and-click adventure game originally developed by 7th Level / Byron Preiss Multimedia. This is not the original game and we did not develop it. The goal is to reconstruct the lost C++ source code from the compiled binary, purely for software preservation and historical research. No game assets, executables, or copyrighted media are included or distributed.",
    sections: [
      {
        title: "Instruction-Level Accuracy",
        description: (
          <>
            This isn't a remake, a port, or a reimplementation. It's a
            reconstruction of source code that no longer exists. Each function
            is reverse-engineered from the original compiled binary using{" "}
            <Link
              to="https://ghidra-sre.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ghidra
            </Link>
            , then rewritten in C++ and compiled with the original Microsoft
            Visual C++ 4.20 compiler. The output is compared against the
            original executable at the assembly level using Levenshtein distance
            to verify accuracy. Current progress: 1,406 of 1,406 functions
            reconstructed for the full game (100%), and 817 of 876 for the demo
            (93.26%).
          </>
        ),
        image: mtiaReGameplay,
      },
      {
        title: "Tooling & Verification Pipeline",
        description: (
          <>
            A custom Python toolchain automates the compile-and-compare cycle:
            each function is compiled individually, its assembly output is diffed
            against the original binary, and deviations are flagged. Scripts
            verify vtable layouts, global data ordering, and call targets to
            catch structural regressions early. The project builds on Linux and
            macOS via{" "}
            <Link
              to="https://github.com/decompals/wibo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              wibo
            </Link>
            , an open-source Win32 PE loader, and runs through{" "}
            <Link
              to="https://dreamm.aarongiles.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              DREAMM
            </Link>
            , a compatibility layer for classic Windows 95/98 games.
          </>
        ),
      },
      {
        title: "Preservation, Not Distribution",
        description: (
          <>
            To be clear: we did not create the original game, and this project
            does not distribute it. The repository is licensed under GPL-3.0 and
            contains only reconstructed source code, build tooling, and API
            headers for third-party libraries (Miles Sound System, Smacker
            Video). No copyrighted game assets, executables, artwork, audio, or
            video are included. Running the reconstructed binary still requires
            the original CD-ROM. The project follows the same methodology as
            established preservation efforts like{" "}
            <Link
              to="https://github.com/decompals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              decompals
            </Link>
            , OpenRCT2, and similar community-driven reconstructions. Source
            code is available on{" "}
            <Link
              to="https://github.com/neuromancer/my-teacher-is-an-alien-re"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </Link>
            .
          </>
        ),
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
        <h1 className="font-serif text-3xl text-slate-400">
          Project not found.
        </h1>
        <Link to="/portfolio" className="text-sm text-slate-500 mt-4 block">
          ← Back to portfolio
        </Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} – GG SL Web Development Studio</title>
        <meta name="description" content={project.description} />

        <meta property="og:title" content={project.title} />
        <meta
          property="og:description"
          content={`${project.description} Built by GG SL, a web development studio.`}
        />
        <meta
          property="og:url"
          content={`https://gg-sl.com/portfolio/${project.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={project.image} />
      </Helmet>
      <main>
        <section className="max-w-5xl mx-auto py-16 px-6">
          {/* Back link */}
          <Link
            to="/portfolio"
            className="text-xs tracking-wide text-slate-400 hover:text-slate-700 transition-colors"
          >
            ← Back to portfolio
          </Link>

          {/* Header */}
          <div className="mt-8 mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-slate-400" />
              <span className="text-xs tracking-widest uppercase text-slate-500">
                {project.category}
              </span>
              <div className="w-8 h-px bg-slate-400" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-slate-900">
                {project.title}
              </h1>

              <span className="text-sm font-mono text-slate-400">
                {project.year}
              </span>
            </div>
          </div>

          <div className="h-px bg-slate-200 mb-10" />

          {/* Hero Image */}
          <div
            className={`overflow-hidden mb-12 ${project.containImages ? "bg-slate-800" : "aspect-16/10 bg-slate-50"}`}
            onClick={() => setActiveImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full transition-transform duration-300 hover:scale-[1.02] ${project.containImages ? "object-contain max-h-[70vh] mx-auto" : "object-cover"}`}
            />
          </div>

          {/* Overview + Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl text-slate-900 mb-4">
                Overview
              </h2>
              <p className="text-base font-light text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 md:sticky md:top-24 h-fit">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-slate-400 mb-3">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
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
                      className={`overflow-hidden ${project.containImages ? "bg-slate-800" : "aspect-16/10 bg-slate-50"}`}
                      onClick={() => setActiveImage(section.image || null)}
                    >
                      <img
                        src={section.image}
                        alt={section.title || `Project image ${index + 1}`}
                        className={`w-full h-full transition-transform duration-300 hover:scale-[1.02] ${project.containImages ? "object-contain" : "object-cover"}`}
                      />
                    </div>
                  )}

                  {/* Text */}
                  <div>
                    {section.title && (
                      <h2 className="font-serif text-2xl text-slate-900 mb-4">
                        {section.title}
                      </h2>
                    )}
                    {section.description && (
                      <p className="text-base font-light text-slate-600 leading-relaxed">
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-200 my-16" />

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Link
              to="/portfolio"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              ← Back to portfolio
            </Link>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-slate-400 mb-3">
                Interested?
              </h3>
              <Link to="/contact">
                <button className="w-full inline-flex rounded items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm tracking-wide px-5 py-3 transition-colors">
                  Start a conversation <span>→</span>
                </button>
              </Link>

            </div>
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
    </>
  );
}
