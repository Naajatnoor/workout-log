import React from 'react';
import { IWorkout } from '@/types/info.type';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import {
  faStar
} from "@fortawesome/free-regular-svg-icons";



interface LibraryCardProps {
  library: IWorkout;
}

const LibraryCard = ({ library }: LibraryCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0C0D10] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Image */}
      <div className="relative  h-56 w-full ">
        <Image
          src={library.image}
          alt={library.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {library.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-300"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="mb-2 flex items-center justify-between gap-3">
          <h2 className="text-[25px] font-bold">
            {library.name}
          </h2>
        </div>

        <div>
            <p className="my-1 text-gray-500">{library.equipment}</p>
          </div>

<div className="flex flex-wrap items-center gap-x-15 gap-y-4 border-t border-[#292D35] pt-5 mt-5">

  <div className="flex items-center gap-2 whitespace-nowrap">
    <FontAwesomeIcon
      icon={faClock}
      className="text-[#9CA3AF] text-[16px]"
    />

    <span className="text-[16px] text-[#9CA3AF]">
      {library.duration} min
    </span>
  </div>

  {/* Calories */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <FontAwesomeIcon
      icon={faFire}
      className="text-[#9CA3AF] text-[16px]"
    />

    <span className="text-[16px] text-[#9CA3AF]">
      {library.caloriesBurned} kcal
    </span>
  </div>

  {/* Rating */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <FontAwesomeIcon
      icon={faStar}
      className="text-[#9CA3AF] text-[16px]"
    />

    <span className="text-[16px] text-[#9CA3AF]">
      {library.rating}
    </span>
  </div>

</div>



        {/* Button */}

        <Link href={`/libraries/${library.id}`}>
           
           <button className="mt-5 w-full rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-gray-200">
          View Workout
        </button>

        </Link>
        

      </div>
    </div>
  );
};

export default LibraryCard;