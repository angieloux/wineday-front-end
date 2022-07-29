import React, {useReducer} from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Products from './components/Products';
import { GlobalStyle } from './styled-components/globalStyles';
import Product from './components/Product';
import { LoginForm } from './components/LoginForm';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import stateReducer from './config/stateReducer';
import initialState from './config/initialState';
import { StateContext } from './config/store';

const App = () => {
  const [store, dispatch] = useReducer(stateReducer, initialState);
  // When we first load up the app, set loading to true

  return (
    <>
      <GlobalStyle/>

      <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
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
