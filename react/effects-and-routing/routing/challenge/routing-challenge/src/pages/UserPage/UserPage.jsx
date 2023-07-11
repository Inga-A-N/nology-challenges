import React from "react";

const UserPage = ({ user }) => {
  const { gender, name, phone, email } = user;

  return (
    <article>
      <ul>
        {name.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <p>{gender}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </article>
  );
};

export default UserPage;
