import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";



export const metadata: Metadata = {
  title: "Dashboard",
  description: "This dashboard show and analysis the data that i give with login and signup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex gap-3 ">
        <Sidebar/>
        <div className="flex-1 lg:ml-56">
        <Navbar/>
        {children}
        </div>
      </body>
    </html>
  );
}
