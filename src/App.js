import React, {useReducer, useEffect} from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import { LoginForm } from './components/LoginForm';
import globalReducer from './context/globalReducer';
import initialState from './context/initialState';
import { GlobalContext } from './context/globalContext';
import { retrieveUserFromJWT } from './services/userServices';
import './App.scss'
import {Header} from './components/header/Header'
import {Hero} from './components/hero/Hero'
import NotFound from './components/NotFound';
import Footer from './components/footer/Footer';

const App = () => {
  const [globalStore, globalDispatch] = useReducer(globalReducer, initialState);
  const {user} = globalStore;
  const token = sessionStorage.getItem('jwt');

  useEffect(() => {
    retrieveUserFromJWT()
    .then(response => globalDispatch({type: 'setLoggedInUser', data: response.username}))
  }, [token])

  return (
    <>

      <GlobalContext.Provider value={{globalStore, globalDispatch}}>
      <BrowserRouter>
      
      <Header></Header>
      <Hero><p>{user.username}</p></Hero>
      <Routes>
      <Route path="/" element={<Navigate to="/products"/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Product />}/>
      <Route path="/auth/login" element={<LoginForm />}/>
      <Route path="/auth/logout"/>

      </Routes>
      
      </BrowserRouter>   
      <Footer/>
      </GlobalContext.Provider>
    </>
  )
}

export default App
