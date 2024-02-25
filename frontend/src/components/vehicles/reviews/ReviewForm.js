import React, {useState} from "react";
import Rating from '@mui/material/Rating';
import { Button, Form } from "react-bootstrap";
import classes from "./ReviewForm.module.css";

function ReviewForm(props){
    const [ratingValue, setRatingValue] = useState(1);

    return(
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="nameInput">
            <Form.Label>Custumer Name</Form.Label>
            <Form.Control type="text" />
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
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    )
}

export default ReviewForm;