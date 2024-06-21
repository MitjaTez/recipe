import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const RecipeCard = ({ title, image, link }) => {
  return (
    <div className="recipe-card-container">
      <Link className="recipe-card-link" to={link}>
        <img src={image} alt={title} className="recipe-card-image" />
        <p className="recipe-card-title">{title} </p>
      </Link>
    </div>
  );
};

export default RecipeCard;
