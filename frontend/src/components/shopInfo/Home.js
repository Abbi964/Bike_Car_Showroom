import React from "react";
import classes from "./Home.module.css";
import { Carousel } from "react-bootstrap";
import img1 from '../../assets/showroom/showroomImg1.jpg'
import img2 from '../../assets/showroom/showroomImg2.jpg'
import img3 from '../../assets/showroom/showroomImg3.jpg'
import img4 from '../../assets/showroom/showroomImg4.jpg'

function Home(props) {
  return (
    <div className={classes.home}>
      <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" alt="img" src={img1}/>
            <div className={classes.fade}></div>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" alt="img" src={img2}/>
            <div className={classes.fade}></div>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" alt="img" src={img3}/>
            <div className={classes.fade}></div>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" alt="img" src={img4}/>
            <div className={classes.fade}></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
