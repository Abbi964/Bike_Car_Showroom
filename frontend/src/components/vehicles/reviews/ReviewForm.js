import React, {useRef, useState} from "react";
import Rating from '@mui/material/Rating';
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { serverUrl } from "../../../util/util";
import { useParams } from "react-router-dom";

function ReviewForm(props){
    // geting vehicleId from params
    const {vehicleId} = useParams()

    // making refs for name and review
    const usernameRef = useRef()
    const reviewRef = useRef()

    const [ratingValue, setRatingValue] = useState(1);

    // submiting form
    async function submitHandler(e){
        try{
            e.preventDefault()

            // making a review obj
            const reviewObj = {
                username : usernameRef.current.value,
                review : reviewRef.current.value,
                rating : +ratingValue,
                vehicleId : vehicleId
            }
            // making a post req 
            let result = await axios.post(`${serverUrl}/review/addReview`,reviewObj)

            console.log(result)
            if(result.data.success){
                props.onSubmit()
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <Form onSubmit={submitHandler} className="mt-3">
          <Form.Group className="mb-3" controlId="nameInput">
            <Form.Label>Custumer Name</Form.Label>
            <Form.Control ref={usernameRef} type="text" />
          </Form.Group>
          <Rating
            name='product_rating'
            value={ratingValue}
            onChange={(event, newValue) => {
            setRatingValue(newValue);
            }} 
          />
          <Form.Group className="mb-3" controlId="reviewInput">
            <Form.Label>Write Review</Form.Label>
            <Form.Control ref={reviewRef} as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    )
}

export default ReviewForm;