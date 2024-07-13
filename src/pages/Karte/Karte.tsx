import React, { useState } from "react";

const Fudbal: React.FC = () => {
  const [rezervisaneKarte, setRezervisaneKarte] = useState<number>(0);
  const [ime, setIme] = useState<string>("");
  const [prezime, setPrezime] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [podaciPopunjeni, setPodaciPopunjeni] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;

  const rezervacije = [
    { id: 1, ime: "mihajloo", prezime: "turina", email: "miha@example.com" },
    { id: 2, ime: "sofija", prezime: "turina", email: "sof@example.com" },
    { id: 3, ime: "ana", prezime: "matic", email: "ana@example.com" },
    // Dodajte više stavki po potrebi
  ];

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rezervacije.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(rezervacije.length / itemsPerPage);

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
      
      <div>
        <h3>Rezervisane Karte</h3>
        <ul>
          {currentItems.map((rezervacija) => (
            <li key={rezervacija.id} style={{ color: "white" }}>
              {rezervacija.ime} {rezervacija.prezime} - {rezervacija.email}
            </li>
          ))}
        </ul>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={index + 1 === currentPage ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fudbal;