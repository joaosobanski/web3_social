import React from "react";
import ReactDom from "react-dom";
import classes from "./Overlay.module.css";
import LoginForm from "../Login/LoginForm";

const Backdrop = ({ onClose, children }) => {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      {children}
    </div>
  );
};
const Modal = () => {
  return (
    <div className={classes["modal-container"]}>
      <LoginForm />
    </div>
  );
};

function Overlay(props) {
  return ReactDom.createPortal(
    <div className={classes["page-container"]}>
      <Backdrop onClose={props.closeHandler} />
      <Modal />
    </div>,
    document.getElementById("overlay")
  );
}

export default Overlay;
