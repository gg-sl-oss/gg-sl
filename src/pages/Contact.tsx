import { useState } from "react";
import { Link } from "react-router";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // handle submission
    setSubmitted(true);
  };

  return (
    <main>
      <section className="max-w-4xl mx-auto py-16 px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-8 h-px bg-neutral-400" />

          <span className="text-xs tracking-widest uppercase text-neutral-500">
            Get in touch
          </span>
          <div className="w-8 h-px bg-neutral-400" />
        </div>

        <h1 className="font-serif text-5xl font-normal leading-[1.1] text-neutral-900 mb-3">
          Let's build something <em>together.</em>
        </h1>
        <p className="text-base font-light leading-relaxed text-neutral-500 mb-10 max-w-sm">
          Tell us about your project and we'll get back to you as soon as possible.
        </p>

        <div className="h-px bg-neutral-200 mb-10" />

        {submitted ? (
          <div className="py-16 text-center">
            <p className="font-serif text-3xl text-neutral-900 mb-3">
              Message received.
            </p>
            <p className="text-base font-light text-neutral-500 mb-6">
              We'll be in touch as soon as possible.
            </p>
            <Link to="/">
              <button className="text-sm text-neutral-400 underline underline-offset-4 hover:text-neutral-600 transition-colors bg-transparent border-none cursor-pointer">
                Back to home
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — contact info */}
            <div className="flex flex-col gap-6">
              {[
                { label: "Email", value: "gg@gg-sl.com" },
                {
                  label: "Location",
                  value: "Barcelona, Spain\nAvailable worldwide",
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-neutral-800 whitespace-pre-line">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Name"
                  type="text"
                  placeholder="Jane Smith"
                  required
                />
                <Field label="Company" type="text" placeholder="Acme Inc." />
              </div>
              <Field
                label="Email"
                type="email"
                placeholder="jane@acme.com"
                required
              />

              <Field
                label="Approximate Budget"
                type="text"
                placeholder="€1000"
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-neutral-400">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="text-sm font-light px-3 py-2.5 border border-neutral-200 rounded-sm bg-white text-neutral-800 focus:outline-none focus:border-neutral-400 resize-y"
                />
              </div>

              <button
                type="submit"
                className="mt-1 rounded self-start inline-flex items-center gap-2 bg-neutral-900 hover:cursor-pointer hover:bg-neutral-700 text-white text-sm tracking-wide px-6 py-3 transition-colors"
              >
                Send message <span>→</span>
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}

function Field({
  label,
  type,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs tracking-widest uppercase text-neutral-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="text-sm font-light px-3 py-2.5 border border-neutral-200 rounded-sm bg-white text-neutral-800 focus:outline-none focus:border-neutral-400"
      />
    </div>
  );
}
