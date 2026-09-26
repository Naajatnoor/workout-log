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

    

        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={740}
          className="w-full h-[815px] object-cover rounded-xl"
        />

      

        <div>

          <h1 className="text-3xl font-bold uppercase">
            {workout.name}
          </h1>

          <p className="mt-3 text-gray-400">
            {workout.description}
          </p>

         

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