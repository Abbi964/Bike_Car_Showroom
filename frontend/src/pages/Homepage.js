import React, { Fragment } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../components/shopInfo/Home";
import About from "../components/shopInfo/About";
import ContactInfo from "../components/shopInfo/ContactInfo";

function Homepage(props){

    return (
        <Fragment>
            <Header/>
            <Home/>
            <About/>
            <ContactInfo/>
            <Footer/>
        </Fragment>
    )
}

export default Homepage;