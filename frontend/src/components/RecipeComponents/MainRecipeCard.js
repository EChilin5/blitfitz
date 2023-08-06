import React from "react";
import natOne from "../../sass/img/nat-1-large.jpg";

const MainRecipeCard = () => {
  return (
    <div>
      <div className="main-recipe-card">
        <div className="main-recipe-card-left">
          <img src={natOne} alt="" />
        </div>
        <div className="main-recipe-card-right">
          <h3>Recipe Name</h3>
          <div> Time Length</div>
          <div>Difficulty levels</div>
          <div> Recipe Information </div>
        </div>
      </div>
    </div>
  );
};

export default MainRecipeCard;
