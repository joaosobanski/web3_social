import React, { useEffect } from "react";
import { useAppContext } from "../../store/app-contex";
import Header from "../header/Header";
import classes from "./LoginPage.module.css";

export default function LoginPage() {
  const { userName } = useAppContext();

  useEffect(() => {

  }, [userName]);

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.background}>
        {userName}
      </div>
    </div>
  );
}
