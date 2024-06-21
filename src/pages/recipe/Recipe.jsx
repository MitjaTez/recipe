import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";
import { Context } from "../../components/context/Context";
import Popup from "../../components/popup-message/Popup";

const Recipe = ({ recipe }) => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const { addRecipeToFavorites, favorites, removeRecipeFromFavorites } =
    useContext(Context);
  const [popup, setPopup] = useState(false);

  const isFavorite = favorites.some((fav) => fav.id === details.id);

  const toggleFavorite = () => {
    if (details) {
      addRecipeToFavorites(details);
      setPopup(true);
    }
  };

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="recipe-container">
      <div className="recipe-info">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <div className="buttons">
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button onClick={toggleFavorite}>add to favorites</button>
          {popup && (
            <Popup
              message="Recipe successfully added to favorites!"
              visible={popup}
              onClose={() => setPopup(false)}
            />
          )}
        </div>
      </div>
      <div>
        {activeTab === "instructions" && (
          <div className="instructions-container">
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && details.extendedIngredients && (
          <ul className="ingredients-container">
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
