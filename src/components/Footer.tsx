import { Link } from "react-router";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand */}
          <Link to="/" className="mb-3">
            <img src={logo} alt="GG-SL" className="h-14" />
          </Link>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-slate-400 mb-3">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-blue-600 transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-600 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
