"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push("/");
  };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 xl:gap-4 relative">
      <div className="relative group">
        <div
          className={`cursor-pointer flex items-center justify-center ${isLoggedIn ? 'bg-lama' : ''} rounded-full p-1 hover:bg-gray-200 transition-all`}
          style={{
            borderRadius: '50%',
          }}
          onClick={handleProfile}
        >
          <Image
            src={isLoggedIn ? "/profile_white.png" : "/profile.png"}
            alt="Profile"
            width={22}
            height={22}
          />
        </div>
        {isProfileOpen && (
          <div
            ref={profileRef}
            className="absolute p-4 rounded-md top-10 right-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20"
          >
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200 rounded">Profile</Link>
            <div
              className="mt-2 cursor-pointer hover:bg-gray-200 rounded px-4 py-2"
              onClick={handleLogout}
            >
              {isLoading ? "Logging out" : "Logout"}
            </div>
          </div>
        )}
      </div>
      <Image
        src="/notification.png"
        alt="Notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="Cart" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
