import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const UpdateWeightPhotoModal = (props) => {
  let display = props.displayStatus;
  const [file, setFile] = useState();
  const handleImageChange = (e) => {
    console.log("test1234");
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const closeCard = () => {
    props.updateProgressPic(file);
    props.show();
  };

  return (
    <div>
      <div>
        <Modal show={display} onHide={() => closeCard()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Meal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="meal-search-section-search">
              <Form.Control
                type="text"
                id="inputPassword5"
                label="form"
                placeholder="ex Enter Weight: 10lbs"
              />
              <Button>Update</Button>
            </div>
            <div>
              <img src={file} alt="user progress" />
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  placeholder="upload image"
                  onChange={(e) => handleImageChange(e)}
                />
              </Form.Group>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="btn-modal"
              variant="secondary"
              onClick={() => closeCard()}
            >
              Close
            </Button>
            <Button className="btn-modal" variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateWeightPhotoModal;
