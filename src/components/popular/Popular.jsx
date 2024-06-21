import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Link } from "react-router-dom";
import RecipeCard from "../recipe-card/RecipeCard";
const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const checkItem = localStorage.getItem("popular");

    if (checkItem) {
      setPopular(JSON.parse(checkItem));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setPopular(data.recipes);
    }
  };
  return (
    <div className="popular-container">
      <h3 className="popular-title">Popular recipes</h3>
      <div className="popular-content">
        {popular.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            link={`/recipe/${recipe.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
