import React from "react";

const Input = ({ type, hasLabel, name, error, placeholder }) => {
  const id = name + "Input";
  return (
    <div>
      {hasLabel && <label htmlFor={id}>{`${name}Input`}</label>}
      <input id={id} type={type} name={name} />
    </div>
  );
};

export default Input;
