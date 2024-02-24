import React,{useState} from "react";
import VehicleContext from "./vehicle-context";

function VehicleContextProvider(props){

    // making useState for vehicles
    const [vehicles , setVehicles] = useState([])

    //-----------------------------------------------------------------
    const valueObj = {
        vehicles : vehicles
    }

    return(
        <VehicleContext.Provider value={valueObj}>
            {props.children}
        </VehicleContext.Provider>
    )
}

export default VehicleContextProvider;