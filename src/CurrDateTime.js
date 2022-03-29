import React, { useState } from 'react';
const userName = "user";
const todaysDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();

function CurrDateTime() {
        const [cTime, setCTime] = useState(currentTime);
        const updateTime = () => {
                currentTime = new Date().toLocaleTimeString();
                setCTime(currentTime);
        }
        setInterval(updateTime, 1000);
        return (
                <>
                        <h1 className='heading'>{`hello my name is : `}<span >{` ${userName}.`}</span></h1>
                        <p className="heading">{`Today's date is : ${todaysDate}`}</p>
                        <p className='heading'>{`current Time is : ${cTime}`}</p>
                </>
        );

}
export default CurrDateTime;
export { userName };