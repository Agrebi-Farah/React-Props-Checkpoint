import React from "react";
import { Card } from "react-bootstrap";
import './footer.css';


const Footer =(props)=>{
    return (

        <Card className="footer">
    <Card.Body>{props.copyright}</Card.Body>
    <a href="#topOfThePage">Go back to the top</a>
     </Card>

    )
}




export default Footer ; 

