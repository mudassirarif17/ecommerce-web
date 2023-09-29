import React , {useContext} from 'react';
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/heroSection"
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/track';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart , deleteFromCart} from "../../redux/cartSlice"
const Home = () => {
  const context = useContext(myContext);
  // When state has only one property
  // const {name , rollno} = context;

  const {mode , toggleMode} = context;
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart);
  console.log(cartItem);
  const addCart = ()=>{
    dispatch(addToCart("shirt"))
  }
  const deleteCart = ()=>{
    dispatch(deleteFromCart("shirt"))
  }
  return (
    <Layout>
      {/* this is code is just for testing the redux  */}
      {/* <div className="flex justify-center">
        <button onClick={()=>addCart()} className='bg-gray-300 mx-4'>add</button>
        <button onClick={()=>deleteCart()} className='bg-gray-300 mx-4'>dlt</button>
      </div> */}
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
