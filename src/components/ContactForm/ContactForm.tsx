import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Ova funkcija bi trebala poslati obrazac s podacima:", {
      name,
      email,
      message,
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="kontakt">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Ime i Prezime
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tekst
            <textarea value={message} onChange={handleMessageChange} required />
          </label>
        </div>
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );


};

export default ContactForm;