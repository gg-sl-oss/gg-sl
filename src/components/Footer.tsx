import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24 bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand */}

          <h2 className="font-serif text-2xl text-white mb-3">GG-SL</h2>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-xs tracking-widest uppercase mb-3">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-white/80 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-white/80 transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white/80 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white/80 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-3">
                Elsewhere
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white/80 transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-xs text-white">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
