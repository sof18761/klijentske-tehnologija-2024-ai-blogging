import React, { useState } from "react";


const Kreiraj: React.FC = () => {
  const [sport, setSport] = useState<string>("");
  const [datum, setDatum] = useState<string>("");
  const [vreme, setVreme] = useState<string>("");
  const [lokacija, setLokacija] = useState<string>("");
  const [kreiranTurnir, setKreiranTurnir] = useState<boolean>(false);

  const handleSportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSport(e.target.value);
  };

  const handleDatumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatum(e.target.value);
  };

  const handleVremeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVreme(e.target.value);
  };

  const handleLokacijaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLokacija(e.target.value);
  };

  const handleKreirajClick = () => {
    if (sport && datum && vreme && lokacija) {
      console.log("Kreirano:", { sport, datum, vreme, lokacija });
      setKreiranTurnir(true);
    } else {
      alert("Molimo Vas popunite sva polja pre kreiranja a.");
    }
  };

  return (
    <div>
      <h2>Napisi utisak o panelu</h2>
      <div>
        <label htmlFor="sport">Utisak:</label>
        <input id="sport" data-testid="sport" type="text" value={sport} onChange={handleSportChange} />
      </div>
      <div>
        <label htmlFor="datum">Datum:</label>
        <input id="datum" type="date" value={datum} onChange={handleDatumChange} />
      </div>
      <div>
        <label htmlFor="vreme">Vreme:</label>
        <input id="vreme" type="time" value={vreme} onChange={handleVremeChange} />
      </div>
      <div>
        <label htmlFor="lokacija">Lokacija:</label>
        <input id="lokacija" type="text" value={lokacija} onChange={handleLokacijaChange} />
      </div>
      <button onClick={handleKreirajClick}>Kreiraj</button>
      {kreiranTurnir && <p>Uspešno ste kreirali blog!</p>}
    </div>
  );
};

export default Kreiraj;