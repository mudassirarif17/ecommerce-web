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
import Nopage from "./pages/nopage/Nopage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/*" element={<Nopage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
