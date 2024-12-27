import { Suspense } from 'react'
import { PostCard } from '@/components/PostCard'

async function PostsList() {

  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  const { posts } = await data;
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] max-w-6xl'>
      {posts.map((post: any) => (
        <div key={post.id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default function AllPosts() {
  return (
    <div className='w-full py-8 bg-[#EFEFEF] bg-no-repeat bg-center bg-cover min-h-screen'>
      <div className='flex justify-center'>
        <h1 className='text-6xl mb-8 font-bold bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent'>All Posts</h1>
      </div>
      <div className='flex justify-center'>
        <Suspense fallback={<div>Loading posts...</div>}>
          <PostsList />
        </Suspense>
      </div>
    </div>
  )
}

