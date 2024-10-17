"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
export const HomePage = () => {
  const menuItems = [{ name: "Teknoloji" }];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts/api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="container mx-auto p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Bloğuma Hoş Geldiniz!</h1>
        <p className="mt-2">
          En güncel teknolojilerle ilgili gelişmeler, ipuçları ve ilham verici
          makale ve eğitimler için doğru yerdesiniz.
        </p>
      </header>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Son Yazılar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="p-4 rounded shadow bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4">{post.content}</p>

              <Link
                className="hover:underline cursor-pointer text-blue-600 dark:text-blue-400"
                href={`/posts/${post.id}`}
              >
                Devamını Oku
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Popüler Konular</h2>
        <div className="flex flex-wrap">
          {menuItems.map((k, i) => (
            <span
              key={i}
              className="bg-blue-500 text-white rounded-full px-4 py-2 mr-2 mb-2 dark:bg-blue-600"
            >
              {k.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
