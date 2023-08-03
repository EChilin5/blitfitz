import React from "react";
import natOne from "../../sass/img/nat-1-large.jpg";
import natTwo from "../../sass/img/nat-2-large.jpg";
import natThree from "../../sass/img/nat-3-large.jpg";

const ResourcesSection = () => {
  return (
    <div className="resource-section">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Services</h2>
      </div>{" "}
      <div className="row">
        <div className="col-1-of-3">
          <img src={natOne} alt="natOne" className="resouce-group" />
          <h3>Recipes</h3>
        </div>
        <div className="col-1-of-3">
          <img src={natTwo} alt="natOne" className="resouce-group" />
          <h3>Tracker</h3>
        </div>
        <div className="col-1-of-3 resouce-group">
          <img src={natThree} alt="natOne" className="resouce-group" />
          <h3>Fittness</h3>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
