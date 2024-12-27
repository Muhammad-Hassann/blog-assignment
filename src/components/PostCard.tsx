import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  image?: string;
}

export const PostCard: React.FC<PostCardProps> = ({ id, title, body, image }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 flex flex-col h-full'>
      <div className="mb-4 rounded-lg overflow-hidden">
        <Image
          src={image || '/girl.jpg'}
          alt={title}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <h2 className='text-xl font-bold mb-2 bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent'>
        {title}
      </h2>
      <p className='text-gray-600 mb-4 flex-grow'>{body.substring(0, 100)}...</p>
      <Link 
        href={`/posts/${id}`} 
        className='text-blue-500 hover:underline self-start mt-auto'
      >
        Read more
      </Link>
    </div>
  )
}

