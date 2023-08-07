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
          <div>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRecipeCard;
