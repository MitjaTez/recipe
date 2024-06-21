import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem("favs");
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favorites));
  }, [favorites]);

  const addRecipeToFavorites = (recipe) => {
    const existingRecipe = favorites.find((fav) => fav.id === recipe.id);
    if (!existingRecipe) {
      setFavorites([...favorites, recipe]);
    } else {
      console.log("Recipe exists");
    }
  };

  const removeRecipeFromFavorites = (recipeId) => {
    setFavorites(favorites.filter((item) => item.id !== recipeId));
  };

  const contextValues = {
    favorites,
    setFavorites,
    addRecipeToFavorites,
    removeRecipeFromFavorites,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
