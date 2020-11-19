import React , {useState} from "react";
import Tilt from 'react-tilt';


import {
    Col,
    
  } from "reactstrap";

import "./BookCard.scss"



const BookCard = (props) => {
    const [hovered,setHovered] = useState(false);
    return ( 
        <Col md="3">
        <Tilt onMouseEnter={()=> setHovered(true)} 
            onMouseLeave={()=> setHovered(false)}>
        <div className="BookCardDiv" >
        
        <img
            alt="..."
            className="img-raised"
            src={`${props.src}`}
            >
        </img>
        
        </div>
        
        </Tilt>
        </Col>
     );
}
 
export default BookCard;
