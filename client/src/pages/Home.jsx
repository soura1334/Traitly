import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function Home({ username, onChangeUsername }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-5">
        <div className="min-h-[70vh] min-w-[80vw] text-center">
          <p className="text-5xl font-semibold">
            Discover What Tweets Say About You
          </p>
          <p className="my-5 text-xl text-gray-500">
            Traitly analyzes your public X profile to reveal your personality traits
            and emotional tone using AI
          </p>
          <p className="mb-5 text-xl text-gray-500">
            Generate personalized results like this:
          </p>
          <div className="flex justify-center mb-4 ">
            <img
              src="/demo.png"
              className="h-90 relative rounded-lg"
              alt="demo"
            />
          </div>
          <form
            className="my-5 flex justify-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>Enter your X username:</label>
            <input
              type="text"
              className="bg-gray-500 rounded-lg relative px-2"
              value={username}
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </form>
          <NavLink to="/result">
            <button className="bg-blue-500 p-5 rounded-xl hover:bg-blue-900 cursor-pointer relative">
              Analyze My Profile
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
