import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* generateStaticParams ব্যবহার করা হয় build time এ dynamic pages আগেই তৈরি (prebuilt) করার জন্য।
যখন data আগে থেকেই জানা থাকে (যেমন blog, books), তখন fast loading + SEO এর জন্য ব্যবহার করা হয়। */

export async function generateStaticParams() {
   const res = await fetch('http://localhost:3004/books');
   const books = await res.json();
   //[{bookId:1},{bookId:2},{bookId:3}]--({})
   return books.map((book) => ({
      bookId: book.id.toString(),
   }));
}

const BookDetailPage = async ({ params }) => {
   const { bookId } = await params;
   const res = await fetch(`http://localhost:3004/books/${bookId}`, {
      cache: 'no-store',
   });
   const bookData = await res.json();
   return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
         <div className="card w-96 bg-base-100 shadow-xl">
            {/* Image */}
            <figure>
               <Image src={bookData.image} alt={bookData.title} width={400} height={250} />
            </figure>

            <div className="card-body">
               <h2 className="card-title">{bookData.title}</h2>

               <p>{bookData.author}</p>
               <p>{bookData.category}</p>
               <p className="text-sm">{bookData.description}</p>

               <div className="flex justify-between mt-2">
                  <span className="font-bold text-primary">${bookData.price}</span>

                  <span>⭐ {bookData.rating}</span>
               </div>

               <p className="text-xs opacity-70">Published: {bookData.publishedYear}</p>
            </div>
         </div>
      </div>
   );
};

export default BookDetailPage;
