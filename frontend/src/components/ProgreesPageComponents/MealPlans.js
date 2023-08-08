import React from "react";

const MealPlans = () => {
  let temp = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="meal-plan">
        <div className="meal-plan-header">
          <h4>8/7/23</h4>
          <h4>150 lbs</h4>
          <h4>8000 calories</h4>
          <h4>All Meals</h4>
          {temp.map((meals) => {
            return (
              <div className="meal-plan-individual" key={meals}>
                <h5>{meals}.</h5>
                <h5>Pizza</h5>
                <h5>500 calories</h5>
              </div>
            );
          })}
        </div>
        <div className="meal-plan-rows"></div>
      </div>
    </div>
  );
};

export default MealPlans;
