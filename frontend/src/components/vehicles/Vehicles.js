import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import classes from './Vehicles.module.css'
import VehicleItem from "./VehicleItem";
import VehicleContext from "../../store/vehicle-context";

function Vehicles(props){
    const vhclCtx = useContext(VehicleContext)

    let noOfVehicles = props.vehicles.length

    function sortHandler(e){
        vhclCtx.sort(e.target.value)
    }

    return(
        <div style={{width:'71vw'}}>
            <div id="vehicles_heading" className={classes.vehicles}>
                <h5>{noOfVehicles} Results</h5>
                <div className="d-flex">
                    <label className="me-2" style={{fontWeight:'bold'}} htmlFor="sort">Sort</label>
                    <Form.Select onChange={sortHandler} id="sort">
                        <option value='recomended'>Recomended</option>
                        <option value='priceASC'>{`Price(Lowest First)`}</option>
                        <option value='priceDESC'>{`Price(Highest First)`}</option>
                        <option value='milage'>Milage</option>
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