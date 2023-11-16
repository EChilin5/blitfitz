import React from "react";

const WorkoutSelection = () => {
  const workouts = ["chest", "back", "arms", "shoulders", "legs", "rest"];

  const chestWork = [
    "bench press",
    "dumbell chest fly",
    "push up",
    "cable crossover",
  ];
  const backWork = [
    "Bent-over row",
    "seated cable rows",
    "renegade row",
    "reverse fly",
  ];
  const armWork = [
    "bicep curl",
    "hammer curl",
    "dumbell pullover",
    "tricep extension",
  ];
  const shoulders = [
    "lateral raise",
    "upright row",
    "face pulls",
    "dumbell upright rows",
  ];

  return (
    <div>
      <h1 className="workout-heading">Work out Programs</h1>
      <hr />
      <div className="week-selection">
        {workouts.map((exercise) => {
          return (
            <div key={exercise}>
              <h3 className="workout-title">{exercise}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutSelection;
