import React from "react";
import { Image } from "react-bootstrap";
import classes from './Footer.module.css'
import fb_icon from '../../assets/social/facebook_logo.png'
import insta_icon from '../../assets/social/insta_logo.png'
import lnkd_icon from '../../assets/social/linkedin_logo.png'
import twt_icon from '../../assets/social/twitter_logo.png'
import yt_icon from '../../assets/social/youtube_logo.png'

function Footer(props){

    return (
        <div className={classes.footer}>
            <div className="address">
                <h6>SSzone Bike and Car Showroom</h6>
                Abhinav Thapliyal
                <a target="blank" href="https://github.com/Abbi964/Bike_Car_Showroom.git"><p>Github Link</p></a>
            </div>
            <div className={classes.social}>
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