import React from "react";

const WorkoutSelection = () => {
  const workouts = ["chest", "back", "arms", "shoulders", "legs", "rest"];

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
