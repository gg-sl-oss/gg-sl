import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <section className="max-w-3xl md:mx-auto mx-4 py-16 min-h-screen">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-neutral-400" />
          <span className="text-xs tracking-widest uppercase text-neutral-500 font-sans">
            Software Studio · Barcelona
          </span>
          <div className="w-8 h-px bg-neutral-400" />
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1] text-neutral-900 mb-6">
          We turn ambitious ideas into software people <em>actually use.</em>
        </h1>
        <p className="text-base font-light leading-relaxed text-neutral-500 max-w-lg mb-10">
          Sustainability platforms, AI-powered planners, games built with
          fuzzing tools, we like projects that are a little different. Small
          team, no middlemen, sharp engineering.
        </p>
        <Link to="/contact">
          <button className="inline-flex items-center rounded gap-2 bg-neutral-900 text-white text-sm tracking-wide px-6 py-3 hover:bg-neutral-700 transition-colors hover:cursor-pointer">
            Request a quote <span>→</span>
          </button>
        </Link>
        <Link to="/portfolio">
          <button className="inline-flex items-center gap-2 text-sm tracking-wide px-6 py-3 hover:text-neutral-900 transition-colors hover:cursor-pointer">
            See our work <span>→</span>
          </button>
        </Link>
        <div className="mt-12 h-px bg-neutral-200 w-full" />
      </section>
    </main>
  );
};

export default Home;
