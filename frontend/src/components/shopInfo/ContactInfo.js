import React from 'react'
import classes from './ContactInfo.module.css';
import Card from '../UI/Card';

function ContactInfo(props){

    return(
        <div className={classes.contactUs}>
            <div id='contactUs' className={classes.heading}>
                <h1>Contact Us</h1>
            </div>
            <div className={classes.flexWrap}>
                <Card className={classes.iframeCard}>
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.187372475777!2d77.  18150585440006!3d28.566949328505476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.    1!3m3!1m2!1s0x390d1d56a9953033%3A0x83af3c2ed490f107!2sTata%20Motors%20Cars%20Showroom%20-%20Tre o%2C%20Safdarjung%20Enclave!5e0!3m2!1sen!2sin!4v1708867889979!5m2!1sen!2sin" width="600"     height="450" style={{border:0}} allowfullscreen="" loading="lazy"    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Card>
                <Card className={classes.infoCard}>
                    <h3>SSzone Bike and Car Showroom</h3>
                    <p>A 2/14, Lower Ground Floor Main Africa Avenue Rd,</p> 
                    <p>Safdarjung Enclave, New Delhi, Delhi 110029</p>
                    <h5>PHONE NO : +91 9562465895</h5>
                    <h5>EMAIL : sszoneshowroom@gmail.com</h5>
                    <h5>OFFICE HOURS : 10 AM - 9 PM</h5>
                </Card>
            </div>
        </div>
    )
}

export default ContactInfo;