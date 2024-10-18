import prisma from "@/app//lib/prisma";
export async function GET() {
  debugger;

  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function POST(req) {
  debugger;
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
