import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

const App = () => {
  const [enteredUsers, setEnteredUsers] = useState([]);

  const appendUserHandler = (user) => {
    setEnteredUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div>
      <AddUser onAppendUser={appendUserHandler} />
      <UsersList users={enteredUsers} />
    </div>
  );
};

export default App;
