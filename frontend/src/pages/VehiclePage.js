import React, { Fragment } from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VehicleInfo from '../components/vehicles/VehicleInfo';

function VehiclePage(props){

    return(
        <Fragment>
            <Header/>
            <VehicleInfo/>
            <Footer/>
        </Fragment>
    )
}

export default VehiclePage;