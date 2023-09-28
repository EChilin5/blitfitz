import React from "react";

const WorkoutSelection = () => {
  const workouts = ["chest", "back", "arms", "shoulders", "rest"];

  return (
    <div>
      <h1>Work out Programs</h1>
      <div>
        {workouts.map((exercise) => {
          return (
            <div key={exercise}>
              <h3>{exercise}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutSelection;
