import React from "react";
import Hero from "../../components/Hero/Hero";
import Discover from "../../components/Discover/Discover";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <Hero />
      <Discover />
    </div>
  );
}

export default Home;
