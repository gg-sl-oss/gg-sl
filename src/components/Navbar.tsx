import { Link } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-50 to-blue-100 border-b border-slate-200 p-8 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="GG-SL" className="h-20" />
      </Link>
      <ul className="md:flex gap-16 max-w-2xl mx-auto font-semibold">
        <li className="text-slate-600 hover:text-blue-600 transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="text-slate-600 hover:text-blue-600 transition-colors">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="text-slate-600 hover:text-blue-600 transition-colors">
          <Link to="/about">About</Link>
        </li>
        <li className="text-slate-600 hover:text-blue-600 transition-colors">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
