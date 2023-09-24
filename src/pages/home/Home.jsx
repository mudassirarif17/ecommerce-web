import React , {useContext} from 'react';
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/heroSection"
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/track';

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
    </Layout>
  )
}

export default Home
