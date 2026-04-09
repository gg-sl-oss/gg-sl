import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <section className="max-w-3xl mx-auto py-16 min-h-screen">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-neutral-400" />
          <span className="text-xs tracking-widest uppercase text-neutral-500 font-sans">
            Software Engineering
          </span>
          <div className="w-8 h-px bg-neutral-400" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-neutral-900 mb-6">
          Delivering high-quality software solutions that <em>scale.</em>
        </h1>
        <p className="text-base font-light leading-relaxed text-neutral-500 max-w-lg mb-10">
          From robust web applications to backend systems and seamless
          integrations, we combine modern technologies with best practices to
          build reliable, maintainable software tailored to your business needs.
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
