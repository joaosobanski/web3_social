import React, { useEffect, useState } from "react";
import { useAppContext } from "../../store/app-contex";
import classes from "./Header.module.css";
import logo from "../../Assets/Images/reactLogo.svg";
import "../../App.css";
import Overlay from "../modal/Overlay";

const Header = (props) => {
  const { jwt, setJwt, isLoggedIb, setLoggedIn } = useAppContext();
  const [modalState, setModalState] = useState(false);


  useEffect(() => {
    console.log("wasd", isLoggedIb);
  }, [isLoggedIb]);

  const loginHandler = () => {
    setModalState(!modalState);
  };

  const handleFalse = () => {
    setLoggedIn(false);
    console.log("wasd");
  };

  return (
    <React.Fragment>
      {modalState && <Overlay closeHandler={loginHandler} />}
      <header className={classes.header}>
        <div className={classes["container-left"]}>
          <button className={classes.button}>
            <h1>
              <img src={logo} className="App-logo" alt="logo" />
            </h1>
          </button>

          <button className={classes.button} onClick={handleFalse}>
            <h2>News</h2>
          </button>
          <button className={classes.button}>
            <h2>Tranding</h2>
          </button>
        </div>

        <div className={classes["container-right"]}>
          <React.Fragment>
            {isLoggedIb ?
              <button className={classes.button} onClick={loginHandler}>
                <h2>true1</h2>
              </button> :
              <button className={classes.button} onClick={loginHandler}>
                <h2>false2</h2>
              </button>}
            <button className={classes.button}>
              <h2>Sign In</h2>
            </button>
          </React.Fragment>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
