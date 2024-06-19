import React, { useState } from "react";
import classes from "./Categories.module.css";

export const Categories = ({ categories = [], onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.title);
    onCategoryClick(category.path);
  };

  return (
    <>
      {categories && categories.length > 0 ? (
        <ul className={classes.list}>
          {categories.map((category) => (
            <li
              key={category.title}
              className={`${classes.link} ${
                selectedCategory === category.title ? classes.active : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <p>{category.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
