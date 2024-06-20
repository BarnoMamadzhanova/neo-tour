import React from "react";
import classes from "./Tours.module.css";
import location from "../../assets/location.svg";

export const Tours = ({ tour }) => {
  return (
    <div className={classes.tour}>
      <h1>{tour.title}</h1>
      <div className={classes.location}>
        <img src={location} alt={tour.location} />
        <p>{tour.location}</p>
      </div>
      <div className={classes.info__box}>
        <h5 className={classes.description}>Description</h5>
        <p>{tour.description}</p>
      </div>
    </div>
  );
};
