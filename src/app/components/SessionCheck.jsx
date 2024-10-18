// components/SessionCheck.js

import { useSession } from "next-auth/react";

const SessionCheck = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Yükleniyorsa bir şey render etme
  }
  // Eğer session mevcutsa
  return session ? true : false;
};

export default SessionCheck;
