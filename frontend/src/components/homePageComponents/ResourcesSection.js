import React from "react";
import natOne from "../../sass/img/nat-1-large.jpg";
import natTwo from "../../sass/img/nat-2-large.jpg";
import natThree from "../../sass/img/nat-3-large.jpg";

const ResourcesSection = () => {
  return (
    <div className="resource-section">
      <div className="row">
        <div className="col-1-of-3">
          <img src={natOne} alt="natOne" />
        </div>
        <div className="col-1-of-3">
          <img src={natOne} alt="natOne" />
        </div>
        <div className="col-1-of-3">
          <img src={natOne} alt="natOne" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
