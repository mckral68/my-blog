"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">Gönderiler</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 border border-gray-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 "
          >
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <Link
              className="hover:underline cursor-pointer"
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
