'use client'
import React from 'react';
import { Oswald } from 'next/font/google';

import { useState } from 'react';
import Link from 'next/link';

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const planPage = () => {

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    return (
        <div>
          <div className='px-10  pt-8'>
         <h1 className={`${oswald.className} text-4xl text-[#ffffff] `}>
             MY PLAN</h1>
             <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
</div>
 
<div className=' flex flex-1 md: flex-row justify-between gap-3 bg-[#13161D] m-10 px-15 pt-5 pb-15 rounded-2xl border border-[#5f6165] '>
  <h4>Excercises</h4>
  <h4>Minutes</h4>
  <h4>Calories</h4>
</div>



 <div className="relative flex w-fit items-center gap-1 rounded-2xl border border-[#33363D] bg-[#13161D] p-1.5 mx-10 mb-3">
      
   
      <div
        className={`absolute top-1.5 bottom-1.5 w-[120px] rounded-xl bg-[#C2F800] transition-transform duration-300 ease-out ${
          activeTab === "saved" ? "translate-x-[124px]" : "translate-x-0"
        }`}
      />

      <button
        onClick={() => setActiveTab("today")}
        className={`relative z-10 w-[120px] rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
          activeTab === "today"
            ? "text-black"
            : "text-[#9CA3AF] hover:text-white"
        }`}
      >
        Todays Plan
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`relative z-10 w-[120px] rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
          activeTab === "saved"
            ? "text-black"
            : "text-[#9CA3AF] hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>


   <div
  className="
    bg-[#13161D] rounded-2xl border border-[#5f6165]
    text-center mx-3 sm:mx-6 lg:mx-10
    my-4 px-4 sm:px-8 lg:px-10  py-16 sm:py-20 lg:py-24
  "
>
  <h1
    className={`${oswald.className} text-xl sm:text-2xl lg:text-3xl text-white`}
  >
    NOTHING HERE YET
  </h1>

  <p
    className="
      text-[11px] sm:text-[12px] lg:text-sm  text-[#A1A1AA] pt-1 pb-5 max-w-md mx-auto
    "
  >
    Browse the library and add a lift to get today moving.
  </p>

  <Link
    href="/"
    className="
      inline-block
      bg-[#C2F800] text-black px-4 sm:px-5  py-2 sm:py-2.5 rounded-md font-bold text-sm sm:text-base hover:bg-[#b4e600] transition
    "
  >
    Go to workouts
  </Link>
</div>

        </div>

    );
};

export default planPage;