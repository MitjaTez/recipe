import React, { useState } from "react";
import "./Category.css";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { GiSombrero } from "react-icons/gi";
import { GiCoolSpices } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <GiHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />

      <div className={`categories-container ${isOpen ? "isOpen" : ""}`}>
        <NavLink
          to={"/cuisine/Italian"}
          className={({ isActive }) =>
            isActive ? "category-card active" : "category-card"
          }
          onClick={closeMenu}
        >
          <FaPizzaSlice className="category-icon" />
          <h4>Italian</h4>
        </NavLink>
        <NavLink
          to={"/cuisine/Indian"}
          className={({ isActive }) =>
            isActive ? "category-card active" : "category-card"
          }
          onClick={closeMenu}
        >
          <GiCoolSpices className="category-icon" />
          <h4>Indian</h4>
        </NavLink>
        <NavLink
          to={"/cuisine/Japanese"}
          className={({ isActive }) =>
            isActive ? "category-card active" : "category-card"
          }
          onClick={closeMenu}
        >
          <GiChopsticks className="category-icon" />
          <h4>Japanese</h4>
        </NavLink>
        <NavLink
          to={"/cuisine/Mexican"}
          className={({ isActive }) =>
            isActive ? "category-card active" : "category-card"
          }
          onClick={closeMenu}
        >
          <GiSombrero className="category-icon" />
          <h4>Mexican</h4>
        </NavLink>
        <NavLink
          to={"/cuisine/Thai"}
          className={({ isActive }) =>
            isActive ? "category-card active" : "category-card"
          }
          onClick={closeMenu}
        >
          <GiNoodles className="category-icon" />
          <h4>Thai</h4>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "category-card active" : "category-card"
          }
          onClick={closeMenu}
        >
          <MdFavorite className="category-icon" />
          Favorites
        </NavLink>
      </div>
    </>
  );
};

export default Category;
