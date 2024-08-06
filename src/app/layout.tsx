import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mine Shopee | E-Commerce",
  description: "Your destination for top-notch digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head id="home">
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar />
          {/* <div id="fb-root"></div> */}
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0&appId=423717755434492" nonce="IKKbY8L5"></script>          
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
