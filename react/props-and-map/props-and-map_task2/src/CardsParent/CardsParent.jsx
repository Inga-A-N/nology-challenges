import React from "react";
import styles from "./CardsParent.module.scss";

const CardsParent = ({ children }) => {
  return <div className={styles.cardsParent}>{children}</div>;
};

export default CardsParent;
