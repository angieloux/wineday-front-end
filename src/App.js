import React, { useReducer, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/pages/all-products/AllProducts";
import SingleProduct from "./components/pages/single-product/SingleProduct";
import { LoginForm } from "./components/log-in/LoginForm";
import globalReducer from "./context/globalReducer";
import initialState from "./context/initialState";
import { GlobalContext } from "./context/globalContext";
import { retrieveUserFromJWT } from "./services/userServices";
import "./App.scss";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Cart from "./components/pages/cart/Cart";
import SignUpForm from "./components/sign-up/SignUpForm";
import OrdersList from "./components/pages/orders/OrdersList";
import OrderConfirmation from "./components/pages/orders/OrderConfirmation";
import CartContextProvider from "./context/cartContext";

const App = () => {
  const [globalStore, globalDispatch] = useReducer(globalReducer, initialState);
  // const { loggedInUser, userId, username } = globalStore;
  const token = sessionStorage.getItem("jwt");

  useEffect(() => {
    retrieveUserFromJWT()
      .then((response) => {
        globalDispatch({
          type: "setLoggedInUser",
          data: [response.id, response.username],
        });
      })
      .catch((error) => console.error(error));
  }, [token]);

  return (
    <>
      <GlobalContext.Provider value={{ globalStore, globalDispatch }}>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/:id" element={<OrderConfirmation />} />
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/auth/register" element={<SignUpForm />} />
            <Route path="/auth/logout" />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContextProvider>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
