import prisma from "@/app/lib/prisma"; // Prisma client'ınızı doğru bir şekilde içe aktarın

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const contactEntry = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    return new Response(JSON.stringify(contactEntry), { status: 201 });
  } catch (error) {
    console.error("Hata:", error);
    return new Response(
      JSON.stringify({ error: "İletişim kaydı oluşturulamadı." }),
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany();
    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    console.error("Hata:", error);
    return new Response(JSON.stringify({ error: "Veri çekme hatası" }), {
      status: 500,
    });
  }
}
export async function DELETE(req) {
  const { id } = await req.json(); // İsteğin gövdesinden id alın

  try {
    await prisma.contact.delete({
      where: { id: Number(id) },
    });
    return new Response(null, { status: 204 }); // Başarılı silme işlemi için 204 döner
  } catch (error) {
    console.error("Hata:", error);
    return new Response(JSON.stringify({ error: "Silme işlemi başarısız." }), {
      status: 500,
    });
  }
}
