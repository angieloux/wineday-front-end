import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import { getProducts } from './services/productServices';
import { GlobalStyle } from './styled-components/globalStyles';

const App = () => {
  
  const [products, setProducts] = useState([]);
  // When we first load up the app, set loading to true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
    .then(data => setProducts(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  },[])

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Products loading={loading} products={products}/>}></Route>

      </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
