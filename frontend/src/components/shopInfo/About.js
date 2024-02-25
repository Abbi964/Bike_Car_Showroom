import React from 'react';
import classes from './About.module.css';

function About(props){

    return(
        <div className={classes.aboutUs}>
            <div id='aboutUs' className={classes.about}>
                <h1>About Us</h1>
            </div>
            <div className={classes.details}>
                <p>Welcome to SSzone Car and Bike Showroom, your premier destination for top-quality cars and bikes. Founded in 2009, we have been serving our community with pride and dedication for over 14 years. At SSzone Car and Bike Showroom, we are committed to delivering exceptional service and offering a wide selection of premium vehicles to meet your needs.</p>
                <p>Our mission at SSzone Car and Bike Showroom is to exceed customer expectations by offering a diverse range of top-quality vehicles, personalized service, and expert guidance throughout the purchasing process.</p>
            </div>
        </div>
    )
}

export default About;