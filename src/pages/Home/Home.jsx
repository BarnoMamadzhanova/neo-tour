import React, { useRef } from "react";
import Hero from "../../components/Hero/Hero";
import Discover from "../../components/Discover/Discover";
import classes from "./Home.module.css";
import Recommended from "../../components/Recommended/Recommended";

function Home() {
  const discoverRef = useRef(null);

  const scrollToDiscover = () => {
    discoverRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.home}>
      <Hero scrollToDiscover={scrollToDiscover} />
      <div ref={discoverRef}>
        <Discover />
      </div>
      <Recommended />
    </div>
  );
}

export default Home;
