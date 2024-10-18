import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Kullanıcı Adı",
          type: "text",
          placeholder: "Kullanıcı adını girin",
        },
        password: {
          label: "Şifre",
          type: "password",
          placeholder: "Şifrenizi girin",
        },
      },
      async authorize(credentials) {
        // Kullanıcı doğrulama işlemi
        if (
          credentials.username === "oguz" &&
          credentials.password === "C3q7654321."
        ) {
          return { id: 1, name: "Admin" }; // Başarılı girişte döndürülmesi gereken kullanıcı verisi
        } else {
          return null; // Başarısız giriş
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login", // Giriş sayfasının yolu
  },
  session: {
    strategy: "jwt", // JWT kullan
    maxAge: 30 * 24 * 60 * 60, // 30 gün
    updateAge: 24 * 60 * 60, // 24 saat
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // JWT gizli anahtar
  },
};
