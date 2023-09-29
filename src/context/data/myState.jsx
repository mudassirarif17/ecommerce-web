import React , {useState} from 'react'
import MyContext from './myContext'
import { toast } from 'react-toastify';
import {fireDB , auth} from "../../firebase/FireBaseConfig";
import { QuerySnapshot, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
const myState = (props) => {
    const [mode , setMode] = useState("light");

    const toggleMode =()=>{
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "rgb(17,24,39)";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white"
      }
    }

    const [loading , setLoading] = useState(false);

    const [products , setProducts] = useState({
      title : null,
      price : null,
      imageURL : null,
      category : null,
      description : null,
      time : Timestamp.now(),
      date : new Date().toLocalString("en-US" , {
        month : "short",
        day : "2-digit",
        year : "numeric"
      })
    })

    const addProduct = async () =>{
      if(products.title == null || products.price == null || products.imageURL == null || products.category == null || products.description == null || products.time == null || products.time == null || products.date == null){
        return toast.error("All fields are required");
      }
      setLoading(true);
      try {
        const productRef = collection(fireDB , "products");
        await addDoc(productRef , products);
        setLoading(false);
        toast.success("Product added successfully");
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Product not added");
      }
    }

    const [product , setProduct] = useState([]);

    const getProducts = async () =>{
      try {
        const q = query(
          collection(fireDB , "products"),
          orderBy("time"),
          );

          const data = onSnapshot(q , (QuerySnapshot)=>{
            let productArray = [];
            QuerySnapshot.forEach((docs)=>{
              
            })
          })
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <MyContext.Provider value={{mode , toggleMode , loading , setLoading}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default myState
