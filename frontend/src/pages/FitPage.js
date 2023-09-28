import React from "react";
import WeeklyCalendar from "../components/FitPageComponent/WeeklyCalendar";
import WorkoutSelection from "../components/FitPageComponent/WorkoutSelection";

const FitPage = () => {
  return (
    <div>
      <div>
        <WorkoutSelection />
      </div>
      <div>
        <WeeklyCalendar />
      </div>
      {/* add notes ability to notes  */}
    </div>
  );
};

export default FitPage;
