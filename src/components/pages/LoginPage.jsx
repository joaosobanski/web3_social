import React from "react";
import Header from "../header/Header";
import classes from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.background}></div>
    </div>
  );
}
