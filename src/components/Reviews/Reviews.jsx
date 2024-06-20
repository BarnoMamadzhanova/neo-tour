import React from "react";
import classes from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <div className={classes.reviews}>
          <h3 className={classes.reviews__title}>Reviews</h3>
          <div className={classes.container}>
            {reviews.map((review) => (
              <div key={review.id} className={classes.user__info}>
                <div className={classes.user__flex}>
                  <img src={review.userFoto} alt={review.userName} />
                  <h6>{review.userName}</h6>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Reviews;
