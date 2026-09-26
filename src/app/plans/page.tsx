"use client";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";

import { WorkoutsContext } from "../context/workoutsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import { faStar } from "@fortawesome/free-regular-svg-icons";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const PlanPage = () => {
  const {
    todaysPlan,
    saveForLater,
    setTodaysPlan,
    setSaveForLater,
  } = useContext(WorkoutsContext);



  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

 

  const [sortBy, setSortBy] = useState<
    "duration" | "caloriesBurned" | "rating"
  >("duration");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");



  const currentData =
    activeTab === "today" ? todaysPlan : saveForLater;

 

  const sortedData = [...currentData].sort((a, b) => {
    let result = 0;

    if (sortBy === "duration") {
      result = a.duration - b.duration;
    }

    if (sortBy === "caloriesBurned") {
      result = a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      result = a.rating - b.rating;
    }

    return sortOrder === "asc" ? result : -result;
  });

 

  const totalExercises = todaysPlan.length;

  const totalMinutes = todaysPlan.reduce(
    (sum, workout) => sum + workout.duration, 0);

  const totalCalories = todaysPlan.reduce(
    (sum, workout) => sum + workout.caloriesBurned,0);


  const handleMarkAsDone = (id: number) => {
    const workout = todaysPlan.find(
      (item) => item.id === id
    );

    setTodaysPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );

    if (workout) {
      toast.error(`"${workout.name}" marked as done`);
    }
  };


  const handleRemoveSaved = (id: number) => {
    const workout = saveForLater.find(
      (item) => item.id === id
    );

    setSaveForLater((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (workout) {
      toast.error(`"${workout.name}" removed from saved`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0D10] pb-10">
      <div className="px-5 pt-8 sm:px-8 lg:px-10">
        <h1
          className={`${oswald.className} text-3xl font-semibold text-white sm:text-4xl`}
        >
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-[#8A92A0] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

    

      <div className="mx-5 my-8 flex rounded-2xl border border-[#33363D] bg-[#13161D] px-4 py-6 sm:mx-8 sm:px-8 lg:m-10 lg:px-10 lg:py-8">

   

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {totalExercises}
          </h2>

          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Exercises
          </p>
        </div>

    

        <div className="flex flex-1 flex-col items-center justify-center border-x border-[#33363D] text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {totalMinutes}
          </h2>

          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Minutes
          </p>
        </div>

  

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {totalCalories}
          </h2>

          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Calories
          </p>
        </div>

      </div>

   

      <div className="mx-5 mb-6 flex flex-col gap-4 sm:mx-8 lg:mx-10 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative flex w-fit items-center gap-1 rounded-2xl border border-[#33363D] bg-[#13161D] p-1.5">

        

          <div
            className={`absolute bottom-1.5 top-1.5 w-[120px] rounded-xl bg-[#C2F800] transition-all duration-300 ${
              activeTab === "saved"
                ? "translate-x-[124px]"
                : "translate-x-0"
            }`}
          />

         

          <button
            onClick={() => setActiveTab("today")}
            className={`relative z-10 w-[120px] rounded-xl py-2.5 text-sm font-semibold transition ${
              activeTab === "today"
                ? "text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          {/* Saved */}

          <button
            onClick={() => setActiveTab("saved")}
            className={`relative z-10 w-[120px] rounded-xl py-2.5 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>


        <div className="flex items-center gap-2">

          <span className="text-sm text-gray-400">
            Sort:
          </span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "duration"
                  | "caloriesBurned"
                  | "rating"
              )
            }
            className="rounded-lg border border-[#33363D] bg-[#13161D] px-4 py-2.5 text-sm font-medium text-white outline-none transition focus:border-[#C2F800]"
          >
            <option value="duration">
              Duration
            </option>

            <option value="caloriesBurned">
              Calorie
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

      

          <button
            onClick={() =>
              setSortOrder((prev) =>
                prev === "asc" ? "desc" : "asc"
              )
            }
            className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-[#33363D] bg-[#13161D] text-xl text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
            title={
              sortOrder === "asc"
                ? "Ascending"
                : "Descending"
            }
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>

        </div>

      </div>

     

      {
      currentData.length === 0 ? (
        <div className="mx-5 rounded-2xl border border-[#33363D] bg-[#13161D] px-5 py-30 text-center sm:mx-10 lg:mx-10 lg:py-20">

          <h1
            className={`${oswald.className} text-2xl font-bold text-white sm:text-3xl`}
          >
            NOTHING HERE YET
          </h1>

          <p className="mb-6 mt-3 text-sm text-gray-400 sm:text-base">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="inline-block rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#AEEF00]"
          >
            Go to Workouts
          </Link>

        </div>

      ) : (

        <div className="mx-5 space-y-5 sm:mx-8 lg:mx-10">

          {sortedData.map((workout) => (

            <div
              key={workout.id}
              className="flex flex-col gap-5 rounded-2xl border border-[#33363D] bg-[#13161D] p-4 transition hover:border-[#4A4D55] sm:p-5 lg:flex-row lg:items-center lg:justify-between"
            >

              <div className="flex min-w-0 items-center gap-4 sm:gap-5">


                <div className="shrink-0">

                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={120}
                    height={120}
                    className="h-[90px] w-[90px] rounded-xl object-cover sm:h-[120px] sm:w-[120px]"
                  />

                </div>

          

                <div className="min-w-0 flex-1">

                  <h2
                    className={`${oswald.className} truncate text-xl font-semibold text-white sm:text-2xl`}
                  >
                    {workout.name}
                  </h2>

          

                  <p className="mt-1 truncate text-sm text-[#8A92A0]">
                    {workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#292D35] pt-4">


                    <div className="flex items-center gap-2 whitespace-nowrap">

                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-[15px] text-[#C2F800]"
                      />

                      <span className="text-sm text-[#9CA3AF]">
                        {workout.duration} min
                      </span>

                    </div>


                    <div className="flex items-center gap-2 whitespace-nowrap">

                      <FontAwesomeIcon
                        icon={faFire}
                        className="text-[15px] text-[#C2F800]"
                      />

                      <span className="text-sm text-[#9CA3AF]">
                        {workout.caloriesBurned} kcal
                      </span>

                    </div>


                    <div className="flex items-center gap-2 whitespace-nowrap">

                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[15px] text-[#C2F800]"
                      />

                      <span className="text-sm text-[#9CA3AF]">
                        {workout.rating}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

           

              <div className="flex shrink-0 items-center justify-end gap-3">


                <Link
                  href={`/libraries/${workout.id}`}
                  className="rounded-lg border border-[#4A4D55] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800] sm:px-5"
                >
                  View Details
                </Link>

             

                {activeTab === "saved" ? (

                  <button
                    onClick={() =>
                      handleRemoveSaved(workout.id)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#4A4D55] text-xl text-gray-400 transition hover:border-red-500 hover:text-red-500"
                    title="Remove from saved"
                  >
                    ×
                  </button>

                ) : (

                  <button
                    onClick={() =>
                      handleMarkAsDone(workout.id)
                    }
                    className="rounded-lg bg-[#C2F800] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#AEEF00] sm:px-5"
                  >
                    Mark as Done
                  </button>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default PlanPage;