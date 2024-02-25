import React, { useState,useEffect, useRef } from 'react'
import Card from '../UI/Card';
import { Button, Form } from 'react-bootstrap';
import classes from './AppointmentForm.module.css';
import axios from 'axios';
import { serverUrl } from '../../util/util';

// making an array for busy slots
let initialAvilSlots = Array(11).fill(true)  // this represents all 11 timeslots of the day are avilable

function AppointmentFrom(props){
    // makign refs for inputs
    let nameRef = useRef()
    let emailRef = useRef()
    let phoneRef = useRef()
    let purposeRef = useRef()
    let dateRef = useRef()
    let timeRef = useRef()

    // for setting min date in date input
    const currDate = new Date();
    const formattedDate = currDate.toISOString().split('T')[0]
    // state for date, avilSlots
    const [date , setDate] = useState('')
    const [avilSlots , setAvilSlots] = useState(initialAvilSlots)


    function dateChangeHandler(e){
        setDate(e.target.value)
    }

    // every time date changes it calls backend to get empty slots
    useEffect(()=>{
        axios.get(`${serverUrl}/appointment/getSlots/${date}`)
            .then((response)=>{
                console.log(response)
                // enableing and desableing slots---------//
                if(response.data.timeArr.length > 0){
                    let tempArr = [...avilSlots]
                    response.data.timeArr.forEach((ele)=>{
                        tempArr[+ele.time - 10] = false
                        // here we substracting 10 as index starts from 0 and opening time from 10
                    })
                    setAvilSlots(tempArr)
                }
                else{
                    setAvilSlots(initialAvilSlots)
                }
            })
            .catch(err=>console.log(err))
    },[date,avilSlots])

    // submitFormHandler-------------------------------------------------------//
    function submitFormHandler(e){
        try{
            // making appObj
            let appObj = {
                name : nameRef.current.value,
                email : emailRef.current.value,
                phone : phoneRef.current.value,
                date : dateRef.current.value,
                time : timeRef.current.value,
                purpose : purposeRef.current.value,
            }

            // making a post request
            axios.post(`${serverUrl}/appointment/create`,appObj)
                .then((response)=>{
                    console.log(response)
                })
                .catch(err=>console.log(err))
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <Card className={classes.formCard}>
            <Form>
                <h2>Book an Appointment</h2>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control ref={emailRef} type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control ref={phoneRef} type="tel" pattern='[0-9]{10}' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="purpose">
                    <Form.Label>Purpose of Appointment</Form.Label>
                    <Form.Select ref={purposeRef} aria-label="">
                        <option value="test_drives">Test Drive</option>
                        <option value="vehicle_inspection">Vehicle Inspection</option>
                        <option value="consultations">Consultations</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control ref={dateRef} min={formattedDate} value={date} onChange={dateChangeHandler} type="date"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="time">
                    <Form.Label>Available Time Slots</Form.Label>
                    <Form.Select ref={timeRef} aria-label="">
                        {avilSlots.map((bool,index)=>{
                            return (bool && 
                                <option key={index} value={index + 10}>{`${index + 10} - ${index + 11}`}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <Button onClick={submitFormHandler} type='button'>Book Appointment</Button>
            </Form>
        </Card>
    )
}

export default AppointmentFrom;