import React from "react";
import { Form, Button} from "react-bootstrap";
import classes from './Filter.module.css';
import Card from '../UI/Card'

function Filter(props){

    return (
        <Card>
        <form className={classes.filter_form}>
            <h5>REFINE YOUR SEARCH</h5>
            <Button className="mt-2 mb-2" variant="info" type='submit'>Apply Filter</Button>
            <label htmlFor="make">Make</label>
            <Form.Select className={classes.select} id="make">
                <option value='all'>All</option>
                <option value='tata'>Tata</option>
                <option value='mahindra'>Mahindra</option>
                <option value='maruti'>Maruti</option>
            </Form.Select>
            <label htmlFor="model">Model</label>
            <Form.Select className={classes.select} id="model">
                <option value='all'>All</option>
                <option>Nexon</option>
                <option>Tiago</option>
                <option>XUV 500</option>
            </Form.Select>
            <label htmlFor="fuel_type">Fuel Type</label>
            <Form.Select className={classes.select} id="fuel_type">
                <option value='all'>All</option>
                <option value='petrol'>Petrol</option>
                <option value='diesel'>Diesel</option>
            </Form.Select>
            <label htmlFor="transmission">Transmission</label>
            <Form.Select className={classes.select} id="transmission">
                <option value='all'>All</option>
                <option value='automatic'>Automatic</option>
                <option value='manual'>Manual</option>
            </Form.Select>
            <label htmlFor="body_type">Body Type</label>
            <Form.Select className={classes.select} id="body_type">
                <option value='all'>All</option>
                <option value='SUV'>SUV</option>
                <option value='hatchback'>HatchBack</option>
                <option value='sedan'>Sedan</option>
                <option value='MUV'>MUV</option>
                <option value='compact_SUV'>Compact SUV</option>
            </Form.Select>
            <label htmlFor="price">Price</label>
            <Form.Select className={classes.select} id="price">
                <option value='all'>All</option>
                <option value='0.5-1'>50 K - 1 Lakh</option>
                <option value='1-2'>1 - 2 Lakh</option>
                <option value='2-5'>2 - 5 Lakh</option>
                <option value='5-10'>5 - 10 Lakh</option>
                <option value='10-15'>10 - 15 Lakh</option>
                <option value='15-20'>15 - 20 Lakh</option>
                <option value='20-35'>20 - 35 Lakh</option>
                <option value='35-50'>35 - 50 Lakh</option>
                <option value='50-100'>50 Lakh - 1 Crore</option>
                <option value='100-9999'>Above 1 Crore</option>
            </Form.Select>
            <label htmlFor="milage">Milage</label>
            <Form.Select className={classes.select} id="milage">
                <option value='all'>All</option>
                <option value='1-5'>1 - 5 kmpl</option>
                <option value='5-10'>5 - 10 kmpl</option>
                <option value='10-15'>10 - 15 kmpl</option>
                <option value='15-20'>15 - 20 kmpl</option>
                <option value='20-35'>20 - 35 kmpl</option>
                <option value='35-50'>35 - 50 kmpl</option>
                <option value='50-70'>50 - 70 kmpl</option>
                <option value='70-100'>70 - 100 kmpl</option>
                <option value='100-9999'>100 kmpl + </option>
            </Form.Select>
            <label htmlFor="color">Color</label>
            <Form.Select className={classes.select} id="color">
                <option value='all'>All</option>
                <option value='red'>Red</option>
                <option value='black'>Black</option>
                <option value='white'>White</option>
                <option value='silver'>Silver</option>
                <option value='blue'>Blue</option>
            </Form.Select>
            <label htmlFor="avalibility">Waiting Period</label>
            <Form.Select className={classes.select} id="avalibility">
                <option value='all'>All</option>
                <option value='0'>None</option>
                <option value='0-1'>0 - 1 Month</option>
                <option value='1-2'>1 - 2 Month</option>
                <option value='2-6'>2 - 6 Month</option>
                <option value='6-12'>6 Month - 1 Year</option>
                <option value='12-99'>1 Year +</option>
            </Form.Select>
            <label htmlFor="engine_size">Engine Size</label>
            <Form.Select className={classes.select} id="engine_size">
                <option value='all'>All</option>
                <option value='90-125'>90 - 125 cc</option>
                <option value='125-250'>125 - 250 cc</option>
                <option value='250-500'>250 - 500 cc</option>
                <option value='500-1000'>500 cc - 1 L</option>
                <option value='1000-2000'>1 - 2 L</option>
                <option value='2000-3500'>2 - 3.5 L</option>
                <option value='3500-5000'>3.5 - 5 L</option>
                <option value='5000-99999'>5 L +</option>
            </Form.Select>
        </form>
        </Card>
    )
}

export default Filter;