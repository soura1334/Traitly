import { useLocation } from "react-router-dom";
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
import { useEffect, useRef, useState } from "react";
import download from "downloadjs";
import {toPng} from "html-to-image";

export default function Result() {
  const location = useLocation();
  const username = location.state?.username;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const resRef = useRef();

  useEffect(() => {
    async function getData() {
      if (!username) {
        setError("No username provided.");
        return;
      }

      try {
        setIsLoading(true);
        setError(""); 

        const res = await fetch(`https://traitly.onrender.com/analyze/${username}`, {
          method: "GET",
          mode: "cors",
        });

        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const text = await res.text();

        if (!text || text.trim() === "") {
          throw new Error("Empty response from server.");
        }

        let json;
        try {
          json = JSON.parse(text);
        } catch (parseError) {
          throw new Error("Something went wrong");
        }
        if (!json.subtraits || !json.dominant_trait) {
          throw new Error("Something went wrong");
        }

        setData(json);
      } catch (err) {
        setError(err.message || "Something went wrong.");
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [username]);

  const handleSave = async () => {
    if (!resRef.current) return;
    try {
      const dataUrl = await toPng(resRef.current);
      download(dataUrl, `traitly_${username}_result.png`);
    } catch (err) {
      console.error("Error generating image", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-6 min-h-[85vh]">
        <div className="w-full max-w-2xl bg-zinc-800 rounded-2xl p-8 text-white flex flex-col items-center gap-6">
          <h1 className="text-4xl font-semibold text-center">Results</h1>

          {isLoading ? (
            <div className="flex flex-col justify-center h-full">
              <img src="/loader.svg" alt="Loading..." />
            </div>
          ) : error ? (
            <p className="text-red-500 text-xl text-center flex flex-col justify-center h-full">{error}</p>
          ) : data && data.subtraits && data.dominant_trait ? (
            <>
              <ResultComp data={data} username={username} resRef={resRef} />
              <div>
                <p className="text-lg text-center mb-3">Share your Results:</p>
                <div className="flex justify-center gap-4 relative">
                  <button className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-900 cursor-pointer" onClick={handleSave}>
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
            </>
          ) : (
            <p className="text-red-500 text-xl flex flex-col justify-center h-full">No valid data found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

function ResultComp({ data, username, resRef }) {
  const radarData = data?.subtraits
    ? Object.entries(data.subtraits).map(([trait, score]) => ({
        trait,
        score,
      }))
    : [];

  return (
    <div className="w-full bg-white relative rounded-xl" ref={resRef}>
      <div className="w-full max-w-sm mx-auto aspect-square ">
        <Chart radarData={radarData} />
      </div>
      <div className="text-black text-center px-4 py-3 border-t border-gray-300">
        <p>@{username}</p>
        <p className="text-lg lg:text-xl font-semibold">{data?.dominant_trait?.title}</p>
        <p className="text-xs lg:text-sm text-gray-700">
          {data?.dominant_trait?.description}
        </p>
      </div>
    </div>
  );
}


function Chart({ radarData }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={radarData}
        margin={{right: 60, left:30 }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="trait"
          tick={{className:"text-xs lg:text-sm"}}
          tickLine={false}
        />
        <PolarRadiusAxis angle={30} domain={[0, 100]}  />
        <Radar
          name="Trait Score"
          dataKey="score"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}
