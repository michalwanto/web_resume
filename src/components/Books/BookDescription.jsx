import React from "react"
import {
    
    Card
  } from "reactstrap";

const BookDescription = (props) => {
    return ( 
        <Card style={{top:"-100px",marginBottom:"30px", marginLeft:"80px", maxWidth:"300px"}}>
        <p style={{marginLeft:"10px"}}>
        {props.children}
        </p>
        </Card>
     );
}
 
export default BookDescription;