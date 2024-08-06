"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";

const Logout = () => {
  const router = useRouter();
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleLogout = async () => {
    Cookies.remove("refreshToken");
    await wixClient.auth.logout(window.location.href);
    window.location.reload(); // Refresh the page
  };

  return (
    <div>
      <Link onClick={handleLogout} href="#" className="mt-2 cursor-pointer">
        Logout
      </Link>
    </div>
  );
};

export default Logout;
