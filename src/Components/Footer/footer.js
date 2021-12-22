import React from "react";
import { Card } from "react-bootstrap";
import './footer.css';


const Footer =(props)=>{
    return (

        <Card className="footer">
    <Card.Body>{props.copyright}</Card.Body>
    <h6>{props.children}</h6>
    <a href="#topOfThePage">Go back to the top</a>
    
     </Card>

    )
}




export default Footer ; 

