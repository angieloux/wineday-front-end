import React, {useEffect, useReducer} from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Products from './components/Products';
import { GlobalStyle } from './styled-components/globalStyles';
import Product from './components/Product';
import { LoginForm } from './components/LoginForm';
// import ResponsiveAppBar from './components/nav/Nav';
import stateReducer from './context/stateReducer';
import initialState from './context/initialState';
import { StateContext } from './context/globalState';
import { getProducts } from './services/productServices';
import { retrieveUserFromJWT } from './services/userServices';
import './App.scss'
import {Header} from './components/header/Header'

const App = () => {
  const [store, dispatch] = useReducer(stateReducer, initialState);
  const token = sessionStorage.getItem('jwt');
  
  useEffect(() => {
    getProducts()
    .then(products => {
      dispatch({type: `setProducts`, data: products})})
    .catch(error => console.error(error))
    // eslint-disable-next-line
  },[]) 

  useEffect(() => {
    retrieveUserFromJWT()
    .then(response => dispatch({type: 'setLoggedInUser', data: response.username}))
  }, [token])

  return (
    <>
      {/* <GlobalStyle/> */}

      <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>
      {/* <Nav></Nav> */}
      <Header></Header>
      <Routes>
      <Route path="/" element={<Navigate to="/products"/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Product />}/>
      <Route path="/auth/login" element={<LoginForm />}/>
      <Route path="/auth/logout"/>

      </Routes>
      </BrowserRouter>    
      </StateContext.Provider>
    </>
  )
}

export default App
