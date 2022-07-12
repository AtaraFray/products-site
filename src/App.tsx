import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ViewProduct } from "./Componants/ViewProduct";
import ReactDOM from 'react-dom/client';
import { Login } from "./Componants/Login";
import { About } from "./Componants/About";
import { HomePage } from './Componants/HomePage';
import { ManegerOptions } from './Componants/ManegerOptions';
import { DeleteProduct } from './Componants/DeleteProduct'
import { EditProduct } from './Componants/EditProduct'
import { AddProduct } from "./Componants/AddProduct";
import  ProductDeatails  from "./Componants/ProductDeatails";
function App() {


  const root = ReactDOM.createRoot(
    document.getElementById('root')as HTMLElement);

  return (     
    <Router>
      <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/ViewProduct">Catalogue</Link>
        <Link to="/Login">Login</Link>
        <Link to="/About">About</Link>
        </div>
       
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ViewProduct" element={<ViewProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/ManegerOptions" element={<ManegerOptions  />} />
          <Route path="/ManegerOptions/DeleteProduct" element={<DeleteProduct  />} />
          <Route path="/ManegerOptions/EditProduct" element={<EditProduct  />} />
          <Route path="/ManegerOptions/AddProduct" element={<AddProduct  />} />
          <Route path="/ViewProduct/product-details:id" element={<ProductDeatails />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
