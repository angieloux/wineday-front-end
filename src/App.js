import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { getProducts } from './services/productServices';
import Products from './components/Products';
import { GlobalStyle } from './styled-components/globalStyles';
import Product from './components/Product';

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
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/products"/>}/>
      <Route path="/products" element={<Products loading={loading} products={products}/>}/>
      <Route path="/products/:id" element={<Product />}/>

      </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
