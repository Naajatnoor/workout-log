import React from 'react';
import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0C0D10] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">

        {/* 404 */}
        <div className="relative mb-6">
          <h1
            className={`${oswald.className} text-[120px] sm:text-[160px] md:text-[200px] leading-none font-bold text-[#15171D]`}
          >
            404
          </h1>

          <span
            className={`${oswald.className} absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl text-[#C2F800]`}
          >
            404
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl text-white tracking-wide`}
        >
          WORKOUT NOT FOUND
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
          Looks like this workout took a rest day. The page you&apos;re
          looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            mt-7
            px-6
            py-3
            rounded-lg
            bg-[#C2F800]
            text-black
            font-bold
            text-sm
            sm:text-base
            hover:bg-[#b4e600]
            hover:-translate-y-0.5
            transition-all
            duration-200
            shadow-[0_0_25px_rgba(194,248,0,0.15)]
          "
        >
          ← Back to Workouts
        </Link>

        {/* Small bottom text */}
        <p className="mt-8 text-[11px] uppercase tracking-[3px] text-[#4B4D52]">
          Train hard • Log honest
        </p>
      </div>
    </main>
  );
};

export default NotFound;