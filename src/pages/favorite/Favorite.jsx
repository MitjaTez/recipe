import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../components/context/Context";
import { Link, useSearchParams } from "react-router-dom";
import "./Favorite.css";
import Popup from "../../components/popup-message/Popup";
import RecipeCard from "../../components/recipe-card/RecipeCard";
const Favorite = () => {
  const { favorites, removeRecipeFromFavorites } = useContext(Context);
  const [popup, setPopup] = useState(false);
  const removeFavorite = (recipeId) => {
    removeRecipeFromFavorites(recipeId);
    setPopup(true);
  };

  return (
    <div className="searched-container">
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div className="favorite-card">
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              link={`/recipe/${recipe.id}`}
            />
            <button
              className="remove-button"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="no-recipe-msg">No favorite recipes yet.</p>
      )}
      {popup && (
        <Popup
          message="Recipe removed"
          visible={popup}
          onClose={() => setPopup(false)}
        />
      )}
    </div>
  );
};

export default Favorite;
