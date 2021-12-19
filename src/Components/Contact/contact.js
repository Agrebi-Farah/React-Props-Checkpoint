import React from "react";
import './contact.css';
import {Form,} from 'react-bootstrap'


const Contact = (props) => {
    return (
        
        <div className="Form">
            <div>
            <h1 className="contact">CONTACT ME</h1>
            </div>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>{props.email}</Form.Label>
    <Form.Control type="email" placeholder="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> {props.message}</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</div>
    )
}

export default Contact ;