import React from "react";
import classes from "./Reviews.module.css";

export const Reviews = ({ review }) => {
  return (
    <div className={classes.reviews}>
      <div className="user__info">
        <img src={review.userFoto} alt={review.userName} />
        <h6>{review.userName}</h6>
      </div>
      <p>{review.text}</p>
    </div>
  );
};

export default Reviews;
