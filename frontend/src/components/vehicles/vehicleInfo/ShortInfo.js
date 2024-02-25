import React from "react";
import { Image } from "react-bootstrap";
import classes from './ShortInfo.module.css';
import color_logo from '../../../assets/vehicle/color.png'
import milage_logo from '../../../assets/vehicle/milage.png'
import engine_logo from '../../../assets/vehicle/engine.png'
import fuel_logo from '../../../assets/vehicle/fuel.png'
import transmission_logo from '../../../assets/vehicle/transmission.png'

function ShortInfo(props) {
  return (
    <ul className={classes.shortDetUl}>
      <li>
        <Image src={transmission_logo} />
        <span>{props.vehicle.transmission}</span>
      </li>
      <li>
        <Image src={color_logo} />
        <span>{props.vehicle.color}</span>
      </li>
      <li>
        <Image src={milage_logo} />
        <span>{`${props.vehicle.milage} Kmpl`}</span>
      </li>
      <li>
        <Image src={fuel_logo} />
        <span>{props.vehicle.fuel_type}</span>
      </li>
      <li>
        <Image src={engine_logo} />
        <span>{`${props.vehicle.engine_size} cc`}</span>
      </li>
    </ul>
  );
}

export default ShortInfo;