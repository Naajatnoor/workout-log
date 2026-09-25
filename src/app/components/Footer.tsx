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
      
        <div className="flex items-center gap-2">
          <Image
            src={footerLogo}
            alt="fit-Log"
            width={20}
            height={20}
          />

          <h1
            className={`${oswald.className} text-[13px] text-white`}
          >
            FITLOG
          </h1>
        </div>

       
        <div className="text-[#6B7280] text-[11px] sm:text-[12px] text-center">
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;