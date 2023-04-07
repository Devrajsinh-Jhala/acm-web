import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/containers/Providers";

export const metadata = {
  title: "ACM PDEU Student Chapter",
  description:
    "This website is the official website for the PDEU ACM student chapter.",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body className="max-w-[1000px] dark:bg-dark bg-light text-dark dark:text-white mx-auto w-screen overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
