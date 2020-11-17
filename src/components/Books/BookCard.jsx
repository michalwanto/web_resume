import React , {useState} from "react";
import Tilt from 'react-tilt';
import BookDescription from "../../components/Books/BookDescription.jsx";

import {
    Col,
    
  } from "reactstrap";

import "./BookCard.scss"



const BookCard = (props) => {
    const [hovered,setHovered] = useState(false);
    return ( 
        <Col md="6">
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
        {
            hovered ? <BookDescription style={{display:"absolute", top:"-1000px"}}>{props.description}</BookDescription> : null
        }
        </Tilt>
        </Col>
     );
}
 
export default BookCard;
