import React from "react";
import Card from "react-bootstrap/Card";
import temp_food_default from "../../sass/img/temp_food_default.jpg";

const FoodCard = (props) => {
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
      {" "}
      <Card onClick={() => selectedCardNumber(food.id)}>
        <Card.Img
          variant="top"
          src={food.image ? food.image : temp_food_default}
        />
        <Card.Body>
          <a href="https://www.freepik.com/free-vector/kawaii-fast-food-cute-fast-food-hotdog-hamburger-fries-drink-ketchup-illustration_5769123.htm#query=food%20cartoon&position=0&from_view=search&track=ais">
            Image by gstudioimagen
          </a>{" "}
          on Freepik
          <Card.Title className="u-center-text">{food.name}</Card.Title>
          <Card.Text>
            Calories: {round(food.calories)} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
