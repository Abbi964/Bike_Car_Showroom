import React from "react";
import { Image } from "react-bootstrap";
import classes from './Footer.module.css'
import fb_icon from '../../assets/facebook_logo.png'
import insta_icon from '../../assets/insta_logo.png'
import lnkd_icon from '../../assets/linkedin_logo.png'
import twt_icon from '../../assets/twitter_logo.png'
import yt_icon from '../../assets/youtube_logo.png'

function Footer(props){

    return (
        <div className={classes.footer}>
            <div className="address">
                <h4>Address</h4>
                Near xyz , lane no - 5 
                xyz road , xyz city
            </div>
            <div className="social">
                <span className={classes.connectSpan}>Connect : </span>
                <a href="https://www.facebook.com"><Image className={classes.img} src={fb_icon}/></a>
                <a href="https://www.instagram.com"><Image className={classes.img} src={insta_icon}/></a>
                <a href="https://www.linkedin.com"><Image className={classes.img} src={lnkd_icon}/></a>
                <a href="https://www.twitter.com"><Image className={classes.img} src={twt_icon}/></a>
                <a href="https://www.youtube.com"><Image className={classes.img} src={yt_icon}/></a>
            </div>

        </div>
    )
}

export default Footer;