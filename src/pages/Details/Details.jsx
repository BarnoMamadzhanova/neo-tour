import React from "react";
import classes from "./Details.module.css";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return (
    <div className={classes.details}>
      <div className="container">
        <h3>{id}</h3>
      </div>
    </div>
  );
}

export default Details;
