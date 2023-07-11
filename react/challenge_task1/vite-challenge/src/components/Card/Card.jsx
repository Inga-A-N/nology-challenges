import React from "react";
import styles from "./Card.module.scss";
import pic from "./Spencer-Lake-Australia.jpg";

const Card = ({ heading, content, subtitle, hasButton }) => {
  return (
    <article className={styles.card}>
      <img src={pic} alt="Picture" />
      <h3>{heading}</h3>
      <h4>{subtitle}</h4>
      <p>{content}</p>

      {hasButton ? <button>Click me</button> : <span>No Button</span>}
    </article>
  );
};

export default Card;
