import React from "react";
import classes from './Specifications.module.css';
import Card from "../../UI/Card";

function Specifications(props) {
  return (
    <Card className={classes.detailedTable}>
      <h3 className="mt-3 mb-3">Specifications</h3>
      <table style={{ width: "65%" }}>
        <tbody>
          <tr>
            <th>Brand Name</th>
            <td>{props.vehicle.make}</td>
          </tr>
          <tr>
            <th>Model Name</th>
            <td>{props.vehicle.model}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{props.vehicle.year}</td>
          </tr>
          <tr>
            <th>Milage</th>
            <td>{`${props.vehicle.milage} Kmpl`}</td>
          </tr>
          <tr>
            <th>Fuel Type</th>
            <td>{props.vehicle.fuel_type}</td>
          </tr>
          <tr>
            <th>Transmission</th>
            <td>{props.vehicle.transmission}</td>
          </tr>
          <tr>
            <th>Body Type</th>
            <td>{props.vehicle.body_type}</td>
          </tr>
          <tr>
            <th>Waiting Period</th>
            <td>{`${props.vehicle.availability} Months`}</td>
          </tr>
          <tr>
            <th>Engine Size</th>
            <td>{`${props.vehicle.engine_size} CC`}</td>
          </tr>
          <tr>
            <th>Features</th>
          </tr>
          {props.vehicle.interior_features.map((featureName) => {
            return (
              <tr>
                <td>{featureName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Specifications;
