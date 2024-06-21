import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Category from "./components/categories/Category";
import Search from "./components/search/Search";
import Pages from "./pages/Pages";
import { CiForkAndKnife } from "react-icons/ci";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to={"/"} className="home-link">
          <CiForkAndKnife className="logo-icon" />
          <h2 className="logo-name">RecipeRealm</h2>
        </NavLink>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
