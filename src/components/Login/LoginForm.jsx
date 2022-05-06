import React from "react";
import { useAppContext } from "../../store/app-contex";
import classes from "./LoginForm.module.css";

function LoginForm({ signState }) {
  const { isLoggedIb, setLoggedIn } = useAppContext();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  const changeModal = () => {
    signState(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Login on Web3 Social</h2>
      <label htmlFor='email'></label>
      <input
        className={classes.input}
        type='text'
        id='email'
        placeholder='email'
      />
      <label htmlFor='password'></label>
      <input
        className={classes.input}
        type='password'
        id='password'
        placeholder='password'
      />
      <button className={classes.login} type='submit'>
        Login
      </button>
      <span className={classes.register} onClick={changeModal}>
        Dont have an account yet? Register here.
      </span>
    </form>
  );
}

export default LoginForm;
