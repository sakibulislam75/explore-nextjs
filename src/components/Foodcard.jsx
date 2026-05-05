import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ posts }) => {
   return (
      <div className=" bg-base-100 shadow-sm h-auto flex flex-col">
         {/* Image */}
         <figure>
            <Image src={posts.image_link} alt={posts.dish_name} width={350} height={180} />
         </figure>

         <div className="card-body">
            {/* Title */}
            <h2 className="card-title">{posts.dish_name}</h2>

            {/* Category + Cuisine */}
            <p className="text-sm text-gray-500">
               {posts.category} • {posts.cuisine}
            </p>

            {/* Rating + Price */}
            <div className="flex justify-between items-center mt-2">
               <span>⭐ {posts.rating}</span>
               <span className="font-semibold">৳ {posts.price}</span>
            </div>

            {/* Button */}
            <div className="card-actions justify-end mt-3 mt-auto">
               <Link href={`/food/${posts.id}`} className="btn btn-primary ">
                  View Details
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;
