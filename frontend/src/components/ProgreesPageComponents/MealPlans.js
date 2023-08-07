import React from "react";

const MealPlans = () => {
  let temp = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="meal-plan">
        <div className="meal-plan-header">
          <h4>Day</h4>
          <h4>Weight</h4>
          <h4>Calories</h4>
          <h4>Meals</h4>
        </div>
        <div className="meal-plan-rows">
          <h5>Pizza</h5>
          <h5>500 calories</h5>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;
