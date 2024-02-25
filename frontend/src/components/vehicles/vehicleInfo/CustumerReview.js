import React, { useState } from "react";
import { Button} from "react-bootstrap";
import classes from "./CustumerReview.module.css";
import Card from "../../UI/Card";

import ReviewForm from "../reviews/ReviewForm";
import Reviews from "../reviews/Reviews";

function CustumerReview(props) {
  // making a state to togle form
  const [showForm, setShowForm] = useState(false);
  

  function toggleFormHandler() {
    setShowForm((prev) => !prev);
  }

  function onFormSubmitHandler(){
    setShowForm(false)
  }

  return (
    <Card className={classes.custumerReview}>
      <Button
        style={{ width: "12rem" }}
        onClick={toggleFormHandler}
        variant="primary"
      >
        Rate This Product  {showForm ? '▲' : '▼'}
      </Button>{" "}

      {showForm && (
        <ReviewForm onSubmit={onFormSubmitHandler}/>
      )}

      <Reviews/>
    </Card>
  );
}

export default CustumerReview;
