'use client'
import { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  author: string;
}

interface CommentSectionProps {
  postId: number;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && newAuthor.trim()) {
      const comment: Comment = {
        id: Date.now(),
        text: newComment.trim(),
        author: newAuthor.trim(),
      };
      setComments([...comments, comment]);
      setNewComment('');
      setNewAuthor('');
    }
  };

  return (
    <div className="w-full mt-8">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 border border-gray-300 rounded"
            rows={3}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#3652e1] text-white font-bold py-2 px-4 rounded hover:bg-[#2a41b8]"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold text-[#3652e1]">{comment.author}</p>
            <p className="mt-2 text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

