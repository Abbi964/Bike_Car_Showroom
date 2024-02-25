import React, { Fragment } from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactInfo from '../components/shopInfo/ContactInfo';

function ContactPage(props){

    return(
        <Fragment>
            <Header/>
            <ContactInfo/>
            <Footer/>
        </Fragment>
    )
}

export default ContactPage;