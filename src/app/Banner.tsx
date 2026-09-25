// import React from 'react';
// import img from '../assets/banner.png';
// import Image from 'next/image';
// import { Oswald } from 'next/font/google';


// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

// const Banner = () => {
//     return (
// <section >

//        <div className=' flex justify-between items-center gap-4 bg-[#15171D] px-10 m-6  my-8 rounded-2xl '>

//          <div className='  space-y-4'>
//             <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
//             <h1 className={`${oswald.className} text-6xl text-[#ffffff]`}>TRAIN WITH INTENT. LOG <br />
//              EVERY SET.</h1>
//              <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into todays plan, and watch the weeks work add up.</p>
            
//             <button className='bg-[#C2F800] text-black p-3 rounded-md font-bold'>BROWSE WORKOUTS</button>
//         </div>

//         <div>
//               <Image src={img} alt='bannerImage' width={400} className='m-5'>

//               </Image>
//          </div>

//          </div>
     
        
//      </section>
//     );
// };

// export default Banner;





import React from "react";
import img from "../assets/banner.png";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Banner = () => {
  return (
    <section>
      <div
        className="
          flex flex-col lg:flex-row
          justify-between items-center
          gap-8
          bg-[#15171D]
          px-5 sm:px-8 lg:px-10
          py-8 lg:py-6
          m-3 sm:m-5 lg:m-6
          my-5 sm:my-6 lg:my-8
          rounded-2xl
        "
      >
        {/* Content */}
        <div className="space-y-4 w-full lg:w-1/2">
          <p className="text-[#C2F800] text-sm sm:text-base">
            WORKOUT LIBRARY
          </p>

          <h1
            className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ffffff] leading-tight`}
          >
            TRAIN WITH INTENT. LOG <br className="hidden sm:block" />
            EVERY SET.
          </h1>

          <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <button
            className="
              bg-[#C2F800]
              text-black
              px-4 py-3
              rounded-md
              font-bold
              text-sm sm:text-base
              hover:bg-[#b4e600]
              transition
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={img}
            alt="bannerImage"
            width={400}
            className="
              w-64
              sm:w-72
              md:w-80
              lg:w-[400px]
              h-auto
              m-0 lg:m-5
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;