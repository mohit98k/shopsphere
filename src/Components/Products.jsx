import React, { useContext } from 'react';
import { ProductCards } from './ProductCards'
import { Catagoryfilter } from './Catagoryfilter';
import { MyContext } from '../App';



export const Products = () => {

  const {selectedCatagory,products,searchTerm}=useContext(MyContext);

  return (
    <>

    <Catagoryfilter />

    <div className='container mx-auto p-4 md:p-8 '>

    
    <div className='flex justify-between p-2 md:ml-7 md:mr-7 scroll-smooth'>

      <p className='text-2xl font-bold '>{selectedCatagory}</p>

      <p className='font-semibold text-gray-500'>
              {products.filter(
                product => selectedCatagory === "All Products" || product.category === selectedCatagory
              ).length} products found</p>
    </div>

    

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* dynamic product grid */}
         {  products
                    .filter(product =>
                      (selectedCatagory === "All Products" || product.category === selectedCatagory) && (product.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    )
                    .map(product => (
                      <ProductCards  product={product} />
                      ))
          }

          
      </div>
    </div>
    </>
  )
}
