import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserRouteRedirect from "./components/UserRouteRedirect";
import NavigationIcons from "./leftNavigations/NavigationIcons";
import { Toaster } from "react-hot-toast";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anthony Gomez – Full Stack Developer (Next.js, MERN, React)",
  description:
    "Anthony Gomez is a Full Stack Developer skilled in Next.js, React, Node.js, and MongoDB. Building high-performance, scalable, and modern web applications.",
  keywords: [
    "Anthony Gomez",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Web Developer Bangladesh",
  ],
  icons: {
    icon: "/favicon.png"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <UserRouteRedirect />
        <div className="">
          <div className="flex">
            <NavigationIcons />

            <div className="background-image min-h-[calc(100vh-66px)] overflow-x-auto m-0">
              {children}
            </div>
            <Toaster />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
