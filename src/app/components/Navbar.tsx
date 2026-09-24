// import Image from 'next/image';
// import React from 'react';
// import Logo from '../../assets/logo.png';
// import { Oswald } from 'next/font/google';

// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

// const Navbar = () => {
//     return (
//         <nav className=" py-5  bg-[#0C0D10]  border-b border-[#333334]">
//             <div className='flex justify-between items-center ml-8 mr-8'>
//                  <div className=' flex items-center gap-4'>
//                     <Image src={Logo} alt="fit-Log" className=''></Image>
//                     <h1 className={`${oswald.className} text-[20px]  text-white `}>FITLOG</h1>
//                  </div>

//                  <ul className='flex justify-between items-center gap-4  text-white '>
//                     <li><a href="#">Workouts</a></li>
//                     <li><a href="#">My Plan</a></li>
//                  </ul>

//                  <div className='flex justify-between items-center gap-4 '>
//                     <button className=' text-white '>Plan</button>
//                     <button className='text-[#9CA3AF]'>Save</button>

//                  </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo.png';
import { Oswald } from 'next/font/google';
import Link from 'next/link';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const Navbar = () => {
  return (
    <nav className="py-5 bg-[#0C0D10] border-b border-[#333334]">
      <div className="mx-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="fit-Log" />
          <h1 className={`${oswald.className} text-[20px] text-white`}>
            FITLOG
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4 text-white">
         <li>
          <Link href="#"  className="block py-3 hover:text-[#9CA3AF] transition">
           Workouts
          </Link>
          </li>
          <li>
          <Link href="#"  className="block py-3 hover:text-[#9CA3AF] transition">
          My Plan
          </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-white">
            Plan
          </button>

          <button className="text-[#9CA3AF]">
            Save
          </button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Hidden Checkbox */}
      <input
        id="navbar-toggle"
        type="checkbox"
        className="peer hidden"
      />

      {/* Mobile Menu */}
      <div className="hidden peer-checked:block lg:hidden mt-5 border-t border-[#333334]">
        <ul className="flex flex-col px-8 pt-4 text-white">

          <li>
          <Link href="#"  className="block py-3 hover:text-[#9CA3AF] transition">
           Workouts
          </Link>
          </li>
          <li>
          <Link href="#"  className="block py-3 hover:text-[#9CA3AF] transition">
          My Plan
          </Link>
          </li>

            
          <li className="flex items-center gap-5 py-3 border-t border-[#333334] mt-2">
            <button className="text-white">
              Plan
            </button>

            <button className="text-[#9CA3AF]">
              Save
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
