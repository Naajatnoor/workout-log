
import { IWorkout } from "@/types/info.type";
import Image from "next/image";
import React from "react";

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
      next:{
        revalidate: 10,
      },
      }
    );

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching workout data:", error);
    return null;
  }
};

const LibraryDetailPage = async ({
  params,
}: IWorkoutDetailPageProps) => {
  const { id } = await params;

  const workout: IWorkout = await getData(id);

  return (
    <div className="">
       <div className="w-full bg-[#0C0D10] text-white p-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-9">

        {/* LEFT - IMAGE */}
        <div className="w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={740}
            height={740}
            className="w-full h-auto lg:h-[480px] object-cover rounded-[10px]"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="flex flex-col">

          {/* Title */}
          <h1 className="text-2xl md:text-[26px] font-bold uppercase leading-tight">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-2 text-[12px] leading-[18px] text-[#9CA3AF] max-w-[600px]">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="flex gap-2 mt-3">
            {workout.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#BFFF00] text-black text-[9px] font-semibold px-3 py-[3px] rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* DETAILS BOX */}
          <div className="mt-4 rounded-xl border border-[#252932] bg-[#15181F] overflow-hidden">

            {/* Equipment */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
                Equipment
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
                Difficulty
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
                Sets
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
                Reps
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.reps}
              </span>
            </div>

       
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
                Duration
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.duration} min
              </span>
            </div>

           
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#252932]">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929AF] uppercase">
                Calories
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.caloriesBurned} kcal
              </span>
            </div>

         
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[9px] font-bold tracking-wider text-[#8B929D] uppercase">
                Rating
              </span>

              <span className="text-[10px] text-[#E5E7EB]">
                {workout.rating}
              </span>
            </div>

          </div>

          
          <div className="mt-5">
            <h2 className="text-[12px] font-bold tracking-wide">
              INSTRUCTIONS
            </h2>

            <ol className="mt-2 space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[10px] leading-[16px] text-[#9CA3AF]"
                >
                  <span className="text-[#6B7280] shrink-0">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 mt-5">

            {/* Add to plan */}
            <button className="flex items-center gap-2 bg-[#BFFF00] hover:bg-[#aef000] text-black font-semibold text-[10px] px-4 py-2.5 rounded-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="12" y1="14" x2="12" y2="18" />
                <line x1="10" y1="16" x2="14" y2="16" />
              </svg>

             <h1> Add to todays plan</h1>
            </button>

    

            <button className="flex items-center gap-2 border border-[#303641] text-[#D1D5DB] hover:bg-[#171A20] text-[10px] px-4 py-2.5 rounded-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>

              Save for later
            </button>

          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default LibraryDetailPage;