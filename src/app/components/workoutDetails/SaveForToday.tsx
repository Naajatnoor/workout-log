"use client";

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { IWorkout } from "@/types/info.type";
import { WorkoutsContext } from "@/app/context/workoutsProvider";
import { toast } from "react-toastify";

const SaveForToday = ({ workout }: { workout: IWorkout }) => {
  const { saveForLater, addToSaved } =
    useContext(WorkoutsContext);

  const handleSaveButton = () => {
    if (saveForLater.some((item) => item.id === workout.id)) {
      toast.info("This workout is already saved.");
      return;
    }

    addToSaved(workout);

    toast.success(`"${workout.name}" saved for later!`);
  };

  return (
    <button
      className="flex items-center gap-2 bg-[#BFFF00] hover:bg-[#aef000] text-black font-semibold text-[10px] px-4 py-2.5 rounded-lg transition"
      onClick={handleSaveButton}
    >
      <FontAwesomeIcon
        icon={faBookmark}
        className="text-[13px] text-black"
      />

      <span>Save for later</span>
    </button>
  );
};

export default SaveForToday;