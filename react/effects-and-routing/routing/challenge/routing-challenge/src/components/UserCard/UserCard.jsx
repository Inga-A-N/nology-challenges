import React from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.scss";
import UserPage from "../../pages/UserPage/UserPage";

const UserCard = ({ user }) => {
  const { name } = user;
  //   let firstName = name.first;
  //   let lastName = name.last;
  //   let userId = id.value;
  return (
    <section className={style.card}>
      <h3>{name}</h3>
      <Link to={UserPage}>See More</Link>
    </section>
  );
};

export default UserCard;
