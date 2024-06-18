import React from "react";
import classes from "./Recommended.module.css";
import { Recommendations } from "../Recommendations/Recommendations";
import recommendations from "../../recommendations.json";

function Recommended() {
  return (
    <section className={classes.recommended}>
      <div className={classes.container}>
        <h2>Recommended</h2>
        <div className={classes.grid}>
          <Recommendations recommendations={recommendations} />
        </div>
      </div>
    </section>
  );
}

export default Recommended;
