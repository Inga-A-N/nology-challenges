import React from 'react';
import styles from './Card.module.scss';


const Card = ({ title, bandName, rating}) => {
  
  return (
    
    <article className={styles.card}>
      
      <h3 className={styles.heading}>{title}</h3>
      <h4>{bandName}</h4>
      <h5>{rating}</h5>
      
      
    </article>
  );
};

export default Card;
