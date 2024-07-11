import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to="/products" style={{ textDecoration: "none" }}>
      <button
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: hovered ? "#213547" : "#000000",
          color: hovered ? "#646cff" : "#fff",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          outline: "none",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Pogledaj turnire
      </button>
    </Link>
  );
};

export default ProductButton;