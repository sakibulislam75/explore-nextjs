import Image from 'next/image';
import React from 'react';

const FoodDetails = async ({ params }) => {
   const { foodId } = await params;
   const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
   const data = await res.json();
   const fetchData = data.data;

   return (
      <div className="max-w-md mx-auto card bg-base-100 shadow-xl my-20">
         <figure>
            <Image src={fetchData.image_link} alt={fetchData.dish_name} height={100} width={350} />
         </figure>

         <div className="card-body">
            <h1 className="card-title text-xl">{fetchData.dish_name}</h1>

            <p className="text-sm text-gray-500">
               {fetchData.category} • {fetchData.cuisine}
            </p>

            <div className="flex justify-between items-center mt-2">
               <span>⭐ {fetchData.rating}</span>
               <span className="font-semibold">৳ {fetchData.price}</span>
            </div>

            <p className="mt-3 text-sm">{fetchData.origin_and_popularity}</p>

            <div className="card-actions justify-end mt-4">
               <button className="btn btn-primary">Order Now</button>
            </div>
         </div>
      </div>
   );
};

export default FoodDetails;
