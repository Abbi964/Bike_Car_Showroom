import React, { useContext, useRef } from "react";
import { Form, Button} from "react-bootstrap";
import classes from './Filter.module.css';
import Card from '../UI/Card'
import VehicleContext from "../../store/vehicle-context";

function Filter(props){
    const vhclCtx = useContext(VehicleContext)

    // using useRef for input values
    let makeRef = useRef()
    let modelRef = useRef()
    let fuelTypeRef = useRef()
    let transmissionRef = useRef()
    let bodyTypeRef = useRef()
    let priceRef = useRef()
    let milageRef = useRef()
    let colorRef = useRef()
    let avalibilityRef = useRef()
    let engineSizeRef = useRef()

    // submitHandler --------------------------//
    function submitHandler(e){
        try{
            e.preventDefault()
            // makign filter obj
            let obj = {
                make : makeRef.current.value,
                model : modelRef.current.value,
                fuel_type : fuelTypeRef.current.value,
                transmission : transmissionRef.current.value,
                body_type : bodyTypeRef.current.value,
                price : priceRef.current.value,
                milage : milageRef.current.value,
                color : colorRef.current.value,
                avalibility : avalibilityRef.current.value,
                engine_size : engineSizeRef.current.value,
            }

            vhclCtx.applyFilter(obj)
        }
        catch(err){
            console.log(err)
        }
    }

    // filterResetHandler-------------------//
    function filterResetHandler(){
        // reseting all inputs
        makeRef.current.value = 'all'
        modelRef.current.value = 'all'
        fuelTypeRef.current.value = 'all'
        transmissionRef.current.value = 'all'
        bodyTypeRef.current.value = 'all'
        priceRef.current.value = 'all'
        milageRef.current.value = 'all'
        colorRef.current.value = 'all'
        avalibilityRef.current.value = 'all'
        engineSizeRef.current.value = 'all'

        vhclCtx.resetFilter()
    }

    return (
        <Card>
        <form onSubmit={submitHandler} className={classes.filter_form}>
            <h5>REFINE YOUR SEARCH</h5>
            <Button 
                style={{width:'-webkit-fill-available',position:'sticky',top:'3.5rem'}} 
                className="mt-2 mb-2" variant="info" 
                type='submit'
            >
                Apply Filter
            </Button>
            <label htmlFor="make">Make</label>
            <Form.Select ref={makeRef} className={classes.select} id="make">
                <option value='all'>All</option>
                <option value='tata'>Tata</option>
                <option value='mahindra'>Mahindra</option>
                <option value='toyota'>Toyota</option>
            </Form.Select>
            <label htmlFor="model">Model</label>
            <Form.Select ref={modelRef} className={classes.select} id="model">
                <option value='all'>All</option>
                <option value='nexon'>Nexon</option>
                <option value='harrier'>Harrier</option>
                <option value='fortuner'>Fortuner</option>
            </Form.Select>
            <label htmlFor="fuel_type">Fuel Type</label>
            <Form.Select ref={fuelTypeRef} className={classes.select} id="fuel_type">
                <option value='all'>All</option>
                <option value='petrol'>Petrol</option>
                <option value='diesel'>Diesel</option>
            </Form.Select>
            <label htmlFor="transmission">Transmission</label>
            <Form.Select ref={transmissionRef} className={classes.select} id="transmission">
                <option value='all'>All</option>
                <option value='automatic'>Automatic</option>
                <option value='manual'>Manual</option>
            </Form.Select>
            <label htmlFor="body_type">Body Type</label>
            <Form.Select ref={bodyTypeRef} className={classes.select} id="body_type">
                <option value='all'>All</option>
                <option value='SUV'>SUV</option>
                <option value='hatchback'>HatchBack</option>
                <option value='sedan'>Sedan</option>
                <option value='MUV'>MUV</option>
                <option value='compact_SUV'>Compact SUV</option>
            </Form.Select>
            <label htmlFor="price">Price</label>
            <Form.Select ref={priceRef} className={classes.select} id="price">
                <option value='all'>All</option>
                <option value='50000-100000'>50 K - 1 Lakh</option>
                <option value='100000-200000'>1 - 2 Lakh</option>
                <option value='200000-500000'>2 - 5 Lakh</option>
                <option value='500000-1000000'>5 - 10 Lakh</option>
                <option value='1000000-1500000'>10 - 15 Lakh</option>
                <option value='1500000-2000000'>15 - 20 Lakh</option>
                <option value='2000000-3500000'>20 - 35 Lakh</option>
                <option value='3500000-5000000'>35 - 50 Lakh</option>
                <option value='5000000-10000000'>50 Lakh - 1 Crore</option>
                <option value='10000000-999900000'>Above 1 Crore</option>
            </Form.Select>
            <label htmlFor="milage">Milage</label>
            <Form.Select ref={milageRef} className={classes.select} id="milage">
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
            <Form.Select ref={colorRef} className={classes.select} id="color">
                <option value='all'>All</option>
                <option value='red'>Red</option>
                <option value='black'>Black</option>
                <option value='white'>White</option>
                <option value='silver'>Silver</option>
                <option value='blue'>Blue</option>
            </Form.Select>
            <label htmlFor="avalibility">Waiting Period</label>
            <Form.Select ref={avalibilityRef} className={classes.select} id="avalibility">
                <option value='all'>All</option>
                <option value='0'>None</option>
                <option value='0-1'>0 - 1 Month</option>
                <option value='1-2'>1 - 2 Month</option>
                <option value='2-6'>2 - 6 Month</option>
                <option value='6-12'>6 Month - 1 Year</option>
                <option value='12-99'>1 Year +</option>
            </Form.Select>
            <label htmlFor="engine_size">Engine Size</label>
            <Form.Select ref={engineSizeRef} className={classes.select} id="engine_size">
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
            <Button className="mt-3" onClick={filterResetHandler} variant="outline-dark">Reset Filter</Button>
        </form>
        </Card>
    )
}

export default Filter;