import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 flex p-2 justify-between lg:p-4 lg:justify-around items-center ">
      <div className="flex gap-4 relative items-center">
        <img src="/logo.png" className="h-10" />
        <NavLink to="/" className="text-xl lg:text-4xl">
          Traitly
        </NavLink>
      </div>
      <ul className="flex items-center justify-center gap-8 relative">
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? "text-purple-600" : ""}>Home</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "text-purple-600" : ""}>Contact</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            {({ isActive }) => (
              <span className={isActive ? "text-purple-600" : ""}>About</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
