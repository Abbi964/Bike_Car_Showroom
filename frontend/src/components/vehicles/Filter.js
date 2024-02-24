import React from "react";
import { Form } from "react-bootstrap";
import classes from './Filter.module.css';

function Filter(props){

    return (
        <form className={classes.filter_form}>
            <h5>REFINE YOUR SEARCH</h5>
            <label htmlFor="make">Make</label>
            <Form.Select className={classes.select} id="make">
                <option>Select Make</option>
                <option>Tata</option>
                <option>Mahindra</option>
                <option>Maruti</option>
            </Form.Select>
            <label htmlFor="model">Model</label>
            <Form.Select className={classes.select} id="model">
                <option>Select Model</option>
                <option>Nexon</option>
                <option>Tiago</option>
                <option>XUV 500</option>
            </Form.Select>
        </form>
    )
}

export default Filter;