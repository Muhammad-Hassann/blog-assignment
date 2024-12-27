'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { PCard } from "./PCardHome";

interface Post {
  id: number;
  title: string;
  body: string;
  image?: string;
}

const BestPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBestPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts?limit=3");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-[#3652e1] flex items-center justify-center">
        <div className="text-white text-2xl">Loading best posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-[#3652e1] flex items-center justify-center">
        <div className="text-white text-2xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="lg:h-screen bg-[#3652e1] h-full pb-8 w-full bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col lg:flex-row">
      <div className="lg:w-1/3 lg:pl-28 w-full flex justify-center mt-6 flex-wrap gap-4 lg:flex-col lg:gap-0">
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2">Best</h1>
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 text-white">
          Article
        </h1>
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 lg:mb-6">
          Today
        </h1>
        <div className="w-full m-auto flex justify-center lg:block lg:justify-normal">
          <Link
            href="/posts"
            className="text-[#3652e1] bg-white font-bold py-4 px-6 rounded-full ml-4 active:scale-[0.96]"
          >
            See all posts
          </Link>
        </div>
      </div>
      <div className="lg:w-2/3 w-full mt-16 flex justify-center flex-wrap gap-6 lg:justify-normal">
        {posts.map((post) => (
          <PCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BestPost;

