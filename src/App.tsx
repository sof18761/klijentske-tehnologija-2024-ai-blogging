
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Fudbal from "./pages/Karte/Karte";
import Kreiraj from "./pages/Kreiraj/Kreiraj";
import Blog from "./pages/Blog/Blog";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fudbal" element={<Fudbal />} />
        <Route path="/kreiraj" element={<Kreiraj />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;