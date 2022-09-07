import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
