import React from "react";
import Card from "react-bootstrap/Card";
import natOne from "../../sass/img/nat-1-large.jpg";

const RecipeCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={natOne} />
        <Card.Body>
          <Card.Title className="u-center-text">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
