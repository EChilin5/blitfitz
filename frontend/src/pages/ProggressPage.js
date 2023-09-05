import React, { useState } from "react";
import natTwo from "../sass/img/nat-2-large.jpg";
import LineChart from "../components/ProgreesPageComponents/LineChart";
import MealPlans from "../components/ProgreesPageComponents/MealPlans";
import Button from "react-bootstrap/esm/Button";
import AddMealModal from "../components/ProgreesPageComponents/AddMealModal";
import FoodCard from "../components/RecipeComponents/FoodCard";
import UpdateWeightPhotoModal from "../components/ProgreesPageComponents/UpdateWeightPhotoModal";

const ProggressPage = () => {
  const meals = [
    {
      id: 1,
      name: "taco",
      calories: 1000,
      date: "8/26/23",
    },
    {
      id: 2,
      name: "pizza",
      calories: 1000,
      date: "8/27/23",
    },
    {
      id: 3,
      name: "cereal",
      calories: 1000,
      date: "8/28/23",
    },
    {
      id: 4,
      name: "olive",
      calories: 1000,
      date: "8/29/23",
    },
  ];

  const [displayFoodModal, setDisplayFoodModal] = useState(false);
  const [displayProgressUpdate, setDisplayProgressUpdate] = useState(false);
  const [savedImage, setSavedImage] = useState(natTwo);

  const showModal = () => {
    setDisplayFoodModal(!displayFoodModal);
  };

  const showProgressModal = () => {
    setDisplayProgressUpdate(!displayProgressUpdate);
  };

  const fetchLatestMeal = (meal) => {
    console.log(meal);
  };

  const updatePhoto = (photo) => {
    setSavedImage(photo);
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
            <Button onClick={() => showProgressModal()}>
              Update Weight/Photo
            </Button>
          </div>
        </div>

        <AddMealModal show={showModal} displayStatus={displayFoodModal} />
        <UpdateWeightPhotoModal
          show={showProgressModal}
          displayStatus={displayProgressUpdate}
          updateProgressPic={updatePhoto}
        />
        <div className="progress-header">
          <div className="progress-header-left">
            <img src={savedImage} alt="user saved progress" />
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
        <i className="bi bi-heart-fill"></i>
        <MealPlans food={meals} />

        {/* {meals.map((meal) => {
          return (
            <div key={meal.id}>
              <MealPlans />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default ProggressPage;
