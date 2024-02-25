import React, { useEffect, useState, Fragment } from "react";
import classes from "./Reviews.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../../util/util";
import Card from "../../UI/Card";
import { Rating } from "@mui/material";

function Reviews(props){
    const {vehicleId} = useParams()
    // state for reviews
    const [reviews, setReviews] = useState([])
    const [avgReview, setAvgReview] = useState(0)
    // geting reviews from db
    useEffect(()=>{
        axios.get(`${serverUrl}/review/getReviews/${vehicleId}`)
            .then((response)=>{
                setReviews(response.data.reviews)
                // finding average review
                let avgRev = averageOfReviews(response.data.reviews)
                setAvgReview(avgRev)
            })
            .catch((err)=>console.log(err))
    },[vehicleId])

    function averageOfReviews(reviews){
        let totalRev = 0;
        let noOfRev = 0;
        for (let rev of reviews){
            noOfRev++;
            totalRev += +rev.rating
        }
        return (totalRev/noOfRev).toFixed(1)
    }

    return(
        <Fragment>
        <h4 className="mt-2">Reviews { <Rating value={+avgReview} precision={0.1} readOnly/> } {isNaN(avgReview) ? '' : avgReview}</h4>
        <div className={classes.reviews}>
            {reviews.map((review,index)=>{
                return (<Card className={classes.review} key={index}>
                    <h5>{review.username}</h5>
                    <Rating value={review.rating} readOnly/>
                    <p>{review.review}</p>
                </Card>)
            })}
        </div>
        </Fragment>
    )
}

export default Reviews;