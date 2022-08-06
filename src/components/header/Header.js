import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.styles.scss";
import CartIcon from "../cart/cart-icon/CartIcon";
import logoIcon from "../../assets/logo.png";
import { useGlobalState } from "../../context/globalContext";
import { CartContext } from "../../context/cartContext";
// import Search from "../shared/Search";

export const Header = () => {
  const { globalStore, globalDispatch } = useGlobalState();
  const { clearCart } = useContext(CartContext);
  const { username } = globalStore;
  const navigate = useNavigate();

  // function handleChange(e) {}

  function handleSearch(e) {
    e.preventdefault();
    console.log(e.target.name);
  }

  function handleLogout() {
    globalDispatch({ type: "removeLoggedInUser" });
    globalDispatch({ type: "removeJWT" });
    clearCart();
    navigate("/");
  }
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <img src={logoIcon} alt="Logo Icon" />
        <Link to="/">WINEDAY</Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link to="/products?q=red">Red</Link>
          </li>
          {!username && (
            <li>
              <Link to="/auth/login">Log In</Link>
            </li>
          )}
          {username && (
            <>
              <li onClick={handleLogout}>Sign Out</li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </>
          )}
          {!username && (
            <li>
              <Link to="/auth/register">Sign Up</Link>
            </li>
          )}
          <li>
            <form onSubmit={handleSearch}>
              <input
                name="q"
                type="text"
                placeholder="Search..."
                className="search-box"
              ></input>
              <button className="search-button" type="submit">
                🔎
              </button>
            </form>
          </li>
        </ul>
      </div>
      <div className="account-container">
        <div className="nav-greeting">Welcome, {username || "guest"}</div>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Header;
