import React from "react";

import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = ({ title, message, onCancelModal }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onCancelModal} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onCancelModal}>Cancel</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
