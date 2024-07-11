import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Kontakt</h1>
      <p>Ako imate nekih pitanja javite nam se putem kontakt forme ispod</p>
      <ContactForm />
    </div>
  );
};

export default Contact;