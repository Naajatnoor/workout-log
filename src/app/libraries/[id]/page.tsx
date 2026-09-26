
// import { IWorkout } from "@/types/info.type";
// import Image from "next/image";
// import React from "react";
// import TodaysPlan from "@/app/components/workoutDetails/TodaysPlan";
// import SaveForToday from "@/app/components/workoutDetails/SaveForToday";

// interface IWorkoutDetailPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// const getData = async (id: string) => {
//   try {
//     const res = await fetch(
//       `https://api.abcz.workers.dev/api/fitlog/${id}`,

//       {
//       next:{
//         revalidate: 10,
//       },
//       }
//     );

//     const data = await res.json();

//     // console.log(data);

//     return data;
//   } catch (error) {
//     console.error("Error fetching workout data:", error);
//     return null;
//   }
// };

// const LibraryDetailPage = async ({
//   params,
// }: IWorkoutDetailPageProps) => {
//   const { id } = await params;

//   const workout: IWorkout = await getData(id);
//   console.log(workout);
 
//   return (
//     <div className="">
//        <div className="w-full bg-[#0C0D10] text-white p-10 ">
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-9">

   
//         <div className="w-full">
//           <Image
//             src={workout.image}
//             alt={workout.name}
//             width={740}
//             height={740}
//             className="w-full h-auto lg:h-[480px] object-cover rounded-[10px]"
//           />
//         </div>

      
//         <div className="flex flex-col">

//           <h1 className="text-2xl md:text-[26px] font-bold uppercase leading-tight">
//             {workout.name}
//           </h1>

//           <p className="mt-2 text-[12px] leading-[18px] text-[#9CA3AF] max-w-[600px]">
//             {workout.description}
//           </p>

    
//           {/* <div className="flex gap-2 mt-3">
//             {
//             workout.muscleGroups.map((muscle, index) => (
//               <span
//                 key={index}
//                 className="bg-[#BFFF00] text-black text-[9px] font-semibold px-3 py-[3px] rounded-full"
//               >
//                 {muscle}
//               </span>
//             ))}
//           </div> */}

// <div className="flex gap-2 mt-3">

//           {workout.muscleGroups?.map((muscle, index) => (
//   <span
//     key={index}
//     className="bg-[#BFFF00] text-black text-[9px] font-semibold px-3 py-[3px] rounded-full"
//   >
//     {muscle}
//   </span>
// ))}
// </div>
    
//           <div className="mt-4 rounded-xl border border-[#252932] bg-[#15181F] overflow-hidden">

          
//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Equipment
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.equipment}
//               </span>
//             </div>

          
//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Difficulty
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.difficulty}
//               </span>
//             </div>

//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Sets
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.sets}
//               </span>
//             </div>

           
//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Reps
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.reps}
//               </span>
//             </div>

       
//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Duration
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.duration} min
//               </span>
//             </div>

           
//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Calories
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.caloriesBurned} kcal
//               </span>
//             </div>

         
//             <div className="flex items-center justify-between px-4 py-3">
//               <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
//                 Rating
//               </span>

//               <span className="text-[10px] text-[#E5E7EB]">
//                 {workout.rating}
//               </span>
//             </div>

//           </div>

          
//           <div className="mt-5">
            
//             <h2 className="text-[12px] font-bold tracking-wide">
//               INSTRUCTIONS
//             </h2>

//             <ol className="mt-2 space-y-2">
              
//               {
                
//               workout.instructions.map((instruction, index) => (

//                 <li
//                   key={index}
//                   className="flex gap-3 text-[10px] leading-[16px] text-[#9CA3AF]"
//                 >
//                   <span className="text-[#6B7280] shrink-0">
//                     {index + 1}.
//                   </span>

//                   <span>{instruction}</span>
//                 </li>
//               ))}
//             </ol>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center gap-3 mt-5">

//             <TodaysPlan workout={workout}/>
    
//             <SaveForToday workout={workout}/>

//           </div>

//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LibraryDetailPage;


import { IWorkout } from "@/types/info.type";
import Image from "next/image";
import TodaysPlan from "@/app/components/workoutDetails/TodaysPlan";
import SaveForToday from "@/app/components/workoutDetails/SaveForToday";

interface IWorkoutDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getData = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      {
        next: {
          revalidate: 10,
        },
      }
    );

    if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

const LibraryDetailPage = async ({
  params,
}: IWorkoutDetailPageProps) => {
  const { id } = await params;

  const workout: IWorkout | null = await getData(id);

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">
          Workout not found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#0C0D10] text-white min-h-screen p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* IMAGE */}

        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={740}
          className="w-full h-[815px] object-cover rounded-xl"
        />

        {/* CONTENT */}

        <div>

          <h1 className="text-3xl font-bold uppercase">
            {workout.name}
          </h1>

          <p className="mt-3 text-gray-400">
            {workout.description}
          </p>

          {/* Muscle */}

          <div className="flex flex-wrap gap-2 mt-5">
            {workout.muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-black text-xs px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Details */}

          <div className="mt-8 rounded-xl border border-[#252932] bg-[#15181F]">

            {[
              ["Equipment", workout.equipment],
              ["Difficulty", workout.difficulty],
              ["Sets", workout.sets],
              ["Reps", workout.reps],
              ["Duration", `${workout.duration} min`],
              ["Calories", `${workout.caloriesBurned} kcal`],
              ["Rating", workout.rating],
            ].map(([title, value]) => (
              <div
                key={title}
                className="flex justify-between px-5 py-4 border-b border-[#252932] last:border-b-0"
              >
                <span className="text-gray-500 uppercase text-xs">
                  {title}
                </span>

                <span className="text-sm">
                  {value}
                </span>
              </div>
            ))}

          </div>

          {/* Instructions */}

          <div className="mt-8">

            <h2 className="font-bold text-lg mb-4">
              Instructions
            </h2>

            <ol className="space-y-3">

              {workout.instructions?.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-400"
                >
                  <span>{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}

            </ol>

          </div>

          {/* Buttons */}

          <div className="flex gap-3 mt-8">

            <TodaysPlan workout={workout} />

            <SaveForToday workout={workout} />

          </div>

        </div>

      </div>
    </div>
  );
};

export default LibraryDetailPage;