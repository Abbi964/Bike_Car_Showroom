import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Filter from "../components/vehicles/Filter";
import Vehicles from "../components/vehicles/Vehicles";

function VehiclesPage(props){
    const [vehicles, setVehicles] = useState([])
    // using useEffect to get all vehicles
    useEffect(()=>{
        axios.get('http://localhost:5000/vehicle/all_vehicles')
            .then(response=>{
                console.log(response)
                setVehicles(response.data.vehicles)
            })
    },[])

    return(
        <Fragment>
            <Header/>
            <div style={{flexWrap : 'wrap'}} className="d-flex p-3 justify-content-around">
                <Filter/>
                <Vehicles vehicles={vehicles}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default VehiclesPage;