import { useState, useEffect } from "react";
import UserPage from "..pages/UserPage/UserPage";
import { useParams } from "react-router-dom";
import { getUserName } from "../../services/project-services";

const UserPageLoader = () => {
  const { name } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getUserName(name)
      .then((user) => setUser(user))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [name]);
  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && user && <UserPage user={user} />}
      {!loading && error && <p>{error.message}</p>}
    </>
  );
};

export default UserPageLoader;
