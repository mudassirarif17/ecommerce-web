import React , {useContext} from 'react';
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/heroSection"
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/track';
import Testimonial from '../../components/testimonial/Testimonial';

const Home = () => {
  const context = useContext(myContext);
  // When state has only one property
  // const {name , rollno} = context;

  const {mode , toggleMode} = context;
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
