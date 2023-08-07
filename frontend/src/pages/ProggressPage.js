import React from "react";
import natTwo from "../sass/img/nat-2-large.jpg";
import LineChart from "../components/ProgreesPageComponents/LineChart";
import MealPlans from "../components/ProgreesPageComponents/MealPlans";

const ProggressPage = () => {
  return (
    <div>
      <div className="progress-section">
        <h1>Human Proggress</h1>
        <div className="progress-header">
          <div className="progress-header-left">
            <img src={natTwo} alt="" />
            <h4 className="u-center-text">Start Date 0</h4>
          </div>

          <div className="progress-header-right">
            <LineChart />
          </div>
        </div>
      </div>
      <div className="progress-meals">
        <MealPlans />
      </div>
    </div>
  );
};

export default ProggressPage;
