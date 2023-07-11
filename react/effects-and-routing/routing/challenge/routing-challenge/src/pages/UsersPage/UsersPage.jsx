import React from "react";
import UsersList from "../../components/UsersList/UsersList";
const UsersPage = ({ users }) => {
  return (
    <main>
      <h2>Users Page</h2>
      <UsersList users={users} />
    </main>
  );
};

export default UsersPage;
