import React from "react";
import { useAppContext } from "../../store/app-contex";
import classes from "./LoginForm.module.css";

function LoginForm(props) {
  const { isLoggedIb, setLoggedIn } = useAppContext();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' placeholder='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' placeholder='password' />
      <button type='submit'>submit</button>
    </form>
  );
}

export default LoginForm;
