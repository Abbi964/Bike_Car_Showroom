import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./EmiCalculator.module.css";
import { Form } from "react-bootstrap";
function EmiCalculator(props) {
  // using refs for inputs
  let yearRef = useRef()
  let interestRef = useRef()
  // making state for result of this calculation
  const [results, setResults] = useState({});

  const calculateResults = useCallback(() => {
    const userAmount = Number(props.amount);
    const calculatedInterest = Number(interestRef.current.value) / 100 / 12;
    const calculatedPayments = Number(yearRef.current.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(0);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(0);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(0);

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated
      });
    }
    return;
  },[props.amount]);

  // also calculating on first load
  useEffect(()=>{
    calculateResults()
  },[calculateResults])

  return (
    <Card className={classes.emiComp}>
      <h5>Calculate EMI</h5>
      <Form>
        <Form.Group className="mb-3" controlId="years">
            <Form.Label>Years</Form.Label>
            <Form.Control onChange={calculateResults} ref={yearRef} type="Number" defaultValue={1} min={1} max={50}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="banks">
            <Form.Select ref={interestRef} onChange={calculateResults}>
                <option value="8">{`SBI ( 8% )`}</option>
                <option value="8.8">{`HDFC ( 8.8% )`}</option>
                <option value="8.8">{`ICICI ( 8.8% )`}</option>
                <option value="8.5">{`AXIS ( 8.5% )`}</option>
                <option value="7.7">{`UCO ( 7.7% )`}</option>
            </Form.Select>
        </Form.Group>
      </Form>
      <div className="emiDetails">
        <h6>Monthaly Payment : &#x20B9; {results.monthlyPayment}</h6>
        <h6>Total Payment : &#x20B9; {results.totalPayment}</h6>
        <h6>Total Interest : &#x20B9; {results.totalInterest}</h6>
      </div>
    </Card>
  );
}
export default EmiCalculator;
