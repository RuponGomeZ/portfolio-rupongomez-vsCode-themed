"use client"
import Image from "next/image";
import Index from "./home/Index";
// import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
export default function Home() {
  return (
    <div className="">

      <div className="">
        {/* display file */}
        <Index />
        <ProgressBar />
      </div>
    </div>
  );
}
