
import React, { useState,useEffect } from 'react';
import './App.css'
import './index.css'
import { Header } from './Components/Header'
import { Products } from './Components/Products'
import { Herobanner } from './Components/Herobanner'
import { MyCart } from './Components/MyCart'
import { createContext } from 'react';
import  { Toaster } from 'react-hot-toast'; 


export const MyContext =createContext();

function App() {


const [isCartOpen, setCartOpen]=useState(false);
const [searchTerm,setSearchTerm]=useState("");
const [cartItems, setCartItems] = useState([]);
const [quantity,setQuantity]=useState(1);
const [products,setProducts]=useState([]);
const [catagory,setCatagory]=useState([]);
const [selectedCatagory,setSelectedCatagory]=useState("All Products");






 useEffect(()=>{
  const fetchProduct=async()=>{
    try{
      const url=`https://fakestoreapi.com/products`;
      const response= await fetch(url);
      const result=await response.json();
      setProducts(result);
      console.log(result);
      // const uniqueCatagory=Array.from(new Set(result.map(p=>p.category)));
      const uniqueCatagory= ["All Products", ...new Set(result.map(p => p.category))];
      setCatagory(uniqueCatagory);
    }
    catch(error){
      console.error("failed to fetch products",error);
    }
 }
 fetchProduct();
 },[])


  // Load cart from localStorage on first render

  useEffect(
    ()=>{
      const savedCart=localStorage.getItem("cartItems");
      if(savedCart){
        setCartItems(JSON.parse(savedCart));
      }
    },[]
  )



  // Save cart to localStorage whenever it changes

 useEffect(
  ()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  },[cartItems]
 )




  return (
    <>
 <MyContext.Provider value={{
  cartItems, setCartItems,
  quantity, setQuantity,
  isCartOpen, setCartOpen,
  searchTerm, setSearchTerm,
  products, setProducts,
  catagory, setCatagory,
  selectedCatagory, setSelectedCatagory
}}>

     <Header />
     <Herobanner/>
     {isCartOpen && <MyCart/>}
     <Products/>
     <Toaster />
  </MyContext.Provider>
    </>
  )
}

export default App
