import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="navbar-container">
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">MineShopee</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-2/3 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">MineShopee</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/#home">Home</Link>
            <Link href="/#featured">Featured</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/#newproducts">New Products</Link>
            <Link href="/#contact">Contact Us</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/3 flex justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
