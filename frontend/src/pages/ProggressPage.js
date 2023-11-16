import React, { useEffect, useState } from "react";
import natTwo from "../sass/img/nat-2-large.jpg";
import LineChart from "../components/ProgreesPageComponents/LineChart";
import MealPlans from "../components/ProgreesPageComponents/MealPlans";
import Button from "react-bootstrap/esm/Button";
import AddMealModal from "../components/ProgreesPageComponents/AddMealModal";
import FoodCard from "../components/RecipeComponents/FoodCard";
import UpdateWeightPhotoModal from "../components/ProgreesPageComponents/UpdateWeightPhotoModal";

const ProggressPage = () => {
  const dish = [
    {
      id: 1,
      name: "taco",
      calories: 805,
      date: "Thu Nov 16 2023",
    },

    {
      id: 2,
      name: "pizza",
      calories: 1000,
      date: "Sat Sep 02 2023",
    },
    {
      id: 3,
      name: "cereal",
      calories: 1000,
      date: "Sat Sep 02 2023",
    },
    {
      id: 4,
      name: "olive",
      calories: 1000,
      date: "Sun Sep 03 2023",
    },
    {
      id: 5,
      name: "sopa",
      calories: 805,
      date: "Thu Nov 16 2023",
    },
    {
      id: 6,
      name: "pizza",
      calories: 805,
      date: "Thu Nov 16 2023",
    },
  ];

  useEffect(() => {
    uniqueDates();
  }, []);

  const [displayFoodModal, setDisplayFoodModal] = useState(false);
  const [displayProgressUpdate, setDisplayProgressUpdate] = useState(false);
  const [savedImage, setSavedImage] = useState(natTwo);
  const [sortedDate, setSortedDate] = useState([]);
  const [meals, setMeals] = useState(dish);
  let [totalCal, setTotalCal] = useState(0);
  let todayCalories = 0;

  const showModal = () => {
    setDisplayFoodModal(!displayFoodModal);
  };

  const showProgressModal = () => {
    setDisplayProgressUpdate(!displayProgressUpdate);
  };

  const fetchLatestMeal = (meal) => {
    let newMeal = {
      id: meals.length,
      name: meal.name,
      calories: meal.calories,
      date: meal.date,
    };
    console.log(newMeal);
    setMeals((prevState) => {
      return [...prevState, newMeal];
    });
    uniqueDates();
  };

  const updatePhoto = (photo) => {
    setSavedImage(photo);
  };

  const uniqueDates = () => {
    setSortedDate([]);
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 300);
    let today = new Date();
    today.setDate(today.getDate() + 1);
    console.log(today.toDateString());

    const days = new Set();

    while (startDate.toDateString() !== today.toDateString()) {
      meals
        .filter((meal) => meal.date === startDate.toDateString())
        .map((dish) => {
          days.add(dish.date);
        });

      startDate.setDate(startDate.getDate() + 1);
      // console.log(startDate);
    }

    console.log(days.size);
    days.forEach((value) => {
      setSortedDate((prevState) => {
        return [...prevState, value];
      });
    });
  };

  const getTodaysCal = () => {
    let original = new Date();
    let total = 0;
    console.log("tewrw " + original.toDateString());
    meals
      .filter((meal) => meal.date === original.toDateString())
      .map((cal) => {
        console.log(cal.calories);
        total += cal.calories;
        console.log(todayCalories);
      });
    return total;
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

        <AddMealModal
          show={showModal}
          displayStatus={displayFoodModal}
          newMeal={fetchLatestMeal}
        />
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
            <div className="progress-header-right-btn">
              <Button>Weight</Button>
              <Button>Calories</Button>
            </div>
            <div className="progress-header-right-graph">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="calories-progress">
          Today's Calories Total:
          <span className="calorie-count">{getTodaysCal()}</span>
        </div>
      </div>

      <div className="progress-meals">
        <h2>Meal History</h2>
        <i className="bi bi-heart-fill"></i>
        {/* {mealPlanfilter()} */}

        {sortedDate.length === 0 ? (
          "00000"
        ) : (
          <div>
            {sortedDate.reverse().map((day) => {
              return (
                <div>
                  <MealPlans food={meals} dateAte={day} />
                </div>
              );
            })}
          </div>
        )}

        {/* <MealPlans food={meals} /> */}

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
