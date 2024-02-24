import React from 'react'
import classes from './VehicleItem.module.css'
import { Badge, Button, Image } from 'react-bootstrap';
import color_logo from '../../assets/vehicle/color.png'
import milage_logo from '../../assets/vehicle/milage.png'
import engine_logo from '../../assets/vehicle/engine.png'
import fuel_logo from '../../assets/vehicle/fuel.png'
import transmission_logo from '../../assets/vehicle/transmission.png'

function VehicleItem(props){
    function toUpperCaseFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return(
        <div id={props.vehicle._id} className={classes.vehicleItem}>
            <Image className={classes.vehicleImg} src={props.vehicle.images[0]} rounded/>
            <div className={classes.details}>
                <h4>
                    {`${toUpperCaseFirst(props.vehicle.make)}  ${toUpperCaseFirst(props.vehicle.model)} ( ${props.vehicle.year} )`}
                    <Badge text='dark' bg='light' pill>{props.vehicle.isUsed ? 'used' : 'new'}</Badge>
                </h4>
                <p className={classes.description}>{props.vehicle.description}</p>
                
                <div id='details' style={{display:'flex',gap:'3rem'}}>
                    <ul className={classes.detailsUl}>
                        <li>
                            <Image src={transmission_logo}/>
                            <span>{props.vehicle.transmission}</span>
                        </li>
                        <li>
                            <Image src={color_logo}/>
                            <span>{props.vehicle.color}</span>
                        </li>
                        <li>
                            <Image src={milage_logo}/>
                            <span>{`${props.vehicle.milage} Kmpl`}</span>
                        </li>
                    </ul>
                    <ul className={classes.detailsUl}>
                        <li>
                            <Image src={fuel_logo}/>
                            <span>{props.vehicle.fuel_type}</span>
                        </li>
                        <li>
                            <Image src={engine_logo}/>
                            <span>{`${props.vehicle.engine_size} cc`}</span>
                        </li>
                    </ul>
                    <h2 className={classes.price}>&#x20B9;{` ${(props.vehicle.price/100000).toFixed(2)} Lakh`}</h2>
                </div>
            </div>
            <Button style={{marginLeft:'63%'}}>View Deal</Button>
        </div>
    )    
}
export default VehicleItem;