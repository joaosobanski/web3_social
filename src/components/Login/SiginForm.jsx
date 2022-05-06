import React from "react";
import classes from "./LoginForm.module.css";

export default function SiginForm() {
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
      <button type='submit'>Submit</button>
      <button>Cancel</button>
    </form>
  );
}
