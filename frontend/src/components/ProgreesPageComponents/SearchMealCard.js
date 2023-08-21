import React from "react";
import temp_food_default from "../../sass/img/temp_food_default.jpg";
import Image from "react-bootstrap/Image";

const SearchMealCard = (props) => {
  let food = props.foodInfo;

  const round = (calories) => {
    let num = Number(calories);
    num = Math.round(calories);
    return num;
  };

  const selectedCardNumber = (number) => {
    props.selected(number);
  };

  return (
    <div>
      <div
        className="search-result-card"
        onClick={() => selectedCardNumber(food.id)}
      >
        <div className="search-result-card-left">
          <Image
            src={food.image ? food.image : temp_food_default}
            alt="food image"
          />
          <a href="https://www.freepik.com/free-vector/kawaii-fast-food-cute-fast-food-hotdog-hamburger-fries-drink-ketchup-illustration_5769123.htm#query=food%20cartoon&position=0&from_view=search&track=ais">
            Image by gstudioimagen
          </a>{" "}
        </div>
        <div className="search-result-card-right">
          <h1>{food.name}</h1>
          <h3>
            Calories: {round(food.calories)} <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SearchMealCard;
