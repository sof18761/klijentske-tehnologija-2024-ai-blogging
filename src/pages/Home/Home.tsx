import React from "react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>SPORTSTER</h1>
      <p>
        Pregledajte aktuelne sportske događaje i turnire ili kreirajte nove.
      </p>
      <div>
        <h2>Aktuelni događaji i turniri</h2>
        <ul>
          <li>
            <Link to="/fudbal">Fudbalski turnir</Link> - 14. jun 2024. u 21:00h
          </li>
          <li>
            <Link to="/kosarka">Košarkaški turnir</Link> - 30. jun 2027. u
            15:00h
          </li>
        </ul>
      </div>
      <div>
        <h2>Kreirajte novi događaj</h2>
        <p>
          Da biste kreirali novi događaj, molimo vas kliknite na dugme ispod:
        </p>
        <Link to="/kreiraj">Kreiraj</Link>
      </div>
    </div>
  );
};

export default Home;