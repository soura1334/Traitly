import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BackgroundBeams } from "./components/ui/background-beams";
import About from "./pages/About";
import Result from "./pages/Result";
import { useState } from "react";


function App() {
  const [username, setUsername] = useState(null);

  function handleChangeUsername(val){
    setUsername(val);
  }

  return (
    <div className="border-box relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <BackgroundBeams />
      <Router>
        <Routes>
          <Route path="/" element={<Home username={username} onChangeUsername = {handleChangeUsername} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
