import style from './Card.module.scss';
// import image from

const Card = ({planet}) => {
  const {planetName, image, distanceFromSun, diameterInKm, numberOfMoons, lengthOfYear} = planet
  
  return (
    <article className={`${style.card} ${numberOfMoons === 0? style.grey__background: ''}`}>
      <img src={image} />
      <h2>{planetName}</h2>
      <p>{diameterInKm}</p>
      <p>{distanceFromSun}</p>
      <p>{numberOfMoons}</p>
      <p>{lengthOfYear}</p>
      
      
    </article>
  );
};

export default Card;