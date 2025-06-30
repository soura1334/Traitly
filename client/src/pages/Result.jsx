import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  PolarGrid,
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "🧠 Logic",
    A: 58,
    fullMark: 100,
  },
  {
    subject: "😂 Humor",
    A: 92,
    fullMark: 100,
  },
  {
    subject: "🔥 Spice",
    A: 64,
    fullMark: 100,
  },
  {
    subject: "📢 Loudness",
    A: 76,
    fullMark: 100,
  },
  {
    subject: "💭 Depth",
    A: 34,
    fullMark: 100,
  },
  {
    subject: "🌈 Positivity",
    A: 70,
    fullMark: 100,
  },
];

export default function Result() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-6 min-h-[85vh] bg-zinc-900">
        <div className="w-full max-w-2xl bg-zinc-800 rounded-2xl p-8 text-white flex flex-col items-center gap-6">
          <h1 className="text-4xl font-semibold text-center">Results</h1>
          <ResultComp />
          <div>
            <p className="text-lg text-center mb-3">Share your Results:</p>
            <div className="flex justify-center gap-4 relative">
              <button className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-900 cursor-pointer">
                Save
              </button>
              <button className="bg-black px-6 py-2 rounded-xl hover:bg-gray-900 cursor-pointer">
                X
              </button>
              <button className="bg-green-500 px-6 py-2 rounded-xl hover:bg-green-900 cursor-pointer">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ResultComp() {
  return (
    <div className="w-full bg-white relative rounded-xl">
      <div className="h-[350px] p-4">
        <Chart />
      </div>
      <div className="text-black text-center px-4 py-3 border-t border-gray-300">
        <p className="text-xl font-semibold">🐸 Meme Alchemist</p>
        <p className="text-sm text-gray-700">
          Regularly turns random topics into peak meme content
        </p>
      </div>
    </div>
  );
}

function Chart() {
  return (
    <ResponsiveContainer>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}
