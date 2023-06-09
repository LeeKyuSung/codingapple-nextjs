import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">상품목록</Link>
          <Link href="/cart">장바구니</Link>
          <Link href="/forum">게시판</Link>
          {session ? <LogoutBtn></LogoutBtn> : <LoginBtn></LoginBtn>}
          <Link href="/register">회원가입</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
