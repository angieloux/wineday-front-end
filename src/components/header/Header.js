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

          {/* {window.location.pathname.startsWith("/products") && (
            <li>
              <form className="search-form" onSubmit={handleSearch}>
                <div className="control">
                  <input
                    // name="q"
                    type="input"
                    placeholder="Search..."
                    className="nomad-btn submit is-black"
                  ></input>
                </div>

                <button
                  className="button is-small button nomad-btn submit"
                  type="submit"
                >
                  🔎
                </button>
              </form>
            </li>
          )} */}
          {/* <li>
            <Link to="/products?q=cabernet">Cabernet</Link>
          </li>
          <li>
            <Link to="/products?q=rhône">Rhône</Link>
          </li> */}
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/products?q=cabernet">Cabernet</Link>
        </li>
        <li>
          <Link to="/products?q=chardonnay">Chardonnay</Link>
        </li>
        <li>
          <Link to="/products?q=rhône">Rhône</Link>
        </li>
        <li>
          <Link to={`/products?q=new&zealand`}>New Zealand</Link>
        </li>
      </ul>
      <div className="account-container">
        <div className="nav-greeting">Welcome, {username || "guest"}</div>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Header;
