import React, {useReducer} from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Products from './components/Products';
// import { GlobalStyle } from './styled-components/globalStyles';
import Product from './components/Product';
import { LoginForm } from './components/LoginForm';
// import ResponsiveAppBar from './components/nav/Nav';
import globalReducer from './context/globalReducer';
import initialState from './context/initialState';
import { GlobalContext } from './context/globalContext';
// import { getProducts } from './services/productServices';
// import { retrieveUserFromJWT } from './services/userServices';
import './App.scss'
import {Header} from './components/header/Header'
import {Hero} from './components/hero/Hero'



const App = () => {
  const [globalStore, globalDispatch] = useReducer(globalReducer, initialState);
  const {user} = globalStore;
  // const token = sessionStorage.getItem('jwt');
  console.log(globalStore)
  // useEffect(() => {
  //   getProducts()
  //   .then(products => {
  //     dispatch({type: `setProducts`, data: products})})
  //   .catch(error => console.error(error))
  //   // eslint-disable-next-line
  // },[]) 

  // useEffect(() => {
  //   retrieveUserFromJWT()
  //   .then(response => dispatch({type: 'setLoggedInUser', data: response.username}))
  // }, [token])

  return (
    <>
      {/* <GlobalStyle/> */}

      <GlobalContext.Provider value={{globalStore, globalDispatch}}>
      <BrowserRouter>
      
      <Header></Header>
      <Hero><p>{user.username}</p></Hero>
      <Routes>
      <Route path="/" element={<Navigate to="/products"/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Product />}/>
      <Route path="/auth/login" element={<LoginForm />}/>
      <Route path="/auth/logout"/>

      </Routes>
      
      </BrowserRouter>    
      </GlobalContext.Provider>
    </>
  )
}

export default App
