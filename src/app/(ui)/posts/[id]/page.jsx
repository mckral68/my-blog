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
    <div className="container mx-auto p-6 text-center">
      <div className="border rounded-lg p-6 max-w-xs mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="leading-relaxed mb-6">{post.content}</p>
        <Link href={post.link} target="_blank" className="leading-relaxed mb-6">
          İndirim için tıklayınız
        </Link>
      </div>
      <div className="flex justify-center">
        <Link href="/posts">
          <p className="m-1 cursor-pointer text-center bg-blue-500 text-white rounded-full px-3 py-1 transition duration-300 hover:bg-blue-600 md:px-4 md:py-2">
            Gönderilere dön
          </p>
        </Link>
      </div>
    </div>
  );
}
