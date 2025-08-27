import React, {useContext} from 'react'
import { GiSkullCrossedBones } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { CartItem } from './CartItem';
import { Total } from './Total';
import { MyContext } from '../App';
import { RxCross1 } from "react-icons/rx";


export const MyCart = () => {

  const {cartItems, setCartOpen}=useContext(MyContext);

  const toggleCart = () => setCartOpen(prev => !prev);

 


  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 " 
        onClick={toggleCart} 
    >
    <div className="fixed top-0 right-0 w-full md:w-[40%] h-full p-1 bg-white flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Cart header */}
       <div className='flex justify-between p-2'>
            <div className='flex gap-1'>
              <FiShoppingBag className='mt-1 text-xl'/>
              <p className='text-xl font-semibold'>Shopping Cart</p>
            </div>

          <button 
           onClick={toggleCart}
          >
            <RxCross1 className='text-3xl mt-1 hover:bg-gray-300 hover:text-blue-400 p-1 rounded-lg'/>
          </button>
       </div>

        {/* Cart body */}

<div className='flex-1 overflow-y-auto p-2'>
{cartItems.length ===0?(
  <>
       <div className='mt-[30%] '>
        <FiShoppingBag className=' text-5xl mx-auto my-auto text-gray-700'/>
        <p className='text-3xl font-bold  text-center mt-1'>Your cart is empty</p>
        <p className='text-xl text-center mt-1'>Add some products to get started</p>

       </div>


       <div className='flex justify-center mt-5'> 
        <button className='bg-blue-600 hover:bg-blue-500 shadow-md text-white rounded-full  ransition-colors duration-200  h-9 p-1 text-xl font-semibold '
                onClick={toggleCart}
        >
          Start Shopping
        </button>
        </div>
  </>
        ):(
              <div>
                {cartItems.map(  (item)=>(<CartItem item={item}/>)  ) }
              </div>
          )}
          </div>
          {cartItems.length > 0 && (
          <div className="p-2">
            <Total />
          </div>
        )}
       </div>
    </div>
  );
};
