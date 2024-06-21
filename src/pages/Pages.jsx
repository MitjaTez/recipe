import React from "react";
import Home from "./homepage/Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./cuisine/Cuisine";
import Searched from "./searched/Searched";
import Recipe from "./recipe/Recipe";
import Favorite from "./favorite/Favorite";
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default Pages;
