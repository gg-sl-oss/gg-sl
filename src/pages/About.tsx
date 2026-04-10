import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const services = [
  {
    num: "01",
    title: "Web Applications",
    desc: "Full-stack web apps built with modern frameworks — fast, accessible, and built to last.",
  },
  {
    num: "02",
    title: "Backend Systems",
    desc: "Scalable APIs, microservices, and data pipelines engineered for reliability under load.",
  },
  {
    num: "03",
    title: "Integrations",
    desc: "Third-party APIs, payment systems, CRMs — we connect your tools so they work as one.",
  },
  {
    num: "04",
    title: "Technical Consulting",
    desc: "Architecture reviews, tech stack decisions, and code audits for teams that want to move faster.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About GG SL – Web Development Studio</title>
        <meta
          name="description"
          content="GG SL is a web development studio specializing in scalable applications, AI integrations, and modern software engineering."
        />
      </Helmet>

      <main>
        <section className="max-w-4xl mx-auto py-16 px-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-neutral-400" />
            <span className="text-xs tracking-widest uppercase text-neutral-500">
              About us
            </span>
            <div className="w-8 h-px bg-neutral-400" />
          </div>

          {/* Hero */}
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-neutral-900 mb-6 max-w-3xl">
            A small studio that ships <em>exceptional</em> software.
          </h1>
          <p className="text-base font-light leading-relaxed text-neutral-500 mb-4">
            We're an independent software engineering studio working with
            startups and established businesses to design, build, and scale
            their most important products.
          </p>
          <p className="text-base font-light leading-relaxed text-neutral-500">
            No bloated teams, no account managers in the middle. You work
            directly with the engineers building your product — which means
            faster decisions, tighter feedback loops, and software that actually
            reflects your needs.
          </p>

          <div className="h-px bg-neutral-200 my-12" />

          {/* What we do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-neutral-400" />
                <span className="text-xs tracking-widest uppercase text-neutral-500">
                  What we do
                </span>
                <div className="w-8 h-px bg-neutral-400" />
              </div>
              <h2 className="font-serif text-3xl font-normal leading-snug text-neutral-900 max-w-xs">
                End-to-end engineering, from idea to production.
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-neutral-200">
              {services.map(({ num, title, desc }) => (
                <div key={num} className="py-5 flex gap-5">
                  <span className="text-xs text-neutral-300 font-mono mt-0.5 shrink-0">
                    {num}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-neutral-900 mb-1">
                      {title}
                    </p>
                    <p className="text-sm font-light leading-relaxed text-neutral-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-neutral-200 my-12" />

          {/* How we work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-neutral-400" />
                <span className="text-xs tracking-widest uppercase text-neutral-500">
                  How we work
                </span>
                <div className="w-8 h-px bg-neutral-400" />
              </div>
              <h2 className="font-serif text-3xl font-normal leading-snug text-neutral-900 mb-6 max-w-xs">
                Embedded in your team, not just adjacent to it.
              </h2>
            </div>

            <div className="flex flex-col gap-6 pt-1">
              {[
                {
                  step: "Discovery",
                  desc: "We audit your existing systems, understand your goals, and agree on a clear scope before any work begins.",
                },
                {
                  step: "Build",
                  desc: "Iterative delivery in short cycles. You see working software early and often, not at the end of a long runway.",
                },
                {
                  step: "Review",
                  desc: "Regular syncs, async updates, and documentation that keeps your whole team informed.",
                },
                {
                  step: "Handoff",
                  desc: "We leave clean code, solid docs, and a team that's confident owning what we built together.",
                },
              ].map(({ step, desc }, i) => (
                <div key={step} className="flex gap-5 items-start">
                  <div className="shrink-0 w-7 h-7 border border-neutral-300 flex items-center justify-center">
                    <span className="text-xs text-neutral-400 font-mono">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900 mb-1">
                      {step}
                    </p>
                    <p className="text-sm font-light leading-relaxed text-neutral-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-neutral-200 my-12" />

          {/* CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl font-normal text-neutral-900 mb-2">
                Ready to start a project?
              </h2>
              <p className="text-base font-light text-neutral-500">
                We take on a limited number of clients at a time to ensure
                quality.
              </p>
            </div>
            <Link to="/contact">
              <button className="shrink-0 inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-700 text-white text-sm tracking-wide px-6 py-3 transition-colors">
                Get in touch <span>→</span>
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
