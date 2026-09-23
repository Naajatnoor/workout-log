import React from 'react';
import { IWorkout } from '@/types/info.type';
import Image from 'next/image';

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

      {/* Content */}
      <div className="p-5">

        {/* Name + Rating */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold">
            {library.name}
          </h2>

          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
            ⭐ {library.rating}
          </span>
        </div>

        {/* Difficulty */}
        <span className="mb-4 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-400">
          {library.difficulty}
        </span>

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

        {/* Workout Info */}
        <div className="grid grid-cols-2 gap-3 border-y border-gray-800 py-4 text-sm">
          <div>
            <p className="text-gray-500">Equipment</p>
            <p className="mt-1 text-gray-200">{library.equipment}</p>
          </div>

          <div>
            <p className="text-gray-500">Duration</p>
            <p className="mt-1 text-gray-200">{library.duration} min</p>
          </div>

          <div>
            <p className="text-gray-500">Sets</p>
            <p className="mt-1 text-gray-200">{library.sets}</p>
          </div>

          <div>
            <p className="text-gray-500">Reps</p>
            <p className="mt-1 text-gray-200">{library.reps}</p>
          </div>

          <div>
            <p className="text-gray-500">Calories</p>
            <p className="mt-1 text-gray-200">
              {library.caloriesBurned} kcal
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-400">
          {library.description}
        </p>

        {/* Button */}
        <button className="mt-5 w-full rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-gray-200">
          View Workout
        </button>

      </div>
    </div>
  );
};

export default LibraryCard;