import React, { useContext } from 'react'
import { MyContext } from '../App';
import toast from "react-hot-toast";
export const Total = () => {

  const {cartItems,setCartItems}=useContext(MyContext);


  let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div className='flex justify-between p-2'>
         <p className='font-semibold'>Total:</p>
         <p className='text-blue-600 font-semibold text-xl'>{(total.toFixed(2))} $</p>
    </div>
    <div className='p-2'>
        <button 
              onClick={()=>{
                toast.error("check out feature in not integrated yet");
              }}
              className='bg-blue-700 hover:bg-blue-600 font-semibold text-white p-1 rounded-lg w-full'>
              Checkout
        </button>
        <button className='hover:bg-gray-300 hove:text-blue-300 w-full rounded-lg p-1 mt-2 hover:text-blue-600'
         onClick={()=>setCartItems([])}
        >Clear Cart</button>
    </div>
</>
  )
}
