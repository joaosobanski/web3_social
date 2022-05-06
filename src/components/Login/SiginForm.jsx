import React from "react";
import { signin } from "../../Controllers/User/User";
// import signin from "../../Controllers/User/User";
import classes from "./SigInForm.module.css";

export default function SiginForm({ signState }) {
  const onSignin = (event) => {
    event.preventDefault();
    signin("wasd@gmail.com", "wasd1234$#", "João", null).then((res) => {
      if (res.err) {
        alert(res.err);
      }
    });
  };
  const changeModal = () => {
    signState(false);
  };

  return (
    <form className={classes.form}>
      <h1> Create new account</h1>
      <div className={classes["field-container"]}>
        <div className={classes["input-container"]}>
          <input className={classes.email} type='text' placeholder='Email' />
        </div>
        <div className={classes.names}>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <div className={classes.password}>
          <input type='password' placeholder='New password' />
          <input type='password' placeholder='Confirm password' />
        </div>
        <div className={classes.confirmation}>
          <button className={classes.register} type='submit'>
            Register
          </button>
          <span className={classes.login} onClick={changeModal}>
            Already have an account? Login here!
          </span>
        </div>
      </div>
    </form>
  );
}
