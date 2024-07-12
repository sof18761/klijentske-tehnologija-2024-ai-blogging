import React from "react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>AI blog</h1>
      <p>
        Pregledajte aktuelne blogove ili kreirajte nove.
      </p>
      <div>
        <h2>Aktuelni blogovi koje mozete citati</h2>
        <ul>
          <li>
            <Link to="/fudbal">Ai panel1</Link> - 14. jul 2024. u 18:00h
          </li>
          <li>
            <Link to="/kosarka">Ai panel2</Link> - 30. jul 2027. u
            15:00h
          </li>
        </ul>
      </div>
      <div>
        <h2>Kreirajte novi blog</h2>
        <p>
          Da biste kreirali novi blog, molimo vas kliknite na dugme ispod:
        </p>
        <Link to="/kreiraj">Kreiraj</Link>
      </div>
    </div>
  );
};

export default Home;