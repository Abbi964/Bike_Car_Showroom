import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { serverUrl} from "../../util/util";
import {Carousel , Image } from 'react-bootstrap'
import classes from './VehicleInfo.module.css'
import Card from "../UI/Card";
import axios from "axios";
import color_logo from '../../assets/vehicle/color.png'
import milage_logo from '../../assets/vehicle/milage.png'
import engine_logo from '../../assets/vehicle/engine.png'
import fuel_logo from '../../assets/vehicle/fuel.png'
import transmission_logo from '../../assets/vehicle/transmission.png'

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
                        <ul className={classes.shortDetUl}>
                            <li>
                                <Image src={transmission_logo}/>
                                <span>{vehicle.transmission}</span>
                            </li>
                            <li>
                                <Image src={color_logo}/>
                                <span>{vehicle.color}</span>
                            </li>
                            <li>
                                <Image src={milage_logo}/>
                                <span>{`${vehicle.milage} Kmpl`}</span>
                            </li>
                            <li>
                                <Image src={fuel_logo}/>
                                <span>{vehicle.fuel_type}</span>
                            </li>
                            <li>
                                <Image src={engine_logo}/>
                                <span>{`${vehicle.engine_size} cc`}</span>
                            </li>
                        </ul>
                    </div>
                </Card>
                <div className={classes.price}>
                    <h2>&#x20B9;{` ${(vehicle.price/100000).toFixed(2)} Lakh`}</h2>
                </div>
            </div>
            <Card className={classes.detailedTable}>
                    <h3 className="mt-3 mb-3">Specifications</h3>
                    <table style={{width:'65%'}}>
                        <tbody>
                            <tr>
                                <th>Brand Name</th>
                                <td>{vehicle.make}</td>
                            </tr>
                            <tr>
                                <th>Model Name</th>
                                <td>{vehicle.model}</td>
                            </tr>
                            <tr>
                                <th>Year</th>
                                <td>{vehicle.year}</td>
                            </tr>
                            <tr>
                                <th>Milage</th>
                                <td>{vehicle.milage}</td>
                            </tr>
                            <tr>
                                <th>Fuel Type</th>
                                <td>{vehicle.fuel_type}</td>
                            </tr>
                            <tr>
                                <th>Transmission</th>
                                <td>{vehicle.transmission}</td>
                            </tr>
                            <tr>
                                <th>Body Type</th>
                                <td>{vehicle.body_type}</td>
                            </tr>
                            <tr>
                                <th>Waiting Period</th>
                                <td>{`${vehicle.availability} Months`}</td>
                            </tr>
                            <tr>
                                <th>Engine Size</th>
                                <td>{`${vehicle.engine_size} CC`}</td>
                            </tr>
                            <tr>
                                <th>Features</th>
                            </tr>
                            {vehicle.interior_features.map((featureName)=>{
                                return(
                                    <tr>
                                        <td>{featureName}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </Card>
        </div>
    )
}

export default VehicleInfo;