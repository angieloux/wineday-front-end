import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.styles.scss";
import CartIcon from "../cart/cart-icon/CartIcon";
import logoIcon from "../../assets/logo.png";
import { useGlobalState } from "../../context/globalContext";

export const Header = () => {
  const { globalStore, globalDispatch } = useGlobalState();
  const { loggedInUser } = globalStore;
  const navigate = useNavigate();
  function handleLogout() {
    globalDispatch({ type: "removeLoggedInUser" });
    globalDispatch({ type: "removeJWT" });
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
          {!loggedInUser && (
            <li>
              <Link to="/auth/login">Log In</Link>
            </li>
          )}
          {loggedInUser && <li onClick={handleLogout}>Sign Out</li>}
          {!loggedInUser && (
            <li>
              <Link to="/auth/register">Sign Up</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="account-container">
        <div className="nav-greeting">Welcome, {loggedInUser || "guest"}</div>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Header;
