import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
