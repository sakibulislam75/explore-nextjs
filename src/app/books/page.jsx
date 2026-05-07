import Bookscard from '@/components/Bookscard';
import FoodCard from '@/components/Foodcard';
import React from 'react';
const fetchData = async () => {
   try {
      const res = await fetch('http://localhost:3004/books', {
         next: {
            revalidate: 20,
         },
      });
      return res.json();
   } catch (error) {
      throw new Error('data fetching failed');
   }
};
const BooksPage = async () => {
   const data = await fetchData();
   return (
      <div className="my-10">
         <h1>Total:{data.length}</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            {data.map((dt) => (
               <Bookscard key={dt.id} data1={dt}></Bookscard>
            ))}
         </div>
      </div>
   );
};

export default BooksPage;
