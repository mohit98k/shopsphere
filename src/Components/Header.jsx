import React, { useContext } from 'react'
import { IoStorefrontOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuSearchCheck } from "react-icons/lu";
import { MyContext } from "../App";


export const Header = () => {
    const {cartItems,setCartOpen,setSearchTerm} =useContext(MyContext);
     const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
<header  >

    <div className='flex justify-between m-4 md:pl-5  md:pr-9 fixed  top-0 w-full pr-5 z-50 '>


{/* store icon and text */}

        <div className='flex'>
            <div className='p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl mr-2'>
                <IoStorefrontOutline className='h-6 w-7 text-white font-semibold md:mt-1' />
            </div>
            <div className='backdrop-blur-sm bg-white/30 rounded-lg '>
                <p className='hidden md:flex font-bold  text-xl text-shadow-lg p-0.5'>ShopSphere</p>
                <p className='hidden md:flex subpixel-antialiased'>shopping in a complete sphere</p>
            </div>
        </div>

{/* searchbar and cart icon */}

        <div className='flex'>

               <div className='relative flex items-center'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className=' py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                        onChange={(e)=>setSearchTerm(e.target.value)}
                    />
                    <LuSearchCheck className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
    
                </div>

             <button 
              className='md:mt-1  ml-1 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg h-10 w-10 pl-1'
              onClick={()=>setCartOpen(prev=>!prev)}
             >
                <FiShoppingCart className='h-7 w-6 pl-1' />

                {/* Badge */}
                 {cartItems.length > 0 && (
                            <span className='absolute top-1 right-4 md:right-7  bg-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                {totalItems}
                            </span>
                    )}


             </button>
        </div>






    </div>
  
    </header>
  )
}
