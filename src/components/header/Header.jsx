import React, { useEffect, useState } from "react";
import { useAppContext } from "../../store/app-contex";
import classes from "./Header.module.css";
import logo from "../../Assets/Images/reactLogo.svg";
import "../../App.css";
import Overlay from "../modal/Overlay";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
  const { jwt, setJwt, isLoggedIb, setLoggedIn } = useAppContext();
  const [modalState, setModalState] = useState(false);
  const [sigin, setSigin] = useState(false);

  useEffect(() => {
    console.log("wasd", isLoggedIb);
  }, [isLoggedIb]);

  const handleClose = () => {
    setModalState(false);
  };

  const loginHandler = () => {
    setModalState(true);
    setSigin(false);
  };

  const siginHandler = () => {
    setSigin(true);
    setModalState(true);
  };

  return (
    <React.Fragment>
      {modalState && (
        <Overlay
          closeHandler={handleClose}
          onSigin={sigin}
          setSignIn={setSigin}
        />
      )}
      <header className={classes.header}>
        <div className={classes["container-left"]}>
          <div className='link-container'>
            <Link to='/home'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
          </div>

          <div className='link-container'>
            <NavLink activeClassName='link' to='/news'>
              News
            </NavLink>
          </div>

          <div className='link-container'>
            <NavLink activeClassName='link' to='/trending'>
              Tranding
            </NavLink>
          </div>
        </div>

        <div className={classes["container-right"]}>
          <React.Fragment>
            <button className={classes.button} onClick={loginHandler}>
              <h2>login</h2>
            </button>
            <button className={classes.button} onClick={siginHandler}>
              <h2>Sign In</h2>
            </button>
          </React.Fragment>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
