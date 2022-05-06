import React from "react";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <nav className={classes.panel}> Friends</nav>
      <main className={classes.feed}>
        <header className={classes["feed-header"]}>
          <h2>Feed</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam
          accusantium recusandae quam vero animi nulla delectus ex deleniti?
          Maxime velit ab nostrum itaque dolores accusantium quia commodi
          temporibus? Excepturi.
        </p>
      </main>
      <section className={classes.trending}> trending</section>
    </div>
  );
}
// <h1>Main Content</h1>
// <p>{process.env.REACT_APP_URL_API}</p>
