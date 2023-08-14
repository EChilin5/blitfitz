import React from "react";
import temp_food_default from "../../sass/img/temp_food_default.jpg";

const MainFoodCard = (props) => {
  let id = props.recipeId;
  let recipe = props.recipeInfo[id];
  return (
    <div>
      <div className="main-recipe-card">
        <div className="main-recipe-card-left">
          <img src={temp_food_default} alt="" />
        </div>
        <div className="main-recipe-card-right">
          <h3>{recipe.name}</h3>

          <div>
            <div> Carbs: {recipe.nutrients.CHOCDF} g </div>
            <div>Calories: {recipe.nutrients.ENERC_KCAL} kcal</div>

            <div>Fat: {recipe.nutrients.FAT} g</div>
            <div> Fiber: {recipe.nutrients.FIBTG} g </div>
            <div>Protein: {recipe.nutrients.PROCNT} g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFoodCard;
