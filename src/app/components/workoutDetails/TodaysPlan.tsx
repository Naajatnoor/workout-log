"use client";

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { IWorkout } from "@/types/info.type";
import { WorkoutsContext } from "@/app/context/workoutsProvider";
import { toast } from "react-toastify";

const TodaysPlan = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, addToTodaysPlan } =
    useContext(WorkoutsContext);

  const handleTodaysPlan = () => {
    if (todaysPlan.some((item) => item.id === workout.id)) {
      toast.info("This workout is already in your plan.");
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.warning("You can add maximum 5 workouts for today.");
      return;
    }

    addToTodaysPlan(workout);

    toast.success(`"${workout.name}" added to today's plan!`);
  };

  return (
    <button
      className="flex items-center gap-2 bg-[#BFFF00] hover:bg-[#aef000] text-black font-semibold text-[10px] px-4 py-2.5 rounded-lg transition"
      onClick={handleTodaysPlan}
    >
      <FontAwesomeIcon
        icon={faCalendarPlus}
        className="text-[13px] text-black"
      />

      <span>Add to today's plan</span>
    </button>
  );
};

export default TodaysPlan;