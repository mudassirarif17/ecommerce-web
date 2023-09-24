import React , {useContext} from 'react';
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";


const Home = () => {
  const context = useContext(myContext);
  // When state has only one property
  // const {name , rollno} = context;

  const {state , color} = context;
  return (
    <Layout>
      <h1>name : {state.name}</h1>
      <h1>roll no : {state.rollno}</h1>
      <h1>color : {color}</h1>
    </Layout>
  )
}

export default Home
