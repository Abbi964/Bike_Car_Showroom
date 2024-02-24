import React, { Fragment } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Filter from "../components/vehicles/Filter";
import Vehicles from "../components/vehicles/Vehicles";

function VehiclesPage(props){

    return(
        <Fragment>
            <Header/>
            <div className="d-flex p-3 justify-content-between">
                <Filter/>
                <Vehicles/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default VehiclesPage;