import React from 'react';
import './Card.css';
const Card = ({id, name, email, color}) => {
    return (
        <div className={`tc bg-light-red dib pa3 br3 ma2 grow bw2 shadow-5 ${color}`}>
            <img src={`https://robohash.org/${id}`} alt="robots" width="200" height="200"/>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}
export default Card;