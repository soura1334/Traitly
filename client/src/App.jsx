import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  return (
    <div className="border-box relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <BackgroundBeams />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
