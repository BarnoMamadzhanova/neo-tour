import React from "react";
import Hero from "../../components/Hero/Hero";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <Hero />
    </div>
  );
}

export default Home;
