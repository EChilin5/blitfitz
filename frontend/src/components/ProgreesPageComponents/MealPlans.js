import React, { useState } from "react";

const MealPlans = (props) => {
  let temp = [1, 2, 3, 4, 5, 6];
  let meals = props.food;

  const [arrowClick, setOnArrowClick] = useState(true);

  const onExpandContent = () => {
    console.log("click");
    setOnArrowClick(!arrowClick);
  };

  const filterMealPlan = () => {
    console.log("test");
    const dates = ["2023-08-26", "2023-08-27", "2023-08-29"];
    console.log(dates);
    const filteredDates = dates.filter((d) => new Date(d) - new Date() > 0);
    console.log(filteredDates);
    filteredDates.map((day) => {
      console.log(day);
      return "";
    });
  };

  return (
    <div>
      {filterMealPlan()}
      <div className="meal-plan">
        <div className="meal-plan-header">
          <h4>8/7/23</h4>
          <h4>150 lbs</h4>
          <h4>8000 calories</h4>
          <h4 onClick={() => onExpandContent()}>
            All Meals
            {arrowClick ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow up"></i>
            )}
          </h4>
        </div>

        {arrowClick ? (
          <div></div>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
};

export default MealPlans;
