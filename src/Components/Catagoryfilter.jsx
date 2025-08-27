import React, { useContext } from 'react'
import { MyContext } from '../App'
export const Catagoryfilter = () => {

  const {catagory,setSelectedCatagory,selectedCatagory}=useContext(MyContext);

  return (

    <div className='overflow-x-auto scrollbar-hide'>
        <div className='flex min-w-[98vw] h-[8vh] md:h-[10vh] mt-2 md:m-5 md:pl-5 gap-5 '>
         {catagory?.map(cat=>(
             <button key={cat}
                     className={`font-semibold rounded-lg md:h-10 h-11 min-w-[100px]  
                                ${selectedCatagory === cat 
                                  ? 'bg-blue-500 text-white' 
                                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-200'
                                }`}
                     onClick={()=>setSelectedCatagory(cat)}
                     >{cat}</button>

         ))}
         
       </div>
    </div>
  )
}
