import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import MainRecipeCard from "../components/RecipeComponents/MainRecipeCard";
import RecipeCard from "../components/RecipeComponents/RecipeCard";
import axios from "axios";

const RecipePage = () => {
  // const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [recipe, setrecipe] = useState([]);
  const [meal, setmeal] = useState([]);
  let api_key = process.env.REACT_APP_RECIPE_API;
  let api_id = process.env.REACT_APP_RECIP_API_ID;
  let food = "chicken";
  let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&${api_id}&${api_key}`;

  let food_api = process.env.REACT_APP_FODD_API;
  let food_id = process.env.REACT_APP_FOOD_API_ID;
  let mealName = "burger king";
  let food_url = `https://api.edamam.com/api/food-database/v2/parser?${food_id}&${food_api}&ingr=${mealName}&nutrition-type=cooking`;

  useEffect(() => {
    // fetchRecipeData();
    fetchFoodData();
  }, []);

  const fetchFoodData = () => {
    axios.get(food_url).then((res) => {
      console.log(res.data.hints);
    });
  };

  const fetchRecipeData = () => {
    axios.get(url).then((res) => {
      // console.log(res.data.hits);

      for (var i = 0; i < res.data.hits.length; i++) {
        let recipe = res.data.hits[i].recipe;
        let recipeDetails = {
          id: i,
          name: recipe.label,
          image: recipe.image,
          calories: recipe.calories,
          time: recipe.totalTime,
          ingredients: recipe.ingredients,
        };
        console.log(recipeDetails);
        setrecipe((prev) => {
          return [...prev, recipeDetails];
        });
      }
    });
  };

  const loadRecipeDetails = () => {
    return recipe.map((recipes) => {
      //console.log(recipes);
      return (
        <div className="recipe-card-individual" key={recipes.id}>
          {" "}
          <RecipeCard recipeInfo={recipes} />{" "}
        </div>
      );
    });
  };

  return (
    <div className="recipe-section">
      <h1>Find A new Dish</h1>
      <Form.Control type="text" id="inputPassword5" />
      <MainRecipeCard />
      <div className="recipe-card-section">
        {recipe.length === 0 ? "rwdsada" : loadRecipeDetails()}
      </div>
    </div>
  );
};

export default RecipePage;
