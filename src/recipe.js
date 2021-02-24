import React from "react";

const Recipe = ({ title, calories, image, ingredientLines }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <p>{ingredientLines}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
