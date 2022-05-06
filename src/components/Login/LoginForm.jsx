import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { login } from "../../Controllers/User/User";
import { useAppContext } from "../../store/app-contex";
import classes from "./LoginForm.module.css";

function LoginForm({ closeHandler, signState }) {
  const { setJwt, setUserName, setUserId, setLoggedIn } = useAppContext();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);
    login(email, pass)
      .then((e) => {
        if (e.err) {
          alert(e.err);
        } else {
          setJwt(e.token);
          setUserName(e.user.name);
          setUserId(e.user._id);
          setLoggedIn(true);
        }
      })
      .finally(() => {
        setLoading(false);
        closeHandler();
      });
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'></label>
      <input
        className={classes.input}
        type='password'
        id='password'
        placeholder='password'
        onChange={(e) => setPass(e.target.value)}
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
