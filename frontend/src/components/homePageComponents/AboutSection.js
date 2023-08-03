import React from "react";
import natOne from "../../sass/img/nat-1-large.jpg";
import natTwo from "../../sass/img/nat-2-large.jpg";

const About = () => {
  return (
    <div className="section-about">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Why Flittzz bitz?</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 class="heading-tertiary u-margin-bottom-small">
            The flittz is the fitz <br />& bitz's plays the game.
          </h3>
          <p className="paragraph">
            Our goal is to help the blittzz to reach their max potential when it
            comes to health.By providing our users with healthy choices and
            exercises to help reach their goals. The website is divided into
            three parts recipes, blitzz tracker and flittz the fitness aspect in
            the web. Providing with a variety of alternatives to help meet your
            goals.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={natOne}
              alt="large 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src={natTwo}
              alt="large 2"
              class="composition__photo composition__photo--p2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
