"use client";
import React, { useState, useEffect } from "react";
import Loadingg from "@/app/components/loading";
import BlogEditor from "./../../components/BlogEditor";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch("/posts/api");
    if (!response.ok) {
      console.error("Failed to fetch posts");
    } else {
      const data = await response.json();
      setPosts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Boş bağımlılık dizisi ile yalnızca bileşen ilk yüklendiğinde çağrılır

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingPostId ? "PUT" : "POST";
    const url = editingPostId ? `/posts/api/${editingPostId}` : "/posts/api";

    setLoading(true);
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newPost = await response.json();
      if (editingPostId) {
        setPosts(
          posts.map((post) => (post.id === editingPostId ? newPost : post))
        );
      } else {
        setPosts([...posts, newPost]);
      }
      setFormData({ title: "", content: "" });
      setEditingPostId(null);
    } else {
      console.error("Failed to save post");
    }
    setLoading(false);
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      content: post.content,
    });
    setEditingPostId(post.id);
  };
  const handleContentChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };
  const handleDelete = async (id) => {
    setLoading(true);
    const response = await fetch(`/posts/api/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setPosts(posts.filter((post) => post.id !== id));
    } else {
      console.error("Failed to delete post");
    }
    setLoading(false);
  };

  if (loading) {
    return <Loadingg />;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Başlık"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-700 p-2 w-full mb-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
        <BlogEditor content={formData.content} onChange={handleContentChange} />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {editingPostId ? "Güncelle" : "Post Ekle"}
        </button>
      </form>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="my-2 p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
