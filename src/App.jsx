import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <div id="container">
        <h1></h1>

        <div id="navbar">
          <Link>Blue</Link>
          <Link>Red</Link>
          <Link>Home</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
