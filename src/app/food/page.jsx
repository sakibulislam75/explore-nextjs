import FoodCard from '@/components/Foodcard';
import { ClientSegmentRoot } from 'next/dist/client/components/client-segment';
import React from 'react';

const getPost = async () => {
   try {
      const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods', {
         cache: 'force-cache',
      });
      const data = await res.json();
      return data.data;
   } catch (error) {
      throw new Erro('data fetching failed');
   }
};

const PostPage = async () => {
   // way-1
   /*
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods', {
        cache: 'force-cache',
    });
    const fetchData = await res.json();
    const posts = fetchData.data; */

   const posts = await getPost();

   return (
      <>
         <h1 className="my-10">Toatal Food: {posts.length}</h1>
         <div className="w-11/12 mx-auto my-15 grid grid-cols-1 gap-4 md:grid-cols-3 gap-6 ">
            {posts.map((post) => (
               <FoodCard key={post.id} posts={post}></FoodCard>
            ))}
         </div>
      </>
   );
};

export default PostPage;
