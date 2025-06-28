import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 flex p-4 justify-around items-center ">
      <div className="flex gap-4 relative">
          <img src="/logo.png" className="h-10" />
          <NavLink to="/" className='text-4xl'>Traitly</NavLink>
      </div>
      <ul className="flex items-center justify-center gap-8 text-purple-600 relative">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
            Contact
        </li>
        <li>
            About
        </li>
        <NavLink to='/login'>
            <button className="bg-purple-600 hover:bg-purple-800 text-white p-2 rounded-lg cursor-pointer">Login</button>
        </NavLink>
      </ul>
    </nav>
  );
}
