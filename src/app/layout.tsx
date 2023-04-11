import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/containers/Providers";
import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "@/components/AuthContext";

export const metadata = {
  title: "ACM PDEU Student Chapter",
  description:
    "This website is the official website for the PDEU ACM student chapter.",
};

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});
async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`);

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html className={inter.className} lang="en">
      <body className="max-w-[1000px] dark:bg-dark bg-light text-dark dark:text-white mx-auto w-screen overflow-x-hidden">
        <AuthContext session={session}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
