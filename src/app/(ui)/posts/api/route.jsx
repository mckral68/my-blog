import prisma from "@/app//lib/prisma";
export async function GET() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function POST(req) {
  const { title, content } = await req.json(); // İstekten JSON verilerini al
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Post oluşturulurken bir hata oluştu.", error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
