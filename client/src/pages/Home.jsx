import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[85vh]">
        <div className="min-h-[70vh] min-w-[80vw] text-center">
          <p className="text-5xl font-semibold">Discover What Tweets Say About You</p>
          <p className="my-10 text-xl text-gray-500">Traitly analyzes your X profile to reveal your personality traits and emotional tone using AI</p>
          <NavLink to='/login'>
          <button className="bg-blue-500 p-5 rounded-xl hover:bg-blue-900 cursor-pointer relative">Analyze My Profile</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
