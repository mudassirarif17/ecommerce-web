import React , {useContext} from 'react';
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/heroSection"

const Home = () => {
  const context = useContext(myContext);
  // When state has only one property
  // const {name , rollno} = context;

  const {mode , toggleMode} = context;
  return (
    <Layout>
      <HeroSection/>
    </Layout>
  )
}

export default Home
