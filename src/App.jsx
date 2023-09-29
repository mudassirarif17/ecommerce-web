import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./pages/allproducts/AllProducts";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/registration/Login";
import SignUp from './pages/registration/SignUp';
import Nopage from "./pages/nopage/Nopage";
import ProductInfo from './pages/productinfo/ProductInfo';
import MyState from './context/data/myState';
import AddProduct from './pages/admin/pages/Addproduct';
import UpdateProduct from './pages/admin/pages/updateproduct';

const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={
          <ProtuctedRoute>
            <Order/>
          </ProtuctedRoute>
        }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={
          <ProtuctedRouteForAdmin>
            <Dashboard/>
          </ProtuctedRouteForAdmin>
        }/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/addproduct" element={
          <ProtuctedRouteForAdmin>
            <AddProduct/>
          </ProtuctedRouteForAdmin>
        }/>
        <Route path="/updateproduct" element={
          <ProtuctedRouteForAdmin>
            <UpdateProduct/>
          </ProtuctedRouteForAdmin>
        }/>
        <Route path="/*" element={<Nopage/>}/>
      </Routes>
      <ToastContainer />
    </Router>
    </MyState>
  )
}

export default App

export const ProtuctedRoute = ({children})=>{
  const user = JSON.parse(localStorage.getItemItem("user"));
  if(user){
    return children;
  }
  else{
    <Navigate to={"/login"}/>
  }
}

// Admin route
const ProtuctedRouteForAdmin = ({children})=>{
  const admin = JSON.parse(localStorage.getItem("user"));
  if(admin.user.email === "mudassirinoxent@gmail.com"){
    return children;
  }
  else{
    <Navigate to={"/login"}/>
  }
}