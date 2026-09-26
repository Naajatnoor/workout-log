"use client";

import React, { createContext, useState } from "react";
import { IWorkout } from "@/types/info.type";

interface WorkoutsContextType {
  todaysPlan: IWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  saveForLater: IWorkout[];
  setSaveForLater: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  addToTodaysPlan: (workout: IWorkout) => void;
  removeFromTodaysPlan: (id: number) => void;

  addToSaved: (workout: IWorkout) => void;
  removeFromSaved: (id: number) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType>(
  {} as WorkoutsContextType
);

interface WorkoutsProviderProps {
  children: React.ReactNode;
}

const WorkoutsProvider = ({ children }: WorkoutsProviderProps) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [saveForLater, setSaveForLater] = useState<IWorkout[]>([]);

  
  const addToTodaysPlan = (workout: IWorkout) => {
    setTodaysPlan((prev) => {
    
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

     
      if (prev.length >= 5) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove from Today's Plan
  const removeFromTodaysPlan = (id: number) => {
    setTodaysPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // Save for later
  const addToSaved = (workout: IWorkout) => {
    setSaveForLater((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSaveForLater((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const shareData: WorkoutsContextType = {
    todaysPlan,
    setTodaysPlan,

    saveForLater,
    setSaveForLater,

    addToTodaysPlan,
    removeFromTodaysPlan,

    addToSaved,
    removeFromSaved,
  };

  return (
    <WorkoutsContext.Provider value={shareData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
