import React, { useEffect, useState } from "react";
import "./Veggie.css";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const checkItem = localStorage.getItem("veggie");

    if (checkItem) {
      setVeggie(JSON.parse(checkItem));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <h3>veggie picks</h3>
      <div className="veggie-container">
        {veggie.map((recipe) => {
          return (
            <div className="veggie-card" key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Veggie;
