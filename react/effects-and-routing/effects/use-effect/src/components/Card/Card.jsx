const Card = ([name, height, birthYear, eyeColour]) => {
  return (
    <div>
      <h2>{name}</h2>;<p>{height}</p>
      <p>{birthYear}</p>
      <p>{eyeColour}</p>
    </div>
  );
};

export default Card;
