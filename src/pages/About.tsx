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
            <div className="w-8 h-px bg-neutral-400" />
            <span className="text-xs tracking-widest uppercase text-neutral-500">
              About us
            </span>
            <div className="w-8 h-px bg-neutral-400" />
          </div>

          {/* Hero */}
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-neutral-900 mb-6 max-w-3xl">
            Engineers who care about what they <em>build.</em>
          </h1>
          <p className="text-base font-light leading-relaxed text-neutral-500 mb-4">
            GG-SL is a two-person studio based in Barcelona. We partner with
            founders and product teams who have a clear vision but need
            engineering muscle to make it real.
          </p>
          <p className="text-base font-light leading-relaxed text-neutral-500">
            No project managers, no handoff chains. You talk to the people
            writing the code. That's how we ship faster, catch problems earlier,
            and build things we're proud to put our name on.
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
                  step: "Scope it",
                  desc: "We dig into what you actually need, not what sounds good on a brief. By the end of week one, we both know exactly what we're building and why.",
                },
                {
                  step: "Ship early",
                  desc: "Working software in your hands within days, not months. Short cycles, real deployments, course corrections while they're still cheap.",
                },
                {
                  step: "Stay close",
                  desc: "Shared repos, async updates, quick calls when needed. We work like part of your team, not a vendor you check in with on Fridays.",
                },
                {
                  step: "Hand it over",
                  desc: "Clean code you can maintain, docs your next hire can follow, and a codebase that won't make future-you cringe.",
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

          {/* Security & Web3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-neutral-400" />
                <span className="text-xs tracking-widest uppercase text-neutral-500">
                  Security & Web3
                </span>
                <div className="w-8 h-px bg-neutral-400" />
              </div>
              <h2 className="font-serif text-3xl font-normal leading-snug text-neutral-900 max-w-xs">
                Blockchain security & Web3.
              </h2>
            </div>
            <div>
              <p className="text-sm font-light leading-relaxed text-neutral-500 mb-4">
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
              <p className="text-sm font-light leading-relaxed text-neutral-500 mb-6">
                That work lives outside GG-SL. If you're looking for security
                audits, fuzzing, or Web3 consulting, head to his personal site.
              </p>
              <a
                href="https://gustavo-grieco.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-wide px-6 py-3 border border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900 transition-colors"
              >
                gustavo-grieco.github.io <span>↗</span>
              </a>
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
                We take on a handful of projects at a time. If the timing
                works, we'd love to hear what you're building.
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
