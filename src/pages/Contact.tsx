export default function ContactPage() {
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
          Tell us about your project and we'll get back to you as soon as
          possible.
        </p>

        <div className="h-px bg-neutral-200 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="flex flex-col gap-6">
            {[
              { label: "Email", value: "gustavo.grieco@gmail.com" },
              { label: "Phone", value: "+34 666 666 666" },
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
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeapl9X5n_ahL6y-E_TBp8gs82zFMWD_WXu7O9hlzetnUz_xA/viewform?embedded=true"
            width="640"
            height="961"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}
