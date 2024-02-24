import React from "react";

const VehicleContext = React.createContext({
    vehicles : [],
    filterObj : {},
    applyFilter : ()=>{},
    resetFilter : ()=>{},
    sort : ()=>{}
})

export default VehicleContext;