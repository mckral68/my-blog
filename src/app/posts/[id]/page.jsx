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
    <div className="container mx-auto p-6">
      <div className=" border rounded-lg p-6">
        <h1 className="text-3xl font-bold  mb-4">{post.title}</h1>
        <p className=" leading-relaxed mb-6">{post.content}</p>
        <Link
          href={post.link}
          target="_blank"
          className=" leading-relaxed mb-6"
        >
          İndirim için tıklayınız
        </Link>
      </div>
      <Link href="/posts" className="border">
        <p className="mt-4 hover:underline cursor-pointer">Gönderilere dön</p>
      </Link>
    </div>
  );
}
