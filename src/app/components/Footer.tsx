import Image from 'next/image';
import React from 'react';
import footerLogo from '../../assets/SVG.png';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Footer= () => {
    return (
<div className="bg-[#0C0D10] py-10 border-t border-[#333334] ">
              <div className='flex justify-between items-center ml-8 mr-8'>
                 <div className=' flex items-center gap-4'>
                    <Image src={footerLogo} alt="fit-Log" width={25}></Image>
                    <h1 className={`${oswald.className} text-[15px]  text-white `}>FITLOG</h1>
                 </div>

                 <div className=' text-[#6B7280] text-[12px]   '>
                   <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                 </div>
            </div>
        </div>
    );
};

export default Footer;