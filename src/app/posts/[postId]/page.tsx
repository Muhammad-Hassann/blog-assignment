
import Image from 'next/image';
import CommentSection from '@/components/Comment';

export default async function PostPage({ params }: { params: { postId: string } }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  let post = await response.json();
 

  return (
    <div className='w-full bg-[#EFEFEF] bg-no-repeat bg-center bg-cover min-h-screen'>
    <div className="flex justify-center pt-8">
      <div className="w-[80%] max-w-4xl flex items-center flex-col">
        <div className="w-full mb-6">
          <h1 className='text-4xl font-bold bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent'>
            {post.title}
          </h1>
        </div>
        <div className="w-full flex justify-center mb-4 relative rounded-xl overflow-hidden">
          <Image
            src={post.image || '/girl.jpg'}
            alt={post.title}
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="w-full text-justify mt-6 mb-16">
          <p className="text-gray-700 leading-relaxed">{post.body}</p>
        </div>
        <CommentSection postId={post.id} />
      </div>
    </div>
  </div>
  );
}

