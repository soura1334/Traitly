import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 flex p-4 justify-around items-center ">
      <div className="flex gap-4 relative">
        <img src="/logo.png" className="h-10" />
        <NavLink to="/" className="text-4xl">
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
        <NavLink to="/login">
          {({ isActive }) => (
            <button className={`${isActive ? "bg-purple-600 hover:bg-purple-800" :"bg-blue-500 hover:bg-blue-800"} text-white p-2 rounded-lg cursor-pointer`}>
              Login
            </button>
          )}
        </NavLink>
      </ul>
    </nav>
  );
}
