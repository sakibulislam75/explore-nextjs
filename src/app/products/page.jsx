import Image from 'next/image';
import React from 'react';

export const metadata = {
   title: 'Products',
   description: '...',
};

const getData = async () => {
   const res = await fetch(`http://localhost:3004/products`, {
      cache: 'no-store',
   });
   if (!res.ok) {
      throw new Error('Api fetch failed');
   }
   return res.json();
};
const ProductsPage = async () => {
   const data = await getData();
   return (
      <>
         <span>
            <h1 className="mt-10">Total: {data.length}</h1>
         </span>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
            {data.map((dt) => (
               <div
                  key={dt.id}
                  className="border rounded-xl p-4 shadow-md hover:shadow-lg transition w-80 flex flex-col"
               >
                  {/* Image */}
                  <Image
                     src={dt.image}
                     alt={dt.name}
                     height={180}
                     width={350}
                     className="w-full h-40 object-cover rounded-lg"
                  />

                  {/* Info */}
                  <h2 className="text-xl font-semibold mt-3">{dt.name}</h2>

                  <p className="text-gray-500 text-sm">{dt.category}</p>

                  <p className="mt-2 text-sm">{dt.description}</p>

                  {/* Price + Rating */}
                  <div className="flex justify-between items-center mt-3">
                     <span className="font-bold text-green-600">৳ {dt.price}</span>

                     <span className="text-yellow-500">⭐ {dt.rating}</span>
                  </div>

                  {/* Button */}
                  <button className="mt-4 btn w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-auto">
                     View Details
                  </button>
               </div>
            ))}
         </div>
      </>
   );
};
export default ProductsPage;
