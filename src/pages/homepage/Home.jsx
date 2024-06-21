import React from "react";
import "./Home.css";
import Popular from "../../components/popular/Popular";
import { CiForkAndKnife } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <Popular />
      </div>
    </div>
  );
};

export default Home;
