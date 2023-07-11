import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const onFormSubmit = (value) => console.log(value);
  return (
    <main>
      <h2>Contact Page</h2>
      <ContactForm formSubmit={onFormSubmit}/>
    </main>
  );
};

export default ContactPage;
