import React from "react";
import classes from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <div className={classes.reviews}>
          {reviews.map((review) => (
            <div key={review.id} className="user__info">
              <img src={review.userFoto} alt={review.userName} />
              <h6>{review.userName}</h6>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Reviews;
