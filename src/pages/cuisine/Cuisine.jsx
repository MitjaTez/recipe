import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Cuisine.css";
import RecipeCard from "../../components/recipe-card/RecipeCard";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [header, setHeader] = useState("");
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`
    https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
    setHeader(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <>
      <h3 className="header-text-cuisine">Results for: {header}</h3>
      <div className="cuisine-container">
        {cuisine.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            link={`/recipe/${recipe.id}`}
          />
        ))}
      </div>
    </>
  );
};

export default Cuisine;
