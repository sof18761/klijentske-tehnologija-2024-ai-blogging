import React from "react";
import { Link } from "react-router-dom";
import "./Product.css"

const Products: React.FC = () => {
  return (
    <ul>
      <Link to="/fudbal">
        <h1>Ai panel1</h1>
      </Link>
      <Link to="/kosarka">
        <h1>Ai panel2</h1>
      </Link>
    </ul>
  );
};

export default Products;