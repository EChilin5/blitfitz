import React from "react";
import Card from "react-bootstrap/Card";
import natOne from "../../sass/img/nat-1-large.jpg";

const RecipeCard = (props) => {
  let recipe = props.recipeInfo;

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
      <Card onClick={() => selectedCardNumber(recipe.id)}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title className="u-center-text">{recipe.name}</Card.Title>
          <Card.Text>
            Calories: {round(recipe.calories)} <br />
            Time: {recipe.time} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
