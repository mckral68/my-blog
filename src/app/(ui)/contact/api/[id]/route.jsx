import prisma from "@/app/lib/prisma";

// Belirli bir iletişim mesajını silme
export async function DELETE(req, { params }) {
  const { id } = params;

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
