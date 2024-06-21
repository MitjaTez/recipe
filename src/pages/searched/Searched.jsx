import React, { useEffect, useState } from "react";
import "./Searched.css";
import { Link, useParams } from "react-router-dom";
import RecipeCard from "../../components/recipe-card/RecipeCard";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [header, setHeader] = useState("");
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
    setHeader(params.search);
    console.log(params);
  }, [params.search]);

  return (
    <>
      <h3 className="header-text">Results for: {header}</h3>
      <div className="searched-container">
        {searchedRecipes.map((recipe) => (
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

export default Searched;
