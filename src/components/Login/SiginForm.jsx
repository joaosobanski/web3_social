import React from "react";
import { signin } from "../../Controllers/User/User";
// import signin from "../../Controllers/User/User";
import classes from "./LoginForm.module.css";

export default function SiginForm() {
  const onSignin = (event) => {
    event.preventDefault();
    signin("wasd@gmail.com", "wasd1234$#", "João", null).then((res) => {
      if (res.err) {
        alert(res.err);
      }
    });
  };

  return (
    <form className={classes.form}>
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' placeholder='email' />
      <label htmlFor='user-Name'>User Name</label>
      <input type='text' id='user-Name' placeholder='email' />

      <label htmlFor='password'>Password</label>
      <input type='password' id='password' placeholder='Password' />

      <label htmlFor='password-confir'>Confirm password</label>
      <input
        type='password'
        id='password-confir'
        placeholder='Confirm your password'
      />
      <button type='submit' onClick={onSignin}>
        Submit
      </button>
      <button onClick={onSignin}>Cancel</button>
    </form>
  );
}
