import React from "react";
import Table from "react-bootstrap/Table";

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
      Goals of the week
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
