import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import './App.css';


function App() {
  return <Router>
  <nav>
    <Link to="/about" className="Link">About</Link>
    <Link to="/" className="Link">Home</Link>
    <Link to="/contact" className="Link">Contact</Link>
  </nav>

  <Routes>
    <Route path="/about" element={< About/>} />
    <Route path="/" element={ <Home/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  </Router>
}

export default App;
