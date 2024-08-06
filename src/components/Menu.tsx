"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Logout from "@/app/logout/logout";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { cart, counter, getCart } = useCartStore();
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/#home" onClick={closeMenu}>Home</Link>
          <Link href="/#featured" onClick={closeMenu}>Featured</Link>
          <Link href="/#categories" onClick={closeMenu}>Categories</Link>
          <Link href="/#newproducts" onClick={closeMenu}>New Products</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact Us</Link>
          <Logout />
          <Link href="/" onClick={closeMenu}>Cart({counter})</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;


function setIsLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setIsProfileOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}

