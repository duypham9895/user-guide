import React from "react";

import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users?.map(({ id, name, age }) => (
          <li key={id}>
            {name} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
