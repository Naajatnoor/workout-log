import React from 'react';
import img from '../assets/banner.png'
import { Oswald } from 'next/font/google';
import Image from 'next/image';


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Banner = () => {
    return (
<section >

       <div className='  flex justify-between items-center gap-4 bg-[#15171D] px-10 mx-6 my-8 rounded-2xl '>

         <div className='  space-y-4'>
            <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
            <h1 className={`${oswald.className} text-6xl text-[#ffffff]`}>TRAIN WITH INTENT. LOG <br />
             EVERY SET.</h1>
             <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into todays plan, and watch the weeks work add up.</p>
            
            <button className='bg-[#C2F800] text-black p-3 rounded-[6px] font-bold'>BROWSE WORKOUTS</button>
        </div>

        <div>
              <Image src={img} alt='bannerImage' width={400} className='m-5'>

              </Image>
         </div>

         </div>
     
        
     </section>
    );
};

export default Banner;