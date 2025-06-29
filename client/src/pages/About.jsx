import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FeaturesSection } from "../components/ui/features";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-[85vh] p-10">
        <div className="max-w-[60vw] text-center">
          <p className="text-5xl font-semibold mb-4">About Traitly</p>
          <p className="text-lg text-gray-500 mb-5">
            Traitly is a fun and insightful platform that analyzes Twitter
            profiles to uncover personality traits, emotional tone, and
            behavioral quirks — all powered by language AI. Whether you're
            trying to understand someone else or curious about how your tweets
            reflect you, Traitly gives you a smart and entertaining breakdown of
            your online identity.
          </p>
          <p className="text-4xl mt-5 font-semibold">Features</p>
          <FeaturesSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
