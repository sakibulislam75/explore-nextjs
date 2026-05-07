import Link from 'next/link';
import React from 'react';

const Bookscard = ({ data1 }) => {
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
               <img src={data1.image} alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{data1.title}</h2>
               <p>{data1.description}</p>
               <div className="card-actions justify-end">
                  <Link href={`/books/${data1.id}`} className="btn btn-primary">
                     View Details
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Bookscard;
