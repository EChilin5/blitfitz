import React, { useState } from "react";
import natTwo from "../sass/img/nat-2-large.jpg";
import LineChart from "../components/ProgreesPageComponents/LineChart";
import MealPlans from "../components/ProgreesPageComponents/MealPlans";
import Button from "react-bootstrap/esm/Button";
import AddMealModal from "../components/ProgreesPageComponents/AddMealModal";
import FoodCard from "../components/RecipeComponents/FoodCard";

const ProggressPage = () => {
  const temp = [1, 2, 3, 4, 5, 6];

  const [displayFoodModal, setDisplayFoodModal] = useState(false);
  const [displayProgressUpdate, setDisplayProgressUpdate] = useState(false);

  const showModal = () => {
    setDisplayFoodModal(!displayFoodModal);
  };
  const showProgressModal = () => {
    setDisplayFoodModal(!displayFoodModal);
  };

  return (
    <div>
      <div className="progress-section">
        <div className="progress-section-header">
          <div className="progress-section-header-left">
            <h1>Human Proggress</h1>
          </div>
          <div className="progress-section-header-right">
            <Button onClick={() => showModal()}>Add New Meal</Button>
            <Button>Update Weight/Photo</Button>
          </div>
        </div>

        <AddMealModal show={showModal} displayStatus={displayFoodModal} />

        <div className="progress-header">
          <div className="progress-header-left">
            <img src={natTwo} alt="" />
            <h4 className="u-center-text">Start Date 0</h4>
          </div>

          <div className="progress-header-right">
            <LineChart />
          </div>
        </div>
        <div className="calories-progress">
          Today's Calories Total:
          <span className="calorie-count">10000</span>
        </div>
      </div>

      <div className="progress-meals">
        <h2>Meal History</h2>
        <i class="bi bi-heart-fill"></i>

        {temp.map((recipe) => {
          return (
            <div>
              <MealPlans />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProggressPage;
