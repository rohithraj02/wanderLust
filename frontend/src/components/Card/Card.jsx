import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need
import '../../components/Card/Card.css'

const Card = (props) => {
  return (
    <>
        <div className="card">
            <img src={props.image} alt=""/>
            <div className="desc">
                <div className="detail">
                    <h1>{props.name}</h1>
                    <h2>{props.tagline}</h2>
                    <hr/>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {props.distanceFromCity}</p>
                    <p>{props.history}</p>
                </div>
            </div>
         </div>  
    </>
  )
}

export default Card;
