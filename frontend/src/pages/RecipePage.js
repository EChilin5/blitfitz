import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import MainRecipeCard from "../components/RecipeComponents/MainRecipeCard";
import RecipeCard from "../components/RecipeComponents/RecipeCard";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import axios from "axios";
import FoodCard from "../components/RecipeComponents/FoodCard";
import Button from "react-bootstrap/esm/Button";
import MainFoodCard from "../components/RecipeComponents/MainFoodCard";

const RecipePage = () => {
  // const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [displayModal, setDisplayModal] = useState(false);
  const [value, setValue] = useState([1, 3]);
  const [recipe, setrecipe] = useState([]);
  const [meal, setmeal] = useState([]);
  const [choice, setChoice] = useState("new-meal");
  const [food, setFood] = useState("chicken");
  const [mealName, setMealName] = useState(
    recipe.length === 0 ? "" : recipe[1]
  );
  const [cardNumber, setCardNumber] = useState(0);

  const handleChange = (val) => setValue(val);
  let api_key = process.env.REACT_APP_RECIPE_API;
  let api_id = process.env.REACT_APP_RECIP_API_ID;
  let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&${api_id}&${api_key}`;

  let food_api = process.env.REACT_APP_FODD_API;
  let food_id = process.env.REACT_APP_FOOD_API_ID;
  let food_url = `https://api.edamam.com/api/food-database/v2/parser?${food_id}&${food_api}&ingr=${mealName}&nutrition-type=cooking`;

  useEffect(() => {
    fetchRecipeData();
    fetchFoodData();
  }, []);

  let i = 0;
  let j = 200;

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
        // console.log(recipeDetails);
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
        <div className="recipe-card-individual" key={i++}>
          {" "}
          <RecipeCard recipeInfo={recipes} selected={selectedCard} />{" "}
        </div>
      );
    });
  };

  const loadFoodDetails = () => {
    return meal.map((recipe) => {
      // console.log(recipe);
      return (
        <div className="recipe-card-individual" key={j++}>
          <FoodCard foodInfo={recipe} selected={selectedCard} />
        </div>
      );
    });
  };

  const selectedCard = (number) => {
    // console.log(number);
    setCardNumber(number);
    setMealName(recipe[number]);
  };

  const handleMealDisplay = (mealDeclared) => {
    setChoice(mealDeclared);
  };

  const handleSearchChange = (text) => {
    setMealName(text);
    setFood(text);
    // console.log(text);
  };

  const handleNewSearch = () => {
    // console.log("testing rwewrwr");
    setmeal([]);
    setrecipe([]);
    fetchFoodData();
    fetchRecipeData();
  };

  return (
    <div className="recipe-section">
      <h1>Recipe Hunter</h1>
      <h4>
        Look up recipes or look up nutrion facts of various restaurant meals
      </h4>
      <div className="recipe-section-search">
        <Form.Control
          type="text"
          id="search-recipe"
          onChange={(e) => handleSearchChange(e.target.value)}
        />

        <Button className="submit-form-btn" onClick={() => handleNewSearch()}>
          Submit
        </Button>
      </div>

      <div className="toggle-btn-section">
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={handleChange}
        >
          <ToggleButton
            id="tbg-btn-1"
            className="togglebutton"
            value={1}
            onClick={() => handleMealDisplay(`new-meal`)}
          >
            Search New Recipe Mode
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            className="togglebutton"
            value={2}
            onClick={() => handleMealDisplay(`dish-info`)}
          >
            Nutrition Facts
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div>
        {/* ///{console.log(meal.length)} */}

        {choice === "new-meal" ? (
          <div>
            <div>
              {" "}
              {recipe.length === 0 ? (
                ""
              ) : (
                <MainRecipeCard recipeInfo={recipe} recipeId={cardNumber} />
              )}
            </div>
            <div className="recipe-card-section">
              {recipe.length === 0 ? "" : loadRecipeDetails()}{" "}
            </div>
          </div>
        ) : (
          <div>
            <div>
              {meal.length === 0 ? (
                ""
              ) : (
                <MainFoodCard recipeInfo={meal} recipeId={cardNumber} />
              )}
            </div>
            <div className="recipe-card-section">
              {recipe.length === 0 ? "" : loadRecipeDetails()}{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
