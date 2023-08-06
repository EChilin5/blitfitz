import React from "react";
import Form from "react-bootstrap/Form";
import MainRecipeCard from "../components/RecipeComponents/MainRecipeCard";
import RecipeCard from "../components/RecipeComponents/RecipeCard";

const RecipePage = () => {
  const test = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <h1>Find A new Dish</h1>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <MainRecipeCard />
      <div className="recipe-card-section">
        {test.map((recipes) => {
          return (
            <div className="recipe-card-individual" key={recipes}>
              {" "}
              <RecipeCard />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipePage;
