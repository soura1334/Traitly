import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { BackgroundBeams } from "./components/ui/background-beams";
import About from "./pages/About";


function App() {
  return (
    <div className="border-box relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <BackgroundBeams />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
