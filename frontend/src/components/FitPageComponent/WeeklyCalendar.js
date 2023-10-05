import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const WeeklyCalendar = () => {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <div className="goals-heading">
        <h2>Goals of the week</h2>
        <hr></hr>
      </div>
      <div className="week-target">
        <div className="week-target-item">
          <h3>Maximum Power</h3>
          <Form.Control type="text" placeholder="ex. 45lbs" />
        </div>
        <div className="week-target-item">
          <h3># of reps</h3>
          <Form.Control type="text" placeholder="ex. 5 reps" />
        </div>
        <div className="week-target-item">
          <h3>Weekly workout Completed</h3>
          <Form.Control type="text" placeholder="ex. 4/5" />
        </div>
      </div>
      <div></div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {weekDay.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rest</td>
            <td>Chest</td>
            <td>Leg</td>
            <td>Arms</td>
            <td>Back</td>
            <td>Rest</td>
            <td>Rest</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default WeeklyCalendar;
