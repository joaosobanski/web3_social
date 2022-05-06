import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { login } from "../../Controllers/User/User";
import { useAppContext } from "../../store/app-contex";
import classes from "./LoginForm.module.css";

function LoginForm({ closeHandler }) {
  const { setJwt, setUserName, setUserId, setLoggedIn } = useAppContext();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);
    login(email, pass).then(e => {
      if (e.err) {
        alert(e.err)
      } else {
        setJwt(e.token);
        setUserName(e.user.name);
        setUserId(e.user._id);
        setLoggedIn(true);
      }
    }).finally(() => {
      setLoading(false);
      closeHandler();
    })

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' placeholder='email' onChange={e => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' placeholder='password' onChange={e => setPass(e.target.value)} />
      <button type='submit'>submit</button>
    </form>
  );
}

export default LoginForm;
