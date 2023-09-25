import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./pages/allproducts/AllProducts";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/registration/Login";
import SignUp from './pages/registration/SignUp';
import Nopage from "./pages/nopage/Nopage";
import MyState from './context/data/myState';

const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/*" element={<Nopage/>}/>
      </Routes>
    </Router>
    </MyState>
  )
}

export default App
