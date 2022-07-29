import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { getProducts } from './services/productServices';
import Products from './components/Products';
import { GlobalStyle } from './styled-components/globalStyles';
import Product from './components/Product';
import { LoginForm } from './components/LoginForm';
import ResponsiveAppBar from './components/ResponsiveAppBar';

const App = () => {
  
  const [products, setProducts] = useState([]);
  // When we first load up the app, set loading to true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
    .then(products => setProducts(products))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  },[])

  return (
    <>
      <GlobalStyle/>
      <ResponsiveAppBar></ResponsiveAppBar>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/products"/>}/>
      <Route path="/products" element={<Products loading={loading} products={products}/>}/>
      <Route path="/products/:id" element={<Product />}/>
      <Route path="/login" element={<LoginForm />}/>

      </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
