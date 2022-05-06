import React from "react";
import { useAppContext } from "../../store/app-contex";
import classes from "./Zpages.module.css";

export default function News() {
  const { userName } = useAppContext();

  return (
    <div className={classes.container}>
      <h1>News</h1>
      <p>
        {userName}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        exercitationem beatae magni illum laboriosam sit perferendis aspernatur
        consequatur numquam, at voluptatibus enim ipsam blanditiis laudantium
        ducimus qui accusamus recusandae corporis.
      </p>
    </div>
  );
}
