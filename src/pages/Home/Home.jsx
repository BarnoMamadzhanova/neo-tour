import React from "react";
import Hero from "../../components/Hero/Hero";
import Discover from "../../components/Discover/Discover";
import classes from "./Home.module.css";
import Recommended from "../../components/Recommended/Recommended";

function Home() {
  return (
    <div className={classes.home}>
      <Hero />
      <Discover />
      <Recommended />
    </div>
  );
}

export default Home;
