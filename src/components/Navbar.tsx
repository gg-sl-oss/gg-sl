import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-8 flex justify-between">
      <h1 className="text-2xl font-bold text-white">GG-SL</h1>
      <ul className="md:flex gap-16 max-w-2xl mx-auto font-semibold">
        <li className="text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="text-white">
          <Link to="/about">About</Link>
        </li>
        <li className="text-white">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
