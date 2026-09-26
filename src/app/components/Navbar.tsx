"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Oswald } from "next/font/google";

import Logo from "../../assets/logo.png";
import { WorkoutsContext } from "@/app/context/workoutsProvider";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Navbar = () => {
  const pathname = usePathname();

  const { todaysPlan, saveForLater } = useContext(WorkoutsContext);

  const active ="rounded-full bg-[#1A2312] px-4 py-3 text-[#C2F800] transition";

  const normal ="rounded-full px-4 py-3 text-[#9CA3AF] transition hover:text-white";

  return (
    <nav className="border-b border-[#333334] bg-[#0C0D10] py-5">
      <div className="mx-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="FitLog"
            width={30}
            height={30}
          />

          <h1 className={`${oswald.className} text-xl text-white font-bold`}>
            FITLOG
          </h1>
        </Link>

        <ul className="hidden items-center gap-3 lg:flex">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? active : normal}
            >
              Workouts
            </Link>
          </li>

         
          <li>
            <Link
              href="/plans"
              className={pathname === "/plans" ? active : normal}
            >
              My Plan
            </Link>
          </li>

        </ul>

        <div className="hidden items-center gap-8 lg:flex">
         
          <Link
            href="/plans"
            className="text-white transition hover:text-[#C2F800]"
          >
            Plan <span  className="bg-[#C2F800] px-2  py-1 rounded-full text-black">{todaysPlan.length}</span>
          </Link>

    
          <Link
            href="/plans"
            className="text-[#9CA3AF] transition hover:text-white"
          >
            Save <span  className=" border border-amber-50 px-2  py-1 rounded-full text-white">{saveForLater.length}</span>
          </Link>
        </div>

        <div className="lg:hidden">
          <label
            htmlFor="navbar-toggle"
            className="cursor-pointer text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>

      <input
        id="navbar-toggle"
        type="checkbox"
        className="peer hidden"
      />

    
      <div className="mt-5 hidden border-t border-[#333334] peer-checked:block lg:hidden">
        <ul className="flex flex-col px-8 pt-4">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? active : normal}
            >
              Workouts
            </Link>
          </li>

       
          <li className="py-4">
            <Link
              href="/plans"
              className={pathname === "/plans" ? active : normal}
            >
              My Plan
            </Link>
          </li>

    
      <li className="flex items-center gap-8 border-t border-[#333334] pt-4">
          
          <Link
            href="/plans"
            className="text-white transition hover:text-[#C2F800]"
          >
            Plan <span  className="bg-[#C2F800] px-2  py-1 rounded-full text-black">{todaysPlan.length}</span>
        </Link>
             </li>
             <li>

      
    <Link
            href="/plans"
            className="text-[#9CA3AF]   transition hover:text-white p-6"
          >
            Save <span  className=" border border-amber-50 px-2  py-1 rounded-full text-white">{saveForLater.length}</span>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;