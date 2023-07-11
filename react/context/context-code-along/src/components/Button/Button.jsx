import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Button = ({ children, ...rest }) => {
  const darkMode = useContext(DarkModeContext);
  return <button {...rest}>{children}</button>;
};

export default Button;
