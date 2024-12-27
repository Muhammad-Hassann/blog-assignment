import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  image?: string;
}

export const PCard: React.FC<PostCardProps> = ({ id, title, body, image }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 flex flex-col h-full max-w-[300px]'>
      <div className="mb-4 rounded-lg overflow-hidden">
        <Image
          src={image || '/placeholder.svg?height=200&width=300'}
          alt={title}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <h2 className='text-xl font-bold mb-2 text-[#3652e1]'>
        {title}
      </h2>
      <p className='text-gray-600 mb-4 flex-grow'>{body.substring(0, 100)}...</p>
      <Link 
        href={`/posts/${id}`} 
        className='text-[#3652e1] hover:underline self-start mt-auto font-semibold'
      >
        Read more
      </Link>
    </div>
  )
}

