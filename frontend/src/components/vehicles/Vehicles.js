import React from "react";
import { Form } from "react-bootstrap";
import classes from './Vehicles.module.css'
import VehicleItem from "./VehicleItem";

function Vehicles(props){
    let noOfVehicles = '15'

    return(
        <div style={{width:'71vw'}}>
            <div id="vehicles_heading" className={classes.vehicles}>
                <h5>{noOfVehicles} Results</h5>
                <div className="d-flex">
                    <label className="me-2" style={{fontWeight:'bold'}} htmlFor="sort">Sort</label>
                    <Form.Select id="sort">
                        <option>Recomended</option>
                        <option>{`Price(Lowest First)`}</option>
                        <option>{`Price(Highest First)`}</option>
                        <option>Milage</option>
                    </Form.Select>
                </div>
            </div>
            <div id="vehicle_list">
                {props.vehicles.map((vehicle)=>{
                    return (
                        <VehicleItem key={vehicle._id} vehicle={vehicle}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Vehicles;