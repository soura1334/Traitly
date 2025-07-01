import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home({ username, onChangeUsername }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = username ? username.trim() : "";
    if (trimmed !== "") {
      setIsSubmitted(true);
      navigate("/result", { state: { username: trimmed } });
    }
  }

  const isDisabled = !username || username.trim() === "";

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-5">
        <div className="min-h-[70vh] min-w-[80vw] text-center">
          <p className="text-5xl font-semibold">
            Discover What Tweets Say About You
          </p>
          <p className="my-5 text-xl text-gray-500">
            Traitly analyzes your public X profile to reveal your personality
            traits and emotional tone using AI
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
            className="my-5 flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4">
              <label className="text-lg">Enter your X username:</label>
              <input
                type="text"
                className="bg-gray-500 rounded-lg relative px-2"
                value={username}
                onChange={(e) => onChangeUsername(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className={`p-3 rounded-xl relative ${
                isDisabled
                  ? "cursor-not-allowed"
                  : "hover:bg-blue-900 cursor-pointer"
              } bg-blue-500`}
              disabled={isDisabled}
            >
              Analyze My Profile
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
