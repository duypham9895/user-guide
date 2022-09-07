import React from "react";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

// These two containers are siblings in the DOM
const backdropRoot = document.getElementById("backdrop-root");
const overlayRoot = document.getElementById("overlay-root");

const Backdrop = ({ onCancelModal }) => {
  return <div className={classes.backdrop} onClick={onCancelModal} />;
};

const ModalOverlay = ({ title, message, onCancelModal }) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, onCancelModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancelModal={onCancelModal} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onCancelModal={onCancelModal}
        />,
        overlayRoot
      )}
    </>
  );
};

export default ErrorModal;
