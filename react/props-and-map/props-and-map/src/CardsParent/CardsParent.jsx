import React from 'react';
import styles from './CardsParent.module.scss';

import Card from "../Card/Card"

const CardsParent = () => {
  
  return (
    
    <div className={styles.cardsParent}>
      <Card title = '7th Symphony' bandName= 'Apocalyptica' rating = '5' />
      <Card title = 'Cell-0' bandName= 'Apocalyptica' rating = '5' />
      <Card title = 'Shadowmaker' bandName= 'Apocalyptica' rating = '5'/>
      <Card title = 'Plays Metallica by Four Cellos' bandName= 'Apocalyptica' rating = '5'/>
    </div>
  );
};

export default CardsParent;
