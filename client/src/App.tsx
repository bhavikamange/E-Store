import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { Products } from "./components/products"; 
import { ProductDetail } from "./components/ProductDetail/ProductDetail"; 
import './App.css';
import { Home } from './components/Home/home';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <hr/>
        <switch>
          <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path ="/products" element={<Products />}></Route>
            <Route path='/products/:id' element={<ProductDetail/>}> </Route>

          </Routes>
          

        </switch>
      </div>

    </Router>
  );
}

export default App;