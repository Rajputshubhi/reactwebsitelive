import React from 'react';



const Card = (props) => {
    return (
        <div className="card_div">
        <div className="card">
        <img src={props.imgsrc} alt="images" width="208px" height="97px"/>
            <div className="card-body">
            <p className="card-text text-center">{props.paragraph}</p>
    
            </div>
        </div>
        </div>
    );
}

export default Card;
