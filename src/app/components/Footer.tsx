import Image from "next/image";
import React from "react";
import footerLogo from "../../assets/SVG.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Footer = () => {
  return (
    <footer className="bg-[#0C0D10] py-8 sm:py-10 border-t border-[#333334]">
      <div
        className="
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
          mx-5 sm:mx-8
        "
      >
        <div className="flex items-center gap-1 sm:gap-2">
  <Image
    src={footerLogo}
    alt="FitLog"
    width={28}
    height={28}
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
  />

  <h1
    className={`${oswald.className} text-[12px] sm:text-sm md:text-lg text-white font-bold`}
  >
    FITLOG
  </h1>
</div>

       
        <div className="text-[#6B7280] text-[9px] sm:text-[12px] text-center">
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;