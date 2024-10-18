import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        color: "white",
        borderRadius: "5px",
      }}
    >
      Oturumu Kapat
    </button>
  );
};

export default LogoutButton;
