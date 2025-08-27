import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CartItem } from './CartItem';
import { MyContext } from '../App';
import toast from "react-hot-toast";
export const ProductCards = ({product}) => {

  const{setCartItems}=useContext(MyContext);


  const addToCart = () => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        // return updated cart with increased quantity
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new product with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
   
  return (
    <div className='p-4  drop-shadow-lg cursor-pointer transition  duration-300 ease-in-out  hover:scale-105'> 
          <div className=' h-48 '>
            <img src={product?.image} alt={product?.title} className='w-full h-full object-contain'/>           
          </div>
          <div className='mt-1'>
            <button className='bg-gray-200 rounded-xl '>{product?.category}</button>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>{product?.title} </p>
          </div>
          <div className='mt-2'>
            <p className='text-gray-500 text-wrap'>{product?.title}</p>
          </div>
          <div className='mt-2 flex justify-start gap-1'> 
            <FaStar className='mt-1 text-green-400' />
            <p className='font-semibold'>{product?.rating.rate}</p>
            <p className='text-gray-500 '>({product?.rating.count})</p>
          </div>
          <div className='mt-4 flex justify-between pr-2'>
            <p className='text-bold text-xl text-blue-600 ml-1'>{parseFloat(product.price)} $</p>
            <button
             onClick={()=>{
              addToCart();
               toast.success("Item added to cart!");
             }}
                    className='flex hover:bg-blue-500 bg-blue-600 text-white h-8 w-[80px] rounded-lg text-lg p-1'>
                    <FiShoppingCart className='font-bold text-xl mt-1 ml-2'/>
                     Add
            </button>
          </div>
    </div>
  )
}
