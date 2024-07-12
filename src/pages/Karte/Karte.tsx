import React, { useState } from "react";

const Fudbal: React.FC = () => {
  const [rezervisaneKarte, setRezervisaneKarte] = useState<number>(0);
  const [ime, setIme] = useState<string>("");
  const [prezime, setPrezime] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [podaciPopunjeni, setPodaciPopunjeni] = useState<boolean>(false);

  const handleImeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIme(e.target.value);
  };

  const handlePrezimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrezime(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const rezervisiKartu = () => {
    if (ime && prezime && email) {
      setPodaciPopunjeni(true);
      setRezervisaneKarte(rezervisaneKarte + 1);
    } else {
      alert(
        "Molimo Vas popunite sva polja (ime, prezime, email) pre rezervacije karte."
      );
    }
  };

  return (
    <div>
      <h2>AI panel</h2>
      <p>Datum: 14. jul 2024. u 18:00h</p>
      <p>Broj slobodnih karata: {100 - rezervisaneKarte}</p>
      {!podaciPopunjeni && (
        <div>
          <div>
            {" "}
            <label>
              <input
                type="text"
                placeholder="Ime"
                value={ime}
                onChange={handleImeChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="Prezime"
                value={prezime}
                onChange={handlePrezimeChange}
              />
            </label>
          </div>

          <div>
            <label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
          <hr />
          <button onClick={rezervisiKartu}>Rezerviši kartu</button>
        </div>
      )}
      {podaciPopunjeni && <p>Hvala vam, vaša karta je rezervisana!</p>}
    </div>
  );
};

export default Fudbal;