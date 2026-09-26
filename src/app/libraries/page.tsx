// import React from 'react';
// import { IWorkout } from '@/types/info.type';
// import LibraryCard from '../components/LibraryCard';
// import { Oswald } from 'next/font/google';



// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });


// const getData =async() =>
// {
//     const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
//       return res.json();  
// }


// const librariesPage =async() => {
  
//     const Libraries : IWorkout[] = await getData();
//     console.log(Libraries)
    
//     return (
//        <div>
//         <div className='m-12'>
//         <h1 className={`${oswald.className} text-5xl text-white`}>THE LIBRARY</h1>
//          <p className='text-[#9CA3AF] text-[18px] pt-3'>Twelve lifts covering every major muscle group.</p>
// </div>
// <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4 m-10 '>
//     {
//         Libraries.map(library => (<LibraryCard key= {library.id } library={library}></LibraryCard>))
//     }
// </div>

//        </div>

//     );
// };

// export default librariesPage;


import React from "react";
import { IWorkout } from "@/types/info.type";
import LibraryCard from "../components/LibraryCard";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const LibrariesPage = async () => {
  const Libraries: IWorkout[] = await getData();

  return (
    <div id="library">
      <div className="m-12">
        <h1 className={`${oswald.className} text-5xl text-white`}>
          THE LIBRARY
        </h1>

        <p className="text-[#9CA3AF] text-[18px] pt-3">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4 m-10">
        {Libraries.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </div>
  );
};

export default LibrariesPage;