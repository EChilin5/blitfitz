import React from "react";
import WeeklyCalendar from "../components/FitPageComponent/WeeklyCalendar";
import WorkoutSelection from "../components/FitPageComponent/WorkoutSelection";

const FitPage = () => {

  // sunday will be 0
  // Monday will be 1 
  // Tuesday will be 2
  let reduceDayCounter = [ 0,1,2,3,4,5,6];

  const setSunday = () =>{
    let currentDay = currentDay.toLocaleDateString();
  }


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
