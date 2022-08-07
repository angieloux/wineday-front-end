import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";
import logo from "../../assets/logo.png";
import { useGlobalState } from "../../context/globalContext";
import { CartContext } from "../../context/cartContext";
import CartIcon from "../cart/cart-icon/CartIcon";

const Nav = () => {
  const { Item, Brand, Menu, Container, Dropdown, Link, Burger } = Navbar;
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
    <Navbar>
      <Brand>
        <Item href="/">
          <img alt="WineDay" height="28" src={logo} width="112" />
          WINEDAY
        </Item>
        <Burger />
      </Brand>
      <Menu>
        <Container>
          <Item href="/products">Shop our range</Item>
        </Container>
        <Item hoverable href="#">
          <Link>By variety</Link>
          <Dropdown>
            <Item href="/products?q=cabernet">Cabernet</Item>
            <Item href="/products?q=pinot">Pinot Noir</Item>
            <Item href="/products?q=rhone">Rhone</Item>
            <Item href="/products?q=chardonnay">Chardonnay</Item>
            <Item href="/products?q=zinfandel">Zinfandel</Item>
          </Dropdown>
        </Item>
        <Item hoverable href="#">
          <Link>By region</Link>
          <Dropdown>
            <Item href="/products?q=napa">Napa Valley</Item>
            <Item href="/products?q=france">France</Item>
            <Item href="/products?q=italy">Italy</Item>
            <Item href="/products?q=australia">Australia</Item>
            <Item href="/products?q=zinfandel">Zinfandel</Item>
          </Dropdown>
        </Item>
        {!username && (
          <>
            <Item href="/auth/login">Login</Item>
            <Item href="/auth/register">Sign up</Item>
          </>
        )}
        {username && (
          <>
            <Item href="/orders">Orders</Item>
            <Item onClick={handleLogout}>Signout</Item>
          </>
        )}

        <Item>Welcome, {username || "guest"}</Item>
        <CartIcon />
      </Menu>
    </Navbar>
  );
};
export default Nav;
