import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/pages/all-products/AllProducts";
import SingleProduct from "./components/pages/single-product/SingleProduct";
import { LoginForm } from "./components/LoginForm";
import globalReducer from "./context/globalReducer";
import initialState from "./context/initialState";
import { GlobalContext } from "./context/globalContext";
import { retrieveUserFromJWT } from "./services/userServices";
import "./App.scss";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const App = () => {
  const [globalStore, globalDispatch] = useReducer(globalReducer, initialState);

  const token = sessionStorage.getItem("jwt");

  useEffect(() => {
    retrieveUserFromJWT().then((response) =>
      globalDispatch({ type: "setLoggedInUser", data: response.username })
    );
  }, [token]);

  return (
    <>
      <GlobalContext.Provider value={{ globalStore, globalDispatch }}>
        <BrowserRouter>
          {/* <Hero><p>{user.username}</p></Hero> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/auth/logout" />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
