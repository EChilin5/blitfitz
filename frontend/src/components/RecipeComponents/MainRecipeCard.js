import React from "react";
import natOne from "../../sass/img/nat-1-large.jpg";

const MainRecipeCard = (props) => {
  let id = props.recipeId;
  let recipe = props.recipeInfo[id];
  return (
    <div>
      <div className="main-recipe-card">
        <div className="main-recipe-card-left">
          <img src={recipe.image} alt="" />
        </div>
        <div className="main-recipe-card-right">
          <h3>{recipe.name}</h3>
          <div> Time: {recipe.time}</div>

          <div>
            {recipe.ingredients.map((meal) => {
              // console.log(meal.text);
              return <div>{meal.text}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRecipeCard;
