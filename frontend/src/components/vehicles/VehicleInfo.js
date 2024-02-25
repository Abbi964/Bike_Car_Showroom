import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { serverUrl} from "../../util/util";
import {Carousel} from 'react-bootstrap'
import classes from './VehicleInfo.module.css'
import Card from "../UI/Card";
import axios from "axios";

import ShortInfo from "./vehicleInfo/ShortInfo";
import Specifications from "./vehicleInfo/Specifications";
import CustumerReview from "./vehicleInfo/CustumerReview";

function VehicleInfo(props){
    // getting vehicleId from params
    const {vehicleId} = useParams();

    // using useState for vehicle and loading
    const [vehicle, setVehicle] = useState({})
    const [loading, setLoading] = useState(true)
    
    // getting vehicle using id
    useEffect(()=>{
        axios.get(`${serverUrl}/vehicle/findOne/${vehicleId}`)
            .then(response=>{
                setVehicle(response.data.vehicle)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
            })
    },[vehicleId])

    if(loading){
        return <h3>Loading...</h3>
    }


    return (
        <div className={classes.vehicleInfo}>
            <h1>{`${vehicle.make} ${vehicle.model} ( ${vehicle.year} )`}</h1>
            <div style={{flexWrap:'wrap'}} className="d-flex pt-3 justify-content-between">
                <Card className={classes.carousel}>
                    <Carousel>
                        {vehicle.images.map((imgStr)=>{
                            return (
                                <Carousel.Item>
                                    <img className="d-block w-100" alt="img"  src={imgStr}/>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <div id='details' style={{display:'flex',gap:'3rem'}}>
                        <ShortInfo vehicle={vehicle}/>
                    </div>
                </Card>
                <div className={classes.price}>
                    <h2>&#x20B9;{` ${(vehicle.price/100000).toFixed(2)} Lakh`}</h2>
                </div>
            </div>
            <Specifications vehicle={vehicle}/>
            <CustumerReview/>
        </div>
    )
}

export default VehicleInfo;