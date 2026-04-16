import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const services = [
  {
    num: "01",
    title: "Web Applications",
    desc: "React, Next.js, TypeScript; the full stack. We've shipped donation platforms, vendor marketplaces, and AI-driven planning tools.",
  },
  {
    num: "02",
    title: "Backend & Infrastructure",
    desc: "APIs, databases, and cloud infrastructure on AWS. We design systems that handle real traffic, not just demo loads.",
  },
  {
    num: "03",
    title: "Integrations & Payments",
    desc: "Stripe checkout flows, third-party APIs, data pipelines. We make your tools talk to each other without duct tape.",
  },
  {
    num: "04",
    title: "Unusual Problems",
    desc: "Murder mystery generators, impact calculators, AI wedding planners; if your project doesn't fit a template, we're interested.",
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
            <div className="w-8 h-px bg-slate-400" />
            <span className="text-xs tracking-widest uppercase text-slate-500">
              About us
            </span>
            <div className="w-8 h-px bg-slate-400" />
          </div>

          {/* Hero */}
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-slate-900 mb-6 max-w-3xl">
            Engineers who care about what they <em>build.</em>
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 mb-4">
            GG-SL is a software studio based in Barcelona. We partner with
            founders and product teams who have a clear vision but need
            engineering muscle to make it real.
          </p>
          <p className="text-base font-light leading-relaxed text-slate-500">
            No project managers, no handoff chains. You talk to the people
            writing the code. That's how we ship faster, catch problems earlier,
            and build things we're proud to put our name on.
          </p>

          <div className="h-px bg-slate-200 my-12" />

          {/* What we do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-slate-400" />
                <span className="text-xs tracking-widest uppercase text-slate-500">
                  What we do
                </span>
                <div className="w-8 h-px bg-slate-400" />
              </div>
              <h2 className="font-serif text-3xl font-normal leading-snug text-slate-900 max-w-xs">
                End-to-end engineering, from idea to production.
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-slate-200">
              {services.map(({ num, title, desc }) => (
                <div key={num} className="py-5 flex gap-5">
                  <span className="text-xs text-slate-300 font-mono mt-0.5 shrink-0">
                    {num}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-1">
                      {title}
                    </p>
                    <p className="text-sm font-light leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-slate-200 my-12" />

          {/* Security & Web3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-slate-400" />
                <span className="text-xs tracking-widest uppercase text-slate-500">
                  Security & Web3
                </span>
                <div className="w-8 h-px bg-slate-400" />
              </div>
              <h2 className="font-serif text-3xl font-normal leading-snug text-slate-900 max-w-xs">
                Blockchain security & Web3.
              </h2>
            </div>
            <div>
              <p className="text-sm font-light leading-relaxed text-slate-500 mb-4">
                Our founder Gustavo Grieco has nearly a decade of experience
                in blockchain security; smart contract audits, fuzzing tooling,
                and vulnerability research. He built{" "}
                <a
                  href="https://github.com/crytic/echidna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Echidna
                </a>{" "}
                and spent eight years at Trail of Bits.
              </p>
              <p className="text-sm font-light leading-relaxed text-slate-500 mb-6">
                That work lives outside GG-SL. If you're looking for security
                audits, fuzzing, or Web3 consulting, head to his personal site.
              </p>
              <a
                href="https://gustavo-grieco.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-wide px-6 py-3 border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-900 transition-colors"
              >
                gustavo-grieco.github.io <span>↗</span>
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-200 my-12" />

          {/* CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl font-normal text-slate-900 mb-2">
                Ready to start a project?
              </h2>
              <p className="text-base font-light text-slate-500">
                We take on a handful of projects at a time. If the timing
                works, we'd love to hear what you're building.
              </p>
            </div>
            <Link to="/contact">
              <button className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm tracking-wide px-6 py-3 transition-colors">
                Get in touch <span>→</span>
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
