import React from "react";
import classes from "./Categories.module.css";

export const Categories = ({ categories = [] }) => {
  return (
    <ul className={classes.list}>
      {categories.map((category) => (
        <li key={category.title}>
          <p>{category.title}</p>
        </li>
      ))}
    </ul>
  );
};
