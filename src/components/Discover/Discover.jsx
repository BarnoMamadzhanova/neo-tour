import React from "react";
import classes from "./Discover.module.css";
import slides from "../../mock.json";
import categories from "../../categories.json";
import { Carousel } from "../Carousel/Carousel";
import { Categories } from "../Categories/Categories";

function Discover() {
  return (
    <section className={classes.discover}>
      <div className={classes.container}>
        <h2>Discover</h2>
        <Categories categories={categories} />
        <Carousel slides={slides} />
      </div>
    </section>
  );
}

export default Discover;
