import React, { useContext } from "react";
import Heading from "../../components/Heading/Heading";
import Form from "../../components/Form/Form";
import style from "./ContactPage.module.scss";
import { DarkModeContext } from "../../context/DarkModeContext";

const ContactPage = () => {
  const onSubmit = (value) => {
    console.log(value);
    const darkMode = useContext(DarkModeContext);
  };
  return (
    <main className={darkMode ? style.main_dark : style.main_light}>
      <Heading>Contact Page</Heading>
      <Form>
        <Input type="text" name="name" hasLabel></Input>
        <Input type="email" name="email" hasLabel></Input>
        <Input type="password" name="password" hasLabel></Input>
        <Button>Submit</Button>
      </Form>
    </main>
  );
};

export default ContactPage;
