import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MyContext } from '../App';
export const CartItem = ({ item }) => {


  const{setCartItems}=useContext(MyContext);

  const increaseQuantity=()=>{
    setCartItems(prevItems=>
      prevItems.map(cartItem =>
        cartItem.id===item.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem
      )

    );
  };
    const decreaseQuantity = () => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };


  return (
    <div className='flex-col'>
      
            <div className='p-4 flex '>
                  <img src={item?.image} alt="" className='h-20 w-20 object-contain'/>
                  <div>
                      <p className='font-semibold p-1'>{item?.title}</p>
                   
                        <p className='text-blue-600 font-semibold text-xl p-1'>{item.price} $</p>
                        <div className='flex gap-2'>
                            <button className='  hover:bg-gray-300 hover:text-blue-600 p-1  rounded-lg border-slate-700'
                            onClick={decreaseQuantity}
                            > <FaMinus/></button>
                            <p className='font-semibold text-gray-600'>{item.quantity}</p>
                            <button className=' hover:bg-gray-300 hover:text-blue-600 p-1  rounded-lg border-slate-700'
                            onClick={increaseQuantity}
                            > <FaPlus/></button>
                        </div>
                   
                   </div>
            </div>

             <button className=' mt-2 w-full rounded-lg bg-red-500 text-white hover:bg-red-400 font-bold text-sm py-1'
              onClick={()=>setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id))}
             >Remove</button>

    </div>
  )
}
