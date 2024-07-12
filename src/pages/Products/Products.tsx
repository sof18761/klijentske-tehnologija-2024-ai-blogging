import React from "react";
import { Link } from "react-router-dom";
import "./Product.css"

const Products: React.FC = () => {
  return (
    <ul>
      <Link to="/fudbal">
        <h1>Fudbal</h1>
      </Link>
      <Link to="/kosarka">
        <h1>Kosarka</h1>
      </Link>
    </ul>
  );
};

export default Products;