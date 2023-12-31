import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import FoodCard from "../RecipeComponents/FoodCard";
import SearchMealCard from "./SearchMealCard";

const AddMealModal = (props) => {
  let display = props.displayStatus;

  const [mealName, setMealName] = useState("");

  let j = 0;
  const [cardNumber, setCardNumber] = useState(0);
  const [meal, setmeal] = useState([]);

  let food_api = process.env.REACT_APP_FODD_API;
  let food_id = process.env.REACT_APP_FOOD_API_ID;
  let food_url = `https://api.edamam.com/api/food-database/v2/parser?${food_id}&${food_api}&ingr=${mealName}&nutrition-type=cooking`;

  const handleSearchChange = (val) => {
    setMealName(val);
  };

  const submitMealRequest = () => {
    fetchFoodData();
  };

  const round = (calories) => {
    let num = Number(calories);
    num = Math.round(calories);
    return num;
  };

  const selectedCard = (number) => {
    // console.log(number);
    setCardNumber(number);
    console.log(meal[number]);
    const today = new Date();
    let day = today.toDateString();

    let foodInfo = {
      name: meal[number].name,
      calories: round(meal[number].nutrients.ENERC_KCAL),
      date: day,
    };
    console.log(foodInfo);
    props.newMeal(foodInfo);
    closeCard();
  };

  const loadFoodDetails = () => {
    return meal.slice(0, 5).map((recipe) => {
      // console.log(recipe);
      return (
        <div key={j++}>
          <SearchMealCard foodInfo={recipe} selected={selectedCard} />
        </div>
      );
    });
  };

  const closeCard = () => {
    setMealName("");
    setmeal([]);
    props.show();
  };

  const fetchFoodData = () => {
    axios.get(food_url).then((res) => {
      // console.log(res.data.hints);
      for (var i = 0; i < res.data.hints.length; i++) {
        let food = res.data.hints[i].food;
        let foodDetails = {
          id: i,
          name: food.label,
          calories: food.nutrients.ENERC_KCAL,
          nutrients: food.nutrients,
        };
        //console.log(food);
        setmeal((prev) => {
          return [...prev, foodDetails];
        });
      }
    });
  };

  return (
    <div>
      <div className="add-modal-section">
        <Modal show={display} onHide={() => closeCard()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Meal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="meal-search-section-search">
              <Form.Control
                type="text"
                id="inputPassword5"
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <Button onClick={() => submitMealRequest()}>Search</Button>
            </div>
            <div>{meal.length === 0 ? "" : loadFoodDetails()} </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="btn-modal"
              variant="secondary"
              onClick={() => closeCard()}
            >
              Close
            </Button>
            <Button className="btn-modal" variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddMealModal;
