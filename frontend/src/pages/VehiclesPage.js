import React, { Fragment, useContext} from "react";
// import axios from 'axios'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Filter from "../components/vehicles/Filter";
import Vehicles from "../components/vehicles/Vehicles";
// import { serverUrl } from "../util/util";
import VehicleContext from "../store/vehicle-context";

function VehiclesPage(props){
    const vhclCtx = useContext(VehicleContext)
    
    console.log(vhclCtx.vehicles)
    return(
        <Fragment>
            <Header/>
            <div style={{flexWrap : 'wrap'}} className="d-flex p-3 justify-content-around">
                <Filter/>
                <Vehicles vehicles={vhclCtx.vehicles}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default VehiclesPage;