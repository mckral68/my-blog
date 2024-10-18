import prisma from "@/app/lib/prisma";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
export default async function PostDetail({ params }) {
  const { id } = params; // Dinamik parametreyi al
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) }, // ID'yi integer olarak kullan
  });
  const cleanHTML = DOMPurify.sanitize(post.content);
  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="container mx-auto p-6 text-center">
      <div className="border rounded-lg p-6 max-w-xl mx-auto shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/posts">
          <p className="m-1 cursor-pointer text-center bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 hover:bg-blue-600">
            Gönderilere dön
          </p>
        </Link>
      </div>
    </div>
  );
}
