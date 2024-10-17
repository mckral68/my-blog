import prisma from "@/app/lib/prisma";
import Link from "next/link";
export default async function PostDetail({ params }) {
  const { id } = params; // Dinamik parametreyi al
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) }, // ID'yi integer olarak kullan
  });
  if (!post) {
    return <h1>Post not found</h1>;
  }
  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-600 leading-relaxed mb-6">{post.content}</p>
      </div>
      <Link href="/posts">
        <p className="mt-4 text-blue-600 hover:underline cursor-pointer">
          Gönderilere dön
        </p>
      </Link>
      
    </div>
  );
}
