import React from 'react';
import styles from './Card.module.scss';


const Card = ({ heading, content, subtitle, hasButton }) => {
  
  return (
    
    <article className={styles.card}>
      <img src={"./Spencer-Lake-Australia.jpg"} />
      <h3 className={styles.heading}>{heading}</h3>
      <h4>{subtitle}</h4>
      <p>{content}</p>
      
      {hasButton ? <button>Click me</button> : <span>No Button</span>}
    </article>
  );
};

export default Card;
