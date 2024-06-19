import React from "react";
import classes from "./Categories.module.css";

export const Categories = ({ categories = [], onCategoryClick }) => {
  return (
    <>
      {categories && categories.length > 0 ? (
        <ul className={classes.list}>
          {categories.map((category) => (
            <li key={category.title}>
              <button
                className={classes.link}
                onClick={() => onCategoryClick(category.path)}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
