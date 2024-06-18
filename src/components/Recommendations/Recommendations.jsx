import React from "react";
import classes from "./Recommendations.module.css";

export const Recommendations = ({ recommendations }) => {
  return (
    <>
      {recommendations && recommendations.length > 0
        ? recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={classes.card__box}
              style={{ backgroundImage: `url(${recommendation.image})` }}
            >
              <div className={classes.bg}>
                <h4>{recommendation.title}</h4>
              </div>
            </div>
          ))
        : ""}
    </>
  );
};
