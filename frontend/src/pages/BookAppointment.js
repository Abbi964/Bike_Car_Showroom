import React, { Fragment } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AppointmentFrom from "../components/appointment/AppointmentForm";

function BookAppointment(props){

    return(
        <Fragment>
            <Header/>
            <AppointmentFrom/>
            <Footer/>
        </Fragment>
    )
}

export default BookAppointment;