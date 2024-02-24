import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import classes from './Vehicles.module.css'

function Vehicles(props){
    let noOfVehicles = '15'

    return(
        <Fragment>
            <div id="vehicles" className={classes.vehicles}>
                <h5>{noOfVehicles} Results</h5>
                <form>
                    <span>Sort by</span>
                    <Form.Select id="sort">
                        <option>Recomended</option>
                        <option>{`Price(Lowest First)`}</option>
                        <option>{`Price(Highest First)`}</option>
                        <option>Milage</option>
                    </Form.Select>
                </form>
            </div>
        </Fragment>
    )
}

export default Vehicles;