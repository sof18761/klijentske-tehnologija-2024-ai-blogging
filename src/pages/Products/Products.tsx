import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

interface Product {
  id: number;
  name: string;
  category: string;
  link: string;
}

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  const products: Product[] = [
    { id: 1, name: "Ai panel1", category: "fudbal", link: "/fudbal" },
    { id: 2, name: "Ai panel2", category: "kosarka", link: "/kosarka" },
    
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter) ||
    product.category.toLowerCase().includes(filter)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter products"
        onChange={handleFilterChange}
        style={{ marginBottom: "20px", padding: "5px" }}
      />
      <ul>
        {filteredProducts.map((product) => (
          <Link to={product.link} key={product.id}>
            <h1>{product.name}</h1>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Products;