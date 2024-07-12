import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Početna
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active">
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="active">
            Ai panel
          </NavLink>
        </li>

        <li>
          <NavLink to="/blog" className="active">
            Blog
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/contact" className="active">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;