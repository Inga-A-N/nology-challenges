import React from "react";
import style from "./UsersList.module.scss";
import UserCard from "../UserCard/UserCard";

const UsersList = () => {
  return (
    <section>
      <h3>Users List</h3>
      <UserCard />
    </section>
  );
};

export default UsersList;
