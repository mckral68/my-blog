"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/posts/api");
      if (!response.ok) {
        console.error("Failed to fetch posts");
        return;
      }
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/posts/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const newPost = await response.json();
      setPosts([...posts, newPost]);
      setTitle("");
      setContent("");
    } else {
      console.error("Failed to create post");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Gönderiler</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 border border-gray-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {post.title}
            </h2>
            <Link
              className="text-blue-600 hover:underline cursor-pointer"
              href={`/posts/${post.id}`}
            >
              Detayları Göster
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
