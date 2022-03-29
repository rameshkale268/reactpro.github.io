import React from "react";
//import { userName } from "./CurrDateTime";
const Card = (props) => {
    return(
                <>
                        <div className="cards" >
                                <div className='card' >
                                    <div className='card-header'>
                                        <h4 className="card-title heading" Style="text-align:center">{props.username}</h4>
                                    </div>
                                    <img className="card-img-top" src="./img_avatar1.png" alt="Card-mage" Style="width:100%"></img>
                                    <div className="card-body">
                                        <p className="card-text heading">{props.desi}</p>
                                        <center> 
                                            <a href="www.google.com" className="btn btn-primary heading" Style='color:white' >see profile</a>
                                        </center>
                                    </div>
                                </div>
                        </div>               
                 
    </>);
}
export default Card;