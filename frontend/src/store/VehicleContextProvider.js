import React,{useEffect, useState} from "react";
import VehicleContext from "./vehicle-context";
import axios from "axios";
import { serverUrl } from "../util/util";

const initialFilterObj = {
    make : 'all',
    model : 'all',
    fuel_type : 'all',
    transmission : 'all',
    body_type : 'all',
    price : 'all',
    milage : 'all',
    color : 'all',
    avalibility : 'all',
    engine_size : 'all',
}

function VehicleContextProvider(props){

    // making useState for vehicles and filterObj
    const [vehicles , setVehicles] = useState([])
    const [filterObj , setFileterObj] = useState(initialFilterObj)

    // using useEffect for getting the vehicles from db
    useEffect(()=>{
        axios.post(`${serverUrl}/vehicle/find`,{...filterObj})
            .then(result=>{
                setVehicles(result.data.vehicles)
            })
    },[filterObj])

    // applyFilterHandler ---------------------------------/
    function applyFilterHandler(newObj){
        setFileterObj(newObj)
    }

    // resetFilterHandler------------------------------------//
    function resetFilterHandler(){
        setFileterObj(initialFilterObj)
    }

    // sortHandler--------------------------------------------//
    function sortHandler(type){
        console.log(type)
        if (type === 'recomended'){
            return
        }
        else if(type === 'priceASC'){
            setVehicles((curr)=>{
                return curr.sort((a,b)=>a.price - b.price)
            })
            // sorted = vehicles.sort((a,b)=>a.price - b.price)
        }
        else if(type === 'priceDESC'){
            // sorted = vehicles.sort((a,b)=>b.price - a.price)
        }
        else if(type === 'milage'){
            // sorted = vehicles.sort((a,b)=>b.milage - a.milage)
        }
    }

    //-----------------------------------------------------------------
    const valueObj = {
        vehicles : vehicles,
        filterObj : filterObj,
        applyFilter : applyFilterHandler,
        resetFilter : resetFilterHandler,
        sort : sortHandler
    }

    return(
        <VehicleContext.Provider value={valueObj}>
            {props.children}
        </VehicleContext.Provider>
    )
}

export default VehicleContextProvider;