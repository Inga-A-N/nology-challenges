export const getAllUsers = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const users = await response.json();
  return users;
};

export const getUserName = async (userName) => {
  const response = await fetch(`https://randomuser.me/api/?inc=${userName}`);
  if (!response.ok) {
    throw new Error(`Project with user name : ${userName} does not exist`);
  }
  const user = await response.json();
  return user;
};
