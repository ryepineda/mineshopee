"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const handleJoinClick = () => {
    // Use type assertion to ensure emailInput is treated as an HTMLInputElement
    const emailInputElement = document.getElementById('email-input') as HTMLInputElement;
    const emailInputValue = emailInputElement ? emailInputElement.value : '';
    
    const mailtoLink = `mailto:admin@mineshopee.com?subject=Newsletter Signup&body=Email Address: ${encodeURIComponent(emailInputValue)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-3">
          <Link href="/">
            <div className="text-2xl tracking-wide">MineShopee</div>
          </Link>
          <p>
            Lancaster New City Brgy Navarro General Trias Cavite Philippines
          </p>
          <span className="font-semibold">admin@mineshopee.com</span>
          <span className="font-semibold">+63 998 869 6924</span>
          <div className="flex gap-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={16} height={16} className="rounded-md" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={16} height={16} className="rounded-md" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.png" alt="YouTube" width={16} height={16} className="rounded-md" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <Image src="/pinterest.png" alt="Pinterest" width={16} height={16} className="rounded-md" />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <Image src="/x.png" alt="X" width={16} height={16} className="rounded-md" />
            </a>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg mb-3">COMPANY</h1>
            <div className="flex flex-col gap-3">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg mb-3">SHOP</h1>
            <div className="flex flex-col gap-3">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg mb-3">HELP</h1>
            <div className="flex flex-col gap-3">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-3">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 rounded-xl border border-gray-300"
              id="email-input"
            />
            <button
              className="w-1/4 bg-lama text-white rounded-xl"
              onClick={handleJoinClick}
            >
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/gcash.png" alt="GCash" width={40} height={20} />
            <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
            <Image src="/mastercard.png" alt="MasterCard" width={40} height={20} />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
        <div>© 2024 Mine Shopee</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₱ PHP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
