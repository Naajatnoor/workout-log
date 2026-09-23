import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo.png';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Navbar = () => {
    return (
        <nav className=" py-5  bg-[#0C0D10]  border-b border-[#333334]">
            <div className='flex justify-between items-center ml-8 mr-8'>
                 <div className=' flex items-center gap-4'>
                    <Image src={Logo} alt="fit-Log" className=''></Image>
                    <h1 className={`${oswald.className} text-[20px]  text-white `}>FITLOG</h1>
                 </div>

                 <ul className='flex justify-between items-center gap-4  text-white '>
                    <li><a href="#">Workouts</a></li>
                    <li><a href="#">My Plan</a></li>
                 </ul>

                 <div className='flex justify-between items-center gap-4 '>
                    <button className=' text-white '>Plan</button>
                    <button className='text-[#9CA3AF]'>Save</button>

                 </div>
            </div>
        </nav>
    );
};

export default Navbar;