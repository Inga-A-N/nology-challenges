import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, bandName, rating, image }) => {
  return (
    <article
      className={styles.card}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        // zIndex: "-1",
        // opacity: "0.2",
      }}
    >
      <h3 className={styles.heading}>{title}</h3>
      <h4>{bandName}</h4>
      <h5>Rating: {rating}</h5>
      <div className={styles.topRating}>{rating === "5" && "Top Rating"}</div>
    </article>
  );
};

export default Card;
