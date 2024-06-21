import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <FaSearch className="search-icon"></FaSearch>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </form>
  );
};

export default Search;
