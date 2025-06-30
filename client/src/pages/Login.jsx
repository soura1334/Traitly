import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[85vh]">
        <form className="min-h-[70vh] min-w-[30vw] max-w-[30vw] bg-zinc-800 rounded-md px-10 flex flex-col justify-evenly" onSubmit={(e)=> e.preventDefault()}>
          <p className="text-center text-3xl">Login</p>
          <div className="relative">
            <label className="text-lg block mb-2">Username</label>
            <input type="text" className="bg-gray-500 w-full rounded-sm h-10" />
          </div>
          <div className="relative">
            <label className="text-lg block mb-2">Password</label>
            <input type="password" className="bg-gray-500 w-full rounded-sm h-10" ></input>
          </div>
          <div className="flex justify-between">
            <button className="cursor-pointer relative hover:text-purple-500">Forgot Password?</button>
            <NavLink to='/register'><button className="cursor-pointer relative hover:text-purple-500">Sign Up</button></NavLink>
          </div>
          <div className="flex justify-center ">
            <button className="bg-blue-500 p-3 px-5 rounded-xl relative cursor-pointer hover:bg-blue-900">Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
