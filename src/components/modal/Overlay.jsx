import React from "react";
import ReactDom from "react-dom";
import classes from "./Overlay.module.css";
import LoginForm from "../Login/LoginForm";
import SiginForm from "../Login/SiginForm";

function Overlay({ closeHandler, setSignIn, onSigin }) {
  const onClose = () => {
    closeHandler();
    console.log("closing");
  };

  return ReactDom.createPortal(
    <React.Fragment>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes["modal-container"]}>
        {onSigin ? (
          <SiginForm signState={setSignIn} />
        ) : (
          <LoginForm signState={setSignIn} />
        )}
      </div>
    </React.Fragment>,
    document.getElementById("overlay")
  );
}

export default Overlay;
