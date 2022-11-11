import React, { useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { nanoid } from "nanoid";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAppendUser }) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState({});

  const resetUserInput = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    const username = e.target.value;
    setEnteredUsername(username);
  };

  const ageChangeHandler = (e) => {
    const age = e.target.value;
    setEnteredAge(age);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    console.log({ usernameInputRef, ageInputRef });

    if (isEmpty(enteredUsername) || isEmpty(enteredAge)) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name OR an age (non-empty values).",
      });
      return;
    }
    if (Number(enteredAge) < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    onAppendUser({
      id: nanoid(),
      name: enteredUsername,
      age: enteredAge,
    });

    resetUserInput();
  };

  const cancelModalHandler = () => {
    setError({});
  };

  return (
    <>
      {!isEmpty(error) && (
        <ErrorModal
          onCancelModal={cancelModalHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={usernameInputRef}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
