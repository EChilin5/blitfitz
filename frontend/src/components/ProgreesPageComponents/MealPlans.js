import React, { useState } from "react";

const MealPlans = (props) => {
  let temp = [1, 2, 3, 4, 5, 6];
  let day = props.dateAte;
  let meals = props.food;
  let id = 1;
  const [arrowClick, setOnArrowClick] = useState(true);
  // const [sum, setSum] = useState(0);

  const onExpandContent = () => {
    console.log("click");
    setOnArrowClick(!arrowClick);
  };

  const getTotalCalories = (num) => {
    let sum = 0;
    meals
      .filter((meal) => meal.date === day)
      .map((dish) => {
        sum += dish.calories;
      });

    return sum;
  };

  return (
    <div>
      <div className="meal-plan">
        <div className="meal-plan-header">
          <h4>{day}</h4>
          <h4>150 lbs</h4>
          <h4>{getTotalCalories()} calories</h4>
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
            {meals
              .filter((meal) => meal.date === day)
              .map((meal) => {
                return (
                  <div className="meal-plan-individual" key={meal.id}>
                    <h5>{id++}.</h5>
                    <h5>{meal.name}</h5>
                    <h5>{meal.calories}</h5>
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
